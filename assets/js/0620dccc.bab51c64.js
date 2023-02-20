"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"Grove - DS1307 RTC (Real Time Clock) for Arduino",title:"Grove - DS1307 RTC (Real Time Clock) for Arduino",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Time/Grove-RTC",id:"Sensor/Grove/Grove_Accessories/Time/Grove-RTC",title:"Grove - DS1307 RTC (Real Time Clock) for Arduino",description:"Grove - DS1307 RTC (Real Time Clock) for Arduino",source:"@site/docs/Sensor/Grove/Grove_Accessories/Time/Grove-RTC.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Time",slug:"/Sensor/Grove/Grove_Accessories/Time/Grove-RTC",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Time/Grove-RTC",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Accessories/Time/Grove-RTC.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"Grove - DS1307 RTC (Real Time Clock) for Arduino",title:"Grove - DS1307 RTC (Real Time Clock) for Arduino",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Motor Driver (TB6612FNG)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG"},next:{title:"Grove - High Precision RTC (Real Time Clock)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Time/Grove_High_Precision_RTC"}},s={},p=[{value:"Pre-reading",id:"pre-reading",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/45d.jpg"})),(0,i.kt)("p",null,"The RTC module is based on the clock chip DS1307, which supports the I2C protocol. It utilizes a Lithium cell battery (CR1225). The clock/calendar provides seconds, minutes, hours, day, date, month, and year. The end of the month date is automatically adjusted for months with fewer than 31 days, including corrections for leap years. The clock operates in either the 24-hour or 12-hour format with AM/PM indicator. And it is valid up to 2100. In order to gain a robust performance, you must put a 3-Volt CR1225 lithium cell in the battery-holder. If you use the primary power only, the module may not work normally, because the crystal may not oscillate."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-RTC-p-758.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    The battery is not included.\n"))),(0,i.kt)("h2",{id:"pre-reading"},"Pre-reading"),(0,i.kt)("p",null,"An introduction of RTC for Arduino is strongly recommended reading ahead if you are not familiar with it:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://blog.seeedstudio.com/blog/2019/11/19/arduino-tutorial-using-ds1307-rtc-with-arduino/",target:"_blank"},(0,i.kt)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2019/11/image-88.png",border:"0"}))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PCB Size: 2.0cm","*","4.0cm"),(0,i.kt)("li",{parentName:"ul"},"Interface: 2.0mm pitch pin header"),(0,i.kt)("li",{parentName:"ul"},"IO Structure: SCL,SDA,VCC,GND"),(0,i.kt)("li",{parentName:"ul"},"ROHS: YES"),(0,i.kt)("li",{parentName:"ul"},"VCC\uff1a3.3~5.5V"),(0,i.kt)("li",{parentName:"ul"},"Logic High Level Input \uff1a2.2~VCC+0.3 V"),(0,i.kt)("li",{parentName:"ul"},"Logic Low Level Input \uff1a-0.3~+0.8 V"),(0,i.kt)("li",{parentName:"ul"},"Battery Voltage\uff1a2.0~3.5 V")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-RTC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/45d_small.jpg"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-RTC-p-758.html"},"Get One Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-RTC to port ",(0,i.kt)("strong",{parentName:"li"},"I2C")," of Grove-Base Shield."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," In order to gain a robust performance, you must put a 3-Volt CR1225 lithium cell in the battery-holder. If you use the primary power only, the module may not work normally, because the crystal may not oscillate.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/arduino_connection.jpg"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If we don't have the base shield, we also can directly connect the Grove-RTC to Arduino board. Please follow below connection.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino_v4"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-RTC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V"),(0,i.kt)("td",{parentName:"tr",align:null},"VCC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"SDA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/RTC_DS1307/archive/master.zip"},"RTC Library"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Create a new Arduino sketch and paste the codes below to it or open the code directly by the path: ",(0,i.kt)("strong",{parentName:"p"},"File -> Example ->RTC->SetTimeAndDisplay"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/library%20example.jpg"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Wire.h>\n#include "DS1307.h"\n\nDS1307 clock;//define a object of DS1307 class\nvoid setup()\n{\n    Serial.begin(9600);\n    clock.begin();\n    clock.fillByYMD(2013,1,19);//Jan 19,2013\n    clock.fillByHMS(15,28,30);//15:28 30"\n    clock.fillDayOfWeek(SAT);//Saturday\n    clock.setTime();//write time to the RTC chip\n}\nvoid loop()\n{\n    printTime();\n}\n    /*Function: Display time on the serial monitor*/\nvoid printTime()\n{\n    clock.getTime();\n    Serial.print(clock.hour, DEC);\n    Serial.print(":");\n    Serial.print(clock.minute, DEC);\n    Serial.print(":");\n    Serial.print(clock.second, DEC);\n    Serial.print("  ");\n    Serial.print(clock.month, DEC);\n    Serial.print("/");\n    Serial.print(clock.dayOfMonth, DEC);\n    Serial.print("/");\n    Serial.print(clock.year+2000, DEC);\n    Serial.print(" ");\n    Serial.print(clock.dayOfMonth);\n    Serial.print("*");\n    switch (clock.dayOfWeek)// Friendly printout the weekday\n    {\n        case MON:\n        Serial.print("MON");\n        break;\n        case TUE:\n        Serial.print("TUE");\n        break;\n        case WED:\n        Serial.print("WED");\n        break;\n        case THU:\n        Serial.print("THU");\n        break;\n        case FRI:\n        Serial.print("FRI");\n        break;\n        case SAT:\n        Serial.print("SAT");\n        break;\n        case SUN:\n        Serial.print("SUN");\n        break;\n    }\n    Serial.println(" ");\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4."),"  Set the time. Change function arguments to current date/time. Please pay attention to arguments' format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'clock.fillByYMD(2013,1,19);//Jan 19,2013\nclock.fillByHMS(15,28,30);//15:28 30"\nclock.fillDayOfWeek(SAT);//Saturday\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5.")," Upload the code and open the serial monitor to receive the sensor's data"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/arduino%20result.png"})),(0,i.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,i.kt)("h4",{id:"hardware-1"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,i.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-RTC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/45d_small.jpg"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-RTC-p-758.html"},"Get One Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-RTC  to ",(0,i.kt)("strong",{parentName:"li"},"I2C")," port of GrovePi_Plus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/rasp_connection.jpg"})),(0,i.kt)("h4",{id:"software-1"},"Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,i.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use this sensor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/GrovePi/Software/Python\npython grove_i2c_rtc.py\n")),(0,i.kt)("p",null,"Here is the code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"#!/usr/bin/env python\n#\n# GrovePi Example for using the Grove I2C RTC (https://www.seeedstudio.com/wiki/Grove_-_RTC)\n#\n# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi\n#\n# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi\n#\n'''\n## License\nThe MIT License (MIT)\nGrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.\nCopyright (C) 2017  Dexter Industries\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n'''\n\nimport time\nimport grovepi\n\n# Connect the Grove Real Time Clock to any I2C port eg. I2C-1\n# Can be found at I2C address 0x68\n# SCL,SDA,VCC,GND\n\nwhile True:\n    try:\n        print(grovepi.rtc_getTime())\n        time.sleep(.5)\n\n    except IOError:\n        print (\"Error\")\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Here is the result."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/rpi_display.jpg",alt:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Demo 2: Grove_rtc")),(0,i.kt)("p",null,"You can also use this demo to show the time in common. Please create grove_rtc.py and copy below codes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    '''\n     * Grove-RTC.py\n     * Demo for Raspberry Pi\n     *\n     * Copyright (c) 2014 seeed technology inc.\n     * Website   \xa0: community.seeedstudio.com/\n     * Author    \xa0: Lambor\n     * Create Time: Nov 2014\n     * Change Log\xa0:\n     *\n     * The MIT License (MIT)\n     *\n     * Permission is hereby granted, free of charge, to any person obtaining a copy\n     * of this software and associated documentation files (the \"Software\"), to deal\n     * in the Software without restriction, including without limitation the rights\n     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n     * copies of the Software, and to permit persons to whom the Software is\n     * furnished to do so, subject to the following conditions:\n     *\n     * The above copyright notice and this permission notice shall be included in\n     * all copies or substantial portions of the Software.\n     *\n     * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n     * THE SOFTWARE.\n     '''\n\n    #!/usr/bin/python\nimport time\nimport smbus\n\n\n    bus = smbus.SMBus(1)    # 0 = /dev/i2c-0 (port I2C0), 1 = /dev/i2c-1 (port I2C1)   \n\nclass DS1307():     \n        def __init__(self):\n            self.MON = 1\n            self.TUE = 2\n            self.WED = 3\n            self.THU = 4\n            self.FRI = 5\n            self.SAT = 6\n            self.SUN = 7\n            self.DS1307_I2C_ADDRESS = 0x68\n\n            print 'begin'\n\n        def decToBcd(self, val):\n            return ( (val/10*16) + (val%10) )\n\n        def bcdToDec(self,  val):\n            return ( (val/16*10) + (val%16) )\n\n        def begin(self, news):\n            print news\n\n        def startClock(self):   \n            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)\n            self.second = bus.read_byte(self.DS1307_I2C_ADDRESS) & 0x7f\n            bus.write_byte_data(self.DS1307_I2C_ADDRESS, 0x00, self.second)\n\n            print 'startClock..'\n\n        def stopClock(self):                        \n            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)\n            self.second = bus.read_byte(self.DS1307_I2C_ADDRESS) | 0x80\n            bus.write_byte_data(self.DS1307_I2C_ADDRESS, 0x00, self.second)         \n\n            print 'stopClock..'\n\n        def setTime(self):\n            data = [self.decToBcd(self.second), self.decToBcd(self.minute), \\\n                    self.decToBcd(self.hour), self.decToBcd(self.dayOfWeek), \\\n                    self.decToBcd(self.dayOfMonth), self.decToBcd(self.month), \\\n                    self.decToBcd(self.year)]\n\n            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)\n            bus.write_i2c_block_data(self.DS1307_I2C_ADDRESS,0x00,data)\n\n            print 'setTime..'\n\n        def getTime(self):\n            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)\n            data = bus.read_i2c_block_data(self.DS1307_I2C_ADDRESS,0x00)\n            #A few of these need masks because certain bits are control bits\n            self.second = self.bcdToDec(data[0] & 0x7f)\n            self.minute = self.bcdToDec(data[1])\n            self.hour = self.bcdToDec(data[2] & 0x3f)  #Need to change this if 12 hour am/pm\n            self.dayOfWeek = self.bcdToDec(data[3])\n            self.dayOfMonth = self.bcdToDec(data[4])\n            self.month = self.bcdToDec(data[5])\n            self.year = self.bcdToDec(data[6])\n\n            print 'getTime..'\n\n        def fillByHMS(self, _hour,  _minute,  _second):\n            self.hour = _hour\n            self.minute = _minute\n            self.second = _second\n\n            print 'fillByHMS..'\n\n        def fillByYMD(self, _year,  _month,  _day):     \n            self.year = _year - 2000\n            self.month = _month;\n            self.dayOfMonth = _day\n\n            print 'fillByYMD..'\n\n        def fillDayOfWeek(self,  _dow):     \n            self.dayOfWeek = _dow\n\n            print 'fillDayOfWeek..'\n\n    if __name__ == \"__main__\":\n        clock = DS1307()\n        clock.fillByYMD(2015,3,5)\n        clock.fillByHMS(12,42,30)\n        clock.fillDayOfWeek(clock.THU)  \n        clock.setTime()\n        while True:     \n            clock.getTime()\n            print clock.hour, \":\", clock.minute, \":\", \\\n                    clock.second, \" \", clock.dayOfMonth, \"/\", \\\n                    clock.month, \"/\", clock.year,\"  \", \"weekday\", \\\n                    \":\", clock.dayOfWeek            \n            time.sleep(1)\n")),(0,i.kt)("p",null," Excute below commands to use this sensor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    sudo python grove_rtc.py\n")),(0,i.kt)("p",null,"Here is the result."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-RTC/img/rpi_display2.jpg"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip"},"Grove-RTC in Eagle format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-RTC/res/Grove%20-%20RTC%20v1.1%20Sch.pdf"},"Grove-RTC Schematic in PDF format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-RTC/res/Grove%20-%20RTC%20v1.1%20PCB.pdf"},"Grove-RTC PCB in PDF format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/RTC_DS1307/archive/master.zip"},"Github repository for RTC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-RTC/res/DS1307.pdf"},"DS1307 Datasheet"))),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using a Real Time Clock With Arduino"),": Ever wanted to make a project that activated on a schedule? Using a Real Time Clock (RTC) is a great way to do it!"),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/robotgeek-projects-team/using-a-real-time-clock-with-arduino-6b3896/embed",width:"350"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Colorful Clock"),": A clock that shows your energy level and greets you when you approach"),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/zou-wei/colorful-clock-4cea6b/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);