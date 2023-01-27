"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},44948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Digital Infrared Temperature Sensor",title:"Grove - Digital Infrared Temperature Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor",title:"Grove - Digital Infrared Temperature Sensor",description:"Grove - Digital Infrared Temperature Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"2023\u5e741\u67084\u65e5",frontMatter:{description:"Grove - Digital Infrared Temperature Sensor",title:"Grove - Digital Infrared Temperature Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Thermal Imaging Camera IR-Array MLX90641",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Temperature/Grove-Thermal-Imaging-Camera-IR-Array"},next:{title:"Grove - Infrared Temperature Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor"}},s={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove\uff0dDigital_Infrared_Temperature_Sensor_1.jpg"})),(0,n.kt)("td",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove\uff0dDigital_Infrared_Temperature_Sensor_2.jpg"}))))),(0,n.kt)("p",null,"The Digital Infrared temperature sensor is a non-contact temperature measurement module which bases on MLX90615. Both the IR sensitive thermopile detector chip and the signal conditioning chip are integrated in the same package. This module communicates with Arduino using SMBus, up to 127 sensors can be read via common 2 wires. Thanks to the module's low noise amplifier, 16-bit ADC and powerful DSP unit, it can achieved a high accuracy of 1\u2103 over wide temperature rage and a high measurement resolution of 0.02\u2103."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"70%"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Item"),(0,n.kt)("th",null,"Min"),(0,n.kt)("th",null,"Typical"),(0,n.kt)("th",null,"Max"),(0,n.kt)("th",null,"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Voltage"),(0,n.kt)("td",null,"2.6"),(0,n.kt)("td",null,"3"),(0,n.kt)("td",null,"5"),(0,n.kt)("td",null,"V")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Current"),(0,n.kt)("td",null),(0,n.kt)("td",null,"1.4"),(0,n.kt)("td",null,"1.5"),(0,n.kt)("td",null,"mA")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Ambient Temperature Range"),(0,n.kt)("td",{colspan:"3"},"-40 - 85"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Object Temperature Range"),(0,n.kt)("td",{colspan:"3"},"-40 - 115"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Dimension"),(0,n.kt)("td",{colspan:"3"},"\xa020x40x9.6"),(0,n.kt)("td",null,"mm"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove\uff0dDigital_Infrared_Temperature_Sensor_4.jpg"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pin Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Function Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Signal ground")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"in"),(0,n.kt)("td",{parentName:"tr",align:null},"Positive Power Supply Input Terminal(3.3V or 5V)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"in/out"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C data input/output")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"in"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C CLK")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,"We provide an example here to show you how to use this sensor to measure the temperature of the target which is in front of the sensor, and print the result on the serial monitor."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware components:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Digital Infrared Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Plug Grove - Digital Infrared Temperature Sensor into D2 port of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/connection.JPG"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove - Digital Infrared Temperature Sensor to Arduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Digital Infrared Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D3"),(0,n.kt)("td",{parentName:"tr",align:null},"NA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D2"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the library and demo code ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615"},"Digital_Infrared_Temperature_Sensor_MLX90615"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Open the demo code directly by the path:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"File -> Examples -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft"),". As the following picture shown:"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/example.png"})),(0,n.kt)("p",null,"Since the sensor is factory calibrated with the digital SMBus compatible interface enabled, but the library is based on a soft i2c library, so you can use any digital pins on any AVR chip to drive the ",(0,n.kt)("strong",{parentName:"p"},"SDA")," and ",(0,n.kt)("strong",{parentName:"p"},"SCL")," lines. We use ",(0,n.kt)("strong",{parentName:"p"},"D2")," as the ",(0,n.kt)("strong",{parentName:"p"},"SCL")," pin and ",(0,n.kt)("strong",{parentName:"p"},"D3")," as the ",(0,n.kt)("strong",{parentName:"p"},"SDA")," pin in this demo code. You can use other port as long as you modify the code with matched pins."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Upload the code into Arduino. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Click ",(0,n.kt)("strong",{parentName:"li"},"Tool -> Serial Monitor")," to start up the Serial Monitor. And you will see the result.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg"})),(0,n.kt)("p",null,"Now, you can measure the temperature with this sensor. Ambient temperature is the MLX90615 package temperature and Object temperature is the object target temperature. According to our experiment, when you place the sensor in the normal indoor temperature, and ensure that there is nothing source of heat in front of the sensor's 1M scope. The Object temperature will approximately equal to Ambient temperature. When measuring the Object temperature, you should ensure the object is as close as possible whit the sensor, but do not touch the surface of the sensor, we recommend the distance is less than 3cm. Wish you have a fun try."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip"},"Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf",title:"File:MLX90615.pdf"},"MLX90615.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Code]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615"},"Demo Code"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);