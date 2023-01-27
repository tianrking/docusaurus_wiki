"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31087],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(i),c=o,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||r;return i?n.createElement(m,a(a({ref:t},p),{},{components:i})):n.createElement(m,a({ref:t},p))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},47186:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const r={description:"Seeed Studio XIAO RP2040 with MicroPython",title:"Seeed Studio XIAO RP2040 with MicroPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="**Seeed Studio XIAO RP2040 with MicroPython**",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython",title:"Seeed Studio XIAO RP2040 with MicroPython",description:"Seeed Studio XIAO RP2040 with MicroPython",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython",permalink:"/docusaurus_wiki/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Seeed Studio XIAO RP2040 with MicroPython",title:"Seeed Studio XIAO RP2040 with MicroPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeed Studio XIAO RP2040 with Arduino",permalink:"/docusaurus_wiki/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-Arduino"},next:{title:"Seeed Studio XIAO RP2040 with CircuitPython",permalink:"/docusaurus_wiki/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython"}},s={},d=[{value:"<strong>Introduction of MicroPython</strong>",id:"introduction-of-micropython",level:2},{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"<strong>Hardware Setup</strong>",id:"hardware-setup",level:3},{value:"<strong>Software Setup</strong>",id:"software-setup",level:3},{value:"<strong>Connect Seeed Studio XIAO RP2040 to the PC and Light it up</strong>",id:"connect-seeed-studio-xiao-rp2040-to-the-pc-and-light-it-up",level:3},{value:"<strong>Light up RGB LED on the Seeed Studio XIAO RP2040</strong>",id:"light-up-rgb-led-on-the-seeed-studio-xiao-rp2040",level:2},{value:"<strong>Connect with Seeed Studio XIAO RP2040 with Display through IIC</strong>",id:"connect-with-seeed-studio-xiao-rp2040-with-display-through-iic",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Tech support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seeed-studio-xiao-rp2040-with-micropython"},(0,o.kt)("strong",{parentName:"h1"},"Seeed Studio XIAO RP2040 with MicroPython")),(0,o.kt)("h2",{id:"introduction-of-micropython"},(0,o.kt)("strong",{parentName:"h2"},"Introduction of MicroPython")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/micropython/micropython/wiki"},"MicroPython")," is a Python interprer with a partial native code compilation feature. It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. It is different from CPython and you can read more about the differences ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/micropython/micropython/wiki/Differences"},"here"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png"})),(0,o.kt)("h2",{id:"getting-started"},(0,o.kt)("strong",{parentName:"h2"},"Getting Started")),(0,o.kt)("p",null,"First, we are going to connect the Seeed Studio XIAO RP2040 to the computer and upload a simple code from MicroPython to check whether the board is functioning well."),(0,o.kt)("h3",{id:"hardware-setup"},(0,o.kt)("strong",{parentName:"h3"},"Hardware Setup")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},"Seeed Studio XIAO RP2040")," x1"),(0,o.kt)("li",{parentName:"ul"},"Tpye-C cable x1"),(0,o.kt)("li",{parentName:"ul"},"PC x1")),(0,o.kt)("h3",{id:"software-setup"},(0,o.kt)("strong",{parentName:"h3"},"Software Setup")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Download and Install the latest version of ",(0,o.kt)("a",{parentName:"li",href:"https://thonny.org/"},"Thonny editor")," according to your operating system")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2"),". Launch the Thonny")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3"),". Click ",(0,o.kt)("strong",{parentName:"p"},'"Tools--\x3eOptions"')," to open the settings."))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),'. Chose the "Interpreter" interface and select the device as ',(0,o.kt)("strong",{parentName:"li"},'"MicroPython(Raspberry Pi Pico)"')," and the port as ",(0,o.kt)("strong",{parentName:"li"},'"Try to detect prot automatically"'))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png"})),(0,o.kt)("h3",{id:"connect-seeed-studio-xiao-rp2040-to-the-pc-and-light-it-up"},(0,o.kt)("strong",{parentName:"h3"},"Connect Seeed Studio XIAO RP2040 to the PC and Light it up")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),'. Press and hold the "BOOT" button and then connect the Seeed Studio XIAO RP2040 to the PC through the Type-C cable. If it works well, there is an "RPI-RP2" desk shown on the PC.')),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Click ",(0,o.kt)("strong",{parentName:"li"},"Install or update MicroPython"),".")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png"})),">",(0,o.kt)("p",null,"It will then automatically search for the device and display it on the Target Volume. In the version selection in Micropython below, we just leave the default."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png"})),(0,o.kt)("p",null,"Click on the Install button and close this page when the installation status says Done. The following information will be shown on the interface once the firmware is complete."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Copy the following codes to Thonny.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"from machine import Pin, Timer\n \nled = Pin(25, Pin.OUT)\nCounter = 0\nFun_Num = 0\n \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    print(Counter)\n    led.value(Counter%2)\n \ntim = Timer(-1)\ntim.init(period=1000, mode=Timer.PERIODIC, callback=fun)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),'. Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both ',(0,o.kt)("strong",{parentName:"li"},"This Computer")," and ",(0,o.kt)("strong",{parentName:"li"},"Raspberry Pi Pico")," are fine.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png"})),(0,o.kt)("p",null,"If it works well, you will see the LED light turn on and off once a second. And the output of the increasing number will as well be displayed in the Shell."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png"})),(0,o.kt)("p",null,"The connection is commplete and now we can proceed to the other projects."),(0,o.kt)("h2",{id:"light-up-rgb-led-on-the-seeed-studio-xiao-rp2040"},(0,o.kt)("strong",{parentName:"h2"},"Light up RGB LED on the Seeed Studio XIAO RP2040")),(0,o.kt)("p",null,"There is an RGB LED equipped in the Seeed Studio XIAO RP2040 and we are going to light it up by MicroPython. It is required a third-party library so we need to add an additional library first."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 1"),". Download the ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py"},"ws2812.py")," library and open it with Thonny.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2"),'. Click "File--\x3eSave as" and save the library.'))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png"})),(0,o.kt)("p",null,'Chose the "Raspberry Pi Pico" as the location we save.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png"})),(0,o.kt)("p",null,'Make sure the saved file name is "ws2812.py", otherwise it will not work.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Copy the following codes to Thonny.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'from ws2812 import WS2812\nimport utime\nimport machine\npower = machine.Pin(11,machine.Pin.OUT)\npower.value(1)\nBLACK = (0, 0, 0)\nRED = (255, 0, 0)\nYELLOW = (255, 150, 0)\nGREEN = (0, 255, 0)\nCYAN = (0, 255, 255)\nBLUE = (0, 0, 255)\nPURPLE = (180, 0, 255)\nWHITE = (255, 255, 255)\nCOLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)\n\nled = WS2812(12,1)#WS2812(pin_num,led_count)\n\nwhile True:\n    print("Beautiful color")\n    for color in COLORS: \n        led.pixels_fill(color)\n        led.pixels_show()\n        utime.sleep(0.2)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),'. Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both ',(0,o.kt)("strong",{parentName:"li"},"This Computer")," and ",(0,o.kt)("strong",{parentName:"li"},"Raspberry Pi Pico")," are fine.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png"})),(0,o.kt)("p",null,'If it works well, you will see the RGB LED light convert and flash the lights. And the output of the text "Beautiful Color" will as well be displayed in the Shell.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png"})),(0,o.kt)("h2",{id:"connect-with-seeed-studio-xiao-rp2040-with-display-through-iic"},(0,o.kt)("strong",{parentName:"h2"},"Connect with Seeed Studio XIAO RP2040 with Display through IIC")),(0,o.kt)("p",null,"In this project, we are going to connect ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html"},'Grove - OLED Display 0.96" (SSD1315)')," through the IIC interface to demonstrate the IIC function on the Seeed Studio XIAO RP2040."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Connect")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 1"),". Download the ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py"},"ssd1306.py")," library and open it with Thonny.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2"),'. Click "File--\x3eSave as" and save the library in the "Raspberry Pi Pico"'))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png"})),(0,o.kt)("p",null,'Chose the "Raspberry Pi Pico" as the location we save.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png"})),(0,o.kt)("p",null,'Make sure the saved file name is "ssd1306.py", otherwise it will not work.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Copy the following codes to Thonny.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'from ssd1306 import SSD1306_I2C\nfrom machine import Pin, I2C\nfrom time import sleep\n\ni2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#Grove - OLED Display 0.96" (SSD1315)\noled = SSD1306_I2C(128, 64, i2c)\n\nwhile True:  \n    oled.fill(0)#clear\n    oled.text("Hello,World!",0,0)\n    oled.show()\n    #sleep(0.5)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),'. Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both ',(0,o.kt)("strong",{parentName:"li"},"This Computer")," and ",(0,o.kt)("strong",{parentName:"li"},"Raspberry Pi Pico")," are fine.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png"})),(0,o.kt)("p",null,'If it works well, you will see the text "Hello,World!" displayed on the screen.'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png"})),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("p",null,"Some additional libraries and sample codes are here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip"},"XIAO-RP2040-MicroPython-Grove.zip"))),(0,o.kt)("h2",{id:"tech-support"},"Tech support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);