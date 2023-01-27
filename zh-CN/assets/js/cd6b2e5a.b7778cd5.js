"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,k=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Grove - Moisture Sensor",title:"Grove - Moisture Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor",id:"Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor",title:"Grove - Moisture Sensor",description:"Grove - Moisture Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Soli_Humidity",slug:"/Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"2023\u5e741\u67089\u65e5",frontMatter:{description:"Grove - Moisture Sensor",title:"Grove - Moisture Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Capacitive Moisture Sensor (Corrosion Resistant)",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant"},next:{title:"Sensor_distance",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Proximity/Sensor_distance"}},l={},p=[{value:"Version",id:"version",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi(with GrovePi_Plus)",id:"play-with-raspberry-piwith-grovepi_plus",level:3},{value:"Play With TI LaunchPad",id:"play-with-ti-launchpad",level:3},{value:"FAQs",id:"faqs",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg"})),(0,a.kt)("p",null,'This Moisture Senor can be used for detecting the moisture of soil or judge if there is water around the sensor, let the plant in your garden able to reach out for human\'s help when they are thirsty. This sensor is very easy to use, you can just simply insert in into the soil and read the data. With this sensor, you can make a small project that can let the plant send a message to you like " I am thirsty now, please feed me some water."'),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:"200",height:"38",border:"0"}))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Moisture Sensor V1.4"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"June 2014")))),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2105 Wireless Soil Moisture, Temperature, and EC Sensor with higher performance and robustness for soil condition monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,a.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("font",{size:4},(0,a.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,a.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png"}))))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,a.kt)("strong",null,"S2105 Soil Moisture & Temp & EC")))))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Soil moisture sensor based on soil resistivity meansurement"),(0,a.kt)("li",{parentName:"ul"},"Easy to use"),(0,a.kt)("li",{parentName:"ul"},"2.0 cm X 6.0 cm grove module")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Condition"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Current"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"35"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Value"),(0,a.kt)("td",{parentName:"tr",align:null},"Sensor in dry soil,      Sensor in humid soil,Sensor in water"),(0,a.kt)("td",{parentName:"tr",align:null},"0, 300, 700,"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"300, 700, 950"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Botanical Gardening"),(0,a.kt)("li",{parentName:"ul"},"Moisture Sensoring"),(0,a.kt)("li",{parentName:"ul"},"Consistency Measurement")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Moisture Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Moisture Sensor to port A0 of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Seeeduino_moisture.jpg"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-Moisture Sensor to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Moisture Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A0"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'int sensorPin = A0;\nint sensorValue = 0;\n\nvoid setup() {\n    Serial.begin(9600);\n}\nvoid loop() {\n    // read the value from the sensor:\n    sensorValue = analogRead(sensorPin);\n    Serial.print("Moisture = " );\n    Serial.println(sensorValue);\n    delay(1000);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," We will see the moisture display on terminal as below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Moisture = 0\nMoisture = 31\nMoisture = 48\nMoisture = 139\nMoisture = 155\nMoisture = 124\nMoisture = 236\nMoisture = 218\nMoisture = 215\nMoisture = 221\n")),(0,a.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Moisture Sensor to port A0 of a Base Shield."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,a.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/cc_Moisture_Sensor.png"})),(0,a.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When the code finishes uploaded, you will see the moisture value displayed in the Serial Monitor.")),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Moisture Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry Pi."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Moisture Sensor to the A0 port of the Base Hat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/with_hat.jpg"})),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Excute below command to run the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython grove_moisture_sensor.py 0\n")),(0,a.kt)("p",null,"Following is the grove_moisture_sensor.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n# -*- coding: utf-8 -*-\n#\n# The MIT License (MIT)\n#\n# Grove Base Hat for the Raspberry Pi, used to connect grove sensors.\n# Copyright (C) 2018  Seeed Technology Co.,Ltd.\n'''\nThis is the code for\n    - Grove - Moisture Sensor <https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html>`_\n\nExamples:\n\n    .. code-block:: python\n\n        import time\n        from grove.grove_moisture_sensor import GroveMoistureSensor\n\n        # connect to alalog pin 2(slot A2)\n        PIN = 2\n\n        sensor = GroveMoistureSensor(PIN)\n\n        print('Detecting moisture...')\n        while True:\n            m = sensor.moisture\n            if 0 <= m and m < 300:\n                result = 'Dry'\n            elif 300 <= m and m < 600:\n                result = 'Moist'\n            else:\n                result = 'Wet'\n            print('Moisture value: {0}, {1}'.format(m, result))\n            time.sleep(1)\n'''\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n__all__ = [\"GroveMoistureSensor\"]\n\nclass GroveMoistureSensor:\n    '''\n    Grove Moisture Sensor class\n\n    Args:\n        pin(int): number of analog pin/channel the sensor connected.\n    '''\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def moisture(self):\n        '''\n        Get the moisture strength value/voltage\n\n        Returns:\n            (int): voltage, in mV\n        '''\n        value = self.adc.read_voltage(self.channel)\n        return value\n\nGrove = GroveMoistureSensor\n\n\ndef main():\n    from grove.helper import SlotHelper\n    sh = SlotHelper(SlotHelper.ADC)\n    pin = sh.argv2pin()\n\n    sensor = GroveMoistureSensor(pin)\n\n    print('Detecting moisture...')\n    while True:\n        m = sensor.moisture\n        if 0 <= m and m < 300:\n            result = 'Dry'\n        elif 300 <= m and m < 600:\n            result = 'Moist'\n        else:\n            result = 'Wet'\n        print('Moisture value: {0}, {1}'.format(m, result))\n        time.sleep(1)\n\nif __name__ == '__main__':\n    main()\n")),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If everything goes well, you will be able to see the following result:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_moisture_sensor.py 0\nDetecting moisture...\nMoisture value: 0, Dry\nMoisture value: 1, Dry\nMoisture value: 25, Dry\nMoisture value: 3, Dry\nMoisture value: 0, Dry\nMoisture value: 0, Dry\nMoisture value: 0, Dry\nMoisture value: 0, Dry\nMoisture value: 0, Dry\nMoisture value: 1, Dry\n^CTraceback (most recent call last):\n  File "grove_moisture_sensor.py", line 74, in <module>\n    main()\n  File "grove_moisture_sensor.py", line 71, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n\n')),(0,a.kt)("p",null,"You can use this sensor to detect the air quality. Press ++ctrl+c++ to quit."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may have noticed that for the analog port, the silkscreen pin number is something like ",(0,a.kt)("strong",{parentName:"p"},"A1, A0"),", however in the command we use parameter ",(0,a.kt)("strong",{parentName:"p"},"0")," and ",(0,a.kt)("strong",{parentName:"p"},"1"),", just the same as the digital port. So please make sure you plug the module into the correct port, otherwise, there may be pin conflicts.")),(0,a.kt)("h3",{id:"play-with-raspberry-piwith-grovepi_plus"},"Play With Raspberry Pi(with GrovePi_Plus)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Moisture Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Moisture Sensor to ",(0,a.kt)("strong",{parentName:"li"},"A0")," port of GrovePi_Plus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/rpi_moisture.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use the Grove-Moisture Sensor to meansure the moisture.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/GrovePi/Software/Python\npython grove_moisture_sensor.py\n")),(0,a.kt)("p",null,"Here is the grove_moisture_sensor.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#  Here are suggested sensor values:\n#   Min  Typ  Max  Condition\n#   0    0    0    sensor in open air\n#   0    20   300  sensor in dry soil\n#   300  580  700  sensor in humid soil\n#   700  940  950  sensor in water\n\n\nimport time\nimport grovepi\n\n# Connect the Grove Moisture Sensor to analog port A0\n# SIG,NC,VCC,GND\nsensor = 0\n\nwhile True:\n    try:\n        print(grovepi.analogRead(sensor))\n        time.sleep(.5)\n\n    except KeyboardInterrupt:\n        break\n    except IOError:\n        print ("Error")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," We will see the moisture display on terminal as below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi@raspberrypi:~/GrovePi/Software/Python $ python grove_moisture_sensor.py\n0\n90\n130\n150\n160\n218\n238\n")),(0,a.kt)("h3",{id:"play-with-ti-launchpad"},"Play With TI LaunchPad"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("p",null,"The following sketch demonstrates a simple application of sensing the moisture in soil.With this, you can know whether your plant needs water or not by observing the result from the output of the sensor"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/*\n  Moisture-Sensor\n  The following sketch demonstrates a simple application of sensing\n  the moisture of the soil. You can know whether a plant needs water\n  or not by observing the results that the sensor outputs.\n  The circuit:\n    * Moisture-Sensor attached to pin 24 (J6 plug on Grove Base BoosterPack)\n    * one side pin (either one) to ground\n    * the other side pin to +VCC\n    * LED anode (long leg) attached to RED_LED\n    * LED cathode (short leg) attached to ground\n  - NOTE:\n    This example code is in the public domain.\n    https://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor\n*/\n#include "TM1637.h"\n/* Macro Define */\n#define CLK 39              /* 4-digital display clock pin */\n#define DIO 38              /* 4-digiral display data pin */\n#define BLINK_LED RED_LED   /* blink led */\n#define MOISTURE_PIN 24     /* pin of moisture sensor */\n#define THRESHOLD_VALUE 300 /* threshold for watering the flowers */\n#define ON HIGH             /* led on */\n#define OFF LOW             /* led off */\n#define _handle_led(x) digitalWrite(BLINK_LED, x) /* handle led */\n\n/* Global Varibles */\nTM1637 tm1637(CLK, DIO);    /* 4-digital display object */\nint analog_value = 0;       /* varible to store the value coming from rotary angle\nsensor */\nint8_t bits[4] = {0};       /* array to store the single bits of the value */\n/* the setup() method runs once, when the sketch starts */\nvoid setup() {\n/* Initialize 4-digital display */\n    tm1637.init();\n    tm1637.set(BRIGHT_TYPICAL);\n/* declare the red_led pin as an OUTPUT */\n    pinMode(BLINK_LED, OUTPUT);\n}\n/* the loop() method runs over and over again */\nvoid loop() {\n    analog_value = analogRead(MOISTURE_PIN); /* read the value from the sensor */\n/* if the value is smaller than threshold, turn on led */\n    if(analog_value < THRESHOLD_VALUE) {\n        _handle_led(ON);\n    } else {\n        _handle_led(OFF);\n    }\n    memset(bits, 0, 4); /* reset array when we use it */\n    for(int i = 3; i >= 0; i--) {\n/* get single bits of the analog value */\n        bits[i] = analog_value % 10;\n        analog_value = analog_value / 10;\n        tm1637.display(i, bits[i]); /* display by 4-digital display */\n    }\n    delay(200);\n}\n')),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q1: What does the output mean? voltage or counts?")),(0,a.kt)("p",null,"A1: The output is voltage values. When using analogRead(), 5V will be divided by 1023. So the output value = Vout * 1023/5. The higher output voltage is, the higher moisture there is."),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Eagle&PDF]"),(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip"},"Grove - Moisture Sensor v1.4 Schematic"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Codecraft]"),(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/res/Grove_Moisture_Sensor_CDC_File.zip"},"CDC File")))),(0,a.kt)("h2",{id:"projects"},"Projects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Plant Monitoring System using AWS IoT"),": If you plan on a vacation, here is a great project to track the temperature and soil moisture of your Plant using dweet.io and AWS IoT."),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed",width:"350"}),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);