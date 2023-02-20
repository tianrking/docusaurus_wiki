"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),g=a,c=h["".concat(s,".").concat(g)]||h[g]||u[g]||r;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={description:"Wio Terminal Storing Data",title:"Wio Terminal Storing Data",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Wio Terminal displaying and storing analog data",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Storting-Analog-Data",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Storting-Analog-Data",title:"Wio Terminal Storing Data",description:"Wio Terminal Storing Data",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Storting-Analog-Data.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Storting-Analog-Data",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Storting-Analog-Data",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Storting-Analog-Data.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Wio Terminal Storing Data",title:"Wio Terminal Storing Data",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal Displaying Gyro",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Gyro"},next:{title:"Wio Terminal Displaying Photos",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Photos"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Code",id:"code",level:2},{value:"Complete code",id:"complete-code",level:2}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-displaying-and-storing-analog-data"},"Wio Terminal displaying and storing analog data"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This example demonstrates using the line graph functions to display the Grove - Light sensor reading on Wio Terminal, just like the Serial Plotter! To add more, the light sensor data are stored in the SD Card."),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reading Light sensor values and plotting into a line graph")),(0,a.kt)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the Line Chart library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_Linechart"),", please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the SD Library, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/"},"FS")," for more information."))),(0,a.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It is highly recommended to read through ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," first and before trying out this example code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip"},(0,a.kt)("inlineCode",{parentName:"a"},"LightReadings.ino"))," file and upload to your Wio Terminal through ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),". Make sure you installed all the libraries.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the brightness of surroundings and see the changes in the linegraph!")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The analog reading can be found in the SD Card in ",(0,a.kt)("inlineCode",{parentName:"p"},"Readings.txt")))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialize LCD and Analog port"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg"})),(0,a.kt)("p",null,"As we can see, Wio Terminal has two Grove ports, one is default I2C port and the other is configurable Digital D0, D1 or Analog A0 and A1 ports, as well as UART ports. In this case, analog port is needed so defined as analog input."),(0,a.kt)("p",null,"Also, initializing the SD Card as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n#include"seeed_line_chart.h" //include the library\n\nFile myFile;\nTFT_eSPI tft;\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\n#define max_size 30 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nint brightness;\n\nvoid setup() {\n    Serial.begin(115200);\n    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        Serial.println("initialization failed!");\n        while(1);\n  }\n    pinMode(A0, INPUT);\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reading sensor values and loading data"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n    spr.fillSprite(TFT_WHITE);\n    brightness = analogRead(A0);\n    int brightness = analogRead(LIGHT); //Reading light sensor values\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(brightness); //Storing light sensor values\n    saveData(); //Saving data to SD card\n    ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Title configurations"))),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//Settings for the line graph title\nauto header =  text(0, 0)\n            .value("Light Sensor Readings")\n            .align(center)\n            .valign(vcenter)\n            .width(tft.width())\n            .thickness(2);\n\nheader.height(header.font_height() * 2);\nheader.draw(); //Header height is the twice the height of the font\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Line Chart configurations"))),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"//Settings for the line graph\nauto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n        content\n            .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n            .width(tft.width() - content.x() * 2) //actual width of the line chart\n            .based_on(0.0) //Starting point of y-axis, must be a float\n            .show_circle(false) //drawing a cirle at each point, default is on.\n            .value(data) //passing through the data to line graph\n            .color(TFT_RED) //Setting the color for the line\n            .draw();\n\nspr.pushSprite(0, 0);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Writing Data to SD Card"))),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-ReadWrite/"},"Reading/Writing from the SD Card")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'void saveData(){\n     myFile = SD.open("Readings.txt",FILE_APPEND);\n     brightness = analogRead(A0);\n     Serial.println(brightness);\n     myFile.println(brightness);\n     myFile.close();\n}\n')),(0,a.kt)("h2",{id:"complete-code"},"Complete code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'##include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n#include"seeed_line_chart.h" //include the library\n\nFile myFile;\nTFT_eSPI tft;\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\n#define max_size 30 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nint brightness;\n\nvoid setup() {\n    Serial.begin(115200);\n    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        Serial.println("initialization failed!");\n        while(1);\n  }\n    pinMode(A0, INPUT);\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_WHITE);\n    brightness = analogRead(A0);\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(brightness); //read variables and store in data\n    saveData();\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("Light Sensor Readings")\n                .align(center)\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(2);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(false) //drawing a cirle at each point, default is on.\n                .value(data) //passing through the data to line graph\n                .color(TFT_RED) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n}\n\nvoid saveData(){\n     myFile = SD.open("Readings.txt",FILE_APPEND);\n     brightness = analogRead(A0);\n     Serial.println(brightness);\n     myFile.println(brightness);\n     myFile.close();\n}\n')))}h.isMDXComponent=!0}}]);