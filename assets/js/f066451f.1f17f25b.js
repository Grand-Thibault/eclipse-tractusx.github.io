"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[98226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>I});var i=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,c=function(e,t){if(null==e)return{};var a,i,c={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var r=i.createContext({}),d=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=c,I=m["".concat(r,".").concat(u)]||m[u]||p[u]||n;return a?i.createElement(I,l(l({ref:t},s),{},{components:a})):i.createElement(I,l({ref:t},s))}));function I(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[m]="string"==typeof e?e:c,l[1]=o;for(var d=2;d<n;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=a(87462),c=(a(67294),a(3905));const n={id:"load-factors",title:"Load Factors",description:"Detail capacities by defining how much of a strain a material is on your capacities, compared to other materials.",sidebar_position:4},l=void 0,o={unversionedId:"kits/Demand and Capacity Management Kit/adoption-view/use-case/load-factors",id:"kits/Demand and Capacity Management Kit/adoption-view/use-case/load-factors",title:"Load Factors",description:"Detail capacities by defining how much of a strain a material is on your capacities, compared to other materials.",source:"@site/docs-kits/kits/Demand and Capacity Management Kit/adoption-view/use-case/load-factors.md",sourceDirName:"kits/Demand and Capacity Management Kit/adoption-view/use-case",slug:"/kits/Demand and Capacity Management Kit/adoption-view/use-case/load-factors",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/adoption-view/use-case/load-factors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"load-factors",title:"Load Factors",description:"Detail capacities by defining how much of a strain a material is on your capacities, compared to other materials.",sidebar_position:4},sidebar:"kits",previous:{title:"Simulated Delta Production",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/adoption-view/use-case/delta-production"},next:{title:"Request for Update",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/adoption-view/use-case/rfu"}},r={},d=[{value:"Business Roles and Functions",id:"business-roles-and-functions",level:2},{value:"Business value",id:"business-value",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Functional description",id:"functional-description",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Example",id:"example",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:3},{value:"Sample Data",id:"sample-data",level:3},{value:"Notice",id:"notice",level:3}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"DCM kit banner",src:a(97345).Z,width:"264",height:"245"})),(0,c.kt)("h2",{id:"business-roles-and-functions"},"Business Roles and Functions"),(0,c.kt)("p",null,"Load Factors are advanced parameters of a Capacity Group structure and therefore used optionally by suppliers. The application of Load Factors is embedded into the WeekBasedCapacityGroup aspect model. This means that only suppliers may apply Load Factors and customers consume it."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Function / Role"),(0,c.kt)("th",{parentName:"tr",align:null},"Customer"),(0,c.kt)("th",{parentName:"tr",align:null},"Supplier"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Define Load Factors for materials"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"X")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Define conversion factor for unit of measure"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"X")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Inform business partners about factors"),(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null},"X")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Acknowledge factors"),(0,c.kt)("td",{parentName:"tr",align:null},"X"),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Recalculate demands in user interface, based on factors"),(0,c.kt)("td",{parentName:"tr",align:null},"X"),(0,c.kt)("td",{parentName:"tr",align:null},"X")))),(0,c.kt)("h2",{id:"business-value"},"Business value"),(0,c.kt)("p",null,"The feature \u201cLoad Factors\u201d allows suppliers to model and represent otherwise impossible capacity occurrences, by introducing a numerical multiplication factor, that changes the demand volume interpretation of a capacity group."),(0,c.kt)("p",null,"Load Factors should be used to solve the following two problems:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Processing of non-homogeneous material variants within a capacity group, resulting in diverging capacity utilization.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Requirement for having a different unit of measure within a WeekBasedCapacityGroup, in relation to its linked WeekBasedMaterialDemand."))),(0,c.kt)("p",null,"Load Factors solve these problems by:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Scaling the weekly demand linearly if a material variant causes higher or lower than normal load within the capacity group. Load Factors can, for example, express a reduction to 90% or an increase to 150%.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Acting as conversion factors, converting the unit of measure of a WeekBasedMaterialDemand into the unit of measure of the WeekBasedCapacityGroup. This leads to a conversion into either \u201ctime\u201d (unit:secondUnitOfTime) or \u201ccycle\u201d (unit:cycle), expressing that, for example, a piece of material takes 12 seconds, or a set of material takes half a cycle to manufacture."))),(0,c.kt)("h3",{id:"advantages"},"Advantages"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Possible differentiation of capacity utilization for product variants within a capacity group"),(0,c.kt)("li",{parentName:"ul"},"Possible conversion of different units of measure"),(0,c.kt)("li",{parentName:"ul"},"Better reflection of actual production environment")),(0,c.kt)("h2",{id:"functional-description"},"Functional description"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Loadfactor",src:a(19151).Z,width:"2089",height:"162"}),"\n",(0,c.kt)("img",{alt:"LoadfactorLegend",src:a(85660).Z,width:"742",height:"42"})),(0,c.kt)("p",null,"Figure: ",(0,c.kt)("em",{parentName:"p"},"Capacity group structure with linked material demand incl. Load Factors")),(0,c.kt)("p",null,"Suppliers may apply Load Factors within WeekBasedCapacityGroup aspect model via the parameter:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Main Parameters"),(0,c.kt)("th",{parentName:"tr",align:null},"Required?"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"),(0,c.kt)("th",{parentName:"tr",align:null},"Example"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Load Factor"),(0,c.kt)("td",{parentName:"tr",align:null},"No"),(0,c.kt)("td",{parentName:"tr",align:null},"If applied, a Load Factor indicates that in order to produce the required material demand, more (or less) production resources are required."),(0,c.kt)("td",{parentName:"tr",align:null},'Decimal value (e.g. "3.5"). A value of 3.5 means that in the respective week the demand value is multiplied by 3,5 in order to reflect the required capacity needed to fulfil the demand.')))),(0,c.kt)("p",null,"Suppliers can apply Load Factors within the WeekBasedCapacityGroup model via a parameter. If they choose to do so, a Load Factor must be assigned to every WeekBasedMaterialDemand linked to the WeekBasedCapacityGroup."),(0,c.kt)("p",null,"A Load Factor of 1 is neutral and does not change the linked WeekBasedMaterialDemand. Since Load Factors are applied via the WeekBasedCapacityGroup, a WeekBasedMaterialDemand can have multiple, differing Load Factors."),(0,c.kt)("p",null,"Without Load Factors, the units of measure of a WeekBasedCapacityGroup and its linked WeekBasedMaterialDemand should be identical. With Load Factors, they may differ."),(0,c.kt)("h3",{id:"considerations"},"Considerations"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The standard does not specify individual calculation logic for applying a Load Factor (e.g., converting capacity in pieces to production cycles). This logic depends on the suppliers\u2019 individual planning requirements and tools. Indicating a Load Factor informs the customer that a conversion has taken place but does not affect the transferred demand or capacity values."),(0,c.kt)("li",{parentName:"ul"},"Lot size restrictions, especially lot size = 1, are not considered when using Load Factors."),(0,c.kt)("li",{parentName:"ul"},"To maintain consistency in demand-capacity comparison, rounding of fractional conversion results should be avoided."),(0,c.kt)("li",{parentName:"ul"},"If a WeekBasedCapacityGroup links several WeekBasedMaterialDemand containing the same material, the Load Factors applied to these WeekBasedMaterialDemand should be identical.")),(0,c.kt)("p",null,"Suppliers can use comments to provide customers with additional information about the applied Load Factors. For more details on this communication feature, see Chapter 5.9 of ",(0,c.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("p",null,"The supplier produces two toys colored red and chrome on its line for the customer.\nBoth materials pass through the same station within the coloring process."),(0,c.kt)("p",null,"Red toy needs 1 cycle at this station. Chrome toy needs 2 cycles because it needs to be painted twice. The supplier can effectively produce 250 cycles per week at this station."),(0,c.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,c.kt)("mermaid",{value:"sequenceDiagram\nautonumber\nParticipant c as Customer\nParticipant s as Supplier\nrect rgb(157,93,00) \n    c->>s: I need 100 red and 100 chrome toys\nend\ns->>s: Chrome toys strain my capacities twice as much as red toys\nrect rgb(4,107,153)\n    s--\x3e>c: Your demand and my capacities need to be expressed as production cycles.\n    autonumber off\n    s--\x3e>c: Red toys are loaded with factor 1\n    s--\x3e>c: Chrome toys are loaded with factor 2\n    s->>c: My overall capacity is 250 cycles\nend\nautonumber 4\nc->>c: My demands are 100 red cycles plus 200 chrome cycles equals 300 cycles\nc->>c: Their capacity for both toys is 250 cycles\nc->>c: Reduce demand for chrome toys to 75 so total demand equals 250 cycles"}),(0,c.kt)("p",null,"Figure: ",(0,c.kt)("em",{parentName:"p"},"Utilizing load factors")),(0,c.kt)("p",null,'The supplier has created a capacity group "Red and Chrome Toys" with the unit \u201ccycle\u201d (unit:cycle). A processing time per piece of 1 cycle is set for red toys and 2 cycles for chrome toys. The maximum available process time is set to 250 cycles.'),(0,c.kt)("p",null,"The customer requires 100 pieces of red toys and 100 pieces of chrome toys in the respective week. The supplier calculates the required process time to be 300 cycles, i.e. 100(red)","*","1 + 100(chrome)","*","2 = 100 + 200 = 300 cycles."),(0,c.kt)("p",null,"Without the Load Factor applied, it would not have been transparent for the customer, that the required amount of red and chrome toys is not possible to be fulfilled and it is necessary to decrease the volume in the respective week."),(0,c.kt)("p",null,"One possible solution would be to reduce the chrome toys by 25 pieces to 75 pieces. New required process time would add up to 100(red)","*","1 + 75(chrome)","*","2 = 100 + 150 = 250 cycles."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Loadfactor",src:a(15967).Z,width:"3965",height:"2287"})),(0,c.kt)("p",null,"Figure: ",(0,c.kt)("em",{parentName:"p"},"Example for application of Load Factor within WeekBasedCapacityGroup")),(0,c.kt)("p",null,"For further details, please refer to ",(0,c.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,c.kt)("h3",{id:"sample-data"},"Sample Data"),(0,c.kt)("p",null,"For sample data please refer to ",(0,c.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/model-WeekBasedCapacityGroup"},"Aspect Model - WeekBasedCapacityGroup"),"."),(0,c.kt)("h3",{id:"notice"},"Notice"),(0,c.kt)("p",null,"This work is licensed under the ",(0,c.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Capgemini SE"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Henkel AG & Co.KGaA"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz Group AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SupplyOn AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Volkswagen AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,c.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation")))}m.isMDXComponent=!0},85660:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyBhcmlhLXJvbGVkZXNjcmlwdGlvbj0iYmxvY2siIHJvbGU9ImdyYXBoaWNzLWRvY3VtZW50IGRvY3VtZW50IiB2aWV3Qm94PSItNSAtMjEgNzQxLjkzNzUgNDIiIHN0eWxlPSJtYXgtd2lkdGg6IDc0MS45MzhweDsgYmFja2dyb3VuZDogcmdiKDIzLCAyMywgMjUpOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaWQ9ImV4cG9ydC1zdmciPjxzdHlsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCI+QGltcG9ydCB1cmwoImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjIuMC9jc3MvYWxsLm1pbi5jc3MiKTsgcCB7bWFyZ2luOiAwO308L3N0eWxlPjxzdHlsZT4jZXhwb3J0LXN2Z3tmb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7ZmlsbDojY2NjO30jZXhwb3J0LXN2ZyAuZXJyb3ItaWNvbntmaWxsOiNhNDQxNDE7fSNleHBvcnQtc3ZnIC5lcnJvci10ZXh0e2ZpbGw6I2RkZDtzdHJva2U6I2RkZDt9I2V4cG9ydC1zdmcgLmVkZ2UtdGhpY2tuZXNzLW5vcm1hbHtzdHJva2Utd2lkdGg6MXB4O30jZXhwb3J0LXN2ZyAuZWRnZS10aGlja25lc3MtdGhpY2t7c3Ryb2tlLXdpZHRoOjMuNXB4O30jZXhwb3J0LXN2ZyAuZWRnZS1wYXR0ZXJuLXNvbGlke3N0cm9rZS1kYXNoYXJyYXk6MDt9I2V4cG9ydC1zdmcgLmVkZ2UtdGhpY2tuZXNzLWludmlzaWJsZXtzdHJva2Utd2lkdGg6MDtmaWxsOm5vbmU7fSNleHBvcnQtc3ZnIC5lZGdlLXBhdHRlcm4tZGFzaGVke3N0cm9rZS1kYXNoYXJyYXk6Mzt9I2V4cG9ydC1zdmcgLmVkZ2UtcGF0dGVybi1kb3R0ZWR7c3Ryb2tlLWRhc2hhcnJheToyO30jZXhwb3J0LXN2ZyAubWFya2Vye2ZpbGw6bGlnaHRncmV5O3N0cm9rZTpsaWdodGdyZXk7fSNleHBvcnQtc3ZnIC5tYXJrZXIuY3Jvc3N7c3Ryb2tlOmxpZ2h0Z3JleTt9I2V4cG9ydC1zdmcgc3Zne2ZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgbXMiLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDt9I2V4cG9ydC1zdmcgcHttYXJnaW46MDt9I2V4cG9ydC1zdmcgLmxhYmVse2ZvbnQtZmFtaWx5OiJ0cmVidWNoZXQgbXMiLHZlcmRhbmEsYXJpYWwsc2Fucy1zZXJpZjtjb2xvcjojY2NjO30jZXhwb3J0LXN2ZyAuY2x1c3Rlci1sYWJlbCB0ZXh0e2ZpbGw6I0Y5RkZGRTt9I2V4cG9ydC1zdmcgLmNsdXN0ZXItbGFiZWwgc3BhbiwjZXhwb3J0LXN2ZyBwe2NvbG9yOiNGOUZGRkU7fSNleHBvcnQtc3ZnIC5sYWJlbCB0ZXh0LCNleHBvcnQtc3ZnIHNwYW4sI2V4cG9ydC1zdmcgcHtmaWxsOiNjY2M7Y29sb3I6I2NjYzt9I2V4cG9ydC1zdmcgLm5vZGUgcmVjdCwjZXhwb3J0LXN2ZyAubm9kZSBjaXJjbGUsI2V4cG9ydC1zdmcgLm5vZGUgZWxsaXBzZSwjZXhwb3J0LXN2ZyAubm9kZSBwb2x5Z29uLCNleHBvcnQtc3ZnIC5ub2RlIHBhdGh7ZmlsbDojMWYyMDIwO3N0cm9rZTojY2NjO3N0cm9rZS13aWR0aDoxcHg7fSNleHBvcnQtc3ZnIC5mbG93Y2hhcnQtbGFiZWwgdGV4dHt0ZXh0LWFuY2hvcjptaWRkbGU7fSNleHBvcnQtc3ZnIC5ub2RlIC5sYWJlbHt0ZXh0LWFsaWduOmNlbnRlcjt9I2V4cG9ydC1zdmcgLm5vZGUuY2xpY2thYmxle2N1cnNvcjpwb2ludGVyO30jZXhwb3J0LXN2ZyAuYXJyb3doZWFkUGF0aHtmaWxsOmxpZ2h0Z3JleTt9I2V4cG9ydC1zdmcgLmVkZ2VQYXRoIC5wYXRoe3N0cm9rZTpsaWdodGdyZXk7c3Ryb2tlLXdpZHRoOjIuMHB4O30jZXhwb3J0LXN2ZyAuZmxvd2NoYXJ0LWxpbmt7c3Ryb2tlOmxpZ2h0Z3JleTtmaWxsOm5vbmU7fSNleHBvcnQtc3ZnIC5lZGdlTGFiZWx7YmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDM0LjQxMTc2NDcwNTklKTt0ZXh0LWFsaWduOmNlbnRlcjt9I2V4cG9ydC1zdmcgLmVkZ2VMYWJlbCByZWN0e29wYWNpdHk6MC41O2JhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAzNC40MTE3NjQ3MDU5JSk7ZmlsbDpoc2woMCwgMCUsIDM0LjQxMTc2NDcwNTklKTt9I2V4cG9ydC1zdmcgLmxhYmVsQmtne2JhY2tncm91bmQtY29sb3I6cmdiYSg4Ny43NSwgODcuNzUsIDg3Ljc1LCAwLjUpO30jZXhwb3J0LXN2ZyAubm9kZSAuY2x1c3RlcntmaWxsOnJnYmEoNzEuMTUyMzgwOTUyNSwgNzMuNDQ3NjE5MDQ3NywgNzMuNDQ3NjE5MDQ3NywgMC41KTtzdHJva2U6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO2JveC1zaGFkb3c6cmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMTNweCAyN3B4IC01cHgscmdiYSgwLCAwLCAwLCAwLjMpIDBweCA4cHggMTZweCAtOHB4O3N0cm9rZS13aWR0aDoxcHg7fSNleHBvcnQtc3ZnIC5jbHVzdGVyIHRleHR7ZmlsbDojRjlGRkZFO30jZXhwb3J0LXN2ZyAuY2x1c3RlciBzcGFuLCNleHBvcnQtc3ZnIHB7Y29sb3I6I0Y5RkZGRTt9I2V4cG9ydC1zdmcgZGl2Lm1lcm1haWRUb29sdGlwe3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO21heC13aWR0aDoyMDBweDtwYWRkaW5nOjJweDtmb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZDpoc2woMjAsIDEuNTg3MzAxNTg3MyUsIDEyLjM1Mjk0MTE3NjUlKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7Ym9yZGVyLXJhZGl1czoycHg7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwMDt9I2V4cG9ydC1zdmcgLmZsb3djaGFydFRpdGxlVGV4dHt0ZXh0LWFuY2hvcjptaWRkbGU7Zm9udC1zaXplOjE4cHg7ZmlsbDojY2NjO30jZXhwb3J0LXN2ZyAubm9kZSAubmVvLW5vZGV7c3Ryb2tlOiNjY2M7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgcmVjdCwjZXhwb3J0LXN2ZyBbZGF0YS1sb29rPSJuZW8iXS5jbHVzdGVyIHJlY3QsI2V4cG9ydC1zdmcgW2RhdGEtbG9vaz0ibmVvIl0ubm9kZSBwb2x5Z29ue3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgcmVjdCwjZXhwb3J0LXN2ZyBbZGF0YS1sb29rPSJuZW8iXS5ub2RlIHBvbHlnb24sI2V4cG9ydC1zdmcgW2RhdGEtbG9vaz0ibmVvIl0ubm9kZSBwYXRoe3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgLm5lby1saW5lIHBhdGh7c3Ryb2tlOiNjY2NjY2M7ZmlsdGVyOm5vbmU7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgY2lyY2xle3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLm5vZGUgY2lyY2xlIC5zdGF0ZS1zdGFydHtmaWxsOiMwMDAwMDA7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLnN0YXRlZGlhZ3JhbS1jbHVzdGVyIHJlY3R7ZmlsbDojMWYyMDIwO3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO3N0cm9rZS13aWR0aDoxcHg7fSNleHBvcnQtc3ZnIFtkYXRhLWxvb2s9Im5lbyJdLmljb24tc2hhcGUgLmljb24gcGF0aHtmaWxsOnVybCgjZXhwb3J0LXN2Zy1ncmFkaWVudCk7ZmlsdGVyOmRyb3Atc2hhZG93KCAxcHggMnB4IDJweCByZ2JhKDE4NSwxODUsMTg1LDEpKTt9I2V4cG9ydC1zdmcgW2RhdGEtbG9vaz0ibmVvIl0uaWNvbi1zaGFwZSBwYXRoe3N0cm9rZTp1cmwoI2V4cG9ydC1zdmctZ3JhZGllbnQpO2ZpbHRlcjpkcm9wLXNoYWRvdyggMXB4IDJweCAycHggcmdiYSgxODUsMTg1LDE4NSwxKSk7fSNleHBvcnQtc3ZnIDpyb290ey0tbWVybWFpZC1mb250LWZhbWlseToidHJlYnVjaGV0IG1zIix2ZXJkYW5hLGFyaWFsLHNhbnMtc2VyaWY7fTwvc3R5bGU+PGcvPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjEyIiBtYXJrZXJXaWR0aD0iMTIiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNSIgcmVmWD0iNiIgdmlld0JveD0iMCAwIDEwIDEwIiBjbGFzcz0ibWFya2VyIGJsb2NrIiBpZD0iZXhwb3J0LXN2Z19ibG9jay1wb2ludEVuZCI+PHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIGQ9Ik0gMCAwIEwgMTAgNSBMIDAgMTAgeiIvPjwvbWFya2VyPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjEyIiBtYXJrZXJXaWR0aD0iMTIiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNSIgcmVmWD0iNC41IiB2aWV3Qm94PSIwIDAgMTAgMTAiIGNsYXNzPSJtYXJrZXIgYmxvY2siIGlkPSJleHBvcnQtc3ZnX2Jsb2NrLXBvaW50U3RhcnQiPjxwYXRoIHN0eWxlPSJzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDEsIDA7IiBjbGFzcz0iYXJyb3dNYXJrZXJQYXRoIiBkPSJNIDAgNSBMIDEwIDEwIEwgMTAgMCB6Ii8+PC9tYXJrZXI+PG1hcmtlciBvcmllbnQ9ImF1dG8iIG1hcmtlckhlaWdodD0iMTEiIG1hcmtlcldpZHRoPSIxMSIgbWFya2VyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiByZWZZPSI1IiByZWZYPSIxMSIgdmlld0JveD0iMCAwIDEwIDEwIiBjbGFzcz0ibWFya2VyIGJsb2NrIiBpZD0iZXhwb3J0LXN2Z19ibG9jay1jaXJjbGVFbmQiPjxjaXJjbGUgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHI9IjUiIGN5PSI1IiBjeD0iNSIvPjwvbWFya2VyPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjExIiBtYXJrZXJXaWR0aD0iMTEiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNSIgcmVmWD0iLTEiIHZpZXdCb3g9IjAgMCAxMCAxMCIgY2xhc3M9Im1hcmtlciBibG9jayIgaWQ9ImV4cG9ydC1zdmdfYmxvY2stY2lyY2xlU3RhcnQiPjxjaXJjbGUgc3R5bGU9InN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIHI9IjUiIGN5PSI1IiBjeD0iNSIvPjwvbWFya2VyPjxtYXJrZXIgb3JpZW50PSJhdXRvIiBtYXJrZXJIZWlnaHQ9IjExIiBtYXJrZXJXaWR0aD0iMTEiIG1hcmtlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcmVmWT0iNS4yIiByZWZYPSIxMiIgdmlld0JveD0iMCAwIDExIDExIiBjbGFzcz0ibWFya2VyIGNyb3NzIGJsb2NrIiBpZD0iZXhwb3J0LXN2Z19ibG9jay1jcm9zc0VuZCI+PHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDogMjsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIGQ9Ik0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDkiLz48L21hcmtlcj48bWFya2VyIG9yaWVudD0iYXV0byIgbWFya2VySGVpZ2h0PSIxMSIgbWFya2VyV2lkdGg9IjExIiBtYXJrZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHJlZlk9IjUuMiIgcmVmWD0iLTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgY2xhc3M9Im1hcmtlciBjcm9zcyBibG9jayIgaWQ9ImV4cG9ydC1zdmdfYmxvY2stY3Jvc3NTdGFydCI+PHBhdGggc3R5bGU9InN0cm9rZS13aWR0aDogMjsgc3Ryb2tlLWRhc2hhcnJheTogMSwgMDsiIGNsYXNzPSJhcnJvd01hcmtlclBhdGgiIGQ9Ik0gMSwxIGwgOSw5IE0gMTAsMSBsIC05LDkiLz48L21hcmtlcj48ZyBjbGFzcz0iYmxvY2siPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4LjQ5MjE4NzUsIDApIiBkYXRhLWlkPSJBIiBkYXRhLW5vZGU9InRydWUiIGlkPSJBIiBjbGFzcz0ibm9kZSBkZWZhdWx0IGRlZmF1bHQgZmxvd2NoYXJ0LWxhYmVsIj48cmVjdCBoZWlnaHQ9IjMyIiB3aWR0aD0iMTc2Ljk4NDM3NSIgeT0iLTE2IiB4PSItODguNDkyMTg3NSIgcnk9IjUiIHJ4PSI1IiBzdHlsZT0iZmlsbDojRkZBNjAwOyIgY2xhc3M9ImJhc2ljIGxhYmVsLWNvbnRhaW5lciIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OC4yNDYwOTM3NSwgLTEyKSIgc3R5bGU9ImNvbG9yOiNGNEYyRjM7IiBjbGFzcz0ibGFiZWwiPjxyZWN0Lz48Zm9yZWlnbk9iamVjdCBoZWlnaHQ9IjI0IiB3aWR0aD0iMTU2LjQ5MjE4NzUiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJjb2xvcjogcmdiKDI0NCwgMjQyLCAyNDMpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48c3BhbiBjbGFzcz0ibm9kZUxhYmVsIiBzdHlsZT0iY29sb3I6I0Y0RjJGMzsiPkRlbWFuZCBkYXRhIChNVVNUKTwvc3Bhbj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzMuNDc2NTYyNSwgMCkiIGRhdGEtaWQ9IkIiIGRhdGEtbm9kZT0idHJ1ZSIgaWQ9IkIiIGNsYXNzPSJub2RlIGRlZmF1bHQgZGVmYXVsdCBmbG93Y2hhcnQtbGFiZWwiPjxyZWN0IGhlaWdodD0iMzIiIHdpZHRoPSIxNzYuOTg0Mzc1IiB5PSItMTYiIHg9Ii04OC40OTIxODc1IiByeT0iNSIgcng9IjUiIHN0eWxlPSJmaWxsOiNCRjcxMDA7IiBjbGFzcz0iYmFzaWMgbGFiZWwtY29udGFpbmVyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzLjYwNTQ2ODc1LCAtMTIpIiBzdHlsZT0iY29sb3I6I0Y0RjJGMzsiIGNsYXNzPSJsYWJlbCI+PHJlY3QvPjxmb3JlaWduT2JqZWN0IGhlaWdodD0iMjQiIHdpZHRoPSIxNjcuMjEwOTM3NSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImNvbG9yOiByZ2IoMjQ0LCAyNDIsIDI0Myk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGNsYXNzPSJub2RlTGFiZWwiIHN0eWxlPSJjb2xvcjojRjRGMkYzOyI+RGVtYW5kIGRhdGEgKG9wdGlvbmFsKTwvc3Bhbj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NTguNDYwOTM3NSwgMCkiIGRhdGEtaWQ9IkMiIGRhdGEtbm9kZT0idHJ1ZSIgaWQ9IkMiIGNsYXNzPSJub2RlIGRlZmF1bHQgZGVmYXVsdCBmbG93Y2hhcnQtbGFiZWwiPjxyZWN0IGhlaWdodD0iMzIiIHdpZHRoPSIxNzYuOTg0Mzc1IiB5PSItMTYiIHg9Ii04OC40OTIxODc1IiByeT0iNSIgcng9IjUiIHN0eWxlPSJmaWxsOiNCM0NCMkQ7IiBjbGFzcz0iYmFzaWMgbGFiZWwtY29udGFpbmVyIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc5LjEzMjgxMjUsIC0xMikiIHN0eWxlPSJjb2xvcjojRjRGMkYzOyIgY2xhc3M9ImxhYmVsIj48cmVjdC8+PGZvcmVpZ25PYmplY3QgaGVpZ2h0PSIyNCIgd2lkdGg9IjE1OC4yNjU2MjUiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJjb2xvcjogcmdiKDI0NCwgMjQyLCAyNDMpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij48c3BhbiBjbGFzcz0ibm9kZUxhYmVsIiBzdHlsZT0iY29sb3I6I0Y0RjJGMzsiPkNhcGFjaXR5IGRhdGEgKE1VU1QpPC9zcGFuPjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0My40NDUzMTI1LCAwKSIgZGF0YS1pZD0iRCIgZGF0YS1ub2RlPSJ0cnVlIiBpZD0iRCIgY2xhc3M9Im5vZGUgZGVmYXVsdCBkZWZhdWx0IGZsb3djaGFydC1sYWJlbCI+PHJlY3QgaGVpZ2h0PSIzMiIgd2lkdGg9IjE3Ni45ODQzNzUiIHk9Ii0xNiIgeD0iLTg4LjQ5MjE4NzUiIHJ5PSI1IiByeD0iNSIgc3R5bGU9ImZpbGw6IzYxNzAwMDsiIGNsYXNzPSJiYXNpYyBsYWJlbC1jb250YWluZXIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQuNDkyMTg3NSwgLTEyKSIgc3R5bGU9ImNvbG9yOiNGNEYyRjM7IiBjbGFzcz0ibGFiZWwiPjxyZWN0Lz48Zm9yZWlnbk9iamVjdCBoZWlnaHQ9IjI0IiB3aWR0aD0iMTY4Ljk4NDM3NSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImNvbG9yOiByZ2IoMjQ0LCAyNDIsIDI0Myk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjxzcGFuIGNsYXNzPSJub2RlTGFiZWwiIHN0eWxlPSJjb2xvcjojRjRGMkYzOyI+Q2FwYWNpdHkgZGF0YSAob3B0aW9uYWwpPC9zcGFuPjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48L3N2Zz4="},15967:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/business-process_LoadFactor_example_diagram-715d7b136dc8e7834abfedd0e55ce27b.svg"},19151:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/business-process_LoadFactor_functional-580a5b3a2a66351defbba75a456a6bd6.svg"},97345:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/demand-and-capacity-management-kit-logo.drawio-71105a676aac0732834a88c1a6c9af15.svg"}}]);