"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"SPI",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-SPI/",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Using SPI on Wio Terminal",p={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-SPI",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-SPI",title:"SPI",description:"This Repo will demonstrate how to use SPI on Wio Terminal. You can use this to control other devices!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-SPI.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-SPI",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-SPI",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-SPI.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"SPI",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-SPI/",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"I2C",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C"},next:{title:"Grove Port",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-Grove"}},u={},l=[{value:"Port Configurations",id:"port-configurations",level:2},{value:"Software Configurations",id:"software-configurations",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:l};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-spi-on-wio-terminal"},"Using SPI on Wio Terminal"),(0,i.kt)("p",null,"This Repo will demonstrate how to use SPI on Wio Terminal. You can use this to control other devices!"),(0,i.kt)("h2",{id:"port-configurations"},"Port Configurations"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg"})),(0,i.kt)("p",null,"As you can see, the physical SPI Pins are as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MOSI")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"GPIO 19"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MISO")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"GPIO 21"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SCK")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"GPIO 23"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SS")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"GPIO 24")))),(0,i.kt)("h2",{id:"software-configurations"},"Software Configurations"),(0,i.kt)("p",null,"In Arduino, all SPI pins are pre-defined and you can access the pins as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MOSI")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"PIN_SPI_MOSI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MISO")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"PIN_SPI_MISO"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SCK")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"PIN_SPI_SCK"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SS")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"PIN_SPI_SS")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);