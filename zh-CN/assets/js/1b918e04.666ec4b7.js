"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={description:"Arch Max",title:"Arch Max",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"hushuxu"}},i=void 0,o={unversionedId:"Sensor/Arch/Arch_Max",id:"Sensor/Arch/Arch_Max",title:"Arch Max",description:"Arch Max",source:"@site/docs/Sensor/Arch/Arch_Max.md",sourceDirName:"Sensor/Arch",slug:"/Sensor/Arch/Arch_Max",permalink:"/docusaurus_wiki/zh-CN/Sensor/Arch/Arch_Max",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Arch/Arch_Max.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"Arch Max",title:"Arch Max",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Arch GPRS",permalink:"/docusaurus_wiki/zh-CN/Sensor/Arch/Arch_GPRS"},next:{title:"Arch Max v1.1",permalink:"/docusaurus_wiki/zh-CN/Sensor/Arch/Arch_Max_v1.1"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Pin definition",id:"pin-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Debug",id:"debug",level:2},{value:"Update or Restore Firmware",id:"update-or-restore-firmware",level:2},{value:"Version",id:"version",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Arch Max is an mbed enabled development board for rapid prototyping.\nIt's based on a STM32F407VET6 microcontroller with an ARM Cortex-M4F core running at 168MHz. It includes an open link to provide SWD debug, drag-n-drop programming and USB serial communication."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"mbed enabled"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Online development tools"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Easy to use C/C++ SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lots of published libraries and projects")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High performance STM32F407VET6"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ARM Cortex-M4 MCU with FPU at 168MHz"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"512 KB Flash, 192 KB RAM"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On-board open link for debug and programming"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Drag-n-drop programming"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"USB serial communication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SWD debug with GDB+ pyOCD/OpenOCD, Keil or IAR")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arduino form factor, compatible with lots of shields")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build-in Ethernet, USB and SD card slot for connectivity and data exchange"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",{cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"}," Item"),(0,n.kt)("th",{scope:"col"}," Typical")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Work Voltage"),(0,n.kt)("td",null," 5V")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Microcontroller"),(0,n.kt)("td",null," STM32F407VET6")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Flash Memory"),(0,n.kt)("td",null," 512kB")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," RAM"),(0,n.kt)("td",null," 192kB")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," UART"),(0,n.kt)("td",null," 4")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," I2C"),(0,n.kt)("td",null," 3")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," SPI"),(0,n.kt)("td",null," 3")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," CAN"),(0,n.kt)("td",null," 2")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," SDIO"),(0,n.kt)("td",null," 1")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Camera interface"),(0,n.kt)("td",null," 1")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Eth"),(0,n.kt)("td",null," 1")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," ADC Channels"),(0,n.kt)("td",null," 8")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," I/O pins"),(0,n.kt)("td",null,"40")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Digital I/O Max Input Voltage"),(0,n.kt)("td",null," 5.0V")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Diameter"),(0,n.kt)("td",null," 90mm x 44mm"))),(0,n.kt)("h2",{id:"pin-definition"},"Pin definition"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png",alt:null})),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX"},"this link")," to ",(0,n.kt)("strong",{parentName:"p"},"login or signup to mbed"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the mbed_blinky program")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Compile")," icon of the top toolbar to compile the program, then download a compiled hex file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drag-n-drop the downloaded bin file into the MBED disk"))),(0,n.kt)("p",null,"You can open ",(0,n.kt)("strong",{parentName:"p"},"main.cpp")," to change the program. For example, use the following code to blink the LED every 0.1s"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n\nDigitalOut led(LED1);           // on-board led is connected to D13\n\nint main()\n{\n    while (true) {\n        led =\xa0!led;\n        wait(0.1);\n    }\n}\n')),(0,n.kt)("h2",{id:"debug"},"Debug"),(0,n.kt)("p",null,"To enable SWD debug or to get debug message through USB Virtual serial, please install ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mbed.org/handbook/Windows-serial-configuration"},"the driver from mbed"),"."),(0,n.kt)("h2",{id:"update-or-restore-firmware"},"Update or Restore Firmware"),(0,n.kt)("p",null,"The latest firmware version for the Arch Max is v0203 built at Oct 8  2014. To check your firmware version and built date, open the MBED.HTM file of your MBED disk in a text editor."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin"},"The firmware v0203 2014-10-08 for Arch Max")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hold the Arch Max's button and power on it")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A CRP DISABLD disk will show"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On Windows, replace firmware.bin with the above firmware"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On Linux/Mac, use command: ",(0,n.kt)("strong",{parentName:"li"},"dd if={new_firmware.bin} of={firmware.bin} conv=notrunc"))))))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Name "),(0,n.kt)("th",null," Version "),(0,n.kt)("th",null," Note")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Arch Max v1.0 "),(0,n.kt)("td",null," v1.0 "),(0,n.kt)("td",null," 5V power supplier didn't connect to USB power, user should connect to ext-power")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Arch Max v1.1 "),(0,n.kt)("td",null," v1.1 "),(0,n.kt)("td",null," 5V power supplier can connect to USB power"))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip"},"Schematics Eagle file for ARCH Max")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf"},"Arch Max PCB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch"},"Arch Max sch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.brd"},"ARCH Max Board")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf"},"STM32F407 datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);