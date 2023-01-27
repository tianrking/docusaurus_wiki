"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3935],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>c});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(i),h=n,c=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return i?r.createElement(c,o(o({ref:t},m),{},{components:i})):r.createElement(c,o({ref:t},m))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},47144:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const a={description:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",title:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931",title:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",description:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",title:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - UV Sensor",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Light/Grove-UV_Sensor"},next:{title:"Grove - I2C UV Sensor (VEML6070)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Working Principle",id:"working-principle",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/main.jpg"})),(0,n.kt)("p",null,"The  Grove - Light & Gesture & Color & proximity sensor is TMG39931 based product, which features advanced Gesture detection, Proximity detection, Digital Ambient Light Sense(ALS), Color Sense(RGBC), and optical pattern generation/transmission for broadcast. This four-in-one sensor allows you to collect the data from ambient environment and transfers over the I2C bus."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2102 Wireless Light Intensity Sensor with higher performance and robustness for light intensity detection. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:4},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,n.kt)("strong",null,"S2102 Light")))))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Single device integrated optical solution"),(0,n.kt)("li",{parentName:"ul"},"Ambient light sensing"),(0,n.kt)("li",{parentName:"ul"},"UV and IR blocking filters"),(0,n.kt)("li",{parentName:"ul"},"Complex gesture sensing"),(0,n.kt)("li",{parentName:"ul"},"Ideal for operation behind dark glass - High sensitivity"),(0,n.kt)("li",{parentName:"ul"},"Proximity detection"),(0,n.kt)("li",{parentName:"ul"},"Barcode pattern generation and transmission"),(0,n.kt)("li",{parentName:"ul"},"Dual use of a single internal LED"),(0,n.kt)("li",{parentName:"ul"},"Trimmed to provide consistent reading")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-30\uff5e85\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40\uff5e85\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max. Lux ","[klx]"),(0,n.kt)("td",{parentName:"tr",align:null},"60")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x39")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gesture Detection"),(0,n.kt)("li",{parentName:"ul"},"Color Sense"),(0,n.kt)("li",{parentName:"ul"},"Ambient Light Sensing"),(0,n.kt)("li",{parentName:"ul"},"Cell Phone Touch Screen Disable"),(0,n.kt)("li",{parentName:"ul"},"Mechanical Switch Replacement"),(0,n.kt)("li",{parentName:"ul"},"Printed Bar Code Emulation")),(0,n.kt)("h2",{id:"working-principle"},"Working Principle"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gesture Detection")),(0,n.kt)("p",null,"Gesture detection utilizes four directional photodiodes to sense reflected IR energy (sourced by the integrated LED) to convert physical motion information to a digital information."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Proximity Detection")),(0,n.kt)("p",null,"The proximity detection features provides object detection by photodiode detection of reflected IR energy(Sourced by the integrated LED)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Digital Ambient Light Sense & Color Sense")),(0,n.kt)("p",null,"The Color and ALS detection feature provides red, green, blue and clear light intensity data. Each of the R, G, B, C channels have a UV and IR blocking filter and a dedicated data converter producing16-bit data simultaneously. This architecture allows applications to accurately measure ambient light and sense color which enables devices to calculate illuminance and color temperature, control display backlight, and chromaticity."),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Light&Gesture&Color&Proximity Sensor(TMG39931)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com"},"Get ONE Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/withard.jpg"})),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The gesture functionality is not supported yet, since this functionality needs algorithms provided by AMS. We will update this library as soon as we get the support from AMS.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example 1")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_TMG3993.git"},"Seeed_TMG3993")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3eSeeed TMG3993(Grove - Light&Gesture&Color&Proximity Sensor)--\x3eExample1-ProximityPullRaw"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard1.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,n.kt)("strong",{parentName:"p"},"basic_demo.ino")," which you can find in the folder ",(0,n.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_TMG3993-master\u2069\\\u2068examples\u2069\\Example1-ProximityPullRaw\u2069\u2069\\Example1-ProximityPullRaw.ino"),", ",(0,n.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard2.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Or, you can just click the icon ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include <Wire.h>\n\n#include "Seeed_TMG3993.h"\n\nTMG3993 tmg3993;\n\nvoid setup()\n{\n  Serial.begin(9600);\n  Serial.println("TMG3993 Proximity Example");\n\n  Wire.begin();\n\n  if (tmg3993.initialize() == false)\n  {\n    Serial.println("Device not found. Check wiring.");\n    while (1);\n  }\n  tmg3993.setupRecommendedConfigForProximity();\n  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);\n}\n\nvoid loop()\n{\n  if (tmg3993.getSTATUS() & STATUS_PVALID)\n  {\n    uint8_t proximity_raw = tmg3993.getProximityRaw();  //read the Proximity data will clear the status bit\n    Serial.print("Proximity Raw: ");\n    Serial.println(proximity_raw);\n  }\n  delay(1);\n}\n\n\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.")),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If everything goes well, the raw (uint16_t) data of the proximity sensor should be able to read from Serial Monitor.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg1.png"})),(0,n.kt)("p",null,"If you would like to run other examples, you may do similar processes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example 2")),(0,n.kt)("p",null,"This example is also used to detect proximity, but in interrupt way."),(0,n.kt)("p",null,"Two thresholds need to be configured - low and high. Any proximity value which is inside this range will trigger nothing, but the value outside this range will trigger events. In detail, when the proximity sensor values are below the low threshold over 10 times, a proximity removed event will be emitted, when the proximity sensor values are higher than the high threshold over 10 times, a proximity detected event will be emitted. The 10 times here can be configured via setInterruptPersistenceReg (see setupRecommendedConfigForProximity for an example)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_TMG3993.git"},"Seeed_TMG3993")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3."),' Restart the Arduino IDE. Open the example, the same way as in Example 1, but this time choose "Example2-ProximityInterrupt" instead of "Example1". Or copy the following code into Arduino IDE:'))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'\n\n#include <Wire.h>\n\n#include "Seeed_TMG3993.h"\n\nTMG3993 tmg3993;\nint last_interrupt_state = -1;\n\nvoid setup()\n{\n  Serial.begin(9600);\n  Serial.println("TMG3993 Proximity Example");\n\n  Wire.begin();\n\n  if (tmg3993.initialize() == false)\n  {\n    Serial.println("Device not found. Check wiring.");\n    while (1);\n  }\n  tmg3993.setupRecommendedConfigForProximity();\n  tmg3993.setProximityInterruptThreshold(25, 150);  //less than 5cm will trigger the proximity event\n  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);\n}\n\nvoid loop()\n{\n  if (tmg3993.getSTATUS() & STATUS_PINT)\n  {\n    uint8_t proximity_raw = tmg3993.getProximityRaw();  //read the Proximity data will clear the status bit\n\n    if (proximity_raw >= 150 && last_interrupt_state != 1) {\n      Serial.println("Proximity detected!!!");\n      Serial.print("Proximity Raw: ");\n      Serial.println(proximity_raw);\n      last_interrupt_state = 1;\n    } else if (proximity_raw <= 25 && last_interrupt_state != 0) {\n      Serial.println("Proximity removed!!!");\n      Serial.print("Proximity Raw: ");\n      Serial.println(proximity_raw);\n      last_interrupt_state = 0;\n    }\n\n    // don\'t forget to clear the interrupt bits\n    tmg3993.clearProximityInterrupts();\n  }\n  delay(10);\n}\n\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.")),(0,n.kt)("p",null,"You should see something like this in Serial Monitor after you upload the code to Seeeduino."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg2.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example 3")),(0,n.kt)("p",null,"This example reads the R, G, B, C sensor values. C is defined as the non-color filtered clear channel in the chip's datasheet. This examples also calculates Lux value for the ambient light based on the equation in the Application Note of this sensor."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_TMG3993.git"},"Seeed_TMG3993")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3."),' Restart the Arduino IDE. Open the example, the same way as in Example 1, but this time choose "Example3-Color-Light" instead of "Example1". Or copy the following code into Arduino IDE:'))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'\n\n#include <Wire.h>\n\n#include "Seeed_TMG3993.h"\n\nTMG3993 tmg3993;\n\nvoid setup()\n{\n  Serial.begin(9600);\n  Serial.println("TMG3993 Color Example");\n\n  Wire.begin();\n\n  if (tmg3993.initialize() == false)\n  {\n    Serial.println("Device not found. Check wiring.");\n    while (1);\n  }\n  tmg3993.setADCIntegrationTime(0xdb); // the integration time: 103ms\n  tmg3993.enableEngines(ENABLE_PON | ENABLE_AEN | ENABLE_AIEN);\n}\n\nvoid loop()\n{\n  if (tmg3993.getSTATUS() & STATUS_AVALID)\n  {\n    uint16_t r,g,b,c;\n    int32_t lux, cct;\n    tmg3993.getRGBCRaw(&r, &g, &b, &c);\n    lux = tmg3993.getLux(r, g, b, c);\n    //the calculation of CCT is just from the `Application Note`,\n    //from the result of our test, it might have error.\n    cct = tmg3993.getCCT(r, g, b, c);\n\n    Serial.print("RGBC Data: ");\n    Serial.print(r);\n    Serial.print("\\t");\n    Serial.print(g);\n    Serial.print("\\t");\n    Serial.print(b);\n    Serial.print("\\t");\n    Serial.println(c);\n\n    Serial.print("Lux: ");\n    Serial.print(lux);\n    Serial.print("\\tCCT: ");\n    Serial.println(cct);\n    Serial.println("----");\n\n    // don\'t forget to clear the interrupt bits\n    tmg3993.clearALSInterrupts();\n  }\n  delay(100);\n}\n\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.")),(0,n.kt)("p",null,"You should see something like this in Serial Monitor after you upload the code to Seeeduino."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg3.png"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip"},"Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_TMG3993/archive/master.zip"},"Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/TMG3993.pdf"},"Datasheet TMG39931"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.pdf"},"PDF version WIKI")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);