/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<88d57597d7fa4f00ae4a8676eaeb5d59>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
import userGreetingResolver from "../../../relay-runtime/store/__tests__/resolvers/DummyUserGreetingResolver.js";
import userUserProfilePictureUriWithScaleResolver from "../UserProfilePictureResolver.js";
declare export opaque type UserProfilePictureUriSuspendsWhenTheCounterIsOdd$fragmentType: FragmentType;
export type UserProfilePictureUriSuspendsWhenTheCounterIsOdd$data = {|
  +greeting: ?$Call<<R>((...empty[]) => R) => R, typeof userGreetingResolver>,
  +uri: ?$Call<<R>((...empty[]) => R) => R, typeof userUserProfilePictureUriWithScaleResolver>,
  +$fragmentType: UserProfilePictureUriSuspendsWhenTheCounterIsOdd$fragmentType,
|};
export type UserProfilePictureUriSuspendsWhenTheCounterIsOdd$key = {
  +$data?: UserProfilePictureUriSuspendsWhenTheCounterIsOdd$data,
  +$fragmentSpreads: UserProfilePictureUriSuspendsWhenTheCounterIsOdd$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "scale"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfilePictureUriSuspendsWhenTheCounterIsOdd",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DummyUserGreetingResolver"
      },
      "kind": "RelayResolver",
      "name": "greeting",
      "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/DummyUserGreetingResolver.js'),
      "path": "greeting"
    },
    {
      "alias": "uri",
      "args": null,
      "fragment": {
        "args": [
          {
            "kind": "Variable",
            "name": "scale",
            "variableName": "scale"
          }
        ],
        "kind": "FragmentSpread",
        "name": "UserProfilePictureResolver"
      },
      "kind": "RelayResolver",
      "name": "user_profile_picture_uri_with_scale",
      "resolverModule": require('./../UserProfilePictureResolver.js'),
      "path": "uri"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "ffbdc95f51d0e268ac8d325a890fcadb";
}

module.exports = ((node/*: any*/)/*: Fragment<
  UserProfilePictureUriSuspendsWhenTheCounterIsOdd$fragmentType,
  UserProfilePictureUriSuspendsWhenTheCounterIsOdd$data,
>*/);