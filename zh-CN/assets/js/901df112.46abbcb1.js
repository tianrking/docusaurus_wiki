"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,c=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={description:"Getting Started with Seeed Studio XIAO SAMD21",title:"Getting Started with Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO",title:"Getting Started with Seeed Studio XIAO SAMD21",description:"Getting Started with Seeed Studio XIAO SAMD21",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Getting Started with Seeed Studio XIAO SAMD21",title:"Getting Started with Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Microwave Sensor - 24GHz Doppler Radar Motion Sensor - MW2401TR11",permalink:"/docusaurus_wiki/zh-CN/Sensor/mmWave_radar_sensor/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11"},next:{title:"Seeed Studio XIAO SAMD21 by Nanase",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-by-Nanase"}},s={},d=[{value:"<strong>Documentations</strong>",id:"documentations",level:2},{value:"<strong>CircuitPython on Seeed Studio XIAO SAMD21</strong>",id:"circuitpython-on-seeed-studio-xiao-samd21",level:3},{value:"<strong>Features</strong>",id:"features",level:2},{value:"<strong>Specification</strong>",id:"specification",level:2},{value:"<strong>Hardware Overview</strong>",id:"hardware-overview",level:2},{value:"<strong>Enter Bootloader Mode</strong>",id:"enter-bootloader-mode",level:3},{value:"<strong>Reset</strong>",id:"reset",level:3},{value:"<strong>Interrupt</strong>",id:"interrupt",level:3},{value:"<strong>Pin Multuiplexing</strong>",id:"pin-multuiplexing",level:3},{value:"<strong>Digital Input and Output</strong>",id:"digital-input-and-output",level:4},{value:"<strong>AnalogRead</strong>",id:"analogread",level:4},{value:"<strong>Serial</strong>",id:"serial",level:4},{value:"<strong>I2C</strong>",id:"i2c",level:4},{value:"<strong>SPI</strong>",id:"spi",level:4},{value:"<strong>QTouch</strong>",id:"qtouch",level:4},{value:"<strong>Analog Input and Output</strong>",id:"analog-input-and-output",level:4},{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"<strong>Hardware</strong>",id:"hardware",level:3},{value:"<strong>Software</strong>",id:"software",level:3},{value:"The sample application",id:"the-sample-application",level:2},{value:"Resourses",id:"resourses",level:2},{value:"Course Resources",id:"course-resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"The Seeed Studio XIAO SAMD21 is the smallest member of the Seeeduino family. It carries the powerful ATSAMD21G18A-MU which is a low-power microcontrollers. On the other hand, this little board has good performance in processing but needs less power. As a matter of fact, it is designed in a tiny size and can be used for wearable devices and small projects."),(0,i.kt)("p",null,"Seeed Studio XIAO SAMD21 has 14 GPIO PINs, which can be used for 11 digital interfaces, 11 mock interfaces, 10 PWM interfaces (d1-d10), 1 DAC output pin D0, 1 SWD pad interface, 1 I2C interface, 1 SPI interface, 1 UART interface, Serial communication indicator (T/R), Blink light (L). The colors of LEDs(Power,L,RX,TX) are green, yellow, blue and blue. Moreover, Seeed Studio XIAO SAMD21 has a Type-C interface which can supply power and download code. There are two reset button, you can short connect them to reset the board."),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("h2",{id:"documentations"},(0,i.kt)("strong",{parentName:"h2"},"Documentations")),(0,i.kt)("p",null,"There are two documentations on the usage of ",(0,i.kt)("strong",{parentName:"p"},"Seeed Studio XIAO SAMD21")," which focus on different areas, check the table below for reference:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/"},(0,i.kt)("strong",{parentName:"a"},"Documentation by Seeed"))),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/"},(0,i.kt)("strong",{parentName:"a"},"Documentation by Nanase"))))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pinout Digram"),(0,i.kt)("td",{parentName:"tr",align:null},"Interface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 Getting Started"),(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 with MicroSD Card(SPI)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 GPIO Usage"),(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 with GPS(UART)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 Resources"),(0,i.kt)("td",{parentName:"tr",align:null},"Single Cycle IOBUS")))),(0,i.kt)("h3",{id:"circuitpython-on-seeed-studio-xiao-samd21"},(0,i.kt)("strong",{parentName:"h3"},"CircuitPython on Seeed Studio XIAO SAMD21")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get started with ",(0,i.kt)("a",{parentName:"li",href:"http://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython"},(0,i.kt)("strong",{parentName:"a"},"CircuitPython on Seeed Studio XIAO SAMD21 ")),".")),(0,i.kt)("h2",{id:"features"},(0,i.kt)("strong",{parentName:"h2"},"Features")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Powerful CPU: ARM\xae Cortex\xae-M0+ 32bit 48MHz microcontroller(SAMD21G18) with 256KB Flash,32KB SRAM."),(0,i.kt)("li",{parentName:"ul"},"Flexible compatibility: Compatible with Arduino IDE."),(0,i.kt)("li",{parentName:"ul"},"Easy project operation: Breadboard-friendly."),(0,i.kt)("li",{parentName:"ul"},"Small size: As small as a thumb(20x17.5mm) for wearable devices and small projects."),(0,i.kt)("li",{parentName:"ul"},"Multiple development interfaces: 11 digital/analog pins, 10 PWM Pins, 1 DAC output, 1 SWD Bonding pad interface, 1 I2C interface, 1 UART interface, 1 SPI interface.")),(0,i.kt)("h2",{id:"specification"},(0,i.kt)("strong",{parentName:"h2"},"Specification")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU"),(0,i.kt)("td",{parentName:"tr",align:null},"ARM Cortex-M0+ CPU(SAMD21G18) running at up to 48MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,i.kt)("td",{parentName:"tr",align:null},"256KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,i.kt)("td",{parentName:"tr",align:null},"32KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Analog I/O Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C interface"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPI interface"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"QTouch"),(0,i.kt)("td",{parentName:"tr",align:null},"7\xa0(A0,A1,A6,A7,A8,A9,A10)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UART interface"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Power supply and downloading interface"),(0,i.kt)("td",{parentName:"tr",align:null},"Type-C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Power"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V/5V DC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,i.kt)("td",{parentName:"tr",align:null},"20\xd717.5\xd73.5mm")))),(0,i.kt)("h2",{id:"hardware-overview"},(0,i.kt)("strong",{parentName:"h2"},"Hardware Overview")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"For general I/O pins:\nWorking voltage of MCU is 3.3V . Voltage input connected to general I/O pins may cause chip damage if it' higher than 3.3V .\n\nFor power supply pins:\nThe built-in DC-DC converter circuit able to change 5V voltage into 3.3V allows to power the device with a 5V supply via VIN-PIN and 5V-PIN.\n\nPlease pay attention to use, do not lift the shield cover.\n"))),(0,i.kt)("h3",{id:"enter-bootloader-mode"},(0,i.kt)("strong",{parentName:"h3"},"Enter Bootloader Mode")),(0,i.kt)("p",null,"Sometimes the Seeed Studio XIAO SAMD21 port may disappear when user programming process fails. we can solve this problem by the following operation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO SAMD21 to your computer."),(0,i.kt)("li",{parentName:"ul"},"Use tweezers or short lines to short the RST pins in the diagram twice."),(0,i.kt)("li",{parentName:"ul"},"The orange LED lights flicker on and light up.")),(0,i.kt)("p",null,"At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h3",{id:"reset"},(0,i.kt)("strong",{parentName:"h3"},"Reset")),(0,i.kt)("p",null,"If you want to reset the Seeed Studio XIAO SAMD21 , perform the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO SAMD21 to your computer."),(0,i.kt)("li",{parentName:"ul"},"Use tweezers or short lines to short the RST pins ",(0,i.kt)("strong",{parentName:"li"},"only once")),(0,i.kt)("li",{parentName:"ul"},"The orange LED lights flicker on and light up.")),(0,i.kt)("p",null,"Please note: The behavior of the built-in LED is reversed to the one on an Arduino. On the Seeed Studio XIAO SAMD21 , the pin has to be pulled low, whereas on other micro-controllers it has to be pulled high.\xa0\xa0"),(0,i.kt)("h3",{id:"interrupt"},(0,i.kt)("strong",{parentName:"h3"},"Interrupt")),(0,i.kt)("p",null,"All pins on Seeed Studio XIAO SAMD21 support interrupts, but two pins cannot be used at the same time: 5 pin and 7 pin. For more detail about Interrupt please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp"},"here"),"."),(0,i.kt)("h3",{id:"pin-multuiplexing"},(0,i.kt)("strong",{parentName:"h3"},"Pin Multuiplexing")),(0,i.kt)("p",null,"We don't need to configure the pins ourselves, after using the pins, you can call a function directly."),(0,i.kt)("h4",{id:"digital-input-and-output"},(0,i.kt)("strong",{parentName:"h4"},"Digital Input and Output")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use pin 6 as the digital pin:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"const int buttonPin = 6;     // the number of the pushbutton pin\nconst int ledPin =  13;      // the number of the LED pin\n\nint buttonState = 0;         // variable for reading the pushbutton status\n\nvoid setup() {\n  // initialize the LED pin as an output:\n  pinMode(ledPin, OUTPUT);\n  // initialize the pushbutton pin as an input:\n  pinMode(buttonPin, INPUT);\n}\n\nvoid loop() {\n  // read the state of the pushbutton value:\n  buttonState = digitalRead(buttonPin);\n\n  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:\n  if (buttonState == HIGH) {\n    // turn LED on:\n    digitalWrite(ledPin, HIGH);\n  } else {\n    // turn LED off:\n    digitalWrite(ledPin, LOW);\n  }\n}\n")),(0,i.kt)("h4",{id:"analogread"},(0,i.kt)("strong",{parentName:"h4"},"AnalogRead")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use pin 6 as the analog pin:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"\n\nvoid setup() {\n  // declare the ledPin as an OUTPUT:\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  // read the value from the sensor:\n  sensorValue = analogRead(sensorPin);\n  // turn the ledPin on\n  digitalWrite(ledPin, HIGH);\n  // stop the program for <sensorValue> milliseconds:\n  delay(sensorValue);\n  // turn the ledPin off:\n  digitalWrite(ledPin, LOW);\n  // stop the program for for <sensorValue> milliseconds:\n  delay(sensorValue);\n}\n")),(0,i.kt)("h4",{id:"serial"},(0,i.kt)("strong",{parentName:"h4"},"Serial")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use pin 6 as the TX pin of UART(RX pin of UART is pin 7):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'\nvoid setup() {\n    Serial1.begin(115200);\n    while (!Serial);\n}\n\nvoid loop() {\n    Serial1.println("Hello,World");\n    delay(1000);\n}\n')),(0,i.kt)("h4",{id:"i2c"},(0,i.kt)("strong",{parentName:"h4"},"I2C")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use pin 5 as the SCL pin of IIC(SDA pin of IIC is pin 4):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Wire Master Writer\n// by Nicholas Zambetti <http://www.zambetti.com>\n\n// Demonstrates use of the Wire library\n// Writes data to an I2C/TWI slave device\n// Refer to the "Wire Slave Receiver" example for use with this\n\n// Created 29 March 2006\n\n// This example code is in the public domain.\n\n\n#include <Wire.h>\n\nvoid setup()\n{\n  Wire.begin(); // join i2c bus (address optional for master)\n}\n\nbyte x = 0;\n\nvoid loop()\n{\n  Wire.beginTransmission(4); // transmit to device #4\n  Wire.write("x is ");        // sends five bytes\n  Wire.write(x);              // sends one byte  \n  Wire.endTransmission();    // stop transmitting\n  x++;\n  delay(500);\n}\n')),(0,i.kt)("h4",{id:"spi"},(0,i.kt)("strong",{parentName:"h4"},"SPI")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use pin 8 as the SCK pin of SPI(MISO pin of SPI is pin 9,MOSI pin of SPI is pin 10):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <SPI.h>\nconst int SS = 7;\nvoid setup (void) {\n   digitalWrite(SS, HIGH); // disable Slave Select\n   SPI.begin ();\n   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8\n}\n\nvoid loop (void) {\n   char c;\n   digitalWrite(SS, LOW); // enable Slave Select\n   // send test string\n   for (const char * p = "Hello, world!\\r" ; c = *p; p++) {\n      SPI.transfer (c);\n   }\n   digitalWrite(SS, HIGH); // disable Slave Select\n   delay(2000);\n}\n')),(0,i.kt)("h4",{id:"qtouch"},(0,i.kt)("strong",{parentName:"h4"},"QTouch")),(0,i.kt)("p",null,"For how to use QTouch, we provide an example project: ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/"},"How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 \u2019s Q-Touch Function"),"."),(0,i.kt)("h4",{id:"analog-input-and-output"},(0,i.kt)("strong",{parentName:"h4"},"Analog Input and Output")),(0,i.kt)("p",null,'While it still has PWM-based "analog outputs", the SAMD21 also features true analog output in the form of a digital-to-analog converter (DAC). This module can produce an analog voltage between 0 and 3.3V. It can be used to produce audio with more natural sound, or as a kind of "digital potentiometer" to control analog devices.'),(0,i.kt)("p",null,"The DAC is only available on the Arduino pin A0, and is controlled using analogWrite(A0, ",(0,i.kt)("inlineCode",{parentName:"p"},"<value>"),"). The DAC can be set up to 10-bit resolution (make sure to call ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/"},(0,i.kt)("strong",{parentName:"a"},"analogWriteResolution(10)"))," in your setup), which means values between 0 and 1023 will set the voltage to somewhere between 0 and 3.3V."),(0,i.kt)("p",null,"In addition to the DAC, the SAMD21's ADC channels also stand apart from the ATmega328: they're equipped with up to 12-bit resolution. That means the analog input values can range from 0-4095, representing a voltage between 0 and 3.3V. To use the ADC's in 12-bit mode, make sure you call ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/"},(0,i.kt)("strong",{parentName:"a"},"analogReadResolution(12)"))," in your setup."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Serial Plotting the DAC")),(0,i.kt)("p",null,"Here's an example that demonstrates both the DAC and the ADC. To set the experiment up, connect A0 to A1 -- we'll drive A0 with an analog voltage, then read it with A1. It's the simplest circuit we've ever put in a tutorial:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The Seeed Studio XIAO SAMD21 using the [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)\n"))),(0,i.kt)("p",null,"This sketch produces a sine wave output on A0, with values ranging from 0 to 3.3V. Then it uses A1 to read that output into its ADC, and convert it into a voltage between 0 and 3.3V."),(0,i.kt)("p",null,"You can, of course, open the serial monitor to view the voltage values stream by. But if the the sine wave is hard to visualize through text, check out Arduino's new Serial Plotter, by going to Tools > Serial Plotter."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-CPP"},"#define DAC_PIN A0 // Make code a bit more legible\n\nfloat x = 0; // Value to take the sin of\nfloat increment = 0.02;  // Value to increment x by each time\nint frequency = 440; // Frequency of sine wave\n\nvoid setup() \n{\n  analogWriteResolution(10); // Set analog out resolution to max, 10-bits\n  analogReadResolution(12); // Set analog input resolution to max, 12-bits\n\n  SerialUSB.begin(9600);\n}\n\nvoid loop() \n{\n  // Generate a voltage value between 0 and 1023. \n  // Let's scale a sin wave between those values:\n  // Offset by 511.5, then multiply sin by 511.5.\n  int dacVoltage = (int)(511.5 + 511.5 * sin(x));\n  x += increment; // Increase value of x\n\n  // Generate a voltage between 0 and 3.3V.\n  // 0= 0V, 1023=3.3V, 512=1.65V, etc.\n  analogWrite(DAC_PIN, dacVoltage);\n\n  // Now read A1 (connected to A0), and convert that\n  // 12-bit ADC value to a voltage between 0 and 3.3.\n  float voltage = analogRead(A1) * 3.3 / 4096.0;\n  SerialUSB.println(voltage); // Print the voltage.\n  delay(1); // Delay 1ms\n}\n")),(0,i.kt)("h2",{id:"getting-started"},(0,i.kt)("strong",{parentName:"h2"},"Getting Started")),(0,i.kt)("h3",{id:"hardware"},(0,i.kt)("strong",{parentName:"h3"},"Hardware")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seeed Studio XIAO SAMD21 x1"),(0,i.kt)("li",{parentName:"ul"},"Computer x1"),(0,i.kt)("li",{parentName:"ul"},"USB typc cable x1")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1. Prepare a Seeed Studio XIAO SAMD21 and a Type-C cable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2. Connect the Seeed Studio XIAO SAMD21 to your computer.Then the yellow power LED should go on."))),(0,i.kt)("h3",{id:"software"},(0,i.kt)("strong",{parentName:"h3"},"Software")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1. You need to Install an Arduino Software."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Launch the Arduino application")),(0,i.kt)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2. Open the Blink example"),"  ")),(0,i.kt)("p",null,"Open the LED blink example sketch: ",(0,i.kt)("strong",{parentName:"p"},"File > Examples >01.Basics > Blink"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3. Add Seeeduino to your Arduino IDE"))),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"File > Preference"),", and fill Additional Boards Manager URLs with the url below:\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Tools-> Board-> Boards Manager..."),', print  keyword "',(0,i.kt)("strong",{parentName:"p"},"Seeed Studio XIAO SAMD21"),'" in the searching blank. Here comes the "Seeed SAMD Boards". Install it.'),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4. Select your board and port"))),(0,i.kt)("p",null,"After installing the board, click ",(0,i.kt)("strong",{parentName:"p"},"Tools-> Board"),', find "',(0,i.kt)("strong",{parentName:"p"},"Seeed Studio XIAO SAMD21 M0"),'" and select it. Now you have already set up the board of Seeed Studio XIAO SAMD21 for Arduino IDE.'),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/board.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,i.kt)("strong",{parentName:"p"},"COM1")," and ",(0,i.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/port.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.Upload the program"),"  ")),(0,i.kt)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null," A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  the max size of flash is 8KB the more information at the ATSAMD218A-MU datasheet in resourses")),(0,i.kt)("h2",{id:"the-sample-application"},"The sample application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI"},"How to use Seeed Studio XIAO SAMD21 to log in to your Raspberry PI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface"},"SPI Communication Interface"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990"},"How to unbrick a dead xiao using raspberry pi"),". Thanks John_Doe for sharing."))),(0,i.kt)("h2",{id:"resourses"},"Resourses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf"},"ATSAMD218A-MU datasheet"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino%20XIAO%20KICAD.zip"},"Seeeduino KiCAD Libraries"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[LBR]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino%20XIAO.lbr"},"Seeeduino Eagle Libraries")))),(0,i.kt)("h2",{id:"course-resources"},"Course Resources"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO.jpg"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype%EF%BC%86Wearable-Projects-Step-by-Step.pdf"},"Seeed Studio XIAO SAMD21 in Action\u2014\u2014Minitype \uff06 Wearable Projects Step by Step")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-Codes.rar"},"Codes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-Document.rar"},"Document"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);