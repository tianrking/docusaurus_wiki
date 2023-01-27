"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={description:"Tapping",title:"Tapping",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Wio Terminal Sensing Tapping Motion Demo",l={unversionedId:"Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Tapping",id:"Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Tapping",title:"Tapping",description:"Tapping",source:"@site/docs/Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Tapping.md",sourceDirName:"Sensor/Wio_Terminal/IMU",slug:"/Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Tapping",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Tapping",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Tapping.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",frontMatter:{description:"Tapping",title:"Tapping",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Getting Started",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/IMU/Wio-Terminal-IMU-Basic"},next:{title:"Overview",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Configurable_Buttons/Wio-Terminal-Buttons"}},p={},s=[{value:"3-Axis Accelerator Initialization",id:"3-axis-accelerator-initialization",level:2},{value:"Tapping Sensitivity Configurations",id:"tapping-sensitivity-configurations",level:2},{value:"Single click or Double click",id:"single-click-or-double-click",level:2},{value:"Complete Code",id:"complete-code",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wio-terminal-sensing-tapping-motion-demo"},"Wio Terminal Sensing Tapping Motion Demo"),(0,r.kt)("p",null,"This repo demonstrates how Wio Terminal used the built-in acclerator to sense the Single-click tapping or Double-click tapping motion!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"})),(0,r.kt)("h2",{id:"3-axis-accelerator-initialization"},"3-Axis Accelerator Initialization"),(0,r.kt)("p",null,"To initialize the accelerator on Wio Terminal, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-IMU-Basic/"},"Getting Started with IMU")," for more information."),(0,r.kt)("h2",{id:"tapping-sensitivity-configurations"},"Tapping Sensitivity Configurations"),(0,r.kt)("p",null,"For sensitivity of tapping, adjust the value for THRESHOLD according to scale range of IMU:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scale Range"),(0,r.kt)("th",{parentName:"tr",align:null},"2g"),(0,r.kt)("th",{parentName:"tr",align:null},"4g"),(0,r.kt)("th",{parentName:"tr",align:null},"8g"),(0,r.kt)("th",{parentName:"tr",align:null},"16g"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"THRESHOLD"),(0,r.kt)("td",{parentName:"tr",align:null},"40-80"),(0,r.kt)("td",{parentName:"tr",align:null},"20-40"),(0,r.kt)("td",{parentName:"tr",align:null},"10-20"),(0,r.kt)("td",{parentName:"tr",align:null},"5-10")))),(0,r.kt)("h2",{id:"single-click-or-double-click"},"Single click or Double click"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"click")," function, simply call it as follow, where first parameter is used to determine sensing single clicking or double clicking(1 or 2), and second parameter is for threshold value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    ...\n    lis.click(1,THRESHOLD);\n    //Interrupt signal to trigger when a tap is detected!\n    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GYROSCOPE_INT1")," is the Acclerometer Interrupt Pin 1."),(0,r.kt)("h2",{id:"complete-code"},"Complete Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\n//Adjust this threshold value for sensitivity of clicking\n#define THRESHOLD 40\nuint8_t cnt=0;\n\nvoid count() {\n    cnt++;\n    Serial.print("Tap Count: ");\n    Serial.println(cnt);\n}\n\nvoid setup() {\n    Serial.begin(115200);\n    lis.begin(Wire1);\n\n    if (!lis) {\n        Serial.println("ERROR");\n        while(1);\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n\n    //1 for single click, 2 for double click\n    //smaller the threshold value, the more sensitive\n    lis.click(1, THRESHOLD);\n    //Interrupt signal to trigger when a tap is detected!\n    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);\n}\n\nvoid loop() {\n}\n')))}u.isMDXComponent=!0}}]);