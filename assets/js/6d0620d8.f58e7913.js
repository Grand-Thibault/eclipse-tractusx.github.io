"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[56105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>I,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),M=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},I=function(e){var t=M(e.components);return i.createElement(d.Provider,{value:t},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},N=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,I=c(e,["components","mdxType","originalType","parentName"]),o=M(a),N=n,u=o["".concat(d,".").concat(N)]||o[N]||p[N]||l;return a?i.createElement(u,r(r({ref:t},I),{},{components:a})):i.createElement(u,r({ref:t},I))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=N;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[o]="string"==typeof e?e:n,r[1]=c;for(var M=2;M<l;M++)r[M]=a[M];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}N.displayName="MDXCreateElement"},35520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>M});var i=a(87462),n=(a(67294),a(3905));const l={id:"nesting",title:"Nesting",description:"Nest material demands and capacity groups into other capacity groups",sidebar_position:8},r=void 0,c={unversionedId:"kits/Demand and Capacity Management Kit/adoption-view/use-case/nesting",id:"kits/Demand and Capacity Management Kit/adoption-view/use-case/nesting",title:"Nesting",description:"Nest material demands and capacity groups into other capacity groups",source:"@site/docs-kits/kits/Demand and Capacity Management Kit/adoption-view/use-case/nesting.md",sourceDirName:"kits/Demand and Capacity Management Kit/adoption-view/use-case",slug:"/kits/Demand and Capacity Management Kit/adoption-view/use-case/nesting",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/adoption-view/use-case/nesting",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"nesting",title:"Nesting",description:"Nest material demands and capacity groups into other capacity groups",sidebar_position:8},sidebar:"kits",previous:{title:"Supply Chain Disruption Notification",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/adoption-view/use-case/disruption-notification"},next:{title:"Onboarding",permalink:"/docs-kits/next/kits/Demand and Capacity Management Kit/adoption-view/onboarding"}},d={},M=[{value:"Business Roles and Functions",id:"business-roles-and-functions",level:2},{value:"Business Value",id:"business-value",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Functional Description",id:"functional-description",level:2},{value:"Considerations",id:"considerations",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Example",id:"example",level:2},{value:"Notice",id:"notice",level:2}],I={toc:M};function o(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},I,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DCM kit banner",src:a(97345).Z,width:"264",height:"245"})),(0,n.kt)("h2",{id:"business-roles-and-functions"},"Business Roles and Functions"),(0,n.kt)("p",null,"Nesting is a feature defined in the DCM standard ",(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," and includes an advanced property of the Capacity Group structure and therefore may be used optionally by suppliers. The Nesting feature is embedded into the WeekBasedCapacityGroup aspect model. This means that only suppliers may apply Nesting and customers consume it."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Function / Role"),(0,n.kt)("th",{parentName:"tr",align:null},"Customer"),(0,n.kt)("th",{parentName:"tr",align:null},"Supplier"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Define Nesting in a Capacity Group"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Inform business partners about Nesting via data transfer"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Receive Nesting information"),(0,n.kt)("td",{parentName:"tr",align:null},"X"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"business-value"},"Business Value"),(0,n.kt)("p",null,"Nesting may be used by suppliers for the following purposes (but not limited to):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To simplify the maintenance of Capacity Groups"),(0,n.kt)("li",{parentName:"ul"},"To enable the bundling of several smaller Capacity Groups to reflect a (virtual, internal) company structure")),(0,n.kt)("h3",{id:"advantages"},"Advantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avoid increased maintenance efforts if same Material Demands may be required for another Capacity Group"),(0,n.kt)("li",{parentName:"ul"},"Allows to provide additional transparency to customers")),(0,n.kt)("h2",{id:"functional-description"},"Functional Description"),(0,n.kt)("p",null,"Nesting is an indirect linking of Material Demand information to a Capacity Group done by a supplier. It involves connecting the WeekBasedCapacityGroup to another WeekBasedCapacityGroup that is already linked to a WeekBasedMaterialDemand.\nSuppliers may apply Nesting within WeekBasedCapacityGroup aspect model via the parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"linkedCapacityGroups"),"."),(0,n.kt)("p",null,"For more transparent collaboration, a supplier may also aggregate two or more Capacity Groups and share this aggregated Capacity Group with its customer,\u202fif all aggregated Capacity Groups refer to the same customer (BPNL).\nNesting helps\u202fsuppliers for example to map\u202fthe internal production sequence in the Capacity Groups, e.g. the combination of two production lines into one final assembly line can be mapped by linking the two Capacity Groups of the preceding lines into another Capacity Group (see ",(0,n.kt)("a",{parentName:"p",href:"#example"},"Example"),").\nThe same applies to multiple production plants representing\u202fa customer's total allocated capacity for materials."),(0,n.kt)("p",null,"The supplier is able to put the desired Capacity Groups with their respective demands and capacities together and then share it with the customer."),(0,n.kt)("p",null,"Consolidation is performed only on the demand and\u202fnot\u202fon the capacity side when Nesting is used: all related capacity information is fully independent, i.e. the capacity data in the Capacity Group must be maintained individually. If a Capacity Group contains linked Capacity Groups, then the Material Demands of these linked Capacity Groups are summed up and used as aggregated demand. The supplier must either link individual Material Demands or link existing Capacity Groups in the Capacity Group."),(0,n.kt)("p",null,"The following figure shows that:\u202f "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Capacity Group 1 and 2 are linked to Capacity Group 3 (i.e. Nesting or indirect linking).\u202f "),(0,n.kt)("li",{parentName:"ul"},"Material Demand 1 and 2 are linked to Capacity Group 1 (i.e. direct linking)."),(0,n.kt)("li",{parentName:"ul"},"Material Demand 3 and 4 are linked to Capacity Group 2 (i.e. direct linking)."),(0,n.kt)("li",{parentName:"ul"},"Capacity Group 3 considers the Material Demands 1, 2, 3 and 4 because they are indirectly linked via the nested Capacity Group.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Simple nesting example",src:a(66639).Z,width:"1440",height:"642"}),"\n",(0,n.kt)("img",{alt:"Simple nesting example legend",src:a(23171).Z,width:"1899",height:"72"})),(0,n.kt)("p",null,"Figure: ",(0,n.kt)("em",{parentName:"p"},"Capacity Group with directly linked Material Demands or nested Capacity Groups (indirectly linked Material Demands)")),(0,n.kt)("p",null,"Capacity Group 3 is the result of the indirect way of linking Material Demand, therefore it must not contain any additional directly linked Material Demands."),(0,n.kt)("p",null,'If a linked Capacity Group contains further linked Capacity Groups (dark green in figure below), the Nesting is recurrent and must go further until referenced Capacity Groups contain only linked demand series\u202f(orange in figure below) ("domino effect").'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Recurrent nested Capacity Groups",src:a(96066).Z,width:"4456",height:"2048"})),(0,n.kt)("p",null,"Figure: ",(0,n.kt)("em",{parentName:"p"},"Recurrent nested Capacity Groups")),(0,n.kt)("h3",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It must not be possible to have a combination of directly linked Material Demand series and linked Capacity Groups (Nesting) within the same Capacity Group."),(0,n.kt)("li",{parentName:"ul"},"Suppliers can use comments to provide customers with additional information about the Nesting. For more details on this communication feature, see chapter 5.9 in ",(0,n.kt)("a",{parentName:"li",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," or ",(0,n.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/Demand%20and%20Capacity%20Management%20Kit/adoption-view/use-case/comments"},"Comments")," page in DCM Kit of Tractus-X."),(0,n.kt)("li",{parentName:"ul"},'Suppliers should be carefully applying recurring linked Capacity Groups ("domino effect"), because of the complexity of keeping track on changes and in maintenance. It is more difficult to identify and understand demand changes and where they are originating from (e.g. which part).')),(0,n.kt)("p",null,"Feature Nesting is to be used optional but if it is used certain parameters are required to be filled."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters of the Nesting are as follows:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Main Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"linkedCapacityGroups"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"UUID of the linked Capacity Group"),(0,n.kt)("td",{parentName:"tr",align:null},"0157ba42-d2a8-4e28-8565-7b07830c1110")))),(0,n.kt)("p",null,"For further details please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/model-WeekBasedCapacityGroup"},"Aspect Model - WeekBasedCapacityGroup"),"."),(0,n.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,n.kt)("mermaid",{value:'sequenceDiagram\nautonumber\nParticipant c as Customer\nParticipant s as Supplier\nrect rgb(191,113,00) \n    c->>s: I need 60 pieces of toy 1, 40 pieces of toy 2 and 50 pieces of toy 3\n    c->>s: I need 100 pieces of toy 4 and 70 pieces of toy 5\nend\ns->>s: Toys 1, 2 and 3 are produced on line 1, toys 4 and 5 on line 2 and all toys have to pass through paint shop\nrect rgb(64,74,00)\n    autonumber off\n    s--\x3e>c: Your demand and my capacities need to be assigned to 3 different capacity groups.\n    autonumber 4\n    s->>c: Toys 1, 2 and 3 are part of capacity group "Production Line 1"\n    s->>c: Toys 4 and 5 are part of capacity group "Production Line 2"\n    autonumber off\n    s--\x3e>c: All toys have to be colored in the paint shop\n    autonumber 6\n    s->>c: Nesting "Production Line 1" and "Production Line 2" in "Paint Shop" instead of linking each Material Demand separately again\nend\nc->>c: My demands for all 5 toys are interlinked and transparent that they affect same capacity together'}),(0,n.kt)("p",null,"Figure: ",(0,n.kt)("em",{parentName:"p"},"Utilizing nesting to structure demand and capacity data")),(0,n.kt)("p",null,"For further details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"The supplier produces five different toys on two different production lines for the customer. Afterwards the produced toys of both production lines are colored in the same paint shop.\nAll five toys pass through the same paint shop within the coloring process."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Production line 1 is used to produce toys 1, 2 and 3 for the customer."),(0,n.kt)("li",{parentName:"ul"},"Production line 2 is used to produce toys 4 and 5 for the customer."),(0,n.kt)("li",{parentName:"ul"},'The supplier has created a Capacity Group "Production Line 1" with the directly linked Material Demands of toys 1, 2 and 3.'),(0,n.kt)("li",{parentName:"ul"},'The supplier has also created a Capacity Group "Production Line 2" with the directly linked Material Demands of toys 4 and 5.'),(0,n.kt)("li",{parentName:"ul"},'For the paint shop the supplier has created another Capacity Group "Paint Shop", but without directly linked Material Demands. Instead, the supplier linked the Capacity Groups "Production Line 1" and "Production Line 2".'),(0,n.kt)("li",{parentName:"ul"},'The customer requires 60 pieces of toy 1, 40 pieces of toy 2 and 50 pieces of toy 3 in the respective week. Therefore the Capacity Group "Production Line 1" has an aggregated Material Demand of 150 pieces per week.'),(0,n.kt)("li",{parentName:"ul"},'Of toy 4, the customer wants 100 pieces and of toy 5 70 pieces in the respective week. Accordingly the related Capacity Group "Production Line 2" shows an aggregated Material Demand of 170 pieces per week.')),(0,n.kt)("p",null,'With the Nesting, the supplier achieves that the latest Material Demands that are linked to "Production Line 1" and "Production Line 2" are automatically available and considered in his Capacity Group "Paint Shop" without any further activities. Also in case a new toy 6 would be requested by same customer and produced on e.g. "Production Line 2", the supplier would only need to add it to that Capacity Group and automatically its Material Demand would also be considered in the Capacity Group "Paint Shop", thus also avoiding time-consuming additional maintenance on the demand side for "Paint Shop" Capacity Group.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Advanced Nesting example",src:a(66639).Z,width:"1440",height:"642"}),"\n",(0,n.kt)("img",{alt:"Advanced Nesting example Legend",src:a(23171).Z,width:"1899",height:"72"})),(0,n.kt)("p",null,"Figure: ",(0,n.kt)("em",{parentName:"p"},"Example for application of Nesting")),(0,n.kt)("p",null,"For further details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,n.kt)("h2",{id:"notice"},"Notice"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 BearingPoint Holding B.V"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Volvo Car Corporation"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors to the Eclipse Foundation")))}o.isMDXComponent=!0},66639:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIG92ZXJmbG93PSJoaWRkZW4iPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjkwIC0xNTMpIj48cGF0aCBkPSJNMjMwNS41IDE2NS4xNjdDMjMwNS41IDE1OS4yNzYgMjMxMC4yOCAxNTQuNSAyMzE2LjE3IDE1NC41TDM3MDUuODMgMTU0LjVDMzcxMS43MiAxNTQuNSAzNzE2LjUgMTU5LjI3NiAzNzE2LjUgMTY1LjE2N0wzNzE2LjUgMjA3LjgzM0MzNzE2LjUgMjEzLjcyNCAzNzExLjcyIDIxOC41IDM3MDUuODMgMjE4LjVMMjMxNi4xNyAyMTguNUMyMzEwLjI4IDIxOC41IDIzMDUuNSAyMTMuNzI0IDIzMDUuNSAyMDcuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNCM0NCMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI4OTguMTcgMTk3KSI+Q2FwYWNpdHkgR3JvdXAgMzwvdGV4dD48cGF0aCBkPSJNMjMwNS41IDI0My4xNjdDMjMwNS41IDIzNy4yNzYgMjMxMC4yOCAyMzIuNSAyMzE2LjE3IDIzMi41TDI4MzMuODMgMjMyLjVDMjgzOS43MiAyMzIuNSAyODQ0LjUgMjM3LjI3NiAyODQ0LjUgMjQzLjE2N0wyODQ0LjUgMjg1LjgzM0MyODQ0LjUgMjkxLjcyNCAyODM5LjcyIDI5Ni41IDI4MzMuODMgMjk2LjVMMjMxNi4xNyAyOTYuNUMyMzEwLjI4IDI5Ni41IDIzMDUuNSAyOTEuNzI0IDIzMDUuNSAyODUuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLjc1IDEwLjMxMjUiIGZpbGw9IiM2MTcwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI0NjIuMDcgMjc1KSI+Q2FwYWNpdHkgR3JvdXAgMTwvdGV4dD48cGF0aCBkPSJNMjMwNS41IDMyMS4xNjdDMjMwNS41IDMxNS4yNzYgMjMxMC4yOCAzMTAuNSAyMzE2LjE3IDMxMC41TDI1NTcuODMgMzEwLjVDMjU2My43MiAzMTAuNSAyNTY4LjUgMzE1LjI3NiAyNTY4LjUgMzIxLjE2N0wyNTY4LjUgMzYzLjgzM0MyNTY4LjUgMzY5LjcyNCAyNTYzLjcyIDM3NC41IDI1NTcuODMgMzc0LjVMMjMxNi4xNyAzNzQuNUMyMzEwLjI4IDM3NC41IDIzMDUuNSAzNjkuNzI0IDIzMDUuNSAzNjMuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLjc1IDEwLjMxMjUiIGZpbGw9IiNCRjcxMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIzMDkuOTkgMzUzKSI+TWF0ZXJpYWwgRGVtYW5kIDE8L3RleHQ+PHBhdGggZD0iTTI1ODAuNSAzMjAuMTY3QzI1ODAuNSAzMTQuMjc2IDI1ODUuMjggMzA5LjUgMjU5MS4xNyAzMDkuNUwyODMzLjgzIDMwOS41QzI4MzkuNzIgMzA5LjUgMjg0NC41IDMxNC4yNzYgMjg0NC41IDMyMC4xNjdMMjg0NC41IDM2Mi44MzNDMjg0NC41IDM2OC43MjQgMjgzOS43MiAzNzMuNSAyODMzLjgzIDM3My41TDI1OTEuMTcgMzczLjVDMjU4NS4yOCAzNzMuNSAyNTgwLjUgMzY4LjcyNCAyNTgwLjUgMzYyLjgzM1oiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBzdHJva2UtZGFzaGFycmF5PSIxMy43NSAxMC4zMTI1IiBmaWxsPSIjQkY3MTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48dGV4dCBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iQ2FsaWJyaSxDYWxpYnJpX01TRm9udFNlcnZpY2Usc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zaXplPSIyOCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyNTg1LjUxIDM1MSkiPk1hdGVyaWFsIERlbWFuZCAyPC90ZXh0PjxwYXRoIGQ9Ik0zMTc3LjUgMjQzLjE2N0MzMTc3LjUgMjM3LjI3NiAzMTgyLjI4IDIzMi41IDMxODguMTcgMjMyLjVMMzcwNS44MyAyMzIuNUMzNzExLjcyIDIzMi41IDM3MTYuNSAyMzcuMjc2IDM3MTYuNSAyNDMuMTY3TDM3MTYuNSAyODUuODMzQzM3MTYuNSAyOTEuNzI0IDM3MTEuNzIgMjk2LjUgMzcwNS44MyAyOTYuNUwzMTg4LjE3IDI5Ni41QzMxODIuMjggMjk2LjUgMzE3Ny41IDI5MS43MjQgMzE3Ny41IDI4NS44MzNaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMTMuNzUgMTAuMzEyNSIgZmlsbD0iIzYxNzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHRleHQgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzMzNC4yNiAyNzUpIj5DYXBhY2l0eSBHcm91cCAyPC90ZXh0PjxwYXRoIGQ9Ik0zMTc3LjUgMzIxLjE2N0MzMTc3LjUgMzE1LjI3NiAzMTgyLjI4IDMxMC41IDMxODguMTcgMzEwLjVMMzQyOS44MyAzMTAuNUMzNDM1LjcyIDMxMC41IDM0NDAuNSAzMTUuMjc2IDM0NDAuNSAzMjEuMTY3TDM0NDAuNSAzNjMuODMzQzM0NDAuNSAzNjkuNzI0IDM0MzUuNzIgMzc0LjUgMzQyOS44MyAzNzQuNUwzMTg4LjE3IDM3NC41QzMxODIuMjggMzc0LjUgMzE3Ny41IDM2OS43MjQgMzE3Ny41IDM2My44MzNaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMTMuNzUgMTAuMzEyNSIgZmlsbD0iI0JGNzEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHRleHQgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzE4Mi4xOCAzNTMpIj5NYXRlcmlhbCBEZW1hbmQgMzwvdGV4dD48cGF0aCBkPSJNMzQ1Mi41IDMyMC4xNjdDMzQ1Mi41IDMxNC4yNzYgMzQ1Ny4yOCAzMDkuNSAzNDYzLjE3IDMwOS41TDM3MDUuODMgMzA5LjVDMzcxMS43MiAzMDkuNSAzNzE2LjUgMzE0LjI3NiAzNzE2LjUgMzIwLjE2N0wzNzE2LjUgMzYyLjgzM0MzNzE2LjUgMzY4LjcyNCAzNzExLjcyIDM3My41IDM3MDUuODMgMzczLjVMMzQ2My4xNyAzNzMuNUMzNDU3LjI4IDM3My41IDM0NTIuNSAzNjguNzI0IDM0NTIuNSAzNjIuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLjc1IDEwLjMxMjUiIGZpbGw9IiNCRjcxMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM0NTcuNyAzNTEpIj5NYXRlcmlhbCBEZW1hbmQgNDwvdGV4dD48cGF0aCBkPSJNMjUyMy41IDQ4NS44NiAyNTc0LjUgNDY4LjUgMjYyNS41IDQ4NS44NiAyNjAwIDQ4NS44NiAyNjAwIDU1Mi41IDI1NDkgNTUyLjUgMjU0OSA0ODUuODZaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTMzOTUuNSA0ODUuODYgMzQ0Ni41IDQ2OC41IDM0OTcuNSA0ODUuODYgMzQ3MiA0ODUuODYgMzQ3MiA1NTIuNSAzNDIxIDU1Mi41IDM0MjEgNDg1Ljg2WiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yMzA1LjUgNjU3QzIzMDUuNSA2NTEuMjAxIDIzMTAuMiA2NDYuNSAyMzE2IDY0Ni41TDI4MzQgNjQ2LjVDMjgzOS44IDY0Ni41IDI4NDQuNSA2NTEuMjAxIDI4NDQuNSA2NTdMMjg0NC41IDY5OUMyODQ0LjUgNzA0Ljc5OSAyODM5LjggNzA5LjUgMjgzNCA3MDkuNUwyMzE2IDcwOS41QzIzMTAuMiA3MDkuNSAyMzA1LjUgNzA0Ljc5OSAyMzA1LjUgNjk5WiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNCM0NCMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI0NjIuMDcgNjg4KSI+Q2FwYWNpdHkgR3JvdXAgMTwvdGV4dD48cGF0aCBkPSJNMjMwNS41IDczNS4xNjdDMjMwNS41IDcyOS4yNzYgMjMxMC4yOCA3MjQuNSAyMzE2LjE3IDcyNC41TDI1NTcuODMgNzI0LjVDMjU2My43MiA3MjQuNSAyNTY4LjUgNzI5LjI3NiAyNTY4LjUgNzM1LjE2N0wyNTY4LjUgNzc3LjgzM0MyNTY4LjUgNzgzLjcyNCAyNTYzLjcyIDc4OC41IDI1NTcuODMgNzg4LjVMMjMxNi4xNyA3ODguNUMyMzEwLjI4IDc4OC41IDIzMDUuNSA3ODMuNzI0IDIzMDUuNSA3NzcuODMzWiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNGRkE2MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIzMDkuOTkgNzY3KSI+TWF0ZXJpYWwgRGVtYW5kIDE8L3RleHQ+PHBhdGggZD0iTTI1ODAuNSA3MzRDMjU4MC41IDcyOC4yMDEgMjU4NS4yIDcyMy41IDI1OTEgNzIzLjVMMjgzNCA3MjMuNUMyODM5LjggNzIzLjUgMjg0NC41IDcyOC4yMDEgMjg0NC41IDczNEwyODQ0LjUgNzc2QzI4NDQuNSA3ODEuNzk5IDI4MzkuOCA3ODYuNSAyODM0IDc4Ni41TDI1OTEgNzg2LjVDMjU4NS4yIDc4Ni41IDI1ODAuNSA3ODEuNzk5IDI1ODAuNSA3NzZaIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbD0iI0ZGQTYwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHRleHQgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjU4NS41MSA3NjUpIj5NYXRlcmlhbCBEZW1hbmQgMjwvdGV4dD48cGF0aCBkPSJNMzE3Ny41IDY1N0MzMTc3LjUgNjUxLjIwMSAzMTgyLjIgNjQ2LjUgMzE4OCA2NDYuNUwzNzA2IDY0Ni41QzM3MTEuOCA2NDYuNSAzNzE2LjUgNjUxLjIwMSAzNzE2LjUgNjU3TDM3MTYuNSA2OTlDMzcxNi41IDcwNC43OTkgMzcxMS44IDcwOS41IDM3MDYgNzA5LjVMMzE4OCA3MDkuNUMzMTgyLjIgNzA5LjUgMzE3Ny41IDcwNC43OTkgMzE3Ny41IDY5OVoiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBmaWxsPSIjQjNDQjJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48dGV4dCBmb250LWZhbWlseT0iQ2FsaWJyaSxDYWxpYnJpX01TRm9udFNlcnZpY2Usc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zaXplPSIyOCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMzM0LjI2IDY4OCkiPkNhcGFjaXR5IEdyb3VwIDI8L3RleHQ+PHBhdGggZD0iTTMxNzcuNSA3MzUuMTY3QzMxNzcuNSA3MjkuMjc2IDMxODIuMjggNzI0LjUgMzE4OC4xNyA3MjQuNUwzNDI5LjgzIDcyNC41QzM0MzUuNzIgNzI0LjUgMzQ0MC41IDcyOS4yNzYgMzQ0MC41IDczNS4xNjdMMzQ0MC41IDc3Ny44MzNDMzQ0MC41IDc4My43MjQgMzQzNS43MiA3ODguNSAzNDI5LjgzIDc4OC41TDMxODguMTcgNzg4LjVDMzE4Mi4yOCA3ODguNSAzMTc3LjUgNzgzLjcyNCAzMTc3LjUgNzc3LjgzM1oiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBmaWxsPSIjRkZBNjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48dGV4dCBmb250LWZhbWlseT0iQ2FsaWJyaSxDYWxpYnJpX01TRm9udFNlcnZpY2Usc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zaXplPSIyOCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMTgyLjE4IDc2NykiPk1hdGVyaWFsIERlbWFuZCAzPC90ZXh0PjxwYXRoIGQ9Ik0zNDUyLjUgNzM0QzM0NTIuNSA3MjguMjAxIDM0NTcuMiA3MjMuNSAzNDYzIDcyMy41TDM3MDYgNzIzLjVDMzcxMS44IDcyMy41IDM3MTYuNSA3MjguMjAxIDM3MTYuNSA3MzRMMzcxNi41IDc3NkMzNzE2LjUgNzgxLjc5OSAzNzExLjggNzg2LjUgMzcwNiA3ODYuNUwzNDYzIDc4Ni41QzM0NTcuMiA3ODYuNSAzNDUyLjUgNzgxLjc5OSAzNDUyLjUgNzc2WiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuNDM3NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjgiIGZpbGw9IiNGRkE2MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM0NTcuNyA3NjUpIj5NYXRlcmlhbCBEZW1hbmQgNDwvdGV4dD48L2c+PC9zdmc+"},96066:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/business-process_nesting_example-recurrent-05276dd74bbd06d4c215edc9e2148d5a.svg"},23171:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg5OSIgaGVpZ2h0PSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgb3ZlcmZsb3c9ImhpZGRlbiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMzQgLTExNzIpIj48cmVjdCB4PSIyMTM1LjUiIHk9IjExNzQuNSIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSI2My45OTk5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbD0iI0ZGQTYwMCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIxNzEuMzggMTIxNikiPkRlbWFuZCBkYXRhIChkaXJlY3RseSBsaW5rZWQpPC90ZXh0PjxyZWN0IHg9IjI2MTQuNSIgeT0iMTE3My41IiB3aWR0aD0iNDU5IiBoZWlnaHQ9IjYzLjk5OTkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzLjQzNzUiIHN0cm9rZS1taXRlcmxpbWl0PSI4IiBzdHJva2UtZGFzaGFycmF5PSIxMy43NSAxMC4zMTI1IiBmaWxsPSIjQkY3MTAwIi8+PHRleHQgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkNhbGlicmksQ2FsaWJyaV9NU0ZvbnRTZXJ2aWNlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZvbnQtc2l6ZT0iMjgiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjYzOC4xOSAxMjE2KSI+RGVtYW5kIGRhdGEgKGluZGlyZWN0bHkgbGlua2VkKTwvdGV4dD48cmVjdCB4PSIzMDkzLjUiIHk9IjExNzQuNSIgd2lkdGg9IjQ1OSIgaGVpZ2h0PSI2My45OTk5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgZmlsbD0iI0IzQ0IyRCIvPjx0ZXh0IGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDMyMzMuOSAxMjE2KSI+Q2FwYWNpdHkgZGF0YTwvdGV4dD48cmVjdCB4PSIzNTcxLjUiIHk9IjExNzMuNSIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSI2My45OTk5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMy40Mzc1IiBzdHJva2UtbWl0ZXJsaW1pdD0iOCIgc3Ryb2tlLWRhc2hhcnJheT0iMTMuNzUgMTAuMzEyNSIgZmlsbD0iIzYxNzAwMCIvPjx0ZXh0IGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJDYWxpYnJpLENhbGlicmlfTVNGb250U2VydmljZSxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBmb250LXNpemU9IjI4IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM1OTMuODYgMTIxNikiPkNhcGFjaXR5IGRhdGEgKGxpbmtlZCBvciBuZXN0ZWQpPC90ZXh0PjwvZz48L3N2Zz4="},97345:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/demand-and-capacity-management-kit-logo.drawio-71105a676aac0732834a88c1a6c9af15.svg"}}]);