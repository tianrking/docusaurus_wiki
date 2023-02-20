"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21091],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>k});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(i),m=r,k=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return i?n.createElement(k,a(a({ref:t},p),{},{components:i})):n.createElement(k,a({ref:t},p))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},72274:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const o={description:"Codesys for Edge Box RPi 200",title:"Codesys for Edge Box RPi 200",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"jianjing Huang"}},a=void 0,s={unversionedId:"Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-codesys",id:"Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-codesys",title:"Codesys for Edge Box RPi 200",description:"Codesys for Edge Box RPi 200",source:"@site/docs/Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-codesys.md",sourceDirName:"Edge/Edge_Series/Edge_Box_RPi_200",slug:"/Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-codesys",permalink:"/docusaurus_wiki/zh-CN/Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-codesys",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Edge/Edge_Series/Edge_Box_RPi_200/Edgebox-rpi-200-codesys.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"Codesys for Edge Box RPi 200",title:"Codesys for Edge Box RPi 200",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"reServer J2032 Flash NVIDIA JetPack\u2122 OS",permalink:"/docusaurus_wiki/zh-CN/Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack"},next:{title:"BeagleBone\xae Introduction",permalink:"/docusaurus_wiki/zh-CN/Edge/Beagle_Bone/BeagleBone"}},l={},d=[{value:"Edgebox-RPI-200",id:"edgebox-rpi-200",level:2},{value:"Feature",id:"feature",level:3},{value:"What is Codesys?",id:"what-is-codesys",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Project Preparation",id:"project-preparation",level:3},{value:"Toggle USER LED project with Edgebox-RPI-200",id:"toggle-user-led-project-with-edgebox-rpi-200",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"edgebox-rpi-200"},"Edgebox-RPI-200"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg\n"})),(0,r.kt)("p",null,"EdgeBox-RPi-200 series are all-in-one Raspberry Pi-based industrial edge computing controllers, combining multiple industrial purposes. Designed as high-scalability and rugged industrial hardware, mounted with rich IO resources and supported by the great Raspberry Pi industrial software ecosystem, it is an ideal choice for smart automation and Industrial Internet of Things(IIoT) solutions."),(0,r.kt)("h3",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All-in-one Industry Controller:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"More than just a PLC, PAC, more can it implement functions of the IIoT Gateway, OPC UA Server and Industry PC."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Powerful and Flexible Processors:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Powered by Raspberry Pi Compute Module 4 (CM4), equipped up to 4GB RAM and 16GB eMMC, performing real-time operation and multi-process."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rich IO resources and Industrial Interfaces Mounted:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support a wide range of industrial bus protocols and standards"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multiple Communication Capabilities:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Carry full-featured wireless interconnectivity and a RJ45 Gigabit Ethernet, supported by multiple cloud services"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rugged Industrial-grade Hardware Design:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Integrated thermal management with full Aluminum heatsink enclosure, supporting 35mm DIN and wall mount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Great Raspberry Pi Industrial Software Ecosystem:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support a variety of industrial software and platforms, including Codesys, Node Red, MQTT, OPC UA, Ignition and etc.")))),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("h2",{id:"what-is-codesys"},"What is Codesys?"),(0,r.kt)("p",null,"Codesys is an intergrated industrial standard IEC 61131-3 software development environment for programming the industrial controller and automations."),(0,r.kt)("p",null,"In this wiki we have used the Codesys Development System V3 software as IDE to config and program software to run on the Edgebox-RPI-200 which is a Raspberry Pi Computer Module 4 based PLC contoller, therefore the CODESYS Control for Raspberry Pi MC runtime will be installed and configured with the Edgebox-RPI-200."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 x Windows PC Host computer"),(0,r.kt)("li",{parentName:"ul"},"1 x ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},"Edgebox-RPI-200")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://store.codesys.com/engineering/codesys.html?___store=en"},"CODESYS Development System V3")," Software"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html"},"CODESYS Control for Raspberry Pi MC SL")," License and Installer")),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://store.codesys.com/engineering/codesys.html?___store=en"},"CODESYS Development System V3 download page")," to download the CODESYS Development System V3 installer according to your Windows PC Host computer setup, and follow the installation wizard to install the program."),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html"},"CODESYS Control for Raspberry Pi MC SL")," to purchase the License, or purchase ",(0,r.kt)("a",{parentName:"p",href:"https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html"},"CODESYS Control for Raspberry Pi SL")," for your own preferences, and Download the Raspberry Pi CODESYS installer package."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"project-preparation"},"Project Preparation"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure you have the CODESYS Development System V3 software install and opened on your host computer.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 1:")," ",(0,r.kt)("strong",{parentName:"p"},"Install CODESYS Control for Raspberry PI package on CODESYS Development System"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 1-1:")," Please ",(0,r.kt)("strong",{parentName:"p"},"Open")," the ",(0,r.kt)("strong",{parentName:"p"},"Codesys Installer")," by ",(0,r.kt)("strong",{parentName:"p"},"click"),' on "',(0,r.kt)("strong",{parentName:"p"},'"TOOLS> CODESYS Installer"'),'"'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 1-2:")," Please ",(0,r.kt)("strong",{parentName:"li"},"close")," ",(0,r.kt)("strong",{parentName:"li"},"CODESYS Development System V3 software")," as required during package installation, otherwise you will get warning as below:")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 1-3:")," Please click ",(0,r.kt)("strong",{parentName:"li"},'"browse"')," and select ",(0,r.kt)("strong",{parentName:"li"},'"CODESYS Control for Raspberry Pi MC SL package"')," and ",(0,r.kt)("strong",{parentName:"li"},'"install"'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"})),(0,r.kt)("h3",{id:"toggle-user-led-project-with-edgebox-rpi-200"},"Toggle USER LED project with Edgebox-RPI-200"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the Edgebox-RPI-200 is powered up and connected to the same network as you host computer, you will need to get the ip address for Edgebox-RPI-200 from the DHCP leases table of the router you have connected.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 1:")," ",(0,r.kt)("strong",{parentName:"li"},"Project Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 1-1:")," Open the CODESYS Development System V3 software and select ",(0,r.kt)("strong",{parentName:"li"},'"File>New Project..."'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 1-2:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"New Project"')," window, under ",(0,r.kt)("strong",{parentName:"li"},'"Categories"')," window select ",(0,r.kt)("strong",{parentName:"li"},'"projects"'),", under ",(0,r.kt)("strong",{parentName:"li"},'"Templates"')," select ",(0,r.kt)("strong",{parentName:"li"},'"Standard project"'),", ",(0,r.kt)("strong",{parentName:"li"},"enter")," your ",(0,r.kt)("strong",{parentName:"li"},"project name"),", and then click ",(0,r.kt)("strong",{parentName:"li"},'"OK"'),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 1-3:")," At the Standard Project Window, select ",(0,r.kt)("strong",{parentName:"li"},'"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"')," for device, and  for PLC_PRG in select ",(0,r.kt)("strong",{parentName:"li"},'"Ladder Logic Diagram (LD)"'),", then click ",(0,r.kt)("strong",{parentName:"li"},'"OK"'),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"})),(0,r.kt)("p",null,"You should see similar sceen after you have setup a new project for Raspberry Pi:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 2:")," Config Edgebox-RPI-200")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 2-1:")," Select ",(0,r.kt)("strong",{parentName:"p"},'"Tools>Update Raspberry Pi"')))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 2-2:")," At the Raspberry Pi side panel fill-in the following infomation, followed by click the ",(0,r.kt)("strong",{parentName:"li"},'"Install"')," button to install the ",(0,r.kt)("strong",{parentName:"li"},'"CODESYS Control for Raspberry Pi MC runtime"')," into Edgebox-RPI-200.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login credentials"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username: pi"),(0,r.kt)("li",{parentName:"ul"},"Password: raspberry"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select Target:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IP Address: 192.168.1.40"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CODESYS Runtime Package"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version: 4.6.0.0(raspberry, armhf)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 2-3:")," At the ",(0,r.kt)("strong",{parentName:"p"},'"Configure Runtime"')," pop up window select the ",(0,r.kt)("strong",{parentName:"p"},'"runtime mode"')," according to your preferences, in this case we choose the default ",(0,r.kt)("strong",{parentName:"p"},'"Multicore"')," and click ",(0,r.kt)("strong",{parentName:"p"},'"OK"')))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 2-4:")," Too confirm the ",(0,r.kt)("strong",{parentName:"li"},'"CODESYS Control for Raspberry Pi MC runtime"')," is running on ",(0,r.kt)("strong",{parentName:"li"},'"Edgebox-RPI-200"'),", please click ",(0,r.kt)("strong",{parentName:"li"},'"Start"')," at the ",(0,r.kt)("strong",{parentName:"li"},'"Runtime"')," section, and then check the ",(0,r.kt)("strong",{parentName:"li"},'"Messages"')," windows state that ",(0,r.kt)("strong",{parentName:"li"},'"Standard output: codesyscontrol already running"'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 3:")," ",(0,r.kt)("strong",{parentName:"p"},"Config GPIO Device:"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 3-1:")," Add GPIO at Devices tab, first select ",(0,r.kt)("strong",{parentName:"p"},'"Devices"')," tab at the left hand side bar, then ",(0,r.kt)("strong",{parentName:"p"},'"right click"')," the Device select ",(0,r.kt)("strong",{parentName:"p"},'"Add Device"')," from the dropdown list"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 3-2:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"Add Device"')," window, click ",(0,r.kt)("strong",{parentName:"li"},'"+"')," at the Miscellaneous, and then select the ",(0,r.kt)("strong",{parentName:"li"},'"GPIO"')," option and then click ",(0,r.kt)("strong",{parentName:"li"},'"Add Device"')," to confirm.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"})),(0,r.kt)("p",null,"Now you should see a new GPIO device listed in the device tab."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 3-3:")," Add 1 bit GPIO device, Right click at the new added ",(0,r.kt)("strong",{parentName:"li"},'"GPIO"')," device from above step, and then select ",(0,r.kt)("strong",{parentName:"li"},'"Add Device..."')," at the dropdown list.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 3-4:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"Add Device"')," window, select ",(0,r.kt)("strong",{parentName:"li"},'"GPIOS 1 bit"')," option and then click ",(0,r.kt)("strong",{parentName:"li"},'"Add Device"')," to confirm.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 3-5:")," To config the GPIO, double click the new added device from the above step ",(0,r.kt)("strong",{parentName:"li"},'"GPIOS_1_bit(GPIOs 1 bit)"')," to bring up the main configuration window.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 3-6:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"GPIOs_1_bit"')," ",(0,r.kt)("strong",{parentName:"li"},"Main configuration")," window, select the first tab ",(0,r.kt)("strong",{parentName:"li"},'"GPIOSysfsModuleParameters"')," to config and assign the ",(0,r.kt)("strong",{parentName:"li"},"GPIO Direction"),", ",(0,r.kt)("strong",{parentName:"li"},"Pin Number")," and ",(0,r.kt)("strong",{parentName:"li"},"current PIN state"),". In this case we are going to toggle the LED2 on the Edgebox-RPI-200 which is the GPIO Pin 21 according to the ",(0,r.kt)("a",{parentName:"li",href:"#"},"datasheet"),". So the Pin configuration should be the same as below.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 3-7:")," Mapping the GPIO I/O, select the second tab ",(0,r.kt)("strong",{parentName:"li"},'"GPIOSysfsModule I/O Mapping"'),", and then assign a variable name to the GPIO, in this case I call it ",(0,r.kt)("strong",{parentName:"li"},'"LED_in"')," for ",(0,r.kt)("strong",{parentName:"li"},'"GPIO 21 input"'),", and ",(0,r.kt)("strong",{parentName:"li"},'"LED_out"')," for ",(0,r.kt)("strong",{parentName:"li"},'"GPIO 21 Output"'),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please Delete the default ",(0,r.kt)("strong",{parentName:"p"},'"GPIOs_A_B(GPIOs A/B)"')," device otherwise it will interfere with the new added GPIO Device.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 4:")," ",(0,r.kt)("strong",{parentName:"p"},"Connect to Edgebox-RPI-200 in Online Config Mode to test and toggle the LED2 on Edgebox-RPI-200"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"STEP 4-1:")," First we need to setup the Deivce by double click the ",(0,r.kt)("strong",{parentName:"p"},'"Deivce (CODESYS Control for Raspberry Pi MC SL)"'),", this will bring up the ",(0,r.kt)("strong",{parentName:"p"},"device configuration")," window."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-2:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"Communication"')," settings tab of the ",(0,r.kt)("strong",{parentName:"li"},'"device configuration"')," window, click the ",(0,r.kt)("strong",{parentName:"li"},'"Device"')," dropdown list and then select ",(0,r.kt)("strong",{parentName:"li"},'"Options>Manage Favorite Devices..."'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-3:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"Manage Favorite Devices"')," window, click ",(0,r.kt)("strong",{parentName:"li"},'"+ Add"'),", at the ",(0,r.kt)("strong",{parentName:"li"},'"Add favorite"')," window")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-4:")," please enter ",(0,r.kt)("strong",{parentName:"li"},"the IP Address of the Edgebox-RPI-200"),' in the "',(0,r.kt)("strong",{parentName:"li"},'Enter name, device address or IP address"')," box.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In my case the IP address of the Edgebox-RPI-200 is ",(0,r.kt)("strong",{parentName:"p"},'"192.168.1.40"'),", and the click ",(0,r.kt)("strong",{parentName:"p"},'"OK"')," to confirm.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-5:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"Manage Favorite Devices"')," window, select the ",(0,r.kt)("strong",{parentName:"li"},"new added IP address device")," for the Identifier field and then click ",(0,r.kt)("strong",{parentName:"li"},'"OK"')," to confirm.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-6:")," At the ",(0,r.kt)("strong",{parentName:"li"},'"Communication"')," settings tab of the ",(0,r.kt)("strong",{parentName:"li"},'"device configuration"')," window, please ",(0,r.kt)("strong",{parentName:"li"},'"click"')," the dropdown list and select the new added device ",(0,r.kt)("strong",{parentName:"li"},'"IP Address"'),", you should see some information about the connected device below.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"})),'- **STEP 4-7:** Click the **"Online Config Mode..."** button from the **"toolbar"**, the icon of the **"Online Config Mode..."** should turn from green to red, which means the CODESYS Development System V3 IDE is connected to the Edgebox-RPI-200 and you could directly test and interface from IDE with the connected hardware device.',(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-8:")," Now Double click the ",(0,r.kt)("strong",{parentName:"li"},'"GPIOs_1_bit(GPIOs 1 bit)"')," from the device sidebar to open the config window.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STEP 4-9:"),"  Select the second tab ",(0,r.kt)("strong",{parentName:"li"},'"GPIOSysfsModule I/O Mapping"')," in the main config window, you should see the ",(0,r.kt)("strong",{parentName:"li"},'"Current Value"')," should be ",(0,r.kt)("strong",{parentName:"li"},'"False"')," for both LED_in and LED_out, you can now toggle the LED2 on Edgebox-RPI-200 by double click the ",(0,r.kt)("strong",{parentName:"li"},'"False"')," at the ",(0,r.kt)("strong",{parentName:"li"},'"Current Value"')," section to toggle ",(0,r.kt)("strong",{parentName:"li"},'"True/False"')," for ",(0,r.kt)("strong",{parentName:"li"},'"LED_out"'),", where the LED2 should be turn on/off according to the True/False Value.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"})),(0,r.kt)("p",null,"You can check the LED2 on your Edgebox-RPI-200, it should respond to the toggled value:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"})),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);