"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[90462],{3905:(n,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>y});var t=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function c(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var u=t.createContext({}),s=function(n){var e=t.useContext(u),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},o=function(n){var e=s(n.components);return t.createElement(u.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,r=n.originalType,u=n.parentName,o=c(n,["components","mdxType","originalType","parentName"]),p=s(a),f=i,y=p["".concat(u,".").concat(f)]||p[f]||m[f]||r;return a?t.createElement(y,l(l({ref:e},o),{},{components:a})):t.createElement(y,l({ref:e},o))}));function y(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=a.length,l=new Array(r);l[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c[p]="string"==typeof n?n:i,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},44917:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var t=a(87462),i=(a(67294),a(3905));const r={id:"API Description Manufacturing as a Service Kit",title:"API Description",description:"Manufacturing as a Service Kit",sidebar_position:4},l=void 0,c={unversionedId:"kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/API Description Manufacturing as a Service Kit",id:"version-24.12/kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/API Description Manufacturing as a Service Kit",title:"API Description",description:"Manufacturing as a Service Kit",source:"@site/docs-kits_versioned_docs/version-24.12/kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/page_software-development-view.md",sourceDirName:"kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability",slug:"/kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/API Description Manufacturing as a Service Kit",permalink:"/docs-kits/kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/API Description Manufacturing as a Service Kit",draft:!1,tags:[],version:"24.12",sidebarPosition:4,frontMatter:{id:"API Description Manufacturing as a Service Kit",title:"API Description",description:"Manufacturing as a Service Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/manufacturing-capability-aspect-model"},next:{title:"getManufacturingCapability",permalink:"/docs-kits/kits/Manufacturing as a Service Kit/Software Development View/Manufacturing Capability/get-manufacturing-capability"}},u={},s=[{value:"Sample Data",id:"sample-data",level:2}],o={toc:s};function p(n){let{components:e,...r}=n;return(0,i.kt)("wrapper",(0,t.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MaaS scenarios focus on connecting buyers and manufacturers. Buyers have a demand for products, which are produced by manufacturers with the required production capabilities. The Manufacturing Capability API defines how to share the manufacturing capabilities, e.g. to onboard them to a Manufacturing Network Registry. Manufacturing Network Platforms and MaaS Manufacturer Application can use the Manufacturing Capability API to onboard their manufacturing capabilities in the Manufacturing Network Registry (see figure)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reference Architecture Manufacturing Capability",src:a(70240).Z,width:"1244",height:"748"})),(0,i.kt)("p",null,"The Manufacturing Capability API description below shows how the Manufacturing Capability Aspect Model could be used. The aspect model is designed to represent manufacturing capabilities based on the concepts of products, processes, resources and capabilities and their relations to each other."),(0,i.kt)("p",null,"Depending on the use case different request paths can be implemented, based on the specific MaaS implementations. Below are two sample request options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET: /{api-endpoint}/ManufacturingCapability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: The API endpoint to get manufacturing capabilities of a manufacturer."))),(0,i.kt)("li",{parentName:"ul"},"POST: /{api-endpoint}/ManufacturingCapability",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: The API endpoint to register manufacturing capabilities of a manufacturer.")))),(0,i.kt)("h2",{id:"sample-data"},"Sample Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "machineTools": [\n    {\n      "canProcessMaterials": [\n        {\n          "belongsToMaterialFamilies": [\n            {\n              "specializes": [\n                {\n                  "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                }\n              ],\n              "label": {\n                "und": "aluminum"\n              },\n              "generalizes": [\n                {\n                  "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                }\n              ],\n              "hierarchyElementId": "urn:manufacturing-capability:material-family:4",\n              "properties": [\n                {\n                  "semanticReferences": [\n                    {\n                      "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                    }\n                  ],\n                  "propertyLabel": {\n                    "und": "nominal voltage"\n                  },\n                  "propertyValue": "220"\n                }\n              ]\n            }\n          ],\n          "properties": [\n            {\n              "semanticReferences": [\n                {\n                  "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                }\n              ],\n              "propertyLabel": {\n                "und": "nominal voltage"\n              },\n              "propertyValue": "220"\n            }\n          ],\n          "label": {\n            "und": "aluminum"\n          }\n        }\n      ]\n    }\n  ],\n  "processes": [\n    {\n      "billOfProcessIdentification": "www.1234-bar-chair-billOfProcess.de"\n    }\n  ],\n  "machines": [\n    {\n      "containsTools": [\n        {\n          "canProcessMaterials": [\n            {\n              "belongsToMaterialFamilies": [\n                {\n                  "specializes": [\n                    {\n                      "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                    }\n                  ],\n                  "label": {\n                    "und": "aluminum"\n                  },\n                  "generalizes": [\n                    {\n                      "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                    }\n                  ],\n                  "hierarchyElementId": "urn:manufacturing-capability:material-family:4",\n                  "properties": [\n                    {\n                      "semanticReferences": [\n                        {\n                          "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                        }\n                      ],\n                      "propertyLabel": {\n                        "und": "nominal voltage"\n                      },\n                      "propertyValue": "220"\n                    }\n                  ]\n                }\n              ],\n              "properties": [\n                {\n                  "semanticReferences": [\n                    {\n                      "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                    }\n                  ],\n                  "propertyLabel": {\n                    "und": "nominal voltage"\n                  },\n                  "propertyValue": "220"\n                }\n              ],\n              "label": {\n                "und": "aluminum"\n              }\n            }\n          ]\n        }\n      ],\n      "label": {\n        "und": "aluminum"\n      },\n      "provides": [\n        {\n          "specializes": [\n            {\n              "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n            }\n          ],\n          "capabilityConstraintSet": [\n            {\n              "capabilityConstraintProperties": [\n                {\n                  "semanticReferences": [\n                    {\n                      "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                    }\n                  ],\n                  "propertyLabel": {\n                    "und": "nominal voltage"\n                  },\n                  "propertyValue": "220"\n                }\n              ],\n              "refersToMaterial": {\n                "belongsToMaterialFamilies": [\n                  {\n                    "specializes": [\n                      {\n                        "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                      }\n                    ],\n                    "label": {\n                      "und": "aluminum"\n                    },\n                    "generalizes": [\n                      {\n                        "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                      }\n                    ],\n                    "hierarchyElementId": "urn:manufacturing-capability:material-family:4",\n                    "properties": [\n                      {\n                        "semanticReferences": [\n                          {\n                            "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                          }\n                        ],\n                        "propertyLabel": {\n                          "und": "nominal voltage"\n                        },\n                        "propertyValue": "220"\n                      }\n                    ]\n                  }\n                ],\n                "label": {\n                  "und": "aluminum"\n                },\n                "properties": [\n                  {\n                    "semanticReferences": [\n                      {\n                        "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                      }\n                    ],\n                    "propertyLabel": {\n                      "und": "nominal voltage"\n                    },\n                    "propertyValue": "220"\n                  }\n                ],\n                "@type": "MaterialEntity"\n              }\n            }\n          ],\n          "capabilityId": "urn:manufacturing-capability:capability:42",\n          "capabilityLabel": {\n            "und": "sawing"\n          },\n          "label": {\n            "und": "aluminum"\n          },\n          "generalizes": [\n            {\n              "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n            }\n          ],\n          "semanticReferences": [\n            {\n              "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n            }\n          ],\n          "hierarchyElementId": "urn:manufacturing-capability:material-family:4",\n          "properties": [\n            {\n              "semanticReferences": [\n                {\n                  "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                }\n              ],\n              "propertyLabel": {\n                "und": "nominal voltage"\n              },\n              "propertyValue": "220"\n            }\n          ]\n        }\n      ],\n      "properties": [\n        {\n          "semanticReferences": [\n            {\n              "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n            }\n          ],\n          "propertyLabel": {\n            "und": "nominal voltage"\n          },\n          "propertyValue": "220"\n        }\n      ]\n    }\n  ],\n  "capabilities": [\n    {\n      "specializes": [\n        {\n          "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n        }\n      ],\n      "capabilityConstraintSet": [\n        {\n          "capabilityConstraintProperties": [\n            {\n              "semanticReferences": [\n                {\n                  "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                }\n              ],\n              "propertyLabel": {\n                "und": "nominal voltage"\n              },\n              "propertyValue": "220"\n            }\n          ],\n          "refersToMaterial": {\n            "belongsToMaterialFamilies": [\n              {\n                "specializes": [\n                  {\n                    "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                  }\n                ],\n                "label": {\n                  "und": "aluminum"\n                },\n                "generalizes": [\n                  {\n                    "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n                  }\n                ],\n                "hierarchyElementId": "urn:manufacturing-capability:material-family:4",\n                "properties": [\n                  {\n                    "semanticReferences": [\n                      {\n                        "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                      }\n                    ],\n                    "propertyLabel": {\n                      "und": "nominal voltage"\n                    },\n                    "propertyValue": "220"\n                  }\n                ]\n              }\n            ],\n            "label": {\n              "und": "aluminum"\n            },\n            "properties": [\n              {\n                "semanticReferences": [\n                  {\n                    "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n                  }\n                ],\n                "propertyLabel": {\n                  "und": "nominal voltage"\n                },\n                "propertyValue": "220"\n              }\n            ],\n            "@type": "MaterialEntity"\n          }\n        }\n      ],\n      "capabilityId": "urn:manufacturing-capability:capability:42",\n      "capabilityLabel": {\n        "und": "sawing"\n      },\n      "label": {\n        "und": "aluminum"\n      },\n      "generalizes": [\n        {\n          "hierarchyElementId": "urn:manufacturing-capability:material-family:4"\n        }\n      ],\n      "semanticReferences": [\n        {\n          "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n        }\n      ],\n      "hierarchyElementId": "urn:manufacturing-capability:material-family:4",\n      "properties": [\n        {\n          "semanticReferences": [\n            {\n              "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n            }\n          ],\n          "propertyLabel": {\n            "und": "nominal voltage"\n          },\n          "propertyValue": "220"\n        }\n      ]\n    }\n  ],\n  "certificates": [\n    {\n      "properties": [\n        {\n          "semanticReferences": [\n            {\n              "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n            }\n          ],\n          "propertyLabel": {\n            "und": "nominal voltage"\n          },\n          "propertyValue": "220"\n        }\n      ],\n      "label": {\n        "und": "aluminum"\n      }\n    }\n  ],\n  "products": [\n    {\n      "properties": [\n        {\n          "semanticReferences": [\n            {\n              "semanticReferenceId": "urn:eclass:0173-1#02-AAF583#002"\n            }\n          ],\n          "propertyLabel": {\n            "und": "nominal voltage"\n          },\n          "propertyValue": "220"\n        }\n      ],\n      "label": {\n        "und": "aluminum"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0},70240:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/RefArcMC-3fb37783e2564d31a3c04c7bf1ec777f.JPG"}}]);