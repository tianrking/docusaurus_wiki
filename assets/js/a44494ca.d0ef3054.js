"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72676],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=n,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},27200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - LED Bar",title:"Grove - LED Bar",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/7/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-LED_Bar",id:"Sensor/Grove/Grove_Accessories/Display/Grove-LED_Bar",title:"Grove - LED Bar",description:"Grove - LED Bar",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-LED_Bar.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Sensor/Grove/Grove_Accessories/Display/Grove-LED_Bar",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Display/Grove-LED_Bar",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Accessories/Display/Grove-LED_Bar.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{description:"Grove - LED Bar",title:"Grove - LED Bar",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - LCD RGB Backlight",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Display/Grove-LCD_RGB_Backlight"},next:{title:"Grove - RGB LED Stick (10 - WS2813 Mini)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Display/Grove-RGB_LED_Stick-10-WS2813_Mini"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Grove \u2013 LED Bar is comprised of a 10 segment LED gauge bar and an MY9221 LED controlling chip. It can be used as an indicator for remaining battery life, voltage, water level, music volume or other values that require a gradient display. There are 10 LED bars in the LED bar graph: one red, one yellow, one light green, and seven green bars. Demo code is available to get you up and running quickly. It lights up the LEDs sequentially from red to green, so the entire bar graph is lit up in the end. Want to go further? Go ahead and code your own effect."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove \u2013 LED Bar V1"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"June 2014")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove \u2013 LED Bar V2"),(0,n.kt)("td",{parentName:"tr",align:null},"Improved the power supply"),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 2015")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Input Voltage: 3.3V/5V"),(0,n.kt)("li",{parentName:"ul"},"Each LED segment can be controlled individually via code"),(0,n.kt)("li",{parentName:"ul"},"Intuitive display"),(0,n.kt)("li",{parentName:"ul"},"Flexible power option, supports 3-5.5DC"),(0,n.kt)("li",{parentName:"ul"},"Available demo code"),(0,n.kt)("li",{parentName:"ul"},"Suli-compatible Library")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3/5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operation Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-20\u2103 to +80\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Peak Emission Wavelength-RED(Current 20mA)"),(0,n.kt)("td",{parentName:"tr",align:null},"630-637nm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Peak Emission Wavelength-Yellow Green(Current  20mA )"),(0,n.kt)("td",{parentName:"tr",align:null},"570-573nm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Peak Emission Wavelength-Yellow(Current  20mA )"),(0,n.kt)("td",{parentName:"tr",align:null},"585-592nm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Luminous Intensity Per Segment-RED(Current  20mA )"),(0,n.kt)("td",{parentName:"tr",align:null},"50-70mcd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Luminous Intensity Per Segment-Yellow Green(Current  20mA )"),(0,n.kt)("td",{parentName:"tr",align:null},"28-35mcd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Luminous Intensity Per Segment-Yellow(Current  20mA )"),(0,n.kt)("td",{parentName:"tr",align:null},"45-60mcd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LED segment"),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"40mm * 20mm")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LED Bar"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-LED Bar to port ",(0,n.kt)("strong",{parentName:"li"},"D8")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect Grove-LED Bar to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LED Bar"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D9"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D8"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LED_Bar"},"Grove - LED Bar Library")," from Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open \u201cLevel\u201d example via the path : ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove LED Bar --\x3e Level"),"."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LED Bar"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the GrovePi_Plus into Raspberry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Grove-LED Bar to ",(0,n.kt)("strong",{parentName:"p"},"D5")," port of GrovePi_Plus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC through USB cable."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.\n"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.\n"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to the demos' directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,n.kt)("p",null,"Here is the grove_ledbar.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\nimport random\n\n# Connect the Grove LED Bar to digital port D5\n# DI,DCKI,VCC,GND\nledbar = 5\n\ngrovepi.pinMode(ledbar,"OUTPUT")\ntime.sleep(1)\ni = 0\n\n# LED Bar methods\n# grovepi.ledBar_init(pin,orientation)\n# grovepi.ledBar_orientation(pin,orientation)\n# grovepi.ledBar_setLevel(pin,level)\n# grovepi.ledBar_setLed(pin,led,state)\n# grovepi.ledBar_toggleLed(pin,led)\n# grovepi.ledBar_setBits(pin,state)\n# grovepi.ledBar_getBits(pin)\n\n    while True:\n        try:\n        print "Test 1) Initialise - red to green"\n        # ledbar_init(pin,orientation)\n        # orientation: (0 = red to green, 1 = green to red)\n        grovepi.ledBar_init(ledbar, 0)\n        time.sleep(.5)\n\n\n        print "Test 2) Set level"\n        # ledbar_setLevel(pin,level)\n        # level: (0-10)\n        for i in range(0,11):\n            grovepi.ledBar_setLevel(ledbar, i)\n            time.sleep(.2)\n        time.sleep(.3)\n\n        grovepi.ledBar_setLevel(ledbar, 8)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLevel(ledbar, 2)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLevel(ledbar, 5)\n        time.sleep(.5)\n\n\n        print "Test 3) Switch on/off a single LED"\n        # ledbar_setLed(pin,led,state)\n        # led: which led (1-10)\n        # state: off or on (0,1)\n        grovepi.ledBar_setLed(ledbar, 10, 1)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 9, 1)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 8, 1)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 1, 0)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 2, 0)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 3, 0)\n        time.sleep(.5)\n\n\n        print "Test 4) Toggle a single LED"\n        # flip a single led - if it is currently on, it will become off and vice versa\n        # ledbar_toggleLed(ledbar, led)\n        grovepi.ledBar_toggleLed(ledbar, 1)\n        time.sleep(.5)\n\n        grovepi.ledBar_toggleLed(ledbar, 2)\n        time.sleep(.5)\n\n        grovepi.ledBar_toggleLed(ledbar, 9)\n        time.sleep(.5)\n\n        grovepi.ledBar_toggleLed(ledbar, 10)\n        time.sleep(.5)\n\n\n        print "Test 5) Set state - control all leds with 10 bits"\n        # ledbar_setBits(ledbar, state)\n        # state: (0-1023) or (0x00-0x3FF) or (0b0000000000-0b1111111111) or (int(\'0000000000\',2)-int(\'1111111111\',2))\n        for i in range(0,32):\n            grovepi.ledBar_setBits(ledbar, i)\n            time.sleep(.2)\n        time.sleep(.3)\n\n\n        print "Test 6) Get current state"\n        # state = ledbar_getBits(ledbar)\n        # state: (0-1023) a bit for each of the 10 LEDs\n        state = grovepi.ledBar_getBits(ledbar)\n        print "with first 5 leds lit, the state should be 31 or 0x1F"\n        print state\n\n        # bitwise shift five bits to the left\n        state = state << 5\n        # the state should now be 992 or 0x3E0\n        # when saved the last 5 LEDs will be lit instead of the first 5 LEDs\n        time.sleep(.5)\n\n\n        print "Test 7) Set state - save the state we just modified"\n        # ledbar_setBits(ledbar, state)\n        # state: (0-1023) a bit for each of the 10 LEDs\n        grovepi.ledBar_setBits(ledbar, state)\n        time.sleep(.5)\n\n\n        print "Test 8) Swap orientation - green to red - current state is preserved"\n        # ledbar_orientation(pin,orientation)\n        # orientation: (0 = red to green, 1 = green to red)\n        # when you reverse the led bar orientation, all methods know how to handle the new LED index\n        # green to red\n        grovepi.ledBar_orientation(ledbar, 1)\n        time.sleep(.5)\n\n        # red to green\n        grovepi.ledBar_orientation(ledbar, 0)\n        time.sleep(.5)\n\n        # green to red\n        grovepi.ledBar_orientation(ledbar, 1)\n        time.sleep(.5)\n\n\n        print "Test 9) Set level, again"\n        # ledbar_setLevel(pin,level)\n        # level: (0-10)\n        # note the red LED is now at index 10 instead of 1\n        for i in range(0,11):\n            grovepi.ledBar_setLevel(ledbar, i)\n            time.sleep(.2)\n        time.sleep(.3)\n\n\n        print "Test 10) Set a single LED, again"\n        # ledbar_setLed(pin,led,state)\n        # led: which led (1-10)\n        # state: off or on (0,1)\n        grovepi.ledBar_setLed(ledbar, 1, 0)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 3, 0)\n        time.sleep(.5)\n\n        grovepi.ledBar_setLed(ledbar, 5, 0)\n        time.sleep(.5)\n\n\n        print "Test 11) Toggle a single LED, again"\n        # ledbar_toggleLed(ledbar, led)\n        grovepi.ledBar_toggleLed(ledbar, 2)\n        time.sleep(.5)\n\n        grovepi.ledBar_toggleLed(ledbar, 4)\n        time.sleep(.5)\n\n\n        print "Test 12) Get state"\n        # state = ledbar_getBits(ledbar)\n        # state: (0-1023) a bit for each of the 10 LEDs\n        state = grovepi.ledBar_getBits(ledbar)\n\n        # the last 5 LEDs are lit, so the state should be 992 or 0x3E0\n\n        # bitwise shift five bits to the right\n        state = state >> 5\n        # the state should now be 31 or 0x1F\n\n\n        print "Test 13) Set state, again"\n        # ledbar_setBits(ledbar, state)\n        # state: (0-1023) a bit for each of the 10 LEDs\n        grovepi.ledBar_setBits(ledbar, state)\n        time.sleep(.5)\n\n\n        print "Test 14) Step"\n        # step through all 10 LEDs\n        for i in range(0,11):\n            grovepi.ledBar_setLevel(ledbar, i)\n            time.sleep(.2)\n        time.sleep(.3)\n\n\n        print "Test 15) Bounce"\n        # switch on the first two LEDs\n        grovepi.ledBar_setLevel(ledbar, 2)\n\n        # get the current state (which is 0x3)\n        state = grovepi.ledBar_getBits(ledbar)\n\n        # bounce to the right\n        for i in range(0,9):\n            # bit shift left and update\n            state <<= 1;\n            grovepi.ledBar_setBits(ledbar, state)\n            time.sleep(.2)\n\n        # bounce to the left\n        for i in range(0,9):\n            # bit shift right and update\n            state >>= 1;\n            grovepi.ledBar_setBits(ledbar, state)\n            time.sleep(.2)\n        time.sleep(.3)\n\n\n        print "Test 16) Random"\n        for i in range(0,21):\n            state = random.randint(0,1023)\n            grovepi.ledBar_setBits(ledbar, state)\n            time.sleep(.2)\n        time.sleep(.3)\n\n\n        print "Test 17) Invert"\n        # set every 2nd LED on - 341 or 0x155\n        state = 341\n        for i in range(0,5):\n            grovepi.ledBar_setBits(ledbar, state)\n            time.sleep(.2)\n\n            # bitwise XOR all 10 LEDs on with the current state\n            state = 0x3FF ^ state\n\n            grovepi.ledBar_setBits(ledbar, state)\n            time.sleep(.2)\n        time.sleep(.3)\n\n\n        print "Test 18) Walk through all possible combinations"\n        for i in range(0,1024):\n            grovepi.ledBar_setBits(ledbar, i)\n            time.sleep(.1)\n        time.sleep(.4)\n\n    except KeyboardInterrupt:\n        grovepi.ledBar_setBits(ledbar, 0)\n        break\n    except IOError:\n        print "Error"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Run the demo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python3 grove_ledbar.py\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"Eagle&PDF"),"][Grove - LED Bar Eagle File]","(",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip"},"https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip"),")"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"Library"),"][Grove - LED Bar Library]","(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LED_Bar"},"https://github.com/Seeed-Studio/Grove_LED_Bar"),")"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"Library"),"][Suli-compatible Library]","(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/LED_Bar_Suli"},"https://github.com/Seeed-Studio/LED_Bar_Suli"),")"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"Datasheet"),"][MY9221 Datasheet]","(",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/MY9221_DS_1.0.pdf"},"https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/MY9221_DS_1.0.pdf"),")"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"More Reading"),"][Wooden Laser Gun]","(",(0,n.kt)("a",{parentName:"li",href:"https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/"},"https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/"),")")),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Grove LED Bar v2.0"),": Calliope Mini is equipped with two Grove connectors. In this project, I want to explore, how to talk to these Seeed Grove parts."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/luuc/grove-led-bar-v2-0-c4b74f/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Grove LED Bar Controller with the Bean+"),": Learn the basics of using popular Grove components with the new LightBlue Bean+ to get started with building your own projects!"),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/karel/grove-led-bar-controller-with-the-bean-c3b81e/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);