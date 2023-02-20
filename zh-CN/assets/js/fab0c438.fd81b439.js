"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40471],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(i),c=r,f=u["".concat(s,".").concat(c)]||u[c]||h[c]||l;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,o=new Array(l);o[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var d=2;d<l;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8909:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const l={description:"Wifi Shield V1.0",title:"Wifi Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/16/2023",author:"jianjing Huang"}},o=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Wifi_Shield_V1.0",id:"Top_Brand/Arduino/shield/Wifi_Shield_V1.0",title:"Wifi Shield V1.0",description:"Wifi Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Top_Brand/Arduino/shield/Wifi_Shield_V1.0",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/shield/Wifi_Shield_V1.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{description:"Wifi Shield V1.0",title:"Wifi Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"WIFI Shield",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/shield/Wifi_Shield"},next:{title:"Wifi Shield V1.1",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/shield/Wifi_Shield_V1.1"}},s={},d=[{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Programming",id:"software-programming",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield.jpg",alt:null})),(0,r.kt)("p",null,"This Wifi Shield utilizes a RN171 wifi module to provide your Arduino/Seeeduino with serial Ethernet's function. It only takes two pins to hook your device up to 802.11b/g wireless networks with this shield. It features an independent antenna which can cover a wider range and transmit stronger signals. With supports for common TCP, UDP and FTP communication protocols, this Wifi Shield can meet needs of most wireless network projects, like smart home networks, robot controls or personal weather stations,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function."),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Arduino, Seeeduino, Arduino Mega and Seeeduino Mega compatible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Host Data Rate up to 1 Mbps for UART, 2 Mbps over SPI slave")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UART serial port of RN171 on the Shield can be connected to Arduino by jumpers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SPI pin of RN171 is just breakout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With two Grove connectors, making it easy to connect I2C and digital IO Grove modules to Arduino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secure WiFi authentication WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Built-in networking applications: DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP"))),(0,r.kt)("h1",{id:"specifications"},"Specifications"),(0,r.kt)("table",{cellspacing:"0",width:"80%"},(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"col"}," Item"),(0,r.kt)("th",{scope:"col"}," Min"),(0,r.kt)("th",{scope:"col"}," Typical"),(0,r.kt)("th",{scope:"col"}," Max"),(0,r.kt)("th",{scope:"col"}," Unit")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"}," Voltage"),(0,r.kt)("td",null," 3.3"),(0,r.kt)("td",null," 5"),(0,r.kt)("td",null," 5.5"),(0,r.kt)("td",null," VDC")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"}," Current"),(0,r.kt)("td",null," 25"),(0,r.kt)("td",null," 60"),(0,r.kt)("td",null," 400"),(0,r.kt)("td",null," mA")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"}," Transmit power"),(0,r.kt)("td",{colspan:"3"}," 0-10"),(0,r.kt)("td",null," dBm")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"}," Frequency"),(0,r.kt)("td",{colspan:"3"}," 2402~2480"),(0,r.kt)("td",null," MHz")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"},(0,r.kt)("p",null,"Network rate",(0,r.kt)("br",null))),(0,r.kt)("td",{colspan:"4"}," 1-11 Mbps for 802.11b/6-54Mbps for 802.11g")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"}," Dimension"),(0,r.kt)("td",{colspan:"3"}," \xa060x56x19"),(0,r.kt)("td",null," mm")),(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"row"}," Net Weight"),(0,r.kt)("td",{colspan:"3"}," \xa020\xb12"),(0,r.kt)("td",null," g"))),(0,r.kt)("h1",{id:"interface-function"},"Interface Function"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield009.jpg",alt:null})),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The example we provided here is to show you how to connect this Wifi Shield to the Ethernet and get data exchanging between the shield and a virtual server started."),(0,r.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,r.kt)("p",null,"The package you receive should contain these parts: a Wifi Shield, an antenna and an antenna connector."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield001.jpg",alt:null})),(0,r.kt)("p",null,"Assemble these parts together like the picture below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield002.jpg",alt:null})),(0,r.kt)("p",null,"Mount the shield onto your Arduino/Seeeduino"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield003.jpg",alt:null})),(0,r.kt)("p",null,"Ok, time to write some code."),(0,r.kt)("h3",{id:"software-programming"},"Software Programming"),(0,r.kt)("p",null,"First you have to make sure that Arduino1.0 has already been installed on your computer."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Tb2.jpg",alt:null}),"\nDownload the wifishield library here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library")," and unzip it into the libraries file of Arduino via this path:\xa0..\\arduino-1.0\\libraries\nOpen a new sketch in Arduino-1.0, then copy the following code to your sketch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include "Wifly.h"\n#include <SoftwareSerial.h>\nWiflyClass Wifly(2,3);\nvoid setup()\n{\n Serial.begin(9600);//use the hardware serial to communicate with the PC\n Wifly.init();//Initialize the wifishield\n Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router\n Wifly.join("SSID");\n Wifly.checkAssociated();\n while(!Wifly.connect("192.168.1.164","90"));//connect the remote service\n Wifly.writeToSocket("Connected!");\n}\nvoid loop()\n{\n if(Wifly.canReadFromSocket())\n {\n   Serial.print(Wifly.readFromSocket());\n }\n if(Serial.available())\n {\n   Wifly.print((char)Serial.read());\n }\n}\n\n')),(0,r.kt)("p",null,"You need to do some modifications on this sketch according to your specific configuration."),(0,r.kt)("p",null,"1.Select Pin to connect the Serial Port of WIFI Module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"WiflyClass Wifly(2,3);\n\n")),(0,r.kt)("p",null,"The parameters 2 and 3 here represent RX and TX respectively for the software serial port. Based on this, pins of D2 and D3 should be shorted as the picture below. You can change the pin number as you like, just make sure corresponding changes on the shorted pins."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield004.jpg",alt:null})),(0,r.kt)("p",null,"2.Fill in wireless network information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router\nWifly.join("SSID");\n')),(0,r.kt)("p",null,"Fill the name of your target network into SSID and password into PASSWORD. For example, if you like to join the China-NET and its password is 12345678, then this line of code should be changed into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Wifly.setConfig("China-NET","12345678");//here to set the ssid and password of the Router\nWifly.join("China-NET");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",null,"1.Router Security type just support WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)"),(0,r.kt)("p",null,"2.Router must to connect Internet"),(0,r.kt)("p",null,"3.Fill in the information of the remote server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'while(!Wifly.connect("192.168.1.164","90"));//connect the remote service\n')),(0,r.kt)("p",null,'In the upper line, "192.168.1.164" is the remote IP address of the virtual server, and "90" is the port information.'),(0,r.kt)("p",null,"We provide a TCP Client software \xa0",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/YFTCPServer.zip"},"YFTCPServer.zip")," and serial port software ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Sscom32E.zip"},"SCCOM")," for testing purpose."),(0,r.kt)("p",null,"Open the TCP Client software you will see:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield005.jpg",alt:null})),(0,r.kt)("p",null,"Change your lines according to the information you get from this software."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'while(!Wifly.connect("192.168.1.164","90"));//connect the remote service\n')),(0,r.kt)("p",null,"Upload the sketch."),(0,r.kt)("p",null,'Now run the TCP Client software first, then the serial port software, click the "OpenCom" button, wait until a message "<--Connected!" is printed on the screen of the virtual software.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield006.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield007.jpg",alt:null})),(0,r.kt)("p",null,"Now you can communicate with the Wifi Shield via this serial port software."),(0,r.kt)("p",null,"For more detailed information about RN171, you can download the datasheet here ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf"},"RN171 Datasheet")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h1",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip"},"Wifi Shield Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0.pdf"},"wifi Shield V1.0 PCB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0%20SCH.pdf"},"wifi Shield V1.0 SCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf"},"RN171 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);