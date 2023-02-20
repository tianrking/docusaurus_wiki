"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={description:"Seeeduino v3.0",title:"Seeeduino v3.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v3.0",id:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v3.0",title:"Seeeduino v3.0",description:"Seeeduino v3.0",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v3.0.md",sourceDirName:"Sensor/Seeeduino Series/Seeeduino",slug:"/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v3.0",permalink:"/docusaurus_wiki/zh-CN/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v3.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v3.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Seeeduino v3.0",title:"Seeeduino v3.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino V2.21",permalink:"/docusaurus_wiki/zh-CN/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v2.21"},next:{title:"Seeeduino",permalink:"/docusaurus_wiki/zh-CN/Sensor/Seeeduino Series/Seeeduino/"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Usage",id:"usage",level:2},{value:"USB-to-Serial",id:"usb-to-serial",level:3},{value:"Breakout",id:"breakout",level:3},{value:"UART: D0 (RX) and D1 (TX).",id:"uart-d0-rx-and-d1-tx",level:4},{value:"External Interrupts: D2 and D3.",id:"external-interrupts-d2-and-d3",level:4},{value:"PWM: D3, D5, D6, D9, D10, D11.",id:"pwm-d3-d5-d6-d9-d10-d11",level:4},{value:"SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK).",id:"spi-d10-ss-d11-mosi-d12-miso-d13-sck",level:4},{value:"SPI diagram",id:"spi-diagram",level:5},{value:"&quot;L&quot; indicator.",id:"l-indicator",level:4},{value:"I2C: A4 (SDA) &amp; A5 (SCL).",id:"i2c-a4-sda--a5-scl",level:4},{value:"Power",id:"power",level:3},{value:"Grove connectors",id:"grove-connectors",level:3},{value:"On-board Indicators",id:"on-board-indicators",level:3},{value:"Related Reading",id:"related-reading",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_v3.0_top.jpg",alt:"enter image description here"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Seeeduino v3 is a microcontroller board based on the ATmega328, and it's an Arduino compatible board. It has a FTDI USB-to-serial driver chip which can be regarded as a bridge, let your computer can communicate with the board. It has 14 digit pins (which include 6 PWM pins and UART port) and 8 analog pins, a 16 MHz ceramic resonator, a USB connection, a reset button, an ICSP header and a DC power jack. It has two toggle switches, one for input voltage change of ATmega328, the other is enable/disable pin of DTR, which you can use FTDI function alone without the influence of ATmega328. It also has two white Grove connectors, and make it convenient for using Grove products with the board."),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,i.kt)("td",{parentName:"tr",align:null},"Atmel ATmega328 (AVR 8-bit) in TQFP-32 package")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Board (Boot-loader)"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino Duemilanove w/Atmega328")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"5V or 3.3V (choice by slide switch)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maximum output current of 3V3 port and 5V port"),(0,i.kt)("td",{parentName:"tr",align:null},"5V port - 500mA, 3V3 port - 800mA(need to be powered by DC jack or Vin)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maximum output current of digit pins"),(0,i.kt)("td",{parentName:"tr",align:null},"40mA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"miniUSB Input Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"5V.  Maximum is 5.5V.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DC Jack & Vin Input Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"7V to 12V (lower is preferred).  Maximum is 20V.  If input lower than 7V and switch set to 5V, then VCC at AVR is about 2V below the input.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"14 (of which 6 provide PWM output)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Analog Input Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"8 (of which 2 are used for I2C communication - PC4 and PC5)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,i.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,i.kt)("td",{parentName:"tr",align:null},"2 KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EEPROM"),(0,i.kt)("td",{parentName:"tr",align:null},"1 KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,i.kt)("td",{parentName:"tr",align:null},"16 MHz")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"usb-to-serial"},"USB-to-Serial"),(0,i.kt)("p",null,"The Seeeduino has a FTDI USB-to-serial driver chip onboard - FT232R which programmed as a USB-to-serial converter."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI.png",alt:"enter image description here"})),(0,i.kt)("p",null,"Ten pins of FT232R have been pointed out, it beside the ICSP port, make it convenient for you to use those pins if needed."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI_pinout.png",alt:"enter image description here"})),(0,i.kt)("p",null,'There\'s a toggle switch "M_RST_AUTO" onboard. This determines whether the DTR signal from the host is allowed to reset the ATmega328 micro controller.'),(0,i.kt)("p",null,'Set to "AUTO" for Automatic mode, which allows the host to reset the microcontroller using the DTR signal to automatically reset the microcontroller. Note: This position is required during development, thus it will be the default position for most people.'),(0,i.kt)("p",null,'Set to "M" for Manual mode, which disables the DTR signal from the host, thus requiring the user to physically press the RESET button to reset the micro controller. Also, it is necessary to set it to "M" mode if you wanna use FT232R alone.'),(0,i.kt)("p",null,"More information about FTDI chip, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/index.html"},"homepage of FTDI")),(0,i.kt)("h3",{id:"breakout"},"Breakout"),(0,i.kt)("p",null,"The Seeeduino is a main board based on ATmega328, and all useful pins are pointed out. There are power pins, 14 digital IO pins and 8 analog pins on Seeeduino, meantime, six of the digital IO pins can be used as PWM outputs. All the pins of Seeeduino are wired to 2.54mm spaced headers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_pinout.png",alt:"enter image description here"})),(0,i.kt)("p",null,"Each of the 14 digital pins on the board can be used as an input or output, using ",(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/PinMode"},"pinMode()"),(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/DigitalWrite"},"digitalWrite()"),(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/DigitalRead"},"digitalRead()"),' functions. They operate at 5 volts or 3.3 volts while turning the toggle switch "3V3_VCC_5V" to two different positions. And each pin can provide or receive a maximum of 40 mA. And a ',(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/SoftwareSerial"},"SoftwareSerial")," library allows for serial communication on any of digital pins."),(0,i.kt)("h4",{id:"uart-d0-rx-and-d1-tx"},"UART: D0 (RX) and D1 (TX)."),(0,i.kt)("p",null,"It can be used to receive and transmit TTL serial data. These two pins have been connected to FTDI chip, which makes a direct communication between your computer and peripheral devices."),(0,i.kt)("h4",{id:"external-interrupts-d2-and-d3"},"External Interrupts: D2 and D3."),(0,i.kt)("p",null,"The two pins are the external interrupts from ATmega328, it can be configured to trigger an interrupt on a low value, a rising or falling edge, or a change in value. More information refer to ",(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/AttachInterrupt"},"attachInterrupt() function"),"."),(0,i.kt)("h4",{id:"pwm-d3-d5-d6-d9-d10-d11"},"PWM: D3, D5, D6, D9, D10, D11."),(0,i.kt)("p",null,"Pulse Width Modulation, is a technique for getting analog results with digital means. It can be generated by using analogWrite(), with an output of a series of repeated HIGH and LOW pulse signals. The PWM frequency of Seeeduino is about 500Hz, and Provide 8-bit PWM output with the ",(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/AnalogWrite"},"analogWrite()")," function. More information please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/AnalogWrite"},"PWM")),(0,i.kt)("h4",{id:"spi-d10-ss-d11-mosi-d12-miso-d13-sck"},"SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK)."),(0,i.kt)("p",null,"These pins support SPI communication using the ",(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/SPI"},"SPI library"),"."),(0,i.kt)("h5",{id:"spi-diagram"},"SPI diagram"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"MISO (D12)"),(0,i.kt)("th",{parentName:"tr",align:null},"VCC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCK(D13)"),(0,i.kt)("td",{parentName:"tr",align:null},"MOSI(D11)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reset"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")))),(0,i.kt)("h4",{id:"l-indicator"},'"L" indicator.'),(0,i.kt)("p",null,'There\'s a led "L" on the board, and it is connected to D13, you can control this led via D13.'),(0,i.kt)("p",null,"There are eight analog pins on the analog header, labeled A0 through A7. Each pin can provide 10 bits of resolution. This means that an analog input between 0V and 5V (0V to 3.3V) can be mapped to 0 to 1024 (0 to 675). You can use analogRead() to get the value from an analog input."),(0,i.kt)("h4",{id:"i2c-a4-sda--a5-scl"},"I2C: A4 (SDA) & A5 (SCL)."),(0,i.kt)("p",null,"Seeeduino can generate a bus clock to control its slave I2C device with a specific address. Grove I2C also connects to A4 & A5."),(0,i.kt)("p",null,"There's a reset button on the board, which connected to the pin of RST. Press the button and this pin will be pulled down, then the ATmega328 will restart."),(0,i.kt)("h3",{id:"power"},"Power"),(0,i.kt)("p",null,'The Seeeduino can be powered through USB or DC Jack connector (Vin). If you use USB to power it, the input voltage should be regulated 5VDC, like a computer or a USB wall adaptor. On the other hand, when you choose DC Jack, which should be a 2.1mm center-positive plug with 5.5mm outer hole. DC power input should be 7-20V, however, as a result of overheat from a higher input voltage, 7-12V is recommended.There\'s a voltage regulator on the board, so it can convert 5v to 3.3v. While turning the toggle switch "3V3_VCC_5V" to 3V3 position, the input voltage of ATmega328 will be changed to 3.3v, meantime, the board will operate 3.3 volts.'),(0,i.kt)("h3",{id:"grove-connectors"},"Grove connectors"),(0,i.kt)("p",null,"The Seeeduino has two white Grove connectors, one is IIC port and the other is UART port. This two port are pointed out from ATmega328, it is designed for plugging Grove products onto the board more conveniently."),(0,i.kt)("h3",{id:"on-board-indicators"},"On-board Indicators"),(0,i.kt)("p",null,"There are some indicators on the board, which can display some status."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Label"),(0,i.kt)("th",{parentName:"tr",align:null},"Connection"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'User LED with "L" label'),(0,i.kt)("td",{parentName:"tr",align:null},"It is connected to ATmega328P PB5/SCK pin (Digital header pin 13).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Reset LED with "RST" label'),(0,i.kt)("td",{parentName:"tr",align:null},"It is connected to ATmega328P PC6/RESET pin. It is lite when Reset is low.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Power LED with "PWR" label'),(0,i.kt)("td",{parentName:"tr",align:null},"It is connected to ATmega328P VCC pin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Transmit LED with "TX" label'),(0,i.kt)("td",{parentName:"tr",align:null},"It is connected to FT232RL CBUS1 pin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Receive LED with "RX" label'),(0,i.kt)("td",{parentName:"tr",align:null},"It is connected to FT232RL CBUS0 pin.")))),(0,i.kt)("h2",{id:"related-reading"},"Related Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/How_to_use_Seeeduino/"},"How to use Seeeduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Seeeduino/"},"Version Tracker"))),(0,i.kt)("h2",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"This documentation is licensed under the Creative Commons ",(0,i.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0")," Source code and libraries are licensed under ",(0,i.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl.html"},"GPL/LGPL"),", see source code files for details."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Source]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip"},"Seeeduino v3.0_Source_files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino%20v3.0%20PCB.pdf"},"Seeeduino v3.0 PCB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0%20SCH.pdf"},"Seeeduino v3.0 SCH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0.pdf"},"Schematic in pdf"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);