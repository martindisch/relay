"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35085],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>i,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=d(r),p=a,v=c["".concat(l,".").concat(p)]||c[p]||m[p]||o;return r?n.createElement(v,u(u({ref:t},i),{},{components:r})):n.createElement(v,u({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(34334);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(83117),a=r(67294),o=r(34334),l=r(12466),u=r(76775),s=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,r,n,o,l=e.defaultValue,u=e.queryString,s=void 0!==u&&u,i=e.groupId,d=p(e),f=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),g=f[0],h=f[1],y=v({queryString:s,groupId:i}),b=y[0],x=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),C=w[0],T=w[1],k=function(){var e=null!=b?b:C;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){k&&h(k)}),[k]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),x(e),T(e)}),[x,T,d]),tabValues:d}}var g=r(72389);const h="tabList__CuJ",y="tabItem_LNqP";function b(e){var t=e.className,r=e.block,u=e.selectedValue,s=e.selectValue,i=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(d(t),s(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function x(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(x,(0,n.Z)({},e,t)))}function C(e){var t=(0,g.default)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},95266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>v});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=r(86341),u=r(74866),s=r(85162),i=["components"],c={id:"context",title:"Context",slug:"/guides/relay-resolvers/context",description:"Context in Relay Resolvers"},d=void 0,p={unversionedId:"guides/relay-resolvers/context",id:"version-v18.0.0/guides/relay-resolvers/context",title:"Context",description:"Context in Relay Resolvers",source:"@site/versioned_docs/version-v18.0.0/guides/relay-resolvers/context.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/context",permalink:"/docs/guides/relay-resolvers/context",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v18.0.0/guides/relay-resolvers/context.md",tags:[],version:"v18.0.0",frontMatter:{id:"context",title:"Context",slug:"/guides/relay-resolvers/context",description:"Context in Relay Resolvers"},sidebar:"docs",previous:{title:"Field Arguments",permalink:"/docs/guides/relay-resolvers/field-arguments/"},next:{title:"Derived Fields",permalink:"/docs/guides/relay-resolvers/derived-fields/"}},m={},v=[{value:"Setup",id:"setup",level:2},{value:"Usage in Resolvers",id:"usage-in-resolvers",level:2},{value:"Type Checking",id:"type-checking",level:2}],f={toc:v};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In order to pass a service, or other values to be shared with all resolvers, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LiveResolverStore")," provides a means of passing context. This gets passed to the third argument of all resolvers (live and non-live). This context argument analogous to the ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/execution/#root-fields--resolvers"},"context argument")," used on the server which usually holds things like the database connection."),(0,o.mdx)("h2",{id:"setup"},"Setup"),(0,o.mdx)("p",null,"In order to pass context to live resolvers, pass a ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolverContext")," argument to the initialization of ",(0,o.mdx)("inlineCode",{parentName:"p"},"LiveResolverStore")," before creating the environment:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const store = new LiveResolverStore(source, {\n  resolverContext: {\n    store: customStore,\n  },\n});\n")),(0,o.mdx)("h2",{id:"usage-in-resolvers"},"Usage in Resolvers"),(0,o.mdx)(u.default,{groupId:"resolver",defaultValue:"JavaScript",values:(0,l.fbContent)({internal:[{label:"JavaScript",value:"JavaScript"},{label:"Flow",value:"Flow"}],external:[{label:"JavaScript",value:"JavaScript"},{label:"Flow",value:"Flow"}]}),mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"JavaScript",mdxType:"TabItem"},(0,o.mdx)("p",null,"The last argument in a resolver will contain the context type which contains the value passed into the store on initialization. If the resolver is on a model type or reads a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@rootFragment"),", the context value will be the third argument. If the resolver is ",(0,o.mdx)("em",{parentName:"p"},"not")," on a model type and does ",(0,o.mdx)("em",{parentName:"p"},"not")," read a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@rootFragment")," the context value will be passed as the thrid argument. Relay's generated artifacts will include generated type assertions to check that your resolver is typed correctly."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type { LiveState } from 'relay-runtime';\n\n/**\n * @RelayResolver Query.counter: Int\n * @live\n */\nexport function counter(\n  _args,\n  context\n) {\n  return {\n    read: () => context.store.getState().counter,\n    subscribe: (callback) => {\n      return context.store.subscribe(callback);\n    },\n  };\n}\n"))),(0,o.mdx)(s.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("p",null,"Context is not currently supported in Flow"))),(0,o.mdx)("h2",{id:"type-checking"},"Type Checking"),(0,o.mdx)("p",null,"In order to ensure that the resolver is implemented with the correct types, pass a ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolverContextType")," in the project config. This parameter expects a type name and a ",(0,o.mdx)("inlineCode",{parentName:"p"},"path")," to import from:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "project",\n    "language": "flow",\n    "resolverContextType": {\n        "name": "IResolverContextType",\n        "path": "path/to/file/IResolverContextType"\n    }\n}\n')),(0,o.mdx)("p",null,"To import from a package, use the following syntax for a ",(0,o.mdx)("inlineCode",{parentName:"p"},"package")," import:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "project",\n    "language": "flow",\n    "resolverContextType": {\n        "name": "IResolverContextType",\n        "package": "@package/name"\n    }\n}\n')))}g.isMDXComponent=!0}}]);