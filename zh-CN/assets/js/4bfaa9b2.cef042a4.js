"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={description:"Xadow - Basic Sensors",title:"Xadow - Basic Sensors",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Basic_Sensors",id:"Seeed_Elderly/Xadow/Xadow_Basic_Sensors",title:"Xadow - Basic Sensors",description:"Xadow - Basic Sensors",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Basic_Sensors.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Seeed_Elderly/Xadow/Xadow_Basic_Sensors",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_Basic_Sensors",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Seeed_Elderly/Xadow/Xadow_Basic_Sensors.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - Basic Sensors",title:"Xadow - Basic Sensors",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Barometer BMP180",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_Barometer_BMP180"},next:{title:"Xadow - Duino",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_Duino"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Use it with RePhone Kit Create",id:"use-it-with-rephone-kit-create",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.JPG",alt:null})),(0,n.kt)("p",null,"Xadow Basic Sensors integrates three different sensors on one single board:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3-Axis Accelerometer for motion detection, activity monitoring and speed tracking"),(0,n.kt)("li",{parentName:"ul"},"Dual diode Digital Light Sensor that can separately measure infrared, full-spectrum or human-visible light"),(0,n.kt)("li",{parentName:"ul"},"Temperature Sensor for temperature monitoring.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Three-in-one sensor board"),(0,n.kt)("li",{parentName:"ul"},"Plug-and-play if connected with RePhone Kit Create"),(0,n.kt)("li",{parentName:"ul"},"Open source and modular design"),(0,n.kt)("li",{parentName:"ul"},"Slim and small"),(0,n.kt)("li",{parentName:"ul"},"Built-in 11 PIN Xadow Connectors for fully flexible connection with other Xadow Modules"),(0,n.kt)("li",{parentName:"ul"},"Stackable, chain-able and sew-able with other Xadow Modules.")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Overview")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,n.kt)("td",{parentName:"tr",align:null},"STM32F030F4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Core"),(0,n.kt)("td",{parentName:"tr",align:null},"ARM\xae 32-bit Cortex\xae -M0 CPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Power Supply"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3 ~ 6 V (via breakout pins)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flash"),(0,n.kt)("td",{parentName:"tr",align:null},"16 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,n.kt)("td",{parentName:"tr",align:null},"4 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,n.kt)("td",{parentName:"tr",align:null},"48 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Temperature Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-30\xb0C to 70\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,n.kt)("td",{parentName:"tr",align:null},"Interface with Xadow GSM+BLE through I2C (7-bit address 0x03)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,n.kt)("td",{parentName:"tr",align:null},"25.37mm \xd7 20.30mm / 1\u201d \xd7 0.8\u201d")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3-Axis Accelerometer (ADXL345)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Test g Range"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12g (default), \xb14g, \xb18g, or \xb116g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,n.kt)("td",{parentName:"tr",align:null},"Increase with g range, up to 13-bit resolution at \xb116g")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Digital Light Sensor (TSL2561) -- Approximates Human Eye Response")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dynamic Range (Lux)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.1 to 40,000 Lux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dual Photodiodes"),(0,n.kt)("td",{parentName:"tr",align:null},"Infrared and full spectrum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Temperature Sensor (LM75ADP)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-55\xb0C to 125 \xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1 2\xb0C for temperature range from -25\xb0C to 100\xb0C / \xb1 3\xb0C for temperature range from -55\xb0C to 25\xb0C and from 100 \xb0C to 125\xb0C")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.png",alt:null})),(0,n.kt)("h2",{id:"use-it-with-rephone-kit-create"},"Use it with RePhone Kit Create"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Obtain the Sensor Data")),(0,n.kt)("p",null,"Without any programming, you can connect it to the Core Module (Xadow GSM+BLE) of your \u2018RePhone Kit Create' to read all the data from the sensors.\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Sensor_Value.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Set 'If This Then That")),(0,n.kt)("p",null,"You can also set the sensor data as a condition to trigger a series of actuators like audio, LED matrix and LED strip, or trigger actions like making a call and sending a message.\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Set_Sensor_Condition.png",alt:null})),(0,n.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-RePhone_Community-2.png",alt:null}))),(0,n.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"."),(0,n.kt)("p",null,"Now join us in the ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Frequently Asked Questions")),(0,n.kt)("p",null,"Some frequently asked questions in ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),' are collected and answered to the topic "Frequently Asked Questions of RePhone (FAQ)" , the topic will be kept updating whenever a new FAQ comes out.'),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We will be keep updating the source code on our github page:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WayenWeng/Xadow_Basic_Sensors/"},"Source Code for Xadow Basic Sensors"))),(0,n.kt)("p",null,"The schematic diagram of Xadow Basic Sensors is provided in the following link:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip"},"Xadow Duino Schematic Files"))),(0,n.kt)("p",null,"Check more info about the datasheet for each sensors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/ADXL345-3_Axis_Acceserometer.pdf"},"ADXL345 - 3_Axis Acceserometer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/LM75A_NXP-Temperature_Sensor_.pdf"},"LM75A NXP - Temperature Sensor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/TSL2561-Light_Sensor_.pdf"},"TSL2561 - Light Sensor"))),(0,n.kt)("p",null,"And the MCU STM32F030F4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/STM32F030F4.pdf"},"STM32F030F4"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);