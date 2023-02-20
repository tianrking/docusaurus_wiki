"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - High Temperature Sensor",title:"Grove - High Temperature Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor",title:"Grove - High Temperature Sensor",description:"Grove - High Temperature Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - High Temperature Sensor",title:"Grove - High Temperature Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"One Wire Temperature Sensor DS18B20",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20"},next:{title:"Grove - Thermal Imaging Camera IR-Array MLX90641",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Temperature/Grove-Thermal-Imaging-Camera-IR-Array"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"FAQs",id:"faqs",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_01.jpg"})),(0,n.kt)("p",null,"Thermocouples are very sensitive devices. It requires a good amplifier with cold-junction compensation. The Grove - High Temperatire Sensor uses a K-Type themocouple and a thermocouple amplifier that measures ambient temperature using thermistor for cold-junction compensation. The detectable range of this Sensor is -50~600\xb0C , and the accuracy is \xb1(2.0% + 2\xb0C)."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:"210",height:"41",border:"0"}))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:4},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - High Temperature Sensor V1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Feb 25, 2014")))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3-5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max power rating at 25\u2103"),(0,n.kt)("td",{parentName:"tr",align:null},"300mW")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature range"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 ~ +125 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature measurement range"),(0,n.kt)("td",{parentName:"tr",align:null},"-50 ~ +600 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amplifier output voltage range"),(0,n.kt)("td",{parentName:"tr",align:null},"0 ~ 3.3 V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thermocouple material"),(0,n.kt)("td",{parentName:"tr",align:null},"Glass Fiber")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cold junction compensation"),(0,n.kt)("td",{parentName:"tr",align:null},"Environment temperature measurement")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thermocouple temperature measurement accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"+/-2.0% (+ 2 \u2103)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thermocouple temperature sensor cable length"),(0,n.kt)("td",{parentName:"tr",align:null},"100cm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,n.kt)("td",{parentName:"tr",align:null},"20mm x 40mm")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. We need to prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-High Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 2. Connect the Grove-High Temperature Sensor to ",(0,n.kt)("strong",{parentName:"li"},"A0")," on Base Shield."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Plug the base Shield into Seeeduino-V4.2."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect Seeeduino-V4.2 to PC by using a USB cable.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/arduino_connection.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have a Base Shield, don't worry, the sensor can be connected to your Arduino directly. Please follow below tables to connect with Arduino.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-High Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A1"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A0"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download the  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_HighTemp_Sensor/archive/master.zip"},"Grove-High Temperature Sensor Library")," from Github."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Refer ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Copy the code into Arduino IDE and upload.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'#include "High_Temp.h"\n\nHighTemp ht(A1, A0);\n\nvoid setup()\n{\n    Serial.begin(115200);\n    Serial.println("grove - hight temperature sensor test demo");\n    ht.begin();\n}\n\nvoid loop()\n{\n    Serial.println(ht.getThmc());\n    delay(100);\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 4. Open your Serial Monitor and set baud rate as 115200, We will see the temperature in Celsius here.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/Htsdata.jpg"})),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Ultrasonic Ranger"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/High_Temperature_Sensor_s.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://seeedstudio.com/Grove-High-Temperature-Sensor-p-1810.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 2. Plug the GrovePi_Plus into Raspberry."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Connect Grove-Ultrasonic ranger to ",(0,n.kt)("strong",{parentName:"li"},"A0")," port of GrovePi_Plus."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect the Raspberry to PC through USB cable.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/img/raspberry_connection.jpg"})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Follow ",(0,n.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Follow ",(0,n.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this wiki we use the path ",(0,n.kt)("strong",{parentName:"p"},"~/GrovePi/")," instead of ",(0,n.kt)("strong",{parentName:"p"},"/home/pi/Desktop/GrovePi"),", you need to make sure Step 2 and Step 3 use the same path.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are using ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,n.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 3. Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 4. Excute below commands to use the ultrasonic_ranger to meansure the distance.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"cd ~/GrovePi/Software/Python/grove_hightemperature_sensor\npython3 high_temperature_example.py\n")),(0,n.kt)("p",null,"Here is the grove_ultrasonic.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\nimport grove_hightemperature_sensor as grovepi # our library\nfrom time import sleep # and for the sleep function\nimport sys # we need this for the exception throwing stuff\n\n# Don't forget to run it with Python 3 !!\n# Don't forget to run it with Python 3 !!\n# Don't forget to run it with Python 3 !!\n\ndef Main():\n    room_temperature_pin = 15 # this is equal to A1\n    probe_temperature_pin = 14 # this is equal to A0\n    # so you have to connect the sensor to A0 port\n\n    # instatiate a HighTemperatureSensor object\n    sensor = grovepi.HighTemperatureSensor(room_temperature_pin, probe_temperature_pin)\n\n    # and do this indefinitely\n    while True:\n        # read the room temperature\n        room_temperature = sensor.getRoomTemperature()\n        # and also what's important to us: the temperature at the tip of the K-Type sensor\n        probe_temperature = sensor.getProbeTemperature()\n\n        # print it in a fashionable way\n        print('[room temperature: {:5.2f}\xb0C][probe temperature: {:5.2f}\xb0C]'.format(room_temperature, probe_temperature))\n        # and wait for 250 ms before taking another measurement - so we don't overflow the terminal\n        sleep(0.25)\n\n\nif __name__ == \"__main__\":\n    try:\n        Main()\n\n    # in case CTRL-C / CTRL-D keys are pressed (or anything else that might interrupt)\n    except KeyboardInterrupt:\n        print('[Keyboard interrupted]')\n        sys.exit(0)\n\n    # in case there's an IO error aka I2C\n    except IOError:\n        print('[IO Error]')\n        sys.exit(0)\n\n    # in case we have a math error (like division by 0 - can happen depending on the read values)\n    # or if the values exceed a certain threshold\n    # experiment and you'll see\n    except ValueError as e:\n        print('[{}]'.format(str(e)))\n        sys.exit(0)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 4. We will see the temperature display on terminal as below.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"pi@raspberrypi:~/GrovePi/Software/Python/grove_hightemperature_sensor $ python3 high_temperature_example.py\n[room temperature: 20.47\xb0C][probe temperature: 32.19\xb0C]\n[room temperature: 20.47\xb0C][probe temperature: 32.19\xb0C]\n[room temperature: 20.47\xb0C][probe temperature: 32.19\xb0C]\n[room temperature: 20.47\xb0C][probe temperature: 32.19\xb0C]\n[room temperature: 20.60\xb0C][probe temperature: 32.19\xb0C]\n[room temperature: 20.60\xb0C][probe temperature: 32.19\xb0C]\n[room temperature: 20.60\xb0C][probe temperature: 32.19\xb0C]\n")),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1: How to do Grove-High temperature sensor calibration?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A1:"),"  Please download the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove_High_Temperature_Sensor/resource/Grove_HighTemp_Sensor-master_cal.zip"},"libray")," and then follow below instructions.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. run the getTemperature-calibration-measurement.ino to get below info.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},'10:02:17.792 -> "You have Scucessfully record the sample data,please copy the following line of code to your clipboard and replace the first line of function loop()\n10:02:17.935 ->       double TMP[]={10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29,10.29};\n10:02:18.038 ->       double Real_temperature[]={10.00,20.00,30.00,40.00,50.00,60.00,70.00,80.00,90.00,100.00};\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Step 2. paste to getTemperature-calibration_demo.ino and run the calibration.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Step 3. run getTemperature.ino to read the temperature.  "))),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-High_Temperature_Sensor.pdf"},"Download Wiki PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip"},"Grove - High Temperature Sensor Eagle file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_HighTemp_Sensor"},"High Temperature Sensor Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"http://www.ti.com/lit/ds/symlink/opa333.pdf"},"OPA333 PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Lmv358.pdf"},"LMV358 PDF"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);