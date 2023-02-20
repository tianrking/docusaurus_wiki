"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},23838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={description:"Arch Max v1.1",title:"Arch Max v1.1",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"hushuxu"}},i=void 0,o={unversionedId:"Sensor/Arch/Arch_Max_v1.1",id:"Sensor/Arch/Arch_Max_v1.1",title:"Arch Max v1.1",description:"Arch Max v1.1",source:"@site/docs/Sensor/Arch/Arch_Max_v1.1.md",sourceDirName:"Sensor/Arch",slug:"/Sensor/Arch/Arch_Max_v1.1",permalink:"/docusaurus_wiki/zh-CN/Sensor/Arch/Arch_Max_v1.1",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Arch/Arch_Max_v1.1.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"Arch Max v1.1",title:"Arch Max v1.1",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Arch Max",permalink:"/docusaurus_wiki/zh-CN/Sensor/Arch/Arch_Max"},next:{title:"Heart Sound Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Arch/Heart-Sound_Sensor"}},p={},d=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Debug",id:"debug",level:2},{value:"Update or Restore Firmware",id:"update-or-restore-firmware",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_v1.1_product_view.jpg",alt:null})),(0,n.kt)("p",null,"The Arch Max is a mbed enabled development board for rapid prototyping. It is based on an STM32F407VET6 microcontroller with an ARM Cortex-M4F core running at 168MHz. It provides ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug"},"Serial Wire Debug"),"(SWD) debug, drag-and-drop programming and USB serial communication."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arch Max v1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"5V cannot be powered by USB, user should connect to ext-power")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arch Max v1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"v1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"5V cannot be powered by USB")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mbed enabled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Online development tools(include IDE)"),(0,n.kt)("li",{parentName:"ul"},"Complete and straightforward C/C++ SDK"),(0,n.kt)("li",{parentName:"ul"},"Massive examples and tutorials"))),(0,n.kt)("li",{parentName:"ul"},"High-performance STM32F407VET6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ARM Cortex-M4 MCU with FPU of 168MHz"),(0,n.kt)("li",{parentName:"ul"},"512 KB Flash memory, 192 KB RAM"))),(0,n.kt)("li",{parentName:"ul"},"On-board programming and debug",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Drag-and-drop programming"),(0,n.kt)("li",{parentName:"ul"},"USB serial communication"),(0,n.kt)("li",{parentName:"ul"},"SWD debug with GDB+ pyOCD/OpenOCD, Keil or IAR"))),(0,n.kt)("li",{parentName:"ul"},"Arduino form factor, compatible with lots of shields"),(0,n.kt)("li",{parentName:"ul"},"Built-in Ethernet port, USB and SD card slot for Internet connectivity and data exchange")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter/Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Work Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,n.kt)("td",{parentName:"tr",align:null},"STM32F407VET6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,n.kt)("td",{parentName:"tr",align:null},"512KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RAM"),(0,n.kt)("td",{parentName:"tr",align:null},"192KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UART"),(0,n.kt)("td",{parentName:"tr",align:null},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SPI"),(0,n.kt)("td",{parentName:"tr",align:null},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CAN"),(0,n.kt)("td",{parentName:"tr",align:null},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDIO"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Camera interface"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Eth"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ADC Channels"),(0,n.kt)("td",{parentName:"tr",align:null},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I/O pins"),(0,n.kt)("td",{parentName:"tr",align:null},"40")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Digital I/O Max Input Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"5.0V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Diameter"),(0,n.kt)("td",{parentName:"tr",align:null},"90mm x 44mm")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_Pinout.png",alt:null})),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Get_started_with_mbed.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX"},"here")," to login or signup to mbed"),(0,n.kt)("li",{parentName:"ol"},"Import the mbed","_","blinky program"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Compile")," icon of the top toolbar to compile the program, then download a compiled hex file."),(0,n.kt)("li",{parentName:"ol"},"Drag-n-drop the downloaded bin file into the mbed disk")),(0,n.kt)("p",null,"You can open ",(0,n.kt)("strong",{parentName:"p"},"main.cpp")," to change the program. For example, use the following code to blink the LED every 0.1 second"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    #include "mbed.h"\n\n    DigitalOut led(LED1);          // on-board led is connected to D13\n\n    int main()\n    {\n        while (true) {\n            led =\xa0!led;\n            wait(0.1);\n        }\n    }\n')),(0,n.kt)("h2",{id:"debug"},"Debug"),(0,n.kt)("p",null,"To enable SWD debug or to get debug message through USB Virtual serial, please install ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mbed.org/handbook/Windows-serial-configuration"},"a driver from mbed"),"."),(0,n.kt)("h2",{id:"update-or-restore-firmware"},"Update or Restore Firmware"),(0,n.kt)("p",null,"The latest firmware version for the Arch Max is v0203 built at Oct 8, 2014. To check your firmware version and built date, open the mbed.HTM file of your mbed disk in a text editor."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin"},"The firmware v0203 2014-10-08 for Arch Max")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Press and hold the Arch Max's button to power it on."),(0,n.kt)("li",{parentName:"ul"},"A CRP DISABLD disk will show",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On Windows, replace firmware.bin with the above firmware"),(0,n.kt)("li",{parentName:"ul"},"On Linux/Mac, enter command: ",(0,n.kt)("strong",{parentName:"li"},"dd if={new","_","firmware.bin} of={firmware.bin} conv=notrunc"))))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/ARCH_Max.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/ARCH_Max.zip"},"Schematics Eagle file for ARCH Max")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max.pdf"},"Schematics PDF file for ARCH Max")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/STM32F407.pdf"},"STM32F407 datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);