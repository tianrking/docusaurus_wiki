"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73163],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var i=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),p=function(e){var r=i.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return i.createElement(d.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},c=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=a,v=m["".concat(d,".").concat(c)]||m[c]||u[c]||n;return t?i.createElement(v,o(o({ref:r},s),{},{components:t})):i.createElement(v,o({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=c;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},72821:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const n={description:"Overview",title:"Overview",keywords:["Wio_terminal File_System"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Overview",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview",id:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card",slug:"/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal File_System"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Tapping",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Tapping"},next:{title:"Read and Write",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-ReadWrite"}},d={},p=[{value:"Installing the File System Library",id:"installing-the-file-system-library",level:2},{value:"Installing the Dependent SFUD Libraries",id:"installing-the-dependent-sfud-libraries",level:3},{value:"MicroSD Card Format",id:"microsd-card-format",level:2}],s={toc:p};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This repo introduce how to install the File System library used on Wio Terminal. It provides basic functionality of File operating with the SD card, allowing to Read/Write in or from the SD card using SPI interface."),(0,a.kt)("h2",{id:"installing-the-file-system-library"},"Installing the File System Library"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master"},"Seeed_Arduino_FS")," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_FS")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("h3",{id:"installing-the-dependent-sfud-libraries"},"Installing the Dependent SFUD Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SFUD"},"Seeed_Arduino_SFUD")," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the SFUD library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_SFUD")," file that you've have just downloaded."))),(0,a.kt)("h2",{id:"microsd-card-format"},"MicroSD Card Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Maximum MicroSD Card Capacity: ",(0,a.kt)("inlineCode",{parentName:"strong"},"16GB")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MicroSD Card Format Supported:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"FAT12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"FAT16")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"FAT32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"exFAT"))))))}m.isMDXComponent=!0}}]);