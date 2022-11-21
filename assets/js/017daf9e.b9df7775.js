"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[389],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(5108),s=["components"],l={id:"onedrive",title:"OneDrive",description:"View OneDrive information for users in your Microsoft 365 tenants.",slug:"/usingcipp/teamsonedrivesharepoint/onedrive"},p=void 0,u={unversionedId:"usingcipp/teamsonedrivesharepoint/onedrive",id:"usingcipp/teamsonedrivesharepoint/onedrive",title:"OneDrive",description:"View OneDrive information for users in your Microsoft 365 tenants.",source:"@site/docs/user/usingcipp/teamsonedrivesharepoint/onedrive.mdx",sourceDirName:"usingcipp/teamsonedrivesharepoint",slug:"/usingcipp/teamsonedrivesharepoint/onedrive",permalink:"/docs/user/usingcipp/teamsonedrivesharepoint/onedrive",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/teamsonedrivesharepoint/onedrive.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1669019327,formattedLastUpdatedAt:"21/11/2022",frontMatter:{id:"onedrive",title:"OneDrive",description:"View OneDrive information for users in your Microsoft 365 tenants.",slug:"/usingcipp/teamsonedrivesharepoint/onedrive"},sidebar:"userSidebar",previous:{title:"Teams, OneDrive & Sharepoint",permalink:"/docs/user/usingcipp/teamsonedrivesharepoint"},next:{title:"Sharepoint",permalink:"/docs/user/usingcipp/teamsonedrivesharepoint/sharepoint"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Details",id:"details",level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],m=function(e){return function(t){return o.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},v=m("PseudonymisedData"),f=m("NoKnownIssues"),g={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(v,{mdxType:"PseudonymisedData"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This page lists OneDrive and SharePoint usage.\nYou can use this to check how well implementation is going and if users are actively using their OneDrive and Sharepoint sites.\nYou can also see if users are approaching any limits."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Principal Name (UPN)"),(0,a.kt)("td",{parentName:"tr",align:null},"The UserPrincipalName of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Last Active"),(0,a.kt)("td",{parentName:"tr",align:null},"The date the OneDrive was last active for the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Count (Total)"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of files in the users' OneDrive.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Used (GB)"),(0,a.kt)("td",{parentName:"tr",align:null},"The total size in GB in the users' OneDrive.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Allocated (GB)"),(0,a.kt)("td",{parentName:"tr",align:null},"The total space in GB available in the users' OneDrive.")))),(0,a.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,a.kt)(f,{mdxType:"NoKnownIssues"}))}h.isMDXComponent=!0}}]);