"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),S=a,h=p["".concat(d,".").concat(S)]||p[S]||c[S]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=S;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},67555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={description:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",title:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},i="NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage",title:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",description:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage",permalink:"/docusaurus_wiki/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",title:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"For Seeed nRF52 mbed-enabled Boards Boards",permalink:"/docusaurus_wiki/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth_Usage_on_SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-Bluetooth-Usage"},next:{title:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",permalink:"/docusaurus_wiki/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-IMU-Usage"}},d={},l=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Hardware required",id:"hardware-required",level:2},{value:"Software required",id:"software-required",level:2},{value:"Hardware connection",id:"hardware-connection",level:2},{value:"Send text string with NFC",id:"send-text-string-with-nfc",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nfc-usage-on-seeed-studio-xiao-nrf52840-sense"},"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)"),(0,a.kt)("p",null,"Both the ",(0,a.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," and ",(0,a.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense")," are equipped with an ",(0,a.kt)("strong",{parentName:"p"},"NFC (Near Field Communication) module"),". This wiki will help you get started with using NFC on these boards. Here we will demonstrate a basic example where we send a text string from the board to the phone after placing the phone on the NFC antenna."),(0,a.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'The NFC function will perform well when we use the "Seeed nRF52 Boards Library".')),(0,a.kt)("p",null,"For the board libraries installation, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial")," to finish installation. If you have already installed, we can move on and process the project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png"})),(0,a.kt)("h2",{id:"hardware-required"},"Hardware required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 x ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},"Seeed Studio XIAO nRF52840")," or ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840 Sense")),(0,a.kt)("li",{parentName:"ul"},"1 x NFC antenna"),(0,a.kt)("li",{parentName:"ul"},"1 x USB Type-C cable"),(0,a.kt)("li",{parentName:"ul"},"1 x Smartphone")),(0,a.kt)("h2",{id:"software-required"},"Software required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US"},"NFC TagInfo App (Android)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596"},"NFC TagInfo App (Apple)"))),(0,a.kt)("h2",{id:"hardware-connection"},"Hardware connection"),(0,a.kt)("p",null,"Solder the NFC antenna to the Seeed Studio XIAO nRF52840 (Sense) as follows:"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png",alt:"pir",width:550,height:"auto"})),(0,a.kt)("h2",{id:"send-text-string-with-nfc"},"Send text string with NFC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Open Arduino IDE and upload the following codes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <NFC.h>\n\nvoid setup() { \n  // set the NFC message as first parameter and the language code as second\n  NFC.setTXTmessage("Hello World!", "en");\n  // start the NFC module\n  NFC.start();\n}\n\nvoid loop() {\n\n}\n')),(0,a.kt)("p",null,'Here we simply send the text string "Hello World!" '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2."),' Open "NFC TagInfo" mobile app and click ',(0,a.kt)("strong",{parentName:"li"},"Scan & Launch"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg",alt:"pir",width:300,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Place the NFC antenna close to the phone and you will see the following output")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png",alt:"pir",width:850,height:"auto"})))}p.isMDXComponent=!0}}]);