"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77040],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(i),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return i?r.createElement(h,l(l({ref:t},u),{},{components:i})):r.createElement(h,l({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var d=2;d<o;d++)l[d]=i[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},23322:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(87462),n=(i(67294),i(3905));const o={description:"Driver for Seeeduino",title:"Driver for Seeeduino",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/31/2023",author:"shuxu hu"}},l=void 0,a={unversionedId:"Sensor/Seeeduino Series/Application/Driver_for_Seeeduino",id:"Sensor/Seeeduino Series/Application/Driver_for_Seeeduino",title:"Driver for Seeeduino",description:"Driver for Seeeduino",source:"@site/docs/Sensor/Seeeduino Series/Application/Driver_for_Seeeduino.md",sourceDirName:"Sensor/Seeeduino Series/Application",slug:"/Sensor/Seeeduino Series/Application/Driver_for_Seeeduino",permalink:"/docusaurus_wiki/Sensor/Seeeduino Series/Application/Driver_for_Seeeduino",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Seeeduino Series/Application/Driver_for_Seeeduino.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Driver for Seeeduino",title:"Driver for Seeeduino",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Stalker",permalink:"/docusaurus_wiki/Sensor/Seeeduino Series/Seeeduino Stalker/Seeeduino_Stalker"},next:{title:"FM Receiver",permalink:"/docusaurus_wiki/Sensor/Seeeduino Series/Application/FM_Receiver"}},s={},d=[{value:"Install the driver",id:"install-the-driver",level:2},{value:"Installing drivers for the Seeeduino with window7",id:"installing-drivers-for-the-seeeduino-with-window7",level:3},{value:"Installing drivers for the Seeeduino with window8",id:"installing-drivers-for-the-seeeduino-with-window8",level:3},{value:"Installing drivers for the Seeeduino with Mac OS",id:"installing-drivers-for-the-seeeduino-with-mac-os",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"install-the-driver"},"Install the driver"),(0,n.kt)("h3",{id:"installing-drivers-for-the-seeeduino-with-window7"},"Installing drivers for the Seeeduino with window7"),(0,n.kt)("p",null,"*Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open the Device Manager by right clicking \u201cMy computer\u201d and selecting control panel.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Look under Ports (COM ","&",' LPT). You should see an open port named "USB Serial Port" Right click on the "USB Serial Port" and choose the "Update Driver Software" option.'))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Next, choose the "Browse my computer for Driver software" option.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Finally, select the driver file named "FTDI USB Drivers", located in the "Drivers" folder of the Arduino Software download.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," the FTDI USB Drivers are from Arduino. But when you install drivers for other Controllers, such as Xadow Main Board, Seeeduino Clio, Seeeduino Lite,"),(0,n.kt)("p",null,"you need to download corresponding driver file and save it. And select the driver file you have downloaded."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The below dialog boxes automatically appears if you have installed driver successfully.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'You can check that the drivers have been installed by opening the Windows Device Manager. Look for a "USB Serial Port" in the Ports section.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can also see the serial port in Arduino environment.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg",alt:"enter image description here"})),(0,n.kt)("h3",{id:"installing-drivers-for-the-seeeduino-with-window8"},"Installing drivers for the Seeeduino with window8"),(0,n.kt)("p",null,"You should save these files which you are editing before installing driver with window8\uff0cbecause there will several power off during operating."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Press \u201cWindows Key\u201d +\u201dR\u201d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter shutdown.exe /r /o /f /t 00")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click the "OK" button.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'System will restart to a "Choose an option" screen')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select "Troubleshoot" from "Choose an option" screen')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select "Advanced options" from "Troubleshoot" screen')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select "Windows Startup Settings" from "Advanced options" screen')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click "Restart" button')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'System will restart to "Advanced Boot Options" screen')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select "Disable Driver Signature Enforcement"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once the system starts, you can install the Arduino drivers as same as Windows"))),(0,n.kt)("h3",{id:"installing-drivers-for-the-seeeduino-with-mac-os"},"Installing drivers for the Seeeduino with Mac OS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enter page: ",(0,n.kt)("a",{parentName:"li",href:"https://www.ftdichip.com"},"https://www.ftdichip.com"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download Driver for the Mac OS X version, named 2.2.18 (32bit)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the driver file which you just download, and double click FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After double click, you will see an installer window.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click \u201cContinue\u201d.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can see the below dialog boxes if you have installed driver successfully.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png",alt:"enter image description here"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test it with Seeeduino")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png",alt:"enter image description here"})),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);