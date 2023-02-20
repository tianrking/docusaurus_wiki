"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Temperature Sensor",title:"Temperature Sensor",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,u={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/temperature_sensor",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/temperature_sensor",title:"Temperature Sensor",description:"Temperature Sensor",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/temperature_sensor.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/temperature_sensor",permalink:"/docusaurus_wiki/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/temperature_sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/temperature_sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Temperature Sensor",title:"Temperature Sensor",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Sound Sensor And LED Bar",permalink:"/docusaurus_wiki/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar"},next:{title:"Project One - Blink",permalink:"/docusaurus_wiki/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_One-Blink"}},s={},p=[{value:"Tech Support",id:"tech-support",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use Temp ","&"," Humi Sensor to get temperature and humidity of your house."),(0,o.kt)("p",null,"This demo will show you how to get the value and show it to LCD."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Required:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Arduino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Temp ","&"," Humi Sensor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LCD"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,o.kt)("p",null,"Temp ","&"," Humi Sensor connect to A0."),(0,o.kt)("p",null,"About the connect of LCD, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystal"},"LCD")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code:")),(0,o.kt)("p",null,"Open Arduino IDE, click File -",">"," Shetchbook -",">"," TempHumiSensor."),(0,o.kt)("p",null,"You can get humidity by readHumidity() and temperature by readTemperature(). This 2 function will return a float value."),(0,o.kt)("p",null,"About LCD, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystal"},"LCD"),"."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);