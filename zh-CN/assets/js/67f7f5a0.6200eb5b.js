"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62414],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return i?o.createElement(m,a(a({ref:t},u),{},{components:i})):o.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<r;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},34503:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(87462),n=(i(67294),i(3905));const r={description:"Seeeduino v4.0",title:"Seeeduino v4.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.0",id:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.0",title:"Seeeduino v4.0",description:"Seeeduino v4.0",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.0.md",sourceDirName:"Sensor/Seeeduino Series/Seeeduino",slug:"/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.0",permalink:"/docusaurus_wiki/zh-CN/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Seeeduino v4.0",title:"Seeeduino v4.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino v4.2",permalink:"/docusaurus_wiki/zh-CN/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.2"},next:{title:"Seeeduino V2.2 Atmega 168P",permalink:"/docusaurus_wiki/zh-CN/Sensor/Seeeduino Series/Seeeduino/Seeeduino_V2.2_Atmega-168P"}},s={},d=[{value:"Board Interface, Features, and Components",id:"board-interface-features-and-components",level:2},{value:"1. J2 Pads",id:"1-j2-pads",level:3},{value:"2. LEDs L, TX, RX",id:"2-leds-l-tx-rx",level:3},{value:"3. Micro USB Port",id:"3-micro-usb-port",level:3},{value:"4. SW2 Slide Switch (5V 3V3)",id:"4-sw2-slide-switch-5v-3v3",level:3},{value:"5. DC Power Jack",id:"5-dc-power-jack",level:3},{value:"6. U5 ICSP",id:"6-u5-icsp",level:3},{value:"7. U5",id:"7-u5",level:3},{value:"8. SW1 Button (Reset)",id:"8-sw1-button-reset",level:3},{value:"9. Extra Header Pads (Digital)",id:"9-extra-header-pads-digital",level:3},{value:"10. U1",id:"10-u1",level:3},{value:"11. Extra Header Pads (Power and Analog)",id:"11-extra-header-pads-power-and-analog",level:3},{value:"12. UART-to-USB (FTDI) Pads/Port",id:"12-uart-to-usb-ftdi-padsport",level:3},{value:"13. U1 ICSP",id:"13-u1-icsp",level:3},{value:"14. Grove Connectors",id:"14-grove-connectors",level:3},{value:"15. PWM Pins",id:"15-pwm-pins",level:3},{value:"Specification",id:"specification",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Automatic",id:"automatic",level:3},{value:"Manual",id:"manual",level:3},{value:"Examples/Applications",id:"examplesapplications",level:2},{value:"Example 1: Your First Arduino/Seeeduino Program (LED Blink)",id:"example-1-your-first-arduinoseeeduino-program-led-blink",level:3},{value:"Example 2: UART-to-USB (FTDI) and 3.3V Logic - Getting Started With The ESP8266 WiFi Module Without Extra Circuitry and Without Writing Software",id:"example-2-uart-to-usb-ftdi-and-33v-logic---getting-started-with-the-esp8266-wifi-module-without-extra-circuitry-and-without-writing-software",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Bug Report",id:"bug-report",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources/References",id:"resourcesreferences",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-V4-p-669.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"}))),"\nThe Seeeduino v4.0 is an ATMEGA328 Microcontroller development board. The ATMEGA328P-MU is a high performance, low power AVR 8-Bit Microcontroller. The Seeeduino v4.0 has 14 digital input/output pins (6 of which can be used as PWM outputs) and 6 analog pins. The board also features an ATMEGA16U2 microcontroller which acts as a UART-to-USB converter chip which means that the board can basically work like an FTDI chip."),(0,n.kt)("p",null,"The Seeeduino v4.0 inherits all of Arduino Duemilanove's and Uno's features but also adds some of its own. This board is compatible to Duemilanove's and Uno's pin layout, and the Duemilanove's screw holes and board dimensions.  "),(0,n.kt)("p",null,"For a detailed explanation and overview of all the features see the section in this WiKi titled ",(0,n.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_v4.0/#Board_Interface.2C_Features.2C_and_Components"},"Board Interface, Features, and Components"),"."),(0,n.kt)("h2",{id:"board-interface-features-and-components"},"Board Interface, Features, and Components"),(0,n.kt)("p",null,"The Seeeduino board offers a variety of features, some of which are not found in other duino boards (e.g. 5V or 3.3V logic, extra header pads, direct USB-to-UART connectors). See below for a detailed description of the board's interface and its unique features."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png",alt:null})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"1-j2-pads"},"1. J2 Pads"),(0,n.kt)("p",null,"Connected to the ATMEGA16U2's (U5 chip) pins PB4, PB5, PB6, and PB7 pins."),(0,n.kt)("h3",{id:"2-leds-l-tx-rx"},"2. LEDs L, TX, RX"),(0,n.kt)("p",null,'The "L" LED is connected to digital pin 13, it can be used a "status" LED in your projects. The TX and RX LEDs work automatically, they let you know when the board is sending or receiving information respectively.'),(0,n.kt)("h3",{id:"3-micro-usb-port"},"3. Micro USB Port"),(0,n.kt)("p",null,"Port used to connect the board to your PC for programming. Micro USB is the ubiquitous version of USB, found in most Android phones, and other devices. You probably have dozens of these cables laying around your house."),(0,n.kt)("h3",{id:"4-sw2-slide-switch-5v-3v3"},"4. SW2 Slide Switch (5V 3V3)"),(0,n.kt)("p",null,"Slide switch used to change the logic level and power output of the board to either 5V or 3.3V. Nowadays many new and great sensors are being develop to work with 3.3V, with other duino boards you would need to place a logic level converter between the board and these sensor(s), with the Seeeduino V4.0 board all you have to do is slide the switch!"),(0,n.kt)("h3",{id:"5-dc-power-jack"},"5. DC Power Jack"),(0,n.kt)("p",null,"The DC power jack allows your Seeeduino board to be powered from a wall adapter so that you can supply more power to your project if needed, for example when using DC motors or other high power devices. The DC input can be 7V-12V."),(0,n.kt)("h3",{id:"6-u5-icsp"},"6. U5 ICSP"),(0,n.kt)("p",null,"ICSP and SPI port for the ATMEGA16U2 chip."),(0,n.kt)("h3",{id:"7-u5"},"7. U5"),(0,n.kt)("p",null,"ATMEGA16U2 chip. This chip is charge of the USB to UART connection which is used to program the ATMEGA328P-MU (U1) and can also use the FTDI-like port."),(0,n.kt)("h3",{id:"8-sw1-button-reset"},"8. SW1 Button (Reset)"),(0,n.kt)("p",null,"This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield placed on top. This isn't the case in other duino boards where the button is placed on top making it hard to access."),(0,n.kt)("h3",{id:"9-extra-header-pads-digital"},"9. Extra Header Pads (Digital)"),(0,n.kt)("p",null,"Sometimes it is very convenient to connect a sensor/device to your board directly instead of going through a breadboard, or perhaps you want to solder the sensor directly to the board once you've completed your project, or maybe you want to monitor the output of the pins while they're been used by other devices. In any case we have added these extra pads to help you along the way."),(0,n.kt)("h3",{id:"10-u1"},"10. U1"),(0,n.kt)("p",null,"The ATmega328P-MU chip, this is the brain of the board, where the code you write goes to be executed."),(0,n.kt)("h3",{id:"11-extra-header-pads-power-and-analog"},"11. Extra Header Pads (Power and Analog)"),(0,n.kt)("p",null,"Just like the Extra Header Digital Pads, these extra connections are something we've personally come to realize people need in their projects, specially the power connections if you want to power more than one sensor/device without the use of a breadboard."),(0,n.kt)("h3",{id:"12-uart-to-usb-ftdi-padsport"},"12. UART-to-USB (FTDI) Pads/Port"),(0,n.kt)("p",null,"This is the output/input of the UART-to-USB function of the ATMEGA16U2 (U5) chip. You can use this port to communicate directly with devices that require a UART to serial connection, it is great for quick testing these devices without writing any code. This port makes the Seeeduino board work essentially like an FTDI chip if needed."),(0,n.kt)("p",null,"The output voltage of VCC will be either 5V or 3.3V, whatever you have selected using SW2."),(0,n.kt)("h3",{id:"13-u1-icsp"},"13. U1 ICSP"),(0,n.kt)("p",null,"This is the ICSP connection for the ATmega328P-MU, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno."),(0,n.kt)("h3",{id:"14-grove-connectors"},"14. Grove Connectors"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/"},"Our depot")," has a variety of sensors/devices that can make use of this I2C or UART connection. In addition we sell independent Grove connectors to help you make our own sensor connections. The I2C Grove connector is also connected to analog pins 4 and 5 for SDA and SCL respectively if you would like to use those pins instead. The UART Grove connector is connected to digital pins 0 and 1 for RX and TX respectively."),(0,n.kt)("h3",{id:"15-pwm-pins"},"15. PWM Pins"),(0,n.kt)("p",null,"Digital pins 3, 5, 6, 8, 9, and 10 can be used for pulse width modulation (PWM)."),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Microcontroller: ATmega328P-MU")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Operating Voltage: 5V or 3.3V(choice by slide switch)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Digital I/O Pins:14")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PWM Channels:6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Analog Input Channels:6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DC Jack Input:7v-12v")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DC Current per I/O Pin: 40 mA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Flash Memory: 32 KB (ATmega328P-MU)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RAM: 2 KB (ATmega328P-MU)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"EEPROM:1 KB (ATmega328P-MU)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clock Speed:16 MHz"))),(0,n.kt)("h2",{id:"driver-installation"},"Driver Installation"),(0,n.kt)("h3",{id:"automatic"},"Automatic"),(0,n.kt)("p",null,"The Arduino/Seeeduino drivers are included with the ",(0,n.kt)("a",{parentName:"p",href:"https://arduino.cc/en/main/software"},"Arduino Software"),".  In Windows, once the Arduino Software is installed, plug in your Seeeduino board to your PC's USB port and the driver installation will begin automatically as shown in the screenshot below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png",alt:"pir",width:600,height:"auto"})),"Seeeduino V4.0 driver installation window as it appears in Windows.",(0,n.kt)("p",null,"After a couple of minutes (2-5), the driver should complete its installation and you will this window:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Seeeduino V4 driver installation complete window as it appears in Windows."),(0,n.kt)("p",null,"At this point the Seeeduino V4.0 is ready to use."),(0,n.kt)("h3",{id:"manual"},"Manual"),(0,n.kt)("p",null,"In Windows, if the automatic driver installation fails you can install the drivers manually, they are located in the Arduino Software folder, to do so follow these steps:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1."),' Open the "Device Manager" window by searching for it, and clicking "Device Manager" as shown in the animated image below. Alternatively, if this does not work for you, you may right click "My Computer"-',">","Manage-",">","Device Manager."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_how_to_open_device_manager_window.gif",alt:"enter image description here"}),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2."),' In the "Device Manager" window, under "Ports (COM',"&",'LPT)" or "Other Devices" look for "USB Serial Port", this is the Seeeduino board but hasn\'t been recognized by Windows yet. Right click and select "Update Driver Software..."'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3."),' Next, choose the "Browse my computer for Driver Software" option.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4."),' Finally, find and select the folder named "Drivers", located in the folder of the Arduino Software download.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"5.")," If the driver was installed successfully you should see the dialog box below."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"6."),' In the "Device Manager" window the device you right clicked on should now display "Arduino Uno (COMXX)" or "USB Serial Port(COMXX)" as shown below.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"7.")," And when you open the Arduino IDE the same COM port will also be available. Remember to close and open the Arduino IDE if it was opened during the driver installation or the Serial port will not be visible."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"examplesapplications"},"Examples/Applications"),(0,n.kt)("h3",{id:"example-1-your-first-arduinoseeeduino-program-led-blink"},"Example 1: Your First Arduino/Seeeduino Program (LED Blink)"),(0,n.kt)("p",null,"As described in the \"Board Interface, Features, and Components\" section of this WiKi, the Seeeduino board has an on-board LED connected to pin 13. In this example we'll show you how to blink that LED. Blinking an LED is the simplest program one can write to get acquainted with a board's hardware, and software."),(0,n.kt)("p",null,"To blink the LED in your Seeeduino board, follow the steps in the animated image below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Or if you prefer we have listed and described each of the steps:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Open the Arduino IDE\n",(0,n.kt)("strong",{parentName:"p"},"2.")," Select the Seeeduino board by going to Tools-",">","Board-",">","Arduino Uno. The Seeeduino board is recognized as an Arduino Uno board."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Make sure that the Serial COM port where your Seeeduino board is connected to is selected by going to Tools-",">","Serial Port-",">","COMXX where COMXX is the COM port of your board."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4."),' Open the "Blink" example by going to File-',">","Examples-",">","0.1Basics-",">","Blink. A new window with code will open, you may close the previous/original Arduino window."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"5."),' In this new window click the "Upload" button, this will upload/send the code to your Seeeduino board.  Wait a few seconds for the "Done Uploading" message to display, this messages signals that the code was successfully written to the board and ready to use.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"6.")," The blue on-board LED on the Seeduino board should start to blink as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"example-2-uart-to-usb-ftdi-and-33v-logic---getting-started-with-the-esp8266-wifi-module-without-extra-circuitry-and-without-writing-software"},"Example 2: UART-to-USB (FTDI) and 3.3V Logic - Getting Started With The ESP8266 WiFi Module Without Extra Circuitry and Without Writing Software"),(0,n.kt)("p",null,"Two great features of the Seeeduino V4.0 board when compared to its competitors is its ability to switch between 5V and 3.3V logic, and its USB-to-UART port essentially making it an FTDI like device great for quickly getting started with devices that use the UART protocol/interface."),(0,n.kt)("p",null,"In this example we will show you how to use the popular ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html?cPath=19_20"},"ESP8266 WiFi module"),". This example is amazing because with other duino boards you would require a voltage converter, a logic converter, and software to control two separate Serial ports but with the Seeeduino board none of these three things are required."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1: Putting The Board In 3.3V Mode")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Remove all power sources from the Seeeduino board so that it is completely off.\n",(0,n.kt)("strong",{parentName:"p"},"2.")," Slide switch SW2 over to the 3V3 setting."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2: ESP8266-Seeeduino Connections")),(0,n.kt)("p",null,"Connect your ESP8266 WiFi module to the Seeeduino board as follows (See the photo below for a schematic):"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Seeeduino Pin"),(0,n.kt)("th",null,"ESP8266 Pin")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"GND"),(0,n.kt)("td",null,"GND")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"TX"),(0,n.kt)("td",null,"RX")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"RX"),(0,n.kt)("td",null,"TX")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CH_PD"),(0,n.kt)("td",null,"VCC")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"VCC"),(0,n.kt)("td",null,"VCC"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," Seeeduino V4.0 and ESP8266 Schematic. SW2 shows the setting at 5V but please slide it over to 3V3.\n"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3: Sending Commands")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Connect your Seeeduino board to the USB port of your PC.\n",(0,n.kt)("strong",{parentName:"p"},"2.")," Open the Arduino IDE\n",(0,n.kt)("strong",{parentName:"p"},"3.")," Upload a blank program to your board, or make sure that the program it has does not user any Serial functions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"void setup()\n{\n\n    }\n\n    void loop()\n{\n\n    }\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4."),' Open the Arduino "Serial Monitor" window.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"5."),' In the Serial Monitor window change your settings to "Both NL ',"&",'CR" and baud rate to "9600", or the correct baud rate for your ESP8266 since it might be different.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"6."),' The ESP8266 is ready to receive and send information/commands. Try sending "AT+RST" to reset the module, then send "AT+CWLAP" to list all the access points your ESP8266 is able to detect. See the image below for an example response.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,n.kt)("p",null,"Below is a list of changes that have been made to the Seeeduino board over all the versions."),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Revision"),(0,n.kt)("th",null," Descriptions"),(0,n.kt)("th",null," Release Date")),(0,n.kt)("tr",{style:{fontSize:"90%"}},(0,n.kt)("td",{width:"300px"}," Seeeduino V0.9"),(0,n.kt)("td",{width:"500px"}," Initial public release"),(0,n.kt)("td",{width:"200px"})),(0,n.kt)("tr",{style:{fontSize:"90%"}},(0,n.kt)("td",null," Seeeduino v1.1"),(0,n.kt)("td",null,"1.  Fixed bug - unnessesary via on Pin4 wire. 2.  Fixed bug - Lable mistakenly covered by switches. 3.  Added I2C and sensor port. 4.  Added an 100uF capacitor for vcc switch. 5.  Grouped new 100mil grid pins. 6.  Replaced reset buttons with metal ones. 7.  Rearranged texts and lables for clearer indications."),(0,n.kt)("td",null)),(0,n.kt)("tr",{style:{fontSize:"90%"}},(0,n.kt)("td",null," Seeeduino v2.12"),(0,n.kt)("td",null,"1.  Zero external power consumption when switched off 2.  Stronger Switches 3.  Second power supply for 5V direct input. [Caution] USE 5V ONLY! 4.  150mA driver capacity under 3.3V 5.  1.0mm slim PCB for lighter weighs 6.  Extra row reserved for pin headers"),(0,n.kt)("td",null)),(0,n.kt)("tr",{style:{fontSize:"90%"}},(0,n.kt)("td",null," Seeeduino v2.2"),(0,n.kt)("td",null,"1.  USB/EXT power auto select 2.  Upgrade power capacitor 3.  Clean up layouts 4.  Reset easier 5.  Real Quartz Crystal 6.  Extern power Diode change to 1N4004(more power on Vin pin)"),(0,n.kt)("td",null," Dec 16, 2010")),(0,n.kt)("tr",{style:{fontSize:"90%"}},(0,n.kt)("td",null," Seeeduino v2.21"),(0,n.kt)("td",null,"1.  Upgraded to Stronger mini USB connector."),(0,n.kt)("td",null," Jan 12, 2011")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Seeeduino v3.0"),(0,n.kt)("td",null,"1.  change JST connector to DC Jack connector"),(0,n.kt)("td",null," Jan 1, 2012")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Seeeduino v4.0"),(0,n.kt)("td",null,"1.  Remove RST switch 2.  ATMEGA16U2 as USB bus converter chip 3.  DC-to-DC converter to reduce power dissipation 4.  Micro USB 5.  UNO bootloader"),(0,n.kt)("td",null," Sep 1, 2014")))),(0,n.kt)("h2",{id:"bug-report"},"Bug Report"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The silk printed of PWM has an error.Pin of PWM  should be D9,D10,D11. We will fix this error asap.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resourcesreferences"},"Resources/References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip"},"Seeeduino v4.0 Eagle file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.pdf"},"Seeeduino v4.0 pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.sch"},"Seeeduino v4.0 sch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_pdf.pdf"},"Seeeduino v4.0 SCH file ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]"),"  ",(0,n.kt)("a",{parentName:"li",href:"http://www.atmel.com/Images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Summary.pdf"},"ATMEGA328P-MU Summary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"http://www.atmel.com/Images/7799S.pdf"},"ATMEGA16U2 Summary"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);