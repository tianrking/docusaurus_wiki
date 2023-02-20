"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75852],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(i),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return i?r.createElement(k,l(l({ref:t},u),{},{components:i})):r.createElement(k,l({ref:t},u))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,l=new Array(n);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<n;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},70741:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=i(87462),a=(i(67294),i(3905));const n={description:"Wifi Bee v2.0",title:"Wifi Bee v2.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Seeed_Elderly/Bee/Wifi_Bee_v2.0",id:"Seeed_Elderly/Bee/Wifi_Bee_v2.0",title:"Wifi Bee v2.0",description:"Wifi Bee v2.0",source:"@site/docs/Seeed_Elderly/Bee/Wifi_Bee_v2.0.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Seeed_Elderly/Bee/Wifi_Bee_v2.0",permalink:"/docusaurus_wiki/Seeed_Elderly/Bee/Wifi_Bee_v2.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Seeed_Elderly/Bee/Wifi_Bee_v2.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Wifi Bee v2.0",title:"Wifi Bee v2.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Wifi Bee",permalink:"/docusaurus_wiki/Seeed_Elderly/Bee/Wifi_Bee"},next:{title:"XBee Shield V2.0",permalink:"/docusaurus_wiki/Seeed_Elderly/Bee/XBee_Shield_V2.0"}},s={},p=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Configure Wifi Bee",id:"configure-wifi-bee",level:3},{value:"Connect the TCP server and Wifi Bee",id:"connect-the-tcp-server-and-wifi-bee",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_bee_v2_01.jpg",alt:null})),(0,a.kt)("p",null,"Wifi Bee v2.0 is the update version of Wifi Bee v1.0. We replace transceiver module MRF24WB0MA which is SPI interface with RN-171 used UART interface. Wifi Bee v2.0 module incorporates 802.11 b/g radio, 32 bit processor, TCP/IP stack, real-time clock, crypto accelerator, power management unit and analog sensor interface. It can directly plug into the Bee sockets and use the UART port for communication. You can also use AT command for advanced configuration to meet your unique requirement."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wifi-Bee-v2.0-p-1637.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compatible with any Bee socket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Host interface\uff1a UART")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transmit power: 0dBm to 12dBm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Frequency\uff1a2402~2480 MHz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Channal\uff1a0~13")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integrated TCP / IP protocol stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On-board Multilayer Chip Antenna"))),(0,a.kt)("h2",{id:"demonstration"},"Demonstration"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this section, we will use Wifi Bee to create a Web server as an sample application. Let's follow the steps below to make it work!\nNote: In order to configure this module, you will need an adapter or Xbee shield that lets you communicate with the module, before you can plug it and use on other modules."),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("p",null,"Here's all the hardware needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1) Wifi Bee")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2) An adaptor\uff0csuch as ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16Uart"},"SBee"),",  ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-xbee-carrier-p-905.html?cPath=98_16"},"Grove -Xbee Carrier"),"\uff0c ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16"},"Xbee Shield"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3) Mini USB cable"))),(0,a.kt)("p",null,"Plug wifi bee into the Bee Socket of your adaptor, and connect adaptor to your computer via Mini USB cable. Before wifi bee donot connect to your network, the ASSOC indicator is in flash state."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_Beev2.0.jpg",alt:null})),(0,a.kt)("h3",{id:"configure-wifi-bee"},"Configure Wifi Bee"),(0,a.kt)("p",null,"We need a serial monitor for configuring the Wifi Bee. So before configuring Wifi bee, you need perpare a serial tool. In this case, we choose usual ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Sscom32E.zip"},"SSCOM3.2")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'1) Choose the right serial port and click "Open Com" button\uff0cshown above, set the baud rate to 9600.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'2) Donot select "SendNew", and send AT command $$$to the wifi Bee and it will reply "CMD" to indicate that it enter the configure mode properly.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'3) Select "SendNew" after entering to configure mode\uff0csend AT command set u b 9600 to set the baud rate as 9600. Of cource\uff0cyou can also set it as 38400.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4) Type show net   and it will show current network settings.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"5) Type scan  to view a list of Wifi networks around."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool_Scan_net.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'6) Send AT command  set wlan join 1\uff0cif the serial port reply "ADK" which indicates Wifi Bee enters to Auto control mode.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"7)Type join your router's SSID (like join Seeed-STU)to connect to associate with an open access point. If we join a a secure network type like this:"))),(0,a.kt)("p",null,"set wlan ssid your router's SSID"),(0,a.kt)("p",null,"set wlan pass your router's password"),(0,a.kt)("p",null,"save"),(0,a.kt)("p",null,"reboot"),(0,a.kt)("p",null,"And the monitor replies with current ip address and opened port. It can be easily figured out that the ip address of my Wifi Bee is 192.168.0.28 and the port is 2000."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Join_network.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"8) Use Web browser to access ",(0,a.kt)("a",{parentName:"li",href:"http://ip:port"},"http://ip:port"),", like: ",(0,a.kt)("a",{parentName:"li",href:"http://192.168.0.28:2000"},"http://192.168.0.28:2000"),", and the monitor receives the http request from the Web browser shown below. However, the Web browser will not receive anything due to the wifi bee replies nothing.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Web_access.png",alt:null})),(0,a.kt)("p",null,"For more command, please view the Wifly Command Reference of Resource part."),(0,a.kt)("h3",{id:"connect-the-tcp-server-and-wifi-bee"},"Connect the TCP server and Wifi Bee"),(0,a.kt)("p",null,"Here we select ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/TCPUDPDbg.zip"},"TCPUDPbg")," to work as an TCP client and send commands to the Wifi Bee."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'1\uff09 Download and run TCPUDPbg. Click "CreatConnection", we can see this picture\uff1a')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/TCPUDPTool.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'2\uff09After selecting TCP Type, type IP address and port of Wifi Bee and click "Create".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'3\uff09Click"Connect" button in left sidebar\uff0cNow you could send commands via the TCP client simulated by TCPUDPbg to the wifi bee. Thus TCPUDPbg will receive the strings sent from the Serial monitor also\uff01'))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Communication.png",alt:null})),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"  Revision"),(0,a.kt)("th",null," Descriptions"),(0,a.kt)("th",null," Release")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"300px"}," Wifi Bee v1.0"),(0,a.kt)("td",{width:"500px"}," transceiver module MRF24WB0MA which is SPI interface, and using a Atmega328p"),(0,a.kt)("td",{width:"200px"}," Dec 13, 2011")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"300px"}," Wifi Bee v2.0"),(0,a.kt)("td",{width:"500px"}," replace MRF24WB0MA with RN-171, cancel Atmega328p chip"),(0,a.kt)("td",{width:"200px"}," Nov 11, 2013"))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip"},"Wifi Bee v2.0 Eagle File"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-171.pdf"},"RN-171 Datasheet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-UM.pdf"},"Wifi Command Reference"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Antenna_Datasheet.pdf"},"Antenna Datasheet")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);