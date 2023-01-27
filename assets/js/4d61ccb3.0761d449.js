"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87131],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Bluetooth Overview",l={unversionedId:"Sensor/Wio_Terminal/Bluetooth/Wio-Terminal-Bluetooth-Overview",id:"Sensor/Wio_Terminal/Bluetooth/Wio-Terminal-Bluetooth-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Bluetooth/Wio-Terminal-Bluetooth-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Bluetooth",slug:"/Sensor/Wio_Terminal/Bluetooth/Wio-Terminal-Bluetooth-Overview",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Bluetooth/Wio-Terminal-Bluetooth-Overview",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Bluetooth/Wio-Terminal-Bluetooth-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Use Blynk wireless OTA functionality to Wio Terminal",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Network/Blynk-wireless-OTA-functionality-to-Wio-Terminal"},next:{title:"Client and Server introduction",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Bluetooth/Wio-terminal-BLE-introduction"}},s={},p=[{value:"Update the Wireless Core Firmware",id:"update-the-wireless-core-firmware",level:2},{value:"Update Seeed SAMD ArduinoCore",id:"update-seeed-samd-arduinocore",level:2},{value:"Libraries Installation",id:"libraries-installation",level:2},{value:"How to Install a Library from Arduino Library Manager",id:"how-to-install-a-library-from-arduino-library-manager",level:3},{value:"Needed Libraries for Bluetooth",id:"needed-libraries-for-bluetooth",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bluetooth-overview"},"Bluetooth Overview"),(0,n.kt)("p",null,"This wiki introduces how to update the latest firmware for the Wireless Core Realtek RTL8720 on the Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable Bluetooth connectivity."),(0,n.kt)("h2",{id:"update-the-wireless-core-firmware"},"Update the Wireless Core Firmware"),(0,n.kt)("p",null,"Please follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware"},"this guide")," to update the wireless core firmware on the Wio Terminal."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    This firmware allows Wi-Fi and Bluetooth to work at the same time!\n"))),(0,n.kt)("h2",{id:"update-seeed-samd-arduinocore"},"Update Seeed SAMD ArduinoCore"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please update the ",(0,n.kt)("strong",{parentName:"p"},"Seeed SAMD ArduinoCore to the latest version (1.8.1)"),"!")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"STEP 1:")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Arduino IDE"),", and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Board")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Boards Manager"),", and search ",(0,n.kt)("strong",{parentName:"p"},"Wio Terminal")," in the search box")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"STEP 2:")," Make sure the latest version (1.8.1) is installed. If not, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Select version")," drop-down menu, select the latest version and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Install")))),(0,n.kt)("p",{style:{textalign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png",alt:"pir",width:850,height:"auto"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also find the source code of Seeed SAMD ArduinoCore ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduinoCore-samd"},(0,n.kt)("strong",{parentName:"a"},"here")),".")),(0,n.kt)("h2",{id:"libraries-installation"},"Libraries Installation"),(0,n.kt)("p",null,"There are a few Arduino Libraries that are needed for Bluetooth connectivity. We have included all the wireless-related libraries for the Wio Terminal in the ",(0,n.kt)("strong",{parentName:"p"},"Arduino Library Manager"),". So you simply have to open Arduino Library Manager within Arduino IDE and search for the libraries that you need and easily install them!"),(0,n.kt)("h3",{id:"how-to-install-a-library-from-arduino-library-manager"},"How to Install a Library from Arduino Library Manager"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"STEP 1:")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Arduino IDE"),", and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Manage Libraries..."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"STEP 2:")," Type the ",(0,n.kt)("strong",{parentName:"p"},"name of the library")," that we need and select the ",(0,n.kt)("strong",{parentName:"p"},"latest version")," from the drop-down menu (if available)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"STEP 3:")," Click ",(0,n.kt)("strong",{parentName:"p"},"Install")))),(0,n.kt)("p",{style:{textalign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg",alt:"pir",width:870,height:"auto"})),(0,n.kt)("h3",{id:"needed-libraries-for-bluetooth"},"Needed Libraries for Bluetooth"),(0,n.kt)("p",null,"We need the following libraries to get started with Bluetooth on the Wio Terminal. You can search for these libraries by typing the library name in the search box of Arduino Library Manager."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE"},(0,n.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcBLE"))," - search for ",(0,n.kt)("inlineCode",{parentName:"p"},'"seeed rpcble"'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified"},(0,n.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcUnified"))," - search for ",(0,n.kt)("inlineCode",{parentName:"p"},'"seeed rpcunified"')))))}u.isMDXComponent=!0}}]);