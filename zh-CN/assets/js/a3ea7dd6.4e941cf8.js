"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={description:"Grove - Barometer Sensor(BME280)",title:"Grove - Barometer Sensor(BME280)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280",id:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280",title:"Grove - Barometer Sensor(BME280)",description:"Grove - Barometer Sensor(BME280)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Barometer",slug:"/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"2023\u5e741\u67084\u65e5",frontMatter:{description:"Grove - Barometer Sensor(BME280)",title:"Grove - Barometer Sensor(BME280)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Barometer Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor"},next:{title:"Grove - Barometer Sensor (BMP180)",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP180"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"<strong>Package includes</strong> (main parts)",id:"package-includes-main-parts",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Wio Terminal (ArduPy)",id:"play-with-wio-terminal-ardupy",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg",alt:"pir",width:500,height:"auto"})),(0,n.kt)("p",null,"Grove - Temp&Humi&Barometer Sensor (BME280) is a breakout board for Bosch BMP280 high-precision, low-power combined humidity, pressure, and temperature sensor. This module can be used to measure temperature, atmospheric pressure and humidity accurately and fast. As the atmospheric pressure changes with altitude, it can also measure approximate ",(0,n.kt)("strong",{parentName:"p"},"altitude")," of a place. It can be connected to a microcontroller with I",(0,n.kt)("sup",null,"2"),"C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this more product easier to use."),(0,n.kt)("p",null,"The BME280 is an upgraded version of BMP180, and BME280 gets dramatic improvements from BMP180. BME280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added SPI bus, more measuring modes, higher measuring rate, and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features. Hence, Grove - Temp&Humi&Barometer Sensor (BME280) will be more reliable in providing precise temperature, atmospheric pressure values, humidity and approximate altitude data."),(0,n.kt)("p",null,"Using the sensor is easy. For ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7"},"Seeeduino")," (compliant with Arduino), just connect this breakout board using ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable")," to I2C Grove connector. Then, use the provided library and example code from GitHub. If you are using an Arduino either use Base Shield v2.0 or simply connect the VCC pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4)."),(0,n.kt)("p",null,"Typical applications: Enhancement of GPS navigation, outdoor/indoor navigation, weather forecast, or any other project that requires accurate atmospheric pressure reading."),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/4df5kaaKa6I",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:4},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get more precise temperature, atmospheric pressure values, humidity and approximate altitude data fast."),(0,n.kt)("li",{parentName:"ul"},"Grove compatible and easy to use"),(0,n.kt)("li",{parentName:"ul"},"Highly abstracted library for building projects quicker")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V or 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I/O voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V or 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating current"),(0,n.kt)("td",{parentName:"tr",align:null},"0.4mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 - 85 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Atmospheric pressure sensor measurement range"),(0,n.kt)("td",{parentName:"tr",align:null},"300 - 1100 hPa (1 hPa= one hundred Pa) with \xb11.0 hPa accuracy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature sensor measurement range"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 - 85 \u2103, with \xb11.0\xb0C accuracy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Humidity sensor measurements range"),(0,n.kt)("td",{parentName:"tr",align:null},"0% - 100% relative humidity , with \xb13% accuracy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Measurement modes"),(0,n.kt)("td",{parentName:"tr",align:null},"Piezo & Temperature, forced or periodic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Chip"),(0,n.kt)("td",{parentName:"tr",align:null},"BME280(",(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf"},"datasheet"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface Bus"),(0,n.kt)("td",{parentName:"tr",align:null},"SPI, I",(0,n.kt)("sup",null,"2"),"C (use either one of them)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"3.2 g (for breakout board), 9.3 g for whole package each piece")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:null},"40 (length) \xd7 20 (width) mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"0x76(default) or 0x77")))),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),(0,n.kt)("ol",null,(0,n.kt)("li",null,"We will show/describe how to select interface bus soon."),(0,n.kt)("li",null,"The altitude is calculated by a combination of temperature and atmospheric pressure. No specialized components for altitude."))),(0,n.kt)("h3",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SPI soldering pads"),", a voltage monitoring circuit.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Interface bus selection pads")," , to select I",(0,n.kt)("sup",null,"2"),"C bus, connect the two pads by soldering (it is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Slave board address selection pads"),", to select slave board address to avoid address collision."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- If you have selected I2C bus, the default address for slave board is **0x76** (right-two pads are connected). If you want to use the address **0x77**, connect only the left two (disconnect right two) by soldering.\n")),(0,n.kt)("div",{class:"admonition tip"},(0,n.kt)("p",{class:"admonition-title"},"Tip"),"You can disconnect pads with just a sharp knife."),"- If you have selected SPI bus, the default address for slave board is **0x76** (right-two pads are connected). If you want to use the address **0x77**, disconnect all three pads.")),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected."),(0,n.kt)("h3",{id:"package-includes-main-parts"},(0,n.kt)("strong",{parentName:"h3"},"Package includes")," (main parts)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parts name"),(0,n.kt)("th",{parentName:"tr",align:null},"Quantity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Temp&Humi&Barometer Sensor (BME280)"),(0,n.kt)("td",{parentName:"tr",align:null},"1 piece")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable")),(0,n.kt)("td",{parentName:"tr",align:null},"1 piece")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Now let us run some basic examples with this module."),(0,n.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BME280"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg",alt:"pir",width:500,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Barometer_Sensor-BME280 to port ",(0,n.kt)("strong",{parentName:"li"},"I2C")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"seeeduino_v4"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BME280"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BME280"},"Library and example code")," from Github."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor."),(0,n.kt)("p",null,"Here is the code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'\n/*\n * bme280_example.ino\n * Example sketch for bme280\n *\n * Copyright (c) 2016 seeed technology inc.\n * Website    : www.seeedstudio.com\n * Author     : Lambor\n * Create Time:\n * Change Log :\n *\n * The MIT License (MIT)\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#include "Seeed_BME280.h"\n#include <Wire.h>\n\nBME280 bme280;\n\nvoid setup()\n{\n  Serial.begin(9600);\n  if(!bme280.init()){\n    Serial.println("Device error!");\n  }\n}\n\nvoid loop()\n{\n  float pressure;\n\n  //get and print temperatures\n  Serial.print("Temp: ");\n  Serial.print(bme280.getTemperature());\n  Serial.println("C");//The unit for  Celsius because original arduino don\'t support speical symbols\n\n  //get and print atmospheric pressure data\n  Serial.print("Pressure: ");\n  Serial.print(pressure = bme280.getPressure());\n  Serial.println("Pa");\n\n  //get and print altitude data\n  Serial.print("Altitude: ");\n  Serial.print(bme280.calcAltitude(pressure));\n  Serial.println("m");\n\n  //get and print humidity data\n  Serial.print("Humidity: ");\n  Serial.print(bme280.getHumidity());\n  Serial.println("%");\n\n  delay(1000);\n}\n\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the code. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, altitude and humidity."),(0,n.kt)("h3",{id:"play-with-wio-terminal-ardupy"},"Play With Wio Terminal (ArduPy)"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Barometer Sensor-BME280"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove-Barometer Sensor-BME280 to the ",(0,n.kt)("strong",{parentName:"p"},"I2C")," Grove port of Wio Terminal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect the Wio Terminal to PC through USB Type-C cable."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/WT-BME280.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/"},(0,n.kt)("strong",{parentName:"a"},"ArduPy Getting Started"))," to configure the ArduPy development environment on Wio Terminal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Make sure that the ArduPy firmware is flashed into Wio Terminal. For more information, please follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started"},(0,n.kt)("strong",{parentName:"a"},"here")),"."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aip install Seeed-Studio/seeed-ardupy-bme280\naip build\naip flash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Copy the following code and save it as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-bme280.py"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from arduino import grove_bme280\nfrom machine import LCD\nfrom machine import Sprite\nimport time\n\nbme280 = grove_bme280()\nlcd = LCD()\nspr = Sprite(lcd) # Create a buff\n\ndef main():\n    spr.createSprite(320, 240)\n    while True:\n      spr.setTextSize(2)\n      spr.fillSprite(spr.color.BLACK)\n      spr.setTextColor(lcd.color.ORANGE)\n      spr.drawString("BME280 Reading", 90, 10)\n      spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)\n      spr.setTextColor(lcd.color.WHITE)\n      spr.drawString("- Temperature: ", 20, 50)\n      spr.drawString("- Humidity: ", 20, 80)\n      spr.drawString("- Pressure: ", 20, 110)\n\n      spr.drawFloat(bme280.temperature, 2, 220,50)\n      spr.drawNumber(bme280.humidity, 220,80)\n      spr.drawNumber(bme280.pressure, 220,110)\n      spr.pushSprite(0,0)\n      time.sleep_ms(500)\n\n      print ("\\nTemperature: ", bme280.temperature, "C")\n      print ("Humidity: ", bme280.humidity, "%")\n      print ("Pressure: ", bme280.pressure, "Pa")\n\nif __name__ == "__main__":\n    main()\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Save the ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-bme280.py")," in a location that you know. Run the following command and ",(0,n.kt)("strong",{parentName:"li"},"replace")," ",(0,n.kt)("inlineCode",{parentName:"li"},"<YourPythonFilePath>")," with your ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-bme280.py")," location.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath>"\n# Example:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," We will see the values display on terminal as below, and displaying on the Wio Terminal LCD screen.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"\nPositional argument (/dev/cu.usbmodem1414301) takes precedence over --open.\nConnected to ardupy\n\nTemperature:  29.88 C\nHumidity:  55 %\nPressure:  100332 Pa\n\nTemperature:  29.91 C\nHumidity:  55 %\nPressure:  100332 Pa\n\nTemperature:  29.88 C\nHumidity:  54 %\nPressure:  100331 Pa\n')),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip"},"Grove-Barometer_Sensor-BME280-v1.0_Schematics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf"},"BME280 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_BME280"},"Grove_BME280 Library")," on GitHub"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Reference]")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/Wire"},"I",(0,n.kt)("sup",null,"2"),"C how-to for Arduino"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Seeed LoRa IoTea Solution"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."))}m.isMDXComponent=!0}}]);