"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={description:"Overview",title:"Overview",keywords:["Wio_terminal Light_Sensor"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Getting Started with Light Sensor",s={unversionedId:"Sensor/Wio_Terminal/Light_Sensor/Wio-Terminal-Light",id:"Sensor/Wio_Terminal/Light_Sensor/Wio-Terminal-Light",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Light_Sensor/Wio-Terminal-Light.md",sourceDirName:"Sensor/Wio_Terminal/Light_Sensor",slug:"/Sensor/Wio_Terminal/Light_Sensor/Wio-Terminal-Light",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Light_Sensor/Wio-Terminal-Light",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Light_Sensor/Wio-Terminal-Light.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Light_Sensor"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/five_Way_Switch/Wio-Terminal-Switch"},next:{title:"Overview",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Infrared_Emitter/Wio-Terminal-Infrared-Emitter"}},l={},p=[{value:"Example Code",id:"example-code",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-light-sensor"},"Getting Started with Light Sensor"),(0,i.kt)("p",null,"This repo demonstrates how to use the built-in light sensor as a component in Wio Terminal. The light sensor uses Analog interface and you can simply read the surrounding Light sensor values via reading its pin."),(0,i.kt)("h2",{id:"example-code"},"Example Code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WIO_LIGHT"))," is the pin for builtin Light Sensor. The Light sensor is connected to ",(0,i.kt)("strong",{parentName:"p"},"A13"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n  pinMode(WIO_LIGHT, INPUT);\n  Serial.begin(115200);\n\n}\n\nvoid loop() {\n   int light = analogRead(WIO_LIGHT);\n   Serial.print("Light value: ");\n   Serial.println(light);\n   delay(200);\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The light sensor is at the back of the Wio Terminal, just above the microSD card slot."))}u.isMDXComponent=!0}}]);