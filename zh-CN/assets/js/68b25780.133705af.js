"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10620],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(i),h=o,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||n;return i?r.createElement(m,a(a({ref:t},s),{},{components:i})):r.createElement(m,a({ref:t},s))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=h;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[p]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<n;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},28279:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var r=i(87462),o=(i(67294),i(3905));const n={description:"Seeed Studio XIAO RP2040 with CircuitPython",title:"Seeed Studio XIAO RP2040 with CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="**Seeed Studio XIAO RP2040 with CircuitPython**",d={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython",title:"Seeed Studio XIAO RP2040 with CircuitPython",description:"Seeed Studio XIAO RP2040 with CircuitPython",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-CircuitPython.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Seeed Studio XIAO RP2040 with CircuitPython",title:"Seeed Studio XIAO RP2040 with CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeed Studio XIAO RP2040 with MicroPython",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-MicroPython"},next:{title:"Motion Recognition based on Edge Impulse",permalink:"/docusaurus_wiki/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/TinyML-Edge Impulse/XIAO-RP2040-EI"}},u={},l=[{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"LED Flash Tutorial",id:"led-flash-tutorial",level:3}],s={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seeed-studio-xiao-rp2040-with-circuitpython"},(0,o.kt)("strong",{parentName:"h1"},"Seeed Studio XIAO RP2040 with CircuitPython")),(0,o.kt)("p",null,"CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. It's that simple."),(0,o.kt)("h2",{id:"getting-started"},(0,o.kt)("strong",{parentName:"h2"},"Getting Started")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," Enter Bootloader Mode"),(0,o.kt)("p",null,"Before we install CircuitPython to Seeed Studio XIAO RP2040, it requires bootloader mode. We can enter the bootloader mode by the following operation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Long press the "BOOT" button. (The "B" is written on the board shown to the right)'),(0,o.kt)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO PR2040 to your computer while you still pressing the button."),(0,o.kt)("li",{parentName:"ul"},"The computer then will appear a disk driver(RP1-RP2)")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The disk shows up(RP1-RP2):"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:150,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," Downloard the ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2"},"firmware")," for Seeed Studio XIAO RP2040"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),' Drag the .urf file to the disk driver("RP1-RP2")'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4"),' Check the disk drive if the name has changed to "CIRCUITPY".'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:150,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png"})),(0,o.kt)("p",null,"Now you have successfully installed the CircuitPython to the Seeed Studio XIAO RP2040 board."),(0,o.kt)("h3",{id:"led-flash-tutorial"},"LED Flash Tutorial"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," Download CircuitPython editor - ",(0,o.kt)("a",{parentName:"p",href:"https://codewith.mu/en/download"},"Mu Editor")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),' Open and chose the mode as "CircuitPython"'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:750,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," Copy and upload the following codes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'"""Example for Pico. Blinks the built-in LED."""\nimport time\nimport board\nimport digitalio\n\nled = digitalio.DigitalInOut(board.LED)\nled.direction = digitalio.Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),(0,o.kt)("p",null,'Click "Serial" to open REPL, move the codes to REPL'),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:750,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png"})),(0,o.kt)("p",null,"The user LED on Seeed Studio XIAO RP2040 then will flash."))}p.isMDXComponent=!0}}]);