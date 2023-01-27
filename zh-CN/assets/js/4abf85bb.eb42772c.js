"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67010],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(i),h=o,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return i?n.createElement(g,a(a({ref:t},d),{},{components:i})):n.createElement(g,a({ref:t},d))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=i.length,a=new Array(l);a[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,a[1]=r;for(var p=2;p<l;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},68989:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const l={description:"Motion Recognition based on Edge Impulse",title:"Motion Recognition based on Edge Impulse",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="Motion Recognition",r={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI",title:"Motion Recognition based on Edge Impulse",description:"Motion Recognition based on Edge Impulse",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Motion Recognition based on Edge Impulse",title:"Motion Recognition based on Edge Impulse",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Speech Recognition",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-TensorFLow_Lite/XIAO-BLE-Sense-TFLite-Mic"},next:{title:"Getting Started with Seeed Studio XIAO ESP32C3",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started"}},s={},p=[{value:"Materials Required",id:"materials-required",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Get started",id:"get-started",level:2},{value:"Check the position of light guide plastic fiber",id:"check-the-position-of-light-guide-plastic-fiber",level:3},{value:"Check the circuit connection",id:"check-the-circuit-connection",level:3},{value:"Check the accelerometer",id:"check-the-accelerometer",level:3},{value:"Motion Recognition on Seeed Studio XIAO nRF52840 connected with Edge Impulse",id:"motion-recognition-on-seeed-studio-xiao-nrf52840-connected-with-edge-impulse",level:2},{value:"Resources",id:"resources",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"motion-recognition"},"Motion Recognition"),(0,o.kt)("p",null,"In this wiki, we will show you how to utilize the accelerometer on Seeed Studio XIAO nRF52840 Sense combined with Edge Impulse to enable motion recognition. The codes we present here are supported by latest version of Seeed nRF52 Boards."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'When it comes to embedded AI applications, we highly recommend using the "Seeed nrf52 mbed-enabled Boards Library".')),(0,o.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/hLKKorpDlYw",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.kt)("h2",{id:"materials-required"},"Materials Required"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,"In this wiki, we need to prepare the following materials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840 Sense")),(0,o.kt)("li",{parentName:"ul"},"Li-po battery (702025)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html"},'Grove - OLED Display 0.66"')),(0,o.kt)("li",{parentName:"ul"},"Dupont cables or Grove cables"),(0,o.kt)("li",{parentName:"ul"},"3D-printed shell"),(0,o.kt)("li",{parentName:"ul"},"Light guide plastic fiber")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Set up")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 1"),'. Remove the Grove base on Grove - OLED Display 0.66" with a soldering iron')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2"),". Use wire cutters to process the DuPont cables to a length of about 3 cm and expose the inner cables of about 2 mm at both ends")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3"),". Pass the fiber through the small hole in the front and place the end at the LED")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 4"),".  Solder Seeed Studio XIAO nRF52840 Sense with other elements according to the diagram below:"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("admonition",{title:":",type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"It will be better if you use hot melt adhesive to reinforce welds.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 6"),". Assemble all components:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Pass the fiber through the small hole in the front of shell"),(0,o.kt)("li",{parentName:"ol"},"Mount the screen to the fixed location"),(0,o.kt)("li",{parentName:"ol"},"Sandwich the battery between Seeed Studio XIAO nRF52840 and screen"),(0,o.kt)("li",{parentName:"ol"},"Handle the wires carefully"),(0,o.kt)("li",{parentName:"ol"},"Place the end of light guide plastic fiber at the RGB light of Seeed Studio XIAO nRF52840 and cut off the excess"),(0,o.kt)("li",{parentName:"ol"},"Assemble the case")))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("p",null,"The assemble one:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("p",null,"The required libraries are listed below. It is highly recommanded that use the codes here to check whether the hardware is functioning well. If you have problem about installing the library, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"here"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip"},"Seeed_Arduino_LSM6DS3-master")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip"},"U8g2"))),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"First we are going run some demos to check whether the board and the display screen is functioning well. If yours are fine, you can move on to the next instruction."),(0,o.kt)("h3",{id:"check-the-position-of-light-guide-plastic-fiber"},"Check the position of light guide plastic fiber"),(0,o.kt)("p",null,"Follow this ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/#getting-started"},"tutorial")," and run Blink demo.\nIf you see the red light in the front hole, it means success."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition7.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("h3",{id:"check-the-circuit-connection"},"Check the circuit connection"),(0,o.kt)("p",null,"Open the Arduino IDE, navigate to Sketch -> Include Library -> Manage Libraries... and Search and Install ",(0,o.kt)("inlineCode",{parentName:"p"},"U8g2 library")," in the Library Manager."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("p",null,"After the installation, copy the following code run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Arduino.h>\n#include <U8x8lib.h>\n \n// U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);\n U8X8_SSD1306_64X48_ER_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE); \n// U8X8_SSD1306_64X32_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);\n \n// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display\n \nvoid setup(void) {\n  u8x8.begin();\n  //u8x8.setFlipMode(2);   // set number from 1 to 3, the screen word will rotary 180\n}\n \nvoid loop(void) {\n      u8x8.setFont(u8x8_font_amstrad_cpc_extended_r);\n      u8x8.drawString(0,0,"idle");\n      u8x8.drawString(0,1,"left");\n      u8x8.drawString(0,2,"right");\n      u8x8.drawString(0,3,"up&down");   \n} \n')),(0,o.kt)("p",null,"After uploading the code and unplugging Seeed Studio XIAO nRF52840, if you see the same result, it means success."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("h3",{id:"check-the-accelerometer"},"Check the accelerometer"),(0,o.kt)("p",null,"Upload the code below through Arduino IDE to Seeed Studio XIAO nRF52840:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'#include "LSM6DS3.h"\n#include "Wire.h"\n\n//Create a instance of class LSM6DS3\nLSM6DS3 myIMU(I2C_MODE, 0x6A);    //I2C device address 0x6A\n\n\n#define CONVERT_G_TO_MS2    9.80665f\n#define FREQUENCY_HZ        50\n#define INTERVAL_MS         (1000 / (FREQUENCY_HZ + 1))\n\nstatic unsigned long last_interval_ms = 0;\n\nvoid setup() {\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    while (!Serial);\n    //Call .begin() to configure the IMUs\n    if (myIMU.begin() != 0) {\n        Serial.println("Device error");\n    } else {\n        Serial.println("Device OK!");\n    }\n}\n\nvoid loop() {\n\n    if (millis() > last_interval_ms + INTERVAL_MS) {\n        last_interval_ms = millis();\n\n        Serial.print(myIMU.readFloatGyroX() * CONVERT_G_TO_MS2,4);\n        Serial.print(\'\\t\');\n        Serial.print(myIMU.readFloatGyroY() * CONVERT_G_TO_MS2,4);\n        Serial.print(\'\\t\');\n        Serial.println(myIMU.readFloatGyroZ() * CONVERT_G_TO_MS2,4);\n    }\n}\n')),(0,o.kt)("p",null,"Open the serial monitor to check the output:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9a.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("p",null,"If all is fine, we can move on and connect Seeed Studio XIAO nRF52840 to Edge Impulse."),(0,o.kt)("h2",{id:"motion-recognition-on-seeed-studio-xiao-nrf52840-connected-with-edge-impulse"},"Motion Recognition on Seeed Studio XIAO nRF52840 connected with Edge Impulse"),(0,o.kt)("p",null,"The precision of the training model is very important to the final result. If your output training results are as low as less than 65%, we highly recommand you train for more times."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Create a new project in ",(0,o.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/"},"Edge Impulse"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2."),' Choose "Accelerometer data" and click "Let\u2019s get started!"')),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/cli-installation"},"Edge Impulse CLI")," in your computer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Run the command in your ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"powershell")," to start it."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"edge-impulse-data-forwarder\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," We need to use the CLI to connect the Seeed Studio XIAO nRF52840 Sense with Edge Impulse. First, login your account and choose your project")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Name the accelerometer and the device."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'Move back to Edge Impulse "Data acquisition" page, the outcome should be like this if the connection is successful. You can find the Device of "Seeed Studio XIAO nRF52840 Sense" is shown on the right of the page. '),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 6."),'  Select the sensor as "3 axes". Name your label as ',(0,o.kt)("inlineCode",{parentName:"li"},"up")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"down"),", modify Sample length (ms.) to 20000 and click start sampling.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 7.")," Swing the Seeed Studio XIAO nRF52840 Sense up and down and keep the motion for 20 seconds. You can find the acquistion is shown up like this:")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 8."),' Split the data by clicking the raw data right top and choose "Split Sample". Click +Add Segment and then click the graph. Repeat it more than 20 time to add segments. Click Split and you will see the the sample data each for 1 second.')),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 9.")," Repeat ",(0,o.kt)("strong",{parentName:"li"},"Step 7.")," and ",(0,o.kt)("strong",{parentName:"li"},"Step 8.")," and label data with different name to click different motion data, like ",(0,o.kt)("inlineCode",{parentName:"li"},"left")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"clockwise"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"anticlockwise")," and so on. The example provided is classifying up and down, left and right, and circle. You can change it as you may want to change here.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("admonition",{title:":",type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," In Step 8. the split time is 1 second which means you at least do one swing of up and down in one second in Step 7. Otherwise, the results will not be accurate. Meanwhile, you can adjust the split time according to your own motion speed.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 10.")," Rebalance the dataset, Click ",(0,o.kt)("strong",{parentName:"li"},"Dashboard")," and drop down page to find ",(0,o.kt)("strong",{parentName:"li"},"Perform train")," / ",(0,o.kt)("strong",{parentName:"li"},"test split"))),(0,o.kt)("p",null,"Click Perform train / test split and choose Yes and confirm it"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 11.")," Create Impulse")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Create impulse")," -> Add a processing block -> Choose ",(0,o.kt)("strong",{parentName:"p"},"Spectral Analysis")," -> Add a learning block -> Choose ",(0,o.kt)("strong",{parentName:"p"},"Classification (Keras)")," -> Save Impulse"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 12.")," Spectral features")),(0,o.kt)("p",null,"Click and Set up"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Spectral features")," -> Drop down page to click Save parameters -> Click ",(0,o.kt)("strong",{parentName:"p"},"Generate features")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"The output page should be like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 13.")," Training your model")),(0,o.kt)("p",null,"Click NN Classifier -> Click Start training -> Choose Unoptimized (float32)"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 14.")," Model testing")),(0,o.kt)("p",null,"Click Model testing -> Click Classify all"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("admonition",{title:":",type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," If your accuracy is low, you can check you dataset by increasing the training set and extending the sample time\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 15.")," Build Arduino library")),(0,o.kt)("p",null,"Click Deployment -> Click Arduino Library -> Click ",(0,o.kt)("strong",{parentName:"p"},"Build")," -> Download the .ZIP file"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 16."),' The name of .ZIP file is very important, it is set up as your name of the Edge Impulse project by default. Like here the project of the name is "XIAO-BLE-gestures_inferencing". Select the file as ""Add the ".ZIP file" to your Arduino libraries')),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 17.")," Download the code ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino"},"here"),". Change the name of your headfile as the name of your own and upload it.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 18.")," Move or hold the Seeed Studio XIAO nRF52840 Sense and check the results:")),(0,o.kt)("p",null,"Click the monitor on the top right corner of Arduino. "),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"When you move the Seeed Studio XIAO nRF52840 Sense in the ",(0,o.kt)("strong",{parentName:"p"},"left and right")," direction:"),(0,o.kt)("p",null,"The monitor will output something like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,"And the output display is like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",null,"When you move the Seeed Studio XIAO nRF52840 Sense in the ",(0,o.kt)("strong",{parentName:"p"},"up and down")," direction:"),(0,o.kt)("p",null,"The monitor will output something like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,"And the output display is like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",null,"When you ",(0,o.kt)("strong",{parentName:"p"},"hold")," the Seeed Studio XIAO nRF52840 Sense in the idle state:"),(0,o.kt)("p",null,"The monitor will output something like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,"And the output display is like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",null,"Congratulation! You acheve the end of the project. It is encouraged that you can try more directions and check which one will perform the best output."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl"},"Seeed Studio XIAO nRF52840 Case File"))))}c.isMDXComponent=!0}}]);