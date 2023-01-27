"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57827],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29718:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Getting Started with Seeed Studio XIAO ESP32C3",title:"Getting Started with Seeed Studio XIAO ESP32C3",image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"11/21/2022",author:"Bill"}},o="Getting Started with Seeed Studio XIAO ESP32C3",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started",title:"Getting Started with Seeed Studio XIAO ESP32C3",description:"Getting Started with Seeed Studio XIAO ESP32C3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"Bill",lastUpdatedAt:1668988800,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{description:"Getting Started with Seeed Studio XIAO ESP32C3",title:"Getting Started with Seeed Studio XIAO ESP32C3",image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"11/21/2022",author:"Bill"}},sidebar:"ProductSidebar",previous:{title:"Motion Recognition based on Edge Impulse",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/TinyML-Edge_Impulse/XIAOEI"},next:{title:"WiFi Usage on Seeed Studio XIAO ESP32C3",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_WiFi_Usage"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications comparison",id:"specifications-comparison",level:2},{value:"Hardware overview",id:"hardware-overview",level:2},{value:"Pinout diagram",id:"pinout-diagram",level:3},{value:"Component overview",id:"component-overview",level:3},{value:"Power Pins",id:"power-pins",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware setup",id:"hardware-setup",level:3},{value:"Software setup",id:"software-setup",level:3},{value:"Blink the LED",id:"blink-the-led",level:3},{value:"FAQ",id:"faq",level:2},{value:"Q1: My Arduino IDE is stuck when uploading code to the board",id:"q1-my-arduino-ide-is-stuck-when-uploading-code-to-the-board",level:3},{value:"Q2: My board is not showing up as a serial device on Arduino IDE",id:"q2-my-board-is-not-showing-up-as-a-serial-device-on-arduino-ide",level:3},{value:"Q3: I want to reflash the bootloader with factory firmware",id:"q3-i-want-to-reflash-the-bootloader-with-factory-firmware",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech support",id:"tech-support",level:2}],d={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-seeed-studio-xiao-esp32c3"},"Getting Started with Seeed Studio XIAO ESP32C3"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:300,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO ESP32C3")," is an IoT mini development board based on the Espressif ",(0,r.kt)("strong",{parentName:"p"},"ESP32-C3")," WiFi/Bluetooth dual-mode chip. ESP32-C3 is a ",(0,r.kt)("strong",{parentName:"p"},"32-bit RISC-V CPU"),", which includes an ",(0,r.kt)("strong",{parentName:"p"},"FPU")," (Floating Point Unit) for ",(0,r.kt)("strong",{parentName:"p"},"32-bit single-precision arithmetic")," with powerful computing power. It has excellent radio frequency performance, supporting ",(0,r.kt)("strong",{parentName:"p"},"IEEE 802.11 b/g/n WiFi"),", and ",(0,r.kt)("strong",{parentName:"p"},"Bluetooth 5 (LE)")," protocols. This board comes included with an external antenna to increase the signal strength for your wireless applications. It also has a ",(0,r.kt)("strong",{parentName:"p"},"small and exquisite form-factor")," combined with a ",(0,r.kt)("strong",{parentName:"p"},"single-sided surface-mountable design"),". It is equipped with rich interfaces and has ",(0,r.kt)("strong",{parentName:"p"},"11 digital I/O")," that can be used as ",(0,r.kt)("strong",{parentName:"p"},"PWM pins")," and ",(0,r.kt)("strong",{parentName:"p"},"4 analog I/O")," that can be used as ",(0,r.kt)("strong",{parentName:"p"},"ADC pins"),". It supports four serial interfaces such as ",(0,r.kt)("strong",{parentName:"p"},"UART, I2C, SPI and I2S"),". There is also a small ",(0,r.kt)("strong",{parentName:"p"},"reset button")," and a ",(0,r.kt)("strong",{parentName:"p"},"bootloader mode button")," on the board. XIAO ESP32C3 is fully compatible with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},"Grove Shield for Seeeduino XIAO")," and ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board"},"Seeeduino XIAO Expansion board")," except for the Seeeduino XIAO Expansion board, the SWD spring contacts on the board will not be compatible."),(0,r.kt)("p",null,"With regard to the features highlighted above, XIAO ESP32C3 is positioned as a ",(0,r.kt)("strong",{parentName:"p"},"high-performance, low-power, cost-effective IoT mini development board"),", suitable for ",(0,r.kt)("strong",{parentName:"p"},"low-power IoT applications and wireless wearable applications"),"."),(0,r.kt)("p",null,"This wiki will show you how you can quickly get started with XIAO ESP32C3!"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png"}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Powerful CPU: ESP32-C3, 32\xadbit RISC\xad-V single\xadcore processor that operates at up to 160 MHz"),(0,r.kt)("li",{parentName:"ul"},"Complete Wi\xadFi subsystem:  Complies with IEEE 802.11b/g/n protocol and supports Station mode, SoftAP mode, SoftAP + Station mode, and promiscuous mode"),(0,r.kt)("li",{parentName:"ul"},"Bluetooth LE subsystem: Supports features of Bluetooth 5 and Bluetooth mesh"),(0,r.kt)("li",{parentName:"ul"},"Ultra-Low Power: Deep sleep power consumption is about 43\u03bcA"),(0,r.kt)("li",{parentName:"ul"},"Better RF performance: External RF antenna included"),(0,r.kt)("li",{parentName:"ul"},"Battery charging chip: Supports lithium battery charge and discharge management"),(0,r.kt)("li",{parentName:"ul"},"Rich on-chip resources: 400KB of SRAM, and 4MB of on-board flash memory"),(0,r.kt)("li",{parentName:"ul"},"Ultra small size: As small as a thumb(20x17.5mm) XIAO series classic form-factor for wearable devices and small projects"),(0,r.kt)("li",{parentName:"ul"},"Reliable security features: Cryptographic hardware accelerators that support AES-128/256, Hash, RSA, HMAC, digital signature and secure boot"),(0,r.kt)("li",{parentName:"ul"},"Rich interfaces: 1xI2C, 1xSPI, 1xI2S, 2xUART, 11xGPIO(PWM), 4xADC, 1xJTAG bonding pad interface"),(0,r.kt)("li",{parentName:"ul"},"Single-sided components, surface mounting design")),(0,r.kt)("h2",{id:"specifications-comparison"},"Specifications comparison"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Seeed Studio XIAO ESP32C3"),(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino XIAO"),(0,r.kt)("th",{parentName:"tr",align:null},"Seeed XIAO RP2040"),(0,r.kt)("th",{parentName:"tr",align:null},"Seeed XIAO BLE"),(0,r.kt)("th",{parentName:"tr",align:null},"Seeed XIAO BLE Sense"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Processor"),(0,r.kt)("td",{parentName:"tr",align:null},"ESP32-C3 32-bit RISC-V @160MHz"),(0,r.kt)("td",{parentName:"tr",align:null},"SAMD21 M0+@48MHz"),(0,r.kt)("td",{parentName:"tr",align:null},"RP2040 Dual-core M0+@133Mhz"),(0,r.kt)("td",{parentName:"tr",align:null},"nRF52840 M4F@64MHz"),(0,r.kt)("td",{parentName:"tr",align:null},"nRF52840 M4F@64MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wireless Connectivity"),(0,r.kt)("td",{parentName:"tr",align:null},"WiFi and Bluetooth 5 (LE)"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Bluetooth 5.0/BLE/NFC"),(0,r.kt)("td",{parentName:"tr",align:null},"Bluetooth 5.0/BLE/NFC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memory"),(0,r.kt)("td",{parentName:"tr",align:null},"400KB SRAM, 4MB onboard Flash"),(0,r.kt)("td",{parentName:"tr",align:null},"32KB SRAM 256KB FLASH"),(0,r.kt)("td",{parentName:"tr",align:null},"264KB SRAM 2MB onboard Flash"),(0,r.kt)("td",{parentName:"tr",align:null},"256KB RAM, 1MB Flash 2MB onboard Flash"),(0,r.kt)("td",{parentName:"tr",align:null},"256KB RAM,1MB Flash 2MB onboard Flash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Built-in Sensors"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"6 DOF IMU (LSM6DS3TR-C), PDM Microphone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C/UART/SPI/I2S"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C/UART/SPI"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C/UART/SPI"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C/UART/SPI"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C/UART/SPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PWM/Analog Pins"),(0,r.kt)("td",{parentName:"tr",align:null},"11/4"),(0,r.kt)("td",{parentName:"tr",align:null},"11/11"),(0,r.kt)("td",{parentName:"tr",align:null},"11/4"),(0,r.kt)("td",{parentName:"tr",align:null},"11/6"),(0,r.kt)("td",{parentName:"tr",align:null},"11/6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Onboard Buttons"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset/ Boot Button"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset/ Boot Button"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset Button"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset Button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Onboard LEDs"),(0,r.kt)("td",{parentName:"tr",align:null},"Charge LED"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Full-color RGB/ 3-in-one LED"),(0,r.kt)("td",{parentName:"tr",align:null},"3-in-one LED/ Charge LED"),(0,r.kt)("td",{parentName:"tr",align:null},"3-in-one LED/ Charge LED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Battery Charge Chip"),(0,r.kt)("td",{parentName:"tr",align:null},"Built-in"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"BQ25101"),(0,r.kt)("td",{parentName:"tr",align:null},"BQ25101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Programming Languages"),(0,r.kt)("td",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("td",{parentName:"tr",align:null},"Arduino/ CircuitPython"),(0,r.kt)("td",{parentName:"tr",align:null},"Arduino/ MicroPython/ CircuitPython"),(0,r.kt)("td",{parentName:"tr",align:null},"Arduino/ MicroPython/ CircuitPython"),(0,r.kt)("td",{parentName:"tr",align:null},"Arduino/ MicroPython/ CircuitPython")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware overview"),(0,r.kt)("h3",{id:"pinout-diagram"},"Pinout diagram"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png",style:{width:1e3,height:"auto"}})),(0,r.kt)("h3",{id:"component-overview"},"Component overview"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png",style:{width:500,height:"auto"}})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png",style:{width:500,height:"auto"}})),(0,r.kt)("h2",{id:"power-pins"},"Power Pins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"5V - This is 5v out from the USB port. You can also use this as a voltage input but you must have some sort of diode (schottky, signal, power) between your external power source and this pin with anode to battery, cathode to 5V pin. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3V3 - This is the regulated output from the onboard regulator. You can draw 700mA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GND - Power/data/signal ground"))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"First, we are going to connect XIAO ESP32C3 to the computer, connect an LED to the board and upload a simple code from Arduino IDE to check whether the board is functioning well by blinking the connected LED."),(0,r.kt)("h3",{id:"hardware-setup"},"Hardware setup"),(0,r.kt)("p",null,"You need to prepare the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 x ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"},"Seeed Studio XIAO ESP32C3")),(0,r.kt)("li",{parentName:"ul"},"1 x Computer"),(0,r.kt)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"Seeed USB Type-C support USB 3.1"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Connect XIAO ESP32C3 to your computer via a USB Type-C cable.")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png",style:{width:120,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Connect an LED to D10 pin as follows")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png",style:{width:500,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Make sure to connect a resistor (about 150\u03a9) in series to limit the current through the LED and to prevent excess current that can burn out the LED"),(0,r.kt)("h3",{id:"software-setup"},"Software setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Download and Install the latest version of Arduino IDE according to your operating system")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.arduino.cc/en/software",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Add ESP32 board package to your Arduino IDE"))),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"File > Preferences"),", and fill ",(0,r.kt)("strong",{parentName:"p"},'"Additional Boards Manager URLs"')," with the url below:\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json"},"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png",style:{width:550,height:"auto"}})),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board > Boards Manager..."),', type the keyword "',(0,r.kt)("strong",{parentName:"p"},"esp32"),'" in the search box, select the latest version of *',(0,r.kt)("strong",{parentName:"p"},"*esp32**"),", and install it."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png",style:{width:550,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Select your board and port")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Board")),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board > ESP32 Arduino"),' and select "',(0,r.kt)("strong",{parentName:"p"},"XIAO_ESP32C3"),'". The list of board is a little long and you need to roll to the buttom to reach it.'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png",style:{width:800,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Port")),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Port")," and select the serial port name of the connected XIAO ESP32C3. This is likely to be COM3 or higher (",(0,r.kt)("strong",{parentName:"p"},"COM1")," and ",(0,r.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports)."),(0,r.kt)("h3",{id:"blink-the-led"},"Blink the LED"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Copy the below code to Arduino IDE")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// define led according to pin diagram\nint led = D10;\n\nvoid setup() {\n  // initialize digital pin led as an output\n  pinMode(led, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(led, HIGH);   // turn the LED on \n  delay(1000);               // wait for a second\n  digitalWrite(led, LOW);    // turn the LED off\n  delay(1000);               // wait for a second\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Click the ",(0,r.kt)("strong",{parentName:"li"},"Upload")," button to upload the code to the board")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png",style:{width:500,height:"auto"}})),(0,r.kt)("p",null,"Once uploaded, you will see the connected LED blinking with a 1-second delay between each blink. This means the connection is successful and now you can explore more projects with XIAO ESP32C3!"),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"q1-my-arduino-ide-is-stuck-when-uploading-code-to-the-board"},"Q1: My Arduino IDE is stuck when uploading code to the board"),(0,r.kt)("p",null,"You can first try to reset the board by clicking the ",(0,r.kt)("strong",{parentName:"p"},"RESET BUTTON")," once while the board is connected to your PC. If that does not work, hold the ",(0,r.kt)("strong",{parentName:"p"},"BOOT BUTTON"),", connect the board to your PC while holding the ",(0,r.kt)("strong",{parentName:"p"},"BOOT")," button, and then release it to enter ",(0,r.kt)("strong",{parentName:"p"},"bootloader mode"),"."),(0,r.kt)("h3",{id:"q2-my-board-is-not-showing-up-as-a-serial-device-on-arduino-ide"},"Q2: My board is not showing up as a serial device on Arduino IDE"),(0,r.kt)("p",null,"Follow the same answer as for ",(0,r.kt)("strong",{parentName:"p"},"Q1")," above."),(0,r.kt)("h3",{id:"q3-i-want-to-reflash-the-bootloader-with-factory-firmware"},"Q3: I want to reflash the bootloader with factory firmware"),(0,r.kt)("p",null,"You can simply connect the board to a PC via ",(0,r.kt)("strong",{parentName:"p"},"USB Type-C")," and reflash the bootloader with factory firmware by using ",(0,r.kt)("strong",{parentName:"p"},"ESP RF Test Tool"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Hold on the ",(0,r.kt)("strong",{parentName:"p"},"BOOT BUTTON")," and connect XIAO ESP32C3 to the PC to enter ",(0,r.kt)("strong",{parentName:"p"},"bootloader mode"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," After it is connected, release the BOOT BUTTON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.espressif.com/en/support/download/other-tools"},"this page")," and download ",(0,r.kt)("strong",{parentName:"p"},"ESP RF Test Tool and Test Guide")))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png",style:{width:1e3,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Extract the ",(0,r.kt)("strong",{parentName:"li"},".zip"),", navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"ESP_RF_Test_EN\\ESP_RF_Test_EN\\EspRFTestTool_v2.8_Manual")," and open ",(0,r.kt)("strong",{parentName:"li"},"EspRFTestTool_v2.8_Manual.exe"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png",style:{width:500,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Select ",(0,r.kt)("strong",{parentName:"li"},"ESP32C3")," as the ChipType, your COM port, ",(0,r.kt)("strong",{parentName:"li"},"115200")," as the BaudRate and click ",(0,r.kt)("strong",{parentName:"li"},"open"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png",style:{width:500,height:"auto"}})),(0,r.kt)("p",null,"You will see the following output "),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png",style:{width:500,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6.")," Select ",(0,r.kt)("strong",{parentName:"li"},"Flash")," and click ",(0,r.kt)("strong",{parentName:"li"},"Select Bin"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg",style:{width:500,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7.")," Select the file starting with ",(0,r.kt)("strong",{parentName:"li"},"ESP32-C3")," and click ",(0,r.kt)("strong",{parentName:"li"},"Open"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-7.png",style:{width:650,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 8.")," Finally click ",(0,r.kt)("strong",{parentName:"li"},"Load Bin"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png",style:{width:500,height:"auto"}})),(0,r.kt)("p",null,"You will see the following output when flashing is successful"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png",style:{width:500,height:"auto"}})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet_en.pdf"},"ESP32C3 Datasheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed_Studio_XIAO_ESP32C3_Power_Consumption_Tests.pdf"},"Seeed Studio XIAO ESP32C3 Power Consumption Tests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_ROHS.pdf"},"XIAO ESP32 ROHS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html"},"Platform IO for Seeed Studio XIAO ESP32")))),(0,r.kt)("h2",{id:"tech-support"},"Tech support"),(0,r.kt)("p",null,"Please submit any technical issues into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);