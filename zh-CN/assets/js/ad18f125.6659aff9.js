"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?o.createElement(h,n(n({ref:t},d),{},{components:r})):o.createElement(h,n({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,n[1]=l;for(var s=2;s<a;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),i=(r(67294),r(3905));const a={description:"Xadow - GSM Breakout",title:"Xadow - GSM Breakout",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_GSM_Breakout",id:"Seeed_Elderly/Xadow/Xadow_GSM_Breakout",title:"Xadow - GSM Breakout",description:"Xadow - GSM Breakout",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_GSM_Breakout.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Seeed_Elderly/Xadow/Xadow_GSM_Breakout",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_GSM_Breakout",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Seeed_Elderly/Xadow/Xadow_GSM_Breakout.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - GSM Breakout",title:"Xadow - GSM Breakout",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Duino",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_Duino"},next:{title:"Xadow - Metal Frame",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_Metal_Frame"}},u={},s=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Pin Definitions",id:"pin-definitions",level:2},{value:"Notice",id:"notice",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/Xadow_GSM_Breakout.JPG",alt:null}),"\nThe Xadow GSM Breakout draws out 30 pins from the 35 pin Xadow connector to five rows of 0.1 spaced holes with 0.1 spacing between adjacent rows. If you solder wires or through-hole pin headers directly to the breakout pads, you can easily access:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Up to 16 General Purpose Inputs/outputs (GPIOs)"),(0,i.kt)("li",{parentName:"ul"},"Interfaces like SPI, I2C, UART, etc."),(0,i.kt)("li",{parentName:"ul"},"Pinout related to peripheral devices like speaker, audio headphone and microphones")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png",alt:null}))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/Xadow_GSM_Breakout_Overview.png",alt:null})),(0,i.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/Xadow_GSM_Breakout_Usage.png",alt:null})),(0,i.kt)("h2",{id:"pin-definitions"},"Pin Definitions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/GSM_Breakout_for_Arduino_IDE.png",alt:null}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/GSM_Breakout_for_Eclipse_IDE.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'If your project is built with Arduino IDE, please refer to the "Pin Definitions for Arduino IDE".'),(0,i.kt)("li",{parentName:"ul"},'If your project is built with Eclipse IDE, please refer to the "Pin Definitions for Eclipse IDE".')),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some pinout might be occupied if the corresponding module is operative in the system. Please check the availability of the pinout of the Xadow GSM Breakout before using it."),(0,i.kt)("li",{parentName:"ul"},"And also, do make sure you know exactly about the voltage level at each pinout (2.8V or 1.8V), irreversible damages might occur if you mismatch it with a system working at a higher voltage level.")),(0,i.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/300px-RePhone_Community-2.png",alt:null})),(0,i.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the ",(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"."),(0,i.kt)("p",null,"Now join us in the ",(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/res/Xadow_GSM_Breakout.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The schematic diagram of Xadow GSM Breakout is provided in the following link:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/res/Xadow_GSM_Breakout.rar"},"Xadow_GSM+BLE eagle files"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);