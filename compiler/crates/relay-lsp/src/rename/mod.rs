/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//! Utilities for providing the rename feature

use std::{collections::HashMap, path::PathBuf};

use common::{Location as IRLocation, SourceLocationKey};
use extract_graphql::JavaScriptSourceFeature;
use graphql_ir::{FragmentDefinition, FragmentDefinitionName, FragmentSpread, Program, Visitor};
use graphql_syntax::{parse_executable_with_error_recovery, ExecutableDefinition};
use intern::string_key::StringKey;
use lsp_types::{
    request::{PrepareRenameRequest, Rename, Request, WillRenameFiles},
    Location as LspLocation, PrepareRenameResponse, TextEdit, Url, WorkspaceEdit,
};
use resolution_path::{IdentParent, IdentPath, ResolutionPath, ResolvePosition};

use crate::{
    location::{get_file_contents, transform_relay_location_to_lsp_location},
    utils::is_file_uri_in_dir,
    Feature, GlobalState, LSPRuntimeError, LSPRuntimeResult,
};

/// Resolve a RenameRequest to a RenameResponse
pub fn on_rename(
    state: &impl GlobalState,
    params: <Rename as Request>::Params,
) -> LSPRuntimeResult<<Rename as Request>::Result> {
    // todo: why do I have to do this?
    let uri = params.text_document_position.text_document.clone().uri;
    let (feature, position_span, source_location_key) =
        state.extract_feature_from_text(&params.text_document_position, 1)?;

    let program = &state.get_program(&state.extract_project_name_from_url(&uri)?)?;
    let root_dir = &state.root_dir();

    match feature {
        Feature::GraphQLDocument(document) => {
            let node_path = document.resolve((), position_span);

            match node_path {
                ResolutionPath::Ident(IdentPath {
                    inner: name,
                    parent:
                        IdentParent::FragmentSpreadName(_) | IdentParent::FragmentDefinitionName(_),
                }) => {
                    let changes = rename_fragment(name.value, params.new_name, program, root_dir);

                    Ok(Some(WorkspaceEdit {
                        changes: Some(changes),
                        ..Default::default()
                    }))
                }
                ResolutionPath::Ident(IdentPath {
                    inner: operation_name,
                    parent: IdentParent::OperationDefinitionName(_),
                }) => {
                    let location = IRLocation::new(source_location_key, operation_name.span);

                    let lsp_location =
                        transform_relay_location_to_lsp_location(root_dir, location).unwrap();

                    let changes = rename_operation(params.new_name, lsp_location);

                    Ok(Some(WorkspaceEdit {
                        changes: Some(changes),
                        ..Default::default()
                    }))
                }
                _ => Err(LSPRuntimeError::ExpectedError),
            }
        }
        // todo: support docblocks
        _ => Err(LSPRuntimeError::ExpectedError),
    }
}

/// Resolve a PrepareRenameRequest to a PrepareRenameResponse
pub fn on_prepare_rename(
    state: &impl GlobalState,
    params: <PrepareRenameRequest as Request>::Params,
) -> LSPRuntimeResult<<PrepareRenameRequest as Request>::Result> {
    let (feature, position_span, source_location_key) =
        state.extract_feature_from_text(&params, 1)?;
    let root_dir = &state.root_dir();

    match feature {
        Feature::GraphQLDocument(document) => {
            let node_path = document.resolve((), position_span);

            match node_path {
                ResolutionPath::Ident(IdentPath {
                    inner: name,
                    parent:
                        IdentParent::FragmentSpreadName(_)
                        | IdentParent::FragmentDefinitionName(_)
                        | IdentParent::OperationDefinitionName(_),
                }) => {
                    let location = IRLocation::new(source_location_key, name.span);
                    let lsp_location =
                        transform_relay_location_to_lsp_location(root_dir, location)?;

                    Ok(Some(PrepareRenameResponse::Range(lsp_location.range)))
                }
                _ => Err(LSPRuntimeError::ExpectedError),
            }
        }
        // todo: support docblocks
        _ => Err(LSPRuntimeError::ExpectedError),
    }
}

/// Resolve a WillRenameFilesRequest to a WillRenameFilesResponse
pub fn on_will_rename_files(
    state: &impl GlobalState,
    params: <WillRenameFiles as Request>::Params,
) -> LSPRuntimeResult<<WillRenameFiles as Request>::Result> {
    let mut rename_changes = HashMap::new();

    for file_rename in &params.files {
        let old_file_uri = Url::parse(&file_rename.old_uri).unwrap();
        let new_file_uri = Url::parse(&file_rename.new_uri).unwrap();

        if !is_file_uri_in_dir(state.root_dir(), &new_file_uri) {
            continue;
        }

        let old_path = old_file_uri.to_file_path().unwrap();
        let new_path = new_file_uri.to_file_path().unwrap();
        let old_file_name = old_path.file_stem().unwrap().to_str().unwrap();
        let new_file_name = new_path.file_stem().unwrap().to_str().unwrap();

        if old_file_name == new_file_name {
            continue;
        }

        let full_text = get_file_contents(&old_path).unwrap();

        let embedded_sources = extract_graphql::extract(&full_text);
        if embedded_sources.is_empty() {
            continue;
        }

        let program = &state.get_program(&state.extract_project_name_from_url(&old_file_uri)?)?;
        let root_dir = &state.root_dir();

        let mut index = 0;
        for embedded_source in &embedded_sources {
            // todo: do the rusty way
            let _ = match embedded_source {
                JavaScriptSourceFeature::GraphQL(graphql_source) => {
                    let source_location_key =
                        SourceLocationKey::embedded(new_file_uri.as_ref(), index);

                    let text_source = graphql_source.text_source();
                    let document = parse_executable_with_error_recovery(
                        &text_source.text,
                        source_location_key,
                    )
                    .item;

                    for definition in &document.definitions {
                        let changes = match definition {
                            ExecutableDefinition::Fragment(frag_def) => {
                                let frag_name = frag_def.name.value;
                                let old_frag_name = frag_name.to_string();
                                let new_frag_name =
                                    old_frag_name.replace(old_file_name, new_file_name);

                                rename_fragment(frag_name, new_frag_name, program, root_dir)
                            }
                            ExecutableDefinition::Operation(op_def) => {
                                let operation_name_identifier = op_def.name.unwrap();
                                let old_operation_name = operation_name_identifier.to_string();
                                let new_operation_name =
                                    old_operation_name.replace(old_file_name, new_file_name);

                                let name_range =
                                    text_source.to_span_range(operation_name_identifier.span);

                                let location = LspLocation::new(old_file_uri.clone(), name_range);

                                rename_operation(new_operation_name, location)
                            }
                        };

                        merge_changes(&mut rename_changes, changes);
                    }

                    Ok(())
                }
                // todo: support docblocks
                _ => Err(LSPRuntimeError::ExpectedError),
            };

            index += 1;
        }
    }

    Ok(Some(WorkspaceEdit {
        changes: Some(rename_changes),
        ..Default::default()
    }))
}

fn rename_operation(
    new_operation_name: String,
    location: LspLocation,
) -> HashMap<Url, Vec<TextEdit>> {
    HashMap::from([(
        location.uri,
        vec![TextEdit {
            new_text: new_operation_name,
            range: location.range,
        }],
    )])
}

fn rename_fragment(
    fragment_name: StringKey,
    new_fragment_name: String,
    program: &Program,
    root_dir: &PathBuf,
) -> HashMap<Url, Vec<TextEdit>> {
    FragmentFinder::get_fragment_usages(program, fragment_name)
        .into_iter()
        .fold(HashMap::new(), |mut map, location| {
            let lsp_location =
                transform_relay_location_to_lsp_location(root_dir, location).unwrap();

            let entry = map.entry(lsp_location.uri);

            let edits = entry.or_default();
            edits.push(TextEdit {
                range: lsp_location.range,
                new_text: new_fragment_name.to_owned(),
            });

            map
        })
}

#[derive(Debug, Clone)]
pub struct FragmentFinder {
    fragment_locations: Vec<IRLocation>,
    fragment_name: StringKey,
}

impl FragmentFinder {
    pub fn get_fragment_usages(program: &Program, name: StringKey) -> Vec<IRLocation> {
        let mut fragment_finder = FragmentFinder {
            fragment_locations: vec![],
            fragment_name: name,
        };
        fragment_finder.visit_program(program);
        fragment_finder.fragment_locations
    }
}

impl Visitor for FragmentFinder {
    const NAME: &'static str = "FragmentFinder";
    const VISIT_ARGUMENTS: bool = false;
    const VISIT_DIRECTIVES: bool = false;

    fn visit_fragment_spread(&mut self, spread: &FragmentSpread) {
        if spread.fragment.item == FragmentDefinitionName(self.fragment_name) {
            self.fragment_locations.push(spread.fragment.location);
        }
    }

    fn visit_fragment(&mut self, fragment: &FragmentDefinition) {
        if fragment.name.item == FragmentDefinitionName(self.fragment_name) {
            self.fragment_locations.push(fragment.name.location)
        }

        self.default_visit_fragment(fragment)
    }
}

fn merge_changes(source: &mut HashMap<Url, Vec<TextEdit>>, target: HashMap<Url, Vec<TextEdit>>) {
    for (uri, changes) in target {
        let entry = source.entry(uri);

        let existing_changes = entry.or_default();
        for new_change in changes {
            existing_changes.push(new_change);
        }
    }
}
