"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[94933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,p(p({ref:t},s),{},{components:a})):n.createElement(k,p({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"api-WeekBasedCapacityGroup",title:"API - WeekBasedCapacityGroup",description:"API - WeekBasedCapacityGroup"},p=void 0,o={unversionedId:"kits/Demand and Capacity Management Kit/development-view/api-WeekBasedCapacityGroup",id:"kits/Demand and Capacity Management Kit/development-view/api-WeekBasedCapacityGroup",title:"API - WeekBasedCapacityGroup",description:"API - WeekBasedCapacityGroup",source:"@site/docs-kits/kits/Demand and Capacity Management Kit/development-view/api-capacity-group.md",sourceDirName:"kits/Demand and Capacity Management Kit/development-view",slug:"/kits/Demand and Capacity Management Kit/development-view/api-WeekBasedCapacityGroup",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/development-view/api-WeekBasedCapacityGroup",draft:!1,tags:[],version:"current",frontMatter:{id:"api-WeekBasedCapacityGroup",title:"API - WeekBasedCapacityGroup",description:"API - WeekBasedCapacityGroup"},sidebar:"kits",previous:{title:"postWeekBasedMaterialDemand",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/development-view/plugin-generated-material-demand-api/post-week-based-material-demand"},next:{title:"API Specification",permalink:"/docs-kits/next/category/api-specification-1"}},l={},c=[{value:"WeekBasedCapacityGroup API",id:"weekbasedcapacitygroup-api",level:2},{value:"Roles and Functions",id:"roles-and-functions",level:3},{value:"Data Exchange",id:"data-exchange",level:3},{value:"Open API documentation",id:"open-api-documentation",level:3},{value:"Notice",id:"notice",level:2}],s={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DCM kit banner",src:a(97345).Z,width:"264",height:"245"})),(0,r.kt)("h2",{id:"weekbasedcapacitygroup-api"},"WeekBasedCapacityGroup API"),(0,r.kt)("p",null,"The WeekBasedCapacityGroup API is owned and registered as an EDC asset by the supplier. The customer provides capacity group data to the API via POST request."),(0,r.kt)("h3",{id:"roles-and-functions"},"Roles and Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role / Function"),(0,r.kt)("th",{parentName:"tr",align:null},"API Owner"),(0,r.kt)("th",{parentName:"tr",align:null},"POST to API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"data-exchange"},"Data Exchange"),(0,r.kt)("mermaid",{value:"sequenceDiagram\nautonumber\n    actor c as Customer \n    participant ce as Customer EDC\n    participant se as Supplier EDC\n    participant a as WeekBasedCapacityGroup API\n    actor s as Supplier\n    \n    rect rgb(217,24,24)\n    s->>+se: Register API as Asset\n    se->>-s: API registered\n    end\n    rect rgb(128,149,00)\n    c->>+ce: Provide WeekBasedCapacityGroup\n    rect rgb(179,203,45)\n    ce->>+se: Initiate Handshake\n    se->>ce: Complete Handshake\n    end\n    ce->>se: Provide WeekBasedCapacityGroup\n    se->>+a: Provide WeekBasedCapacityGroup\n    a->>-se: WeekBasedCapacityGroup consumed\n    se->>-ce: WeekBasedCapacityGroup consumed\n    ce->>-c: WeekBasedCapacityGroup consumed\n    \n    end\n  "}),(0,r.kt)("p",null,"Figure: ",(0,r.kt)("em",{parentName:"p"},"Exchanging WeekBasedCapacityGroup via API")),(0,r.kt)("h3",{id:"open-api-documentation"},"Open API documentation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs-kits/next/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/plugin-generated-capacity-group-api/post-week-based-capacity-group"},"Find here"))))),(0,r.kt)("p",null,"For further details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("p",null,"This work is licensed under the ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Henkel AG & Co.KGaA"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz Group AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SupplyOn AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Volkswagen AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation")))}d.isMDXComponent=!0},97345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/demand-and-capacity-management-kit-logo.drawio-71105a676aac0732834a88c1a6c9af15.svg"}}]);