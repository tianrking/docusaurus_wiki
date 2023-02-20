"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={description:"SenseCAP & Node-RED Usage",title:"SenseCAP & Node-RED Usage",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",last_update:{date:"1/13/2023",author:"shuxu hu"}},r="SenseCAP Console with Node-RED Quick Start",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red",title:"SenseCAP & Node-RED Usage",description:"SenseCAP & Node-RED Usage",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red",permalink:"/docusaurus_wiki/zh-CN/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"SenseCAP & Node-RED Usage",title:"SenseCAP & Node-RED Usage",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Connect to TTN",permalink:"/docusaurus_wiki/zh-CN/Network/SenseCAP_K1100/LoRaWAN-Network_Application/TTN_Cloud_Services/Connecting-to-TTN"},next:{title:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",permalink:"/docusaurus_wiki/zh-CN/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_Azure_IoT_Central"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Install Node.js\xae",id:"install-nodejs",level:2},{value:"Install Node-RED",id:"install-node-red",level:2},{value:'<span id="jump1">Get the SenseCAP API</span>',id:"get-the-sensecap-api",level:2},{value:"Create a HTTP Node",id:"create-a-http-node",level:2},{value:"http node",id:"http-node",level:3},{value:"http in node",id:"http-in-node",level:4},{value:"http response node",id:"http-response-node",level:4},{value:"template node",id:"template-node",level:4},{value:"Create a MQTT node",id:"create-a-mqtt-node",level:2},{value:"debug node",id:"debug-node",level:3},{value:"mqtt node",id:"mqtt-node",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sensecap-console-with-node-red-quick-start"},"SenseCAP Console with Node-RED Quick Start"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,a.kt)("font",{color:"white",size:4},(0,a.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,a.kt)("strong",null,"S2100 ",(0,a.kt)("br",null)," Data Logger"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,a.kt)("strong",null,"S2101 ",(0,a.kt)("br",null)," Air Temp & Humidity"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,a.kt)("strong",null,"S2102 ",(0,a.kt)("br",null)," Light"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,a.kt)("strong",null,"S2103 ",(0,a.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,a.kt)("strong",null,"S2104 ",(0,a.kt)("br",null)," Soil Moisture & Temp"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,a.kt)("strong",null,"S2105 ",(0,a.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,a.kt)("strong",null,"S2110 ",(0,a.kt)("br",null)," LoRaWAN\xae Controller"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,a.kt)("strong",null,"S2120 ",(0,a.kt)("br",null)," 8-in-1 Weather Station")))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node-RED")," is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways."),(0,a.kt)("p",null,"It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png"})),(0,a.kt)("p",null,"To make it easier for our users to connect data from the SenseCAP platform to various other Paas platforms for more in-depth data processing. We will do a series of tutorials for ",(0,a.kt)("strong",{parentName:"p"},"SenseCAP & Node-RED"),"."),(0,a.kt)("p",null,"This tutorial, the first in a series, will walk you through installing and using Node-red and calling the SenseCAP backend API to connect to Node-RED."),(0,a.kt)("h2",{id:"install-nodejs"},"Install Node.js\xae"),(0,a.kt)("p",null,"To install Node-RED locally you will need a ",(0,a.kt)("a",{parentName:"p",href:"https://nodered.org/docs/faq/node-versions"},"supported version of Node.js"),"."),(0,a.kt)("p",null,"Download the latest 14.x LTS version of Node.js from the official ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js home page"),". It will offer you the best version for your system."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100-nodered/1.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Run the downloaded MSI file. Installing Node.js requires local administrator rights; if you are not a local administrator, you will be prompted for an administrator password on install. Accept the defaults when installing. After installation completes, close any open command prompts and re-open to ensure new environment variables are picked up.")),(0,a.kt)("p",null,"When installing Node.js, if you are using a computer that has not had any programming environment installed, we would recommend that you check the box to install the necessary tools while installing Node.js, which will save you a lot of necessary trouble."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100-nodered/2.png"})),(0,a.kt)("p",null,"The easiest way to install Node-RED is, using Node's package management tool, ",(0,a.kt)("strong",{parentName:"p"},"npm"),". However, we do not recommend installing Node-RED with npm 1.x, but rather upgrading it to the latest ",(0,a.kt)("strong",{parentName:"p"},"npm 2.x")," version."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"On ",(0,a.kt)("strong",{parentName:"p"},"Windows")," (Requires Windows 10 and above), use the ",(0,a.kt)("strong",{parentName:"p"},"Win+R")," shortcut and type ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd")," in the pop-up window to bring up the terminal and execute the following command."),(0,a.kt)("p",{parentName:"admonition"},"If you are using ",(0,a.kt)("strong",{parentName:"p"},"MacOS")," or ",(0,a.kt)("strong",{parentName:"p"},"Linux"),", please execute the following command in the terminal and add ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," in front of the command for non-root users.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g npm@2.x\n")),(0,a.kt)("p",null,"Once installed, open a command prompt and run the following command to ensure Node.js and npm are installed correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node --version && npm --version\n")),(0,a.kt)("p",null,"You should receive back output that looks similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> v16.17.0\n> 2.15.12\n")),(0,a.kt)("h2",{id:"install-node-red"},"Install Node-RED"),(0,a.kt)("p",null,"Installing Node-RED as a global module adds the command ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red")," to your system path. Execute the following at the command prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g --unsafe-perm node-red\n")),(0,a.kt)("p",null,"If Node-RED is installed as a global npm package, then execute the command node-red directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node-red\n")),(0,a.kt)("p",null,"This will output the Node-RED log to the terminal. You must keep the terminal open in order to keep Node-RED running."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/k1100-nodered/3.png"})),(0,a.kt)("p",null,"This will allow you to see the Node-RED editor on ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:1880."},"http://localhost:1880"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/4.png"})),(0,a.kt)("h2",{id:"get-the-sensecap-api"},(0,a.kt)("span",{id:"jump1"},"Get the SenseCAP API")),(0,a.kt)("p",null,"Before proceeding to this section, make sure you have bound your K1100 device in the SenseCAP console."),(0,a.kt)("p",null,"Log in to the ",(0,a.kt)("a",{parentName:"p",href:"https://sensecap.seeed.cc/portal/#/dashboard"},"SenseCAP console"),". In the drop-down bar to the right of the user name at the top of the dashboard, we can find the ",(0,a.kt)("strong",{parentName:"p"},"Organization Information"),", please select it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/5.png"})),(0,a.kt)("p",null,"In the Organization Information page, you can see the ",(0,a.kt)("strong",{parentName:"p"},"Organization ID"),", which you can record first and we will use it in the later steps."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/6.png"})),(0,a.kt)("p",null,"Then, we also need to get the API key for SenseCAP. Please click on ",(0,a.kt)("strong",{parentName:"p"},"Security -> Access API keys")," on the left side of the dashboard. Then Create an Access Key."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/11.png"})),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"API ID")," you created and you will get her ",(0,a.kt)("strong",{parentName:"p"},"Access API keys"),", please write it down for now, we will use it in the later steps."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/7.png"})),(0,a.kt)("h2",{id:"create-a-http-node"},"Create a HTTP Node"),(0,a.kt)("p",null,"The editor window consists of four components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The header at the top, containing the deploy button, main menu, and, if user authentication is enabled, the user menu."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://nodered.org/docs/user-guide/editor/palette"},"palette")," on the left, containing the nodes available to use."),(0,a.kt)("li",{parentName:"ul"},"The main ",(0,a.kt)("a",{parentName:"li",href:"https://nodered.org/docs/user-guide/editor/workspace"},"workspace")," in the middle, where flows are created."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://nodered.org/docs/user-guide/editor/sidebar"},"sidebar")," on the right.")),(0,a.kt)("p",null,"Follow the links above to learn more about each component."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/12.png"})),(0,a.kt)("p",null,"In this example, we will show you how to use MQTT nodes to display the sensor values received by SenseCAP. Before that, let's learn to understand the nodes that we will use more in the future."),(0,a.kt)("h3",{id:"http-node"},"http node"),(0,a.kt)("h4",{id:"http-in-node"},"http in node"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"http in")," node can be used to create web services."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/k1100-nodered/13.png"})),(0,a.kt)("p",null,"Drag the node to the workspace and double-click the node to access the node's configuration page."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/14.png"})),(0,a.kt)("p",null,"Here, we need to set a URL for the web service you have created so that you can access the web page you have created through the address ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1880/<URL>"),"."),(0,a.kt)("h4",{id:"http-response-node"},"http response node"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"http response")," node sends the response back to the request received from the HTTP input node."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/k1100-nodered/15.png"})),(0,a.kt)("p",null,"Usually, we don't need to configure it separately, just drag it directly to the workbench for use."),(0,a.kt)("h4",{id:"template-node"},"template node"),(0,a.kt)("p",null,"The template node can set properties based on the provided template."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/k1100-nodered/17.png"})),(0,a.kt)("p",null,"We will use this node and use a simple HTML language to complete the configuration of our web page's display content."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/18.png"})),(0,a.kt)("p",null,'For example, we want to show "Hello World!".'),(0,a.kt)("div",null,"```html",(0,a.kt)("h1",null,"Hello World!"),"```"),(0,a.kt)("p",null,"Finally, we connect the ",(0,a.kt)("strong",{parentName:"p"},"http in")," to the ",(0,a.kt)("strong",{parentName:"p"},"template"),", and connect the ",(0,a.kt)("strong",{parentName:"p"},"template")," to the ",(0,a.kt)("strong",{parentName:"p"},"http response"),". Then click the ",(0,a.kt)("strong",{parentName:"p"},"deploy")," button in the upper right corner, so that a simple web page is created, which is the basic Node-RED operation step."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/19.png"})),(0,a.kt)("p",null,"In this example, we created a sensor data URL, so after deployment, we can enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1880/sensor_data")," in the browser address bar to access the page we just created."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/k1100-nodered/20.png"})),(0,a.kt)("h2",{id:"create-a-mqtt-node"},"Create a MQTT node"),(0,a.kt)("p",null,"In this section, we will describe how to get the data information of SenseCAP through the MQTT node."),(0,a.kt)("h3",{id:"debug-node"},"debug node"),(0,a.kt)("p",null,"Displays selected message properties in the debug sidebar tab and optionally the runtime log. By default it displays msg.payload, but can be configured to display any property, the full message or the result of a JSONata expression."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/k1100-nodered/23.png"})),(0,a.kt)("h3",{id:"mqtt-node"},"mqtt node"),(0,a.kt)("p",null,"Connects to a MQTT broker and subscribes to messages from the specified topic."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/k1100-nodered/26.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Add a new mqtt-broker node."),(0,a.kt)("p",null,"Drag out an ",(0,a.kt)("strong",{parentName:"p"},"mqtt in")," node, double-click it to enter the configuration page, then click the edit button after ",(0,a.kt)("strong",{parentName:"p"},"Add new mqtt-broker"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/27.png"})),(0,a.kt)("p",null,"The configuration of mqtt-broker is required to be filled out as follows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server: openstream.api.sensecap.seeed.cc"),(0,a.kt)("li",{parentName:"ul"},"Port: 1883"),(0,a.kt)("li",{parentName:"ul"},"Protocol: MQTT V3.1.1"),(0,a.kt)("li",{parentName:"ul"},"Client ID: The format is ",(0,a.kt)("inlineCode",{parentName:"li"},"org-<Organization ID>-<Random ID>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,a.kt)("a",{parentName:"li",href:"#jump1"},"Get the SenseCAP API"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters.")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/28.png"})),(0,a.kt)("p",null,"Then we fill in the ",(0,a.kt)("strong",{parentName:"p"},"Security")," options field with the Username and Password."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username: The format is ",(0,a.kt)("inlineCode",{parentName:"li"},"org-<Organization ID>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,a.kt)("a",{parentName:"li",href:"#jump1"},"Get the SenseCAP API"),"."))),(0,a.kt)("li",{parentName:"ul"},"Password: Fill in the ",(0,a.kt)("strong",{parentName:"li"},"Access API keys")," that we obtained in the ",(0,a.kt)("a",{parentName:"li",href:"#jump1"},"Get the SenseCAP API"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/29.png"})),(0,a.kt)("p",null,"Finally, click the ",(0,a.kt)("strong",{parentName:"p"},"Add")," button in the upper right corner to return to the configuration page of the ",(0,a.kt)("strong",{parentName:"p"},"mqtt in")," node."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Topic: Configuring a topic in a specific format determines the kind of device and data type to be received.")),(0,a.kt)("p",null,"Topic Format: ",(0,a.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")),(0,a.kt)("table",{align:"center"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"OrgID"),(0,a.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the ",(0,a.kt)("a",{href:"#jump1",target:"_blank"},"Get the SenseCAP API"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"DevEUI"),(0,a.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Channel"),(0,a.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Reserved"),(0,a.kt)("td",{align:"center"},"Reserved Fields.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"MeasurementID"),(0,a.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,a.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The content of this tutorial only applies to the K1100 kit, so please refer to the content inside the ",(0,a.kt)("strong",{parentName:"p"},"LoraWAN Dev Kit")," for the Measured value ID and do not call other ID.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:650,src:"https://files.seeedstudio.com/wiki/k1100-nodered/30.png"})),(0,a.kt)("p",null,"For example, if I want to be able to get sensor data for the light values sent by Wio Terminal, then the Topic information I fill in should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<OrgID>"),' field is required, "+" means this field has no filter and can match all. So, "/ + / + / + / +" means listen to all ',(0,a.kt)("inlineCode",{parentName:"p"},"<DeviceEUI>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Channel>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Reserved>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<MeasurementID>"),"."),(0,a.kt)("p",{parentName:"admonition"},"If you want to listen to all messages, then the Topic should be:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    /device_sensor_data/424324324324324/+/+/+/+\n"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/31.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Add debug node"),(0,a.kt)("p",null,"Then we might as well add debug nodes to it to make it easier to check if everything is working."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/34.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Powers up the Wio Terminal and starts sending data to SenseCAP."),(0,a.kt)("p",null,"We click on the ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," button and if everything is set up correctly you will be able to see the ",(0,a.kt)("strong",{parentName:"p"},"mqtt in")," node showing connected. Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP. You will see the data already displayed in the debug window."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/33.png"})),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);