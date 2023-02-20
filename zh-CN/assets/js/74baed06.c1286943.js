"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - Water Level Sensor",title:"Grove - Water Level Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/6/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Liquid/Grove-Water-Level-Sensor",id:"Sensor/Grove/Grove_Sensors/Liquid/Grove-Water-Level-Sensor",title:"Grove - Water Level Sensor",description:"Grove - Water Level Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water-Level-Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Liquid",slug:"/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water-Level-Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water-Level-Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water-Level-Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - Water Level Sensor",title:"Grove - Water Level Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Water Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water_Sensor"},next:{title:"Grove - PH Sensor Kit (E-201C-Blue)",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Liquid/Grove-PH-Sensor-kit"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"FAQ",id:"faq",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-wiki.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"The Grove Water Level Sensor is a very accurate sensor that can be helpful in water level sensing applications. It is completely waterproof and uses capacitive pads to detect water levels up to 10cm."),(0,a.kt)("p",null,"We used capacitive pads on the PCB of the module and did conformal coating over the PCB to make the sensor protect against moisture, dust, chemicals and high temperatures. We believe that this technique will allow you to make accurate water level measurements (\xb15mm accuracy) easily."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy to use (Use Grove Connector without soldering)"),(0,a.kt)("li",{parentName:"ul"},"Based on capacitive sensing"),(0,a.kt)("li",{parentName:"ul"},"Waterproof"),(0,a.kt)("li",{parentName:"ul"},"Conformal Coating"),(0,a.kt)("li",{parentName:"ul"},"Corrosion Resistant"),(0,a.kt)("li",{parentName:"ul"},"Detect up to 10cm water levels"),(0,a.kt)("li",{parentName:"ul"},"I2C Interface")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Measurement Accuracy"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb15mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Working Temperature Range"),(0,a.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 105\xb0C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"I2C Addresses"),(0,a.kt)("td",{parentName:"tr",align:null},"0x78 and 0x77")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"I2C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,a.kt)("td",{parentName:"tr",align:null},"20mm x 133mm")))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("p",{style:{}},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg"}))))),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("p",{style:{}},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png"}))))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials required")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Water Level Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html"},"Get ONE Now"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Plug Grove - Water Level Sensor to ",(0,a.kt)("strong",{parentName:"p"},"I2C")," port of Grove - Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to a PC via a USB cable."))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Connection.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1."),"  Open the Arduino IDE and create a new file, then copy the following code into the new file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'#include <Wire.h>\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n#define SERIAL SerialUSB\n#else\n#define SERIAL Serial\n#endif\n\nunsigned char low_data[8] = {0};\nunsigned char high_data[12] = {0};\n\n\n#define NO_TOUCH       0xFE\n#define THRESHOLD      100\n#define ATTINY1_HIGH_ADDR   0x78\n#define ATTINY2_LOW_ADDR   0x77\n\nvoid getHigh12SectionValue(void)\n{\n  memset(high_data, 0, sizeof(high_data));\n  Wire.requestFrom(ATTINY1_HIGH_ADDR, 12);\n  while (12 != Wire.available());\n\n  for (int i = 0; i < 12; i++) {\n    high_data[i] = Wire.read();\n  }\n  delay(10);\n}\n\nvoid getLow8SectionValue(void)\n{\n  memset(low_data, 0, sizeof(low_data));\n  Wire.requestFrom(ATTINY2_LOW_ADDR, 8);\n  while (8 != Wire.available());\n\n  for (int i = 0; i < 8 ; i++) {\n    low_data[i] = Wire.read(); // receive a byte as character\n  }\n  delay(10);\n}\n\nvoid check()\n{\n  int sensorvalue_min = 250;\n  int sensorvalue_max = 255;\n  int low_count = 0;\n  int high_count = 0;\n  while (1)\n  {\n    uint32_t touch_val = 0;\n    uint8_t trig_section = 0;\n    low_count = 0;\n    high_count = 0;\n    getLow8SectionValue();\n    getHigh12SectionValue();\n\n    Serial.println("low 8 sections value = ");\n    for (int i = 0; i < 8; i++)\n    {\n      Serial.print(low_data[i]);\n      Serial.print(".");\n      if (low_data[i] >= sensorvalue_min && low_data[i] <= sensorvalue_max)\n      {\n        low_count++;\n      }\n      if (low_count == 8)\n      {\n        Serial.print("      ");\n        Serial.print("PASS");\n      }\n    }\n    Serial.println("  ");\n    Serial.println("  ");\n    Serial.println("high 12 sections value = ");\n    for (int i = 0; i < 12; i++)\n    {\n      Serial.print(high_data[i]);\n      Serial.print(".");\n\n      if (high_data[i] >= sensorvalue_min && high_data[i] <= sensorvalue_max)\n      {\n        high_count++;\n      }\n      if (high_count == 12)\n      {\n        Serial.print("      ");\n        Serial.print("PASS");\n      }\n    }\n\n    Serial.println("  ");\n    Serial.println("  ");\n\n    for (int i = 0 ; i < 8; i++) {\n      if (low_data[i] > THRESHOLD) {\n        touch_val |= 1 << i;\n\n      }\n    }\n    for (int i = 0 ; i < 12; i++) {\n      if (high_data[i] > THRESHOLD) {\n        touch_val |= (uint32_t)1 << (8 + i);\n      }\n    }\n\n    while (touch_val & 0x01)\n    {\n      trig_section++;\n      touch_val >>= 1;\n    }\n    SERIAL.print("water level = ");\n    SERIAL.print(trig_section * 5);\n    SERIAL.println("% ");\n    SERIAL.println(" ");\n    SERIAL.println("*********************************************************");\n    delay(1000);\n  }\n}\n\nvoid setup() {\n  SERIAL.begin(115200);\n  Wire.begin();\n}\n\nvoid loop()\n{\n  check();\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Upload the demo. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Open the ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,a.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,a.kt)("strong",{parentName:"p"},"115200"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," The result should be like this when the sensor is in water:"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Result.gif"})),(0,a.kt)("h3",{id:"faq"},"FAQ"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q1#")," Useful Applications?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A1:")," Here provides a simple application using the ",(0,a.kt)("strong",{parentName:"p"},"Grove - Water Level Sensor")," with ",(0,a.kt)("strong",{parentName:"p"},"Buzzer")," and ",(0,a.kt)("strong",{parentName:"p"},"LED module")," for water level detecting. Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/water-level-sensor-demo.ino"},"full code")," here."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/101020635/img/water%20level.2020-01-17%2018_27_47.gif",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip"},"Grove - Water Level Sensor (10CM) Schematic file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/ATtiny1616-1617-Automotive-Data-Sheet.pdf"},"ATtiny1616-1617-Automotive-Data-Sheet"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);