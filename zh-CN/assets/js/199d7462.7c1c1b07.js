"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Grove-GPS",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-GPS/",last_update:{date:"01/06/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS",id:"Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS",title:"Grove-GPS",description:"This Grove - GPS module is a cost-efficient and field-programmable gadget armed with a SIM28 (u-blox 6 is the old version) and serial communication configuration. It features 22 tracking / 66 acquisition channels GPS receiver. The sensitivity of tracking and acquisition both reach up to -160dBm, making it a great choice for personal navigation projects and location services, as well as an outstanding one among products of the same price class.",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/Communication",slug:"/Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"2022\u5e741\u67086\u65e5",frontMatter:{title:"Grove-GPS",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-GPS/",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove-125KHz_RFID_Reader",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors_Network/Communication/Grove-125KHz_RFID_Reader"},next:{title:"Grove-GPS-Air530",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS-Air530"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"SIM28 module Note:",id:"sim28-module-note",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/Grove-GPS.jpg"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null),(0,n.kt)("i",null))),(0,n.kt)("p",null,"This Grove - GPS module is a cost-efficient and field-programmable gadget armed with a SIM28 (u-blox 6 is the old version) and serial communication configuration. It features 22 tracking / 66 acquisition channels GPS receiver. The sensitivity of tracking and acquisition both reach up to -160dBm, making it a great choice for personal navigation projects and location services, as well as an outstanding one among products of the same price class."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-gps-p-959.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"  We've released the [Seeed GPS Modules Selection Guide](https://wiki.seeedstudio.com/GPS-Modules-Selection-Guide/), it will help you choose the GPS Module that best suits your needs.\n"))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - GPS V1.2"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 2015")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supports NMEA and u-blox 6 protocols. ( Till Jan,10 2014, after that SIM28 instead)"),(0,n.kt)("li",{parentName:"ul"},"Low power consumption"),(0,n.kt)("li",{parentName:"ul"},"Baud rates configurable"),(0,n.kt)("li",{parentName:"ul"},"Grove compatible interface")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Parameter")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Range/Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3/5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BaudRate"),(0,n.kt)("td",{parentName:"tr",align:null},"4800 - 57600(u-blox version)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BaudRate"),(0,n.kt)("td",{parentName:"tr",align:null},"9600 - 115200(SIM28 version)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Default BaudRate"),(0,n.kt)("td",{parentName:"tr",align:null},"9600")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,"This sample simply reads from the GPS by using software serial and sends it back on the serial port."),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - GPS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-GPS-p-959.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - GPS to port ",(0,n.kt)("strong",{parentName:"li"},"D2")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/with_ardu.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect Grove - GPS to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - GPS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D3"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D2"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"Please note that the u-center software is for windows only.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Install ",(0,n.kt)("a",{parentName:"li",href:"https://www.u-blox.com/en/product/u-center-windows"},"u-center")," software."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"#include <SoftwareSerial.h>\nSoftwareSerial SoftSerial(2, 3);\nunsigned char buffer[64];                   // buffer array for data receive over serial port\nint count=0;                                // counter for buffer array\nvoid setup()\n{\n    SoftSerial.begin(9600);                 // the SoftSerial baud rate\n    Serial.begin(9600);                     // the Serial port of Arduino baud rate.\n}\n\nvoid loop()\n{\n    if (SoftSerial.available())                     // if date is coming from software serial port ==> data is coming from SoftSerial shield\n    {\n        while(SoftSerial.available())               // reading data into char array\n        {\n            buffer[count++]=SoftSerial.read();      // writing data into array\n            if(count == 64)break;\n        }\n        Serial.write(buffer,count);                 // if no data transmission ends, write buffer to hardware serial port\n        clearBufferArray();                         // call clearBufferArray function to clear the stored data from the array\n        count = 0;                                  // set counter of while loop to zero\xa0\n    }\n    if (Serial.available())                 // if data is available on hardware serial port ==> data is coming from PC or notebook\n    SoftSerial.write(Serial.read());        // write it to the SoftSerial shield\n}\n\n\nvoid clearBufferArray()                     // function to clear buffer array\n{\n    for (int i=0; i<count;i++)\n    {\n        buffer[i]=NULL;\n    }                      // clear all index of array with command NULL\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Open U-center.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Click Receiver -> Port and select the COM port that the Arduino is using.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Click Receiver -> Baudrate and make sure 9600 is selected.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Click View -> Text Console and you should get a window that will stream NMEA data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," Open the serial monitor,You can see as show below:"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We also can view data in Google Earth:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Click File -",">"," Database Export -",">"," Google Earth KML")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," This should launch Google Earth with the history that was captured by u-center.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Alternatively, data can be recorded by pressing the red circle on the toolbar which will then ask where you want to save the record.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," When we have captured enough data, click the black square to stop recording.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," We can then convert the .ubx file generated to KML by using uploading the ubx file to ",(0,n.kt)("a",{parentName:"p",href:"http://www.gpsvisualizer.com/"},"GPSVisualizer"),"."))),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - GPS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/grove-gps-p-959.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug the sensor to grovepi+ socket ",(0,n.kt)("strong",{parentName:"li"},"RPISER")," by using a grove cable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/witu_rpi.jpg",alt:null})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to the demos' directory:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\ncd GrovePi/Software/Python/grove_gps\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," To see the code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'nano grove_gps_data.py   # "Ctrl+x" to exit #\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'import serial, time\nimport smbus\nimport math\nimport RPi.GPIO as GPIO\nimport struct\nimport sys\n#import ir_receiver_check\n\nenable_debug=1\nenable_save_to_file=0\n\n#if ir_receiver_check.check_ir():\n#   print("Disable IR receiver before continuing")\n#   exit()\n    \nser = serial.Serial(\'/dev/ttyAMA0\',  9600, timeout = 0) #Open the serial port at 9600 baud\nser.flush()\n\ndef cleanstr(in_str):\n    out_str = "".join([c for c in in_str if c in "0123456789.-" ])\n    if len(out_str)==0:\n        out_str = "-1"\n    return out_str\n\ndef safefloat(in_str):\n    try:\n        out_str = float(in_str)\n    except ValueError:\n        out_str = -1.0\n    return out_str\n\nclass GPS:\n    #The GPS module used is a Grove GPS module https://www.seeedstudio.com/depot/Grove-GPS-p-959.html\n    inp=[]\n    # Refer to SIM28 NMEA spec file https://www.seeedstudio.com/wiki/images/a/a0/SIM28_DATA_File.zip\n    GGA=[]\n\n\n    #Read data from the GPS\n    def read(self): \n        while True:\n            GPS.inp=ser.readline()\n            if GPS.inp[:6] ==\'$GPGGA\': # GGA data , packet 1, has all the data we need\n                break\n            time.sleep(0.1)     #without the cmd program will crash\n        try:\n            ind=GPS.inp.index(\'$GPGGA\',5,len(GPS.inp))  #Sometimes multiple GPS data packets come into the stream. Take the data only after the last \'$GPGGA\' is seen\n            GPS.inp=GPS.inp[ind:]\n        except ValueError:\n            print ("")\n        GPS.GGA=GPS.inp.split(",")  #Split the stream into individual parts\n        return [GPS.GGA]\n        \n    #Split the data into individual elements\n    def vals(self):\n        if enable_debug:\n            print(GPS.GGA)\n            \n        time=GPS.GGA[1]\n        \n        if GPS.GGA[2]==\'\':  # latitude. Technically a float\n            lat =-1.0\n        else:\n            lat=safefloat(cleanstr(GPS.GGA[2]))\n        \n        if GPS.GGA[3]==\'\':  # this should be either N or S\n            lat_ns=""\n        else:\n            lat_ns=str(GPS.GGA[3])\n            \n        if  GPS.GGA[4]==\'\':  # longitude. Technically a float\n            long=-1.0\n        else:\n            long=safefloat(cleanstr(GPS.GGA[4]))\n        \n        if  GPS.GGA[5]==\'\': # this should be either W or E\n            long_ew=""\n        else:\n            long_ew=str(GPS.GGA[5])\n            \n        fix=int(cleanstr(GPS.GGA[6]))\n        sats=int(cleanstr(GPS.GGA[7]))\n        \n        if  GPS.GGA[9]==\'\':\n            alt=-1.0\n        else:\n            # change to str instead of float\n            # 27"1 seems to be a valid value\n            alt=str(GPS.GGA[9])\n        return [time,fix,sats,alt,lat,lat_ns,long,long_ew]\n    \n    # Convert to decimal degrees\n    def decimal_degrees(self, raw_degrees):\n        try:\n            degrees = float(raw_degrees) // 100\n            d = float(raw_degrees) % 100 / 60\n            return degrees + d\n        except: \n            return raw_degrees\n\n\nif __name__ == "__main__":\n    g=GPS()\n    if enable_save_to_file:\n        f=open("gps_data.csv",\'w\')  #Open file to log the data\n        f.write("name,latitude,longitude\\n")    #Write the header to the top of the file\n    ind=0\n    while True:\n        time.sleep(0.01)\n        try:\n            x=g.read()  #Read from GPS\n            [t,fix,sats,alt,lat,lat_ns,longitude,long_ew]=g.vals()  #Get the individial values\n                \n            # Convert to decimal degrees\n            if lat !=-1.0:\n                lat = g.decimal_degrees(safefloat(lat))\n                if lat_ns == "S":\n                    lat = -lat\n\n            if longitude !=-1.0:\n                longitude = g.decimal_degrees(safefloat(longitude))\n                if long_ew == "W":\n                    longitude = -longitude\n                    \n            # print ("Time:",t,"Fix status:",fix,"Sats in view:",sats,"Altitude",alt,"Lat:",lat,lat_ns,"Long:",long,long_ew)\n            try:\n                print("Time\\t\\t: %s\\nFix status\\t: %d\\nSats in view\\t: %d\\nAltitude\\t: %s\\nLat\\t\\t: %f\\nLong\\t\\t: %f") %(t,fix,sats,alt,lat,longitude)\n            except:\n                print("Time\\t\\t: %s\\nFix status\\t: %s\\nSats in view\\t: %s\\nAltitude\\t: %s\\nLat\\t\\t: %s\\nLong\\t\\t: %s") %(t,str(fix),str(sats),str(alt),str(lat),str(longitude))\n                \n            s=str(t)+","+str(safefloat(lat)/100)+","+str(safefloat(longitude)/100)+"\\n" \n                \n            if enable_save_to_file:\n                f.write(s)  #Save to file\n            time.sleep(2)\n        except IndexError:\n            print ("Unable to read")\n        except KeyboardInterrupt:\n            if enable_save_to_file:\n                f.close()\n            print ("Exiting")\n            sys.exit(0)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Run the demo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python grove_gps_data.py\n")),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"GPS is better used outdoors. It is recommended to put your raspberry pi outside the window or any place outdoors."),(0,n.kt)("h2",{id:"sim28-module-note"},"SIM28 module Note:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Grove-GPS  has change the module as SIM28 which the same footprint as origin version."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," We should use ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip"},'"SIMCom GPS DEMO"')," tools to receive SIM28 module data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Open SIMCom_GPS_DEMO tools, go to Module->properties->module->select SIM28."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," SIMCom_GPS_DEMO_V1.07 is for Windows only.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_select.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Open SIMCom_GPS_DEMO tools, go to Module->connect. Select the serial port which the GPS module used.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_tools_pannel.jpg",alt:null})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip"},"Grove-GPS Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.pdf"},"GPS Schematic(PDF)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf"},"E-1612-UB Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/U-blox-6-Receiver-Description-Including-Protocol-Specification.zip"},"U-Blox6 Receiver Description Protocol Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Software]")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.u-blox.com/en/product/u-center-windows"},"U-Blox u-center GPS evaluation software")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Document]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/SIM28_DATA_File.zip"},"SIM28","_","DATA","_","File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Document]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip"},"SIMCom","_","GPS","_","DEMO","_","V1.07"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Project of GPS/GPRS Tracker"),": In this new project we will present our GPS Tracker connected using the GPRS technique and MQTT protocol."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);