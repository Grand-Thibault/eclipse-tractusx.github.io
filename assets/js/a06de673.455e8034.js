"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[47844],{19206:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>v});var a=s(87462),i=(s(67294),s(3905)),n=s(26389),r=s(94891),l=s(75190),o=s(47507),d=(s(24310),s(63303)),c=(s(75035),s(85162));const p={id:"get-asset-by-id",title:"Gets an asset with the given ID",description:"Gets an asset with the given ID",sidebar_label:"Gets an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],operationId:"getAssetById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}},{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],responses:{200:{description:"The asset",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request was malformed, e.g. id was null"},404:{description:"An asset with the given ID does not exist"}},description:"Gets an asset with the given ID",method:"get",path:"/v2/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets an asset with the given ID",description:{type:"text/plain"},url:{path:["v2","assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-asset-by-id",id:"version-24.12/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id",title:"Gets an asset with the given ID",description:"Gets an asset with the given ID",source:"@site/docs-kits_versioned_docs/version-24.12/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id",draft:!1,editUrl:null,tags:[],version:"24.12",frontMatter:{id:"get-asset-by-id",title:"Gets an asset with the given ID",description:"Gets an asset with the given ID",sidebar_label:"Gets an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],operationId:"getAssetById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}},{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],responses:{200:{description:"The asset",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request was malformed, e.g. id was null"},404:{description:"An asset with the given ID does not exist"}},description:"Gets an asset with the given ID",method:"get",path:"/v2/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Gets an asset with the given ID",description:{type:"text/plain"},url:{path:["v2","assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets an asset with the given ID",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id-1"},next:{title:"Get all assets according to a particular query",permalink:"/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-assets-1"}},h={},v=[{value:"Gets an asset with the given ID",id:"gets-an-asset-with-the-given-id",level:2}],k={toc:v};function g(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gets-an-asset-with-the-given-id"},"Gets an asset with the given ID"),(0,i.kt)("p",null,"Gets an asset with the given ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The asset")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request was malformed, e.g. id was null")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An asset with the given ID does not exist")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);