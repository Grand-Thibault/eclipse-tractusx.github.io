"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_class_name:"hidden"},l=void 0,o={unversionedId:"kits/Industry Core Kit/part_bill-of-materials",id:"kits/Industry Core Kit/part_bill-of-materials",title:"part_bill-of-materials",description:"\x3c!---",source:"@site/docs-kits/kits/Industry Core Kit/part_bill-of-materials.mdx",sourceDirName:"kits/Industry Core Kit",slug:"/kits/Industry Core Kit/part_bill-of-materials",permalink:"/docs-kits/next/kits/Industry Core Kit/part_bill-of-materials",draft:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_uniqueidpush",permalink:"/docs-kits/next/kits/Industry Core Kit/Software Development View/part_uniqueidpush"},next:{title:"part_future-concepts",permalink:"/docs-kits/next/kits/Industry Core Kit/part_future-concepts"}},s={},p=[{value:"Bill of Material (BoM)",id:"bill-of-material-bom",level:2},{value:"BoM Representations",id:"bom-representations",level:3},{value:"Single-Level BOM",id:"single-level-bom",level:4},{value:"Multi-Level BOM",id:"multi-level-bom",level:4},{value:"Flattened BOM",id:"flattened-bom",level:4},{value:"BoM Lifecycle Stages",id:"bom-lifecycle-stages",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bill-of-material-bom"},"Bill of Material (BoM)"),(0,a.kt)("p",null,"A bill of material resembles the structure of an end product. It is a list of all raw materials, sub-assemblies and sub-components that are needed to manufacture the end product.\nAt Catena-X Industry Core we consider more than one single BoM. The BoM changes during the lifecyle and therefore, we are talking about different BoMs in different lifecycles."),(0,a.kt)("h3",{id:"bom-representations"},"BoM Representations"),(0,a.kt)("h4",{id:"single-level-bom"},"Single-Level BOM"),(0,a.kt)("p",null,"A single-level BOM represents one level of an assembly and does not include any lower-level subassemblies."),(0,a.kt)("h4",{id:"multi-level-bom"},"Multi-Level BOM"),(0,a.kt)("p",null,"A Multi-Level Bill of Materials (BOM) is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.bterrell.com/sage-accpac-erp/manufacturing/definition-multi-level-bom/definition-bom/"},"bill of materials (BOM)")," that lists the components, assemblies, and materials required to make a part. It provides a display of all components that are directly or indirectly used in a parent item. When an item is a subcomponent, blend, intermediate, etc., all of its components, including purchased parts and ",(0,a.kt)("a",{parentName:"p",href:"https://www.bterrell.com/sage-accpac-erp/manufacturing/definition-multi-level-bom/definition-bom/definition-raw-materials/"},"raw materials"),", are also exhibited. A multilevel structure can be illustrated by a tree with several levels. A multi-level BOM is created by connecting a series of individual single level BOMs together."),(0,a.kt)("h4",{id:"flattened-bom"},"Flattened BOM"),(0,a.kt)("p",null,"Flattening BOM means the intermediate levels in the BOM are removed and the lowest level is directly connected to the highest level."),(0,a.kt)("h3",{id:"bom-lifecycle-stages"},"BoM Lifecycle Stages"),(0,a.kt)("p",null,"BoM LifeCycleStage concept based on STEP AP242 with slight adoptions in layout & wording:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each instance can be identified by unique (within the organization) serial number (SN)."),(0,a.kt)("li",{parentName:"ul"},"The \u2018multi-SN\u2019 (multi Serial number) describes product defined with a generic part or item"),(0,a.kt)("li",{parentName:"ul"},"The \u2018one per SN\u2019 (one per Serial number) describes product defined with an individual part or item")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Identifier Step"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Implemented CX"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Identifier CX"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Creating time of BoM"),(0,a.kt)("th",{parentName:"tr",align:"center"},"BoM Auspr\xe4gungen"),(0,a.kt)("th",{parentName:"tr",align:"center"},"one/more fix suppliers"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"AsDesigned (AsDeveloped)")),(0,a.kt)("td",{parentName:"tr",align:"center"},"multi-SN"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Currently Not Implemented"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Part number* ",(0,a.kt)("br",null),"may not be the specific part number but a code that describes a part",(0,a.kt)("br",null),"(technische Produktbeschreibung)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM asDesigned is generated in the design phase of a new product including alternative parts."),(0,a.kt)("td",{parentName:"tr",align:"center"},"Build up the initial BoM in design phase of a new automotive product including alternative parts",(0,a.kt)("br",null),"Expected to have research & development part descriptions instead of specific part numbers"),(0,a.kt)("td",{parentName:"tr",align:"center"},"starting 2 years before SoP (for e.g. of a new vehicle project)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"150% incl. variants which will not be used later"),(0,a.kt)("td",{parentName:"tr",align:"center"},"partly known",(0,a.kt)("br",null),"can be open at this point of time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"AsPlanned")),(0,a.kt)("td",{parentName:"tr",align:"center"},"multi-SN"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"Implemented")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Part number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM AsPlanned is used to plan the manufacturing process including alternative parts."),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM AsPlanned is used to plan manufacturing including alternative parts.",(0,a.kt)("br",null),"Sourcing will most likely be based on this (besides key parts which start earlier)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"starting 1,5 years before building the first component"),(0,a.kt)("td",{parentName:"tr",align:"center"},"120% of all variants are covered, incl. possibly multiple suppliers for the same component"),(0,a.kt)("td",{parentName:"tr",align:"center"},"fixed suppliers, could be more than one supplier per part")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"AsBuilt")),(0,a.kt)("td",{parentName:"tr",align:"center"},"one per SN"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"Implemented")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial number / batch number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM AsBuilt describes a product as manufactured."),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM as a component is built or manufactured.",(0,a.kt)("br",null),"During manufactoring of for e.g. a vehicle the serial numbers & batch numbers are documented (German: Verbaudokumentation).",(0,a.kt)("br",null),"This leads to one BoM per built car"),(0,a.kt)("td",{parentName:"tr",align:"center"},"during building process or directly after finishing"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%"),(0,a.kt)("td",{parentName:"tr",align:"center"},"one specific supplier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"AsMaintained")),(0,a.kt)("td",{parentName:"tr",align:"center"},"one per SN"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Currently Not Implemented"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Serial number / batch number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM AsMaintained describes the product after purchasing by a customer and updates by maintenance."),(0,a.kt)("td",{parentName:"tr",align:"center"},"BoM after for e.g. a vehicle was picked up by the customer. Changes to live cycle before may apply due to maintenance or repair work e.g. exchange of parts, liquids, ..."),(0,a.kt)("td",{parentName:"tr",align:"center"},"Starts when customer has picked up the product, updating if any change is done"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100% inkl. replaced parts, incl. history of exchanged parts"),(0,a.kt)("td",{parentName:"tr",align:"center"},"one specific supplier")))),(0,a.kt)("p",null,"The lifecycle phases are mapped exclusively via the corresponding aspect models, which are based on the DataChainTemplate.\nThese are the aspect models starting with the prefixes 'SingleLevelBom' or 'SingleLevelUsage'."),(0,a.kt)("p",null,"While the aspect models with the prefix 'SingleLevelBoM' represents one sub-level of an assembly and does not include any lower-level subassemblies, the aspect models with the prefix 'SingleLevelUsage' contain the information in which parent part(s)/product(s) the given item is assembled in."),(0,a.kt)("p",null,"The following examples illustrate the corresponding logic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SingleLevelBoMAs",(0,a.kt)("strong",{parentName:"li"},"Planned")),(0,a.kt)("li",{parentName:"ul"},"SingleLevelUsageAs",(0,a.kt)("strong",{parentName:"li"},"Maintained")," (not yet implemented, but to illustrate the logic).")),(0,a.kt)("p",null,"All other aspect models, such as SerialPart, do not refer to a life cycle but exclusively to a specific type of digital twin, such as a type of digital twin, such as PartInstance or PartType."),(0,a.kt)("p",null,"Two of the considered BoMs are already implemented in the Industry Core and will be described as follows."))}d.isMDXComponent=!0}}]);