"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=s,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(h,n(n({ref:t},p),{},{components:r})):o.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,n=new Array(a);n[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,n[1]=i;for(var u=2;u<a;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),s=(r(67294),r(3905));const a={description:"Grove - Gas Sensor",title:"Grove - Gas Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"12/30/2022",author:"shuxu hu"}},n=void 0,i={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor",title:"Grove - Gas Sensor",description:"Grove - Gas Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672358400,formattedLastUpdatedAt:"2022\u5e7412\u670830\u65e5",frontMatter:{description:"Grove - Gas Sensor",title:"Grove - Gas Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"12/30/2022",author:"shuxu hu"}}},l={},u=[{value:"Specification",id:"specification",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/img/Twig-Gas_Sensor.bmp",alt:"pir",width:600,height:"auto"})),(0,s.kt)("p",null,"The Grove - Gas Sensor module is useful for gas leakage detecting(in home and industry). It can detect LPG, i-butane, methane, alcohol, Hydrogen, smoke and so on. Measurements can be taken as soon as possible based on its fast response time. Also the sensitivity can be adjusted by the potentiometer."),(0,s.kt)("p",null,"Each Grove - Gas Sensor Kit consists of one gas sensor base and four detectors. You can switch the detector on the base according to specific target gases."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#/Grove-Gas_Sensor-MQ2"},"Grove - Gas Sensor(MQ2)"),"\uff1aCombustible Gas, Smoke"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#/Grove-Gas_Sensor-MQ3"},"Grove - Gas Sensor(MQ3)"),"\uff1aAlcohol Vapor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#/Grove-Gas_Sensor-MQ5"},"Grove - Gas Sensor(MQ5)"),"\uff1aLPG, Natural Gas, Town Gas"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#/Grove-Gas_Sensor-MQ9"},"Grove - Gas Sensor(MQ9)"),"\uff1aCarbon Monoxide, Coal Gas, Liquefied Gas")),(0,s.kt)("h2",{id:"specification"},"Specification"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Working Voltage: 4.9-5.1V"),(0,s.kt)("li",{parentName:"ul"},"Heating consumption: 0.5-800mW"),(0,s.kt)("li",{parentName:"ul"},"Load resistance: can adjust"),(0,s.kt)("li",{parentName:"ul"},"Heater resistance: 33\u03a9"),(0,s.kt)("li",{parentName:"ul"},"Sensing Resistance: 3-30k\u03a9"),(0,s.kt)("li",{parentName:"ul"},"Working Temperature: -25~70 \u2103")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"Connect the module with Grove Shield using A0 like following picture and use the program below to gain the voltage. The higher the concentration of the gas is, the bigger the output voltage of the SIG pin gets. Sensitivity can be regulated by rotating the potentiometer. Please note that the best preheat time of the sensor is about 24 hours. For the detailed information about the sensor, please refer to the datasheet.s"),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/img/Read_Gas_Sensor_data.jpg",alt:"pir",width:600,height:"auto"})),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-2.pdf"},"MQ-2 Datasheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-3.pdf"},"MQ-3 Datasheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-5.pdf"},"MQ-5 Datasheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-9.pdf"},"MQ-9 Datasheet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Gas_Sensor"},"Demo code on github"))),(0,s.kt)("p",null," This Markdown file was created from ",(0,s.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor"},"https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor")," "),(0,s.kt)("h2",{id:"tech-support"},"Tech Support"),(0,s.kt)("p",null,"Please submit any technical issue into our ",(0,s.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,s.kt)("div",null,(0,s.kt)("br",null),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);