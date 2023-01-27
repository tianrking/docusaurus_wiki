"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(w,s(s({ref:t},c),{},{components:n})):a.createElement(w,s({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Sensecap LoRaWAN User Guide",title:"Sensecap LoRaWAN User Guide",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},s=void 0,i={unversionedId:"Network/SenseCAP/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",id:"Network/SenseCAP/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",title:"Sensecap LoRaWAN User Guide",description:"Sensecap LoRaWAN User Guide",source:"@site/docs/Network/SenseCAP/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide.md",sourceDirName:"Network/SenseCAP",slug:"/Network/SenseCAP/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",permalink:"/docusaurus_wiki/zh-CN/Network/SenseCAP/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Network/SenseCAP/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Sensecap LoRaWAN User Guide",title:"Sensecap LoRaWAN User Guide",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}}},l={},p=[{value:"1.Product Introduction",id:"1product-introduction",level:2},{value:"2.Quick Start",id:"2quick-start",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1product-introduction"},"1.Product Introduction"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg",alt:null})),(0,r.kt)("p",null,"SenseCAP is an industrial wireless sensor network that integrates easy-to-deploy hardware and data API services, enabling low-power, long-distance environmental data collection. SenseCAP includes several versions, such as LoRaWAN, NB-IoT, etc.  "),(0,r.kt)("p",null,"SenseCAP LoRaWAN version products include LoRaWAN Gateways and Sensor Nodes. Based on the LoRaWAN protocol, it can realize one-to-many, long-distance networking and bilateral communication. The LoRaWAN Gateway supports Ethernet and 4G. The Sensor Node is powered by a high-capacity battery that lasts up to 3 years (if uploading data once every hour). It also supports hot-swap, making it easy for maintenance and upgrading.  "),(0,r.kt)("p",null,"SenseCAP provides an easy-to-use cloud platform. Users can scan the QR code with the SenseCAP App to bind the device with its respective account to manage the devices, and check Sensor Node data on the SenseCAP Portal. SenseCAP Portal provides API for users to further develop based on the data on the Portal."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-c-1339.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Main Features")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gateway: High-performance Cortex A8 1GHz processor"),(0,r.kt)("li",{parentName:"ul"},"Sensors support LoRaWAN protocol, ultra-low-power consumption, battery lasts for 3 years (if upload data once every hour)"),(0,r.kt)("li",{parentName:"ul"},"Gateway uses multiple methods to connect to the network: 4G and Ethernet to support different scenarios"),(0,r.kt)("li",{parentName:"ul"},"Super long-distance communication: 10km in line-of-sight scenario, 2km in urban scenario"),(0,r.kt)("li",{parentName:"ul"},"Easy-to-use cloud platform and API"),(0,r.kt)("li",{parentName:"ul"},"Industrial protection rating IP66-rated enclosure, suitable for outdoor environment at -40\u2103~70\u2103"),(0,r.kt)("li",{parentName:"ul"},"Easy-to-deploy, enabling people without engineering background to install the devices quickly"),(0,r.kt)("li",{parentName:"ul"},"Modular design for the Sensor Nodes, including a Sensor Node Controller and a Sensor Probe, with a specially-designed bracket for easy installation on poles or walls.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LoRaWAN Gateway:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png",alt:null})),(0,r.kt)("p",null,"At the bottom of the gateway are Ethernet port and power connector, all of which meet the waterproof requirements. LED indicator light indicates the networking status. The top of the gateway is the connector for installing 4G/LoRa antenna, and the other connectors are reserved."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LoRaWAN Sensor Node:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png",alt:null})),(0,r.kt)("p",null,"Snap to open the device and you will see two parts. The Sensor Node Controller\u2019s circuit shows a power switch, a RESET button, and an indicator LED as well as a mode button and serial ports, which will be used for firmware upgrading. The two parts connect and communicate via two spring connectors."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png",alt:null})),(0,r.kt)("p",null,"Each Sensor Node comes with a bracket for easy installation on a pole or wall."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SenseCAP Portal\uff1a")),(0,r.kt)("p",null,"SenseCAP Portal provides multiple services, including web-based management portal and API for calling data. Users can further develop system integration with the API, without worrying about embedded hardware technologies, hence shorten the development cycle."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png",alt:null})),(0,r.kt)("h2",{id:"2quick-start"},"2.Quick Start"),(0,r.kt)("p",null,"For thi quick start guide, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx"},"SenseCAP Product User Guide(LoRaWAN Series)-V1.1")))}d.isMDXComponent=!0}}]);