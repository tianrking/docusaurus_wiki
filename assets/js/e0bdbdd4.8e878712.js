"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Fonts",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Fonts/",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Using different Fonts",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Fonts",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Fonts",title:"Fonts",description:"This repo describes how to use different free fonts(GNU FreeFonts) included in the library. You can follow this guide to choose your favourite font to display on the Wio Terminal!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Fonts.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Fonts",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Fonts",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Fonts.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Fonts",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Fonts/",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Graphics",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Graphics"},next:{title:"Line Charts",permalink:"/docusaurus_wiki/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Linecharts"}},s={},p=[{value:"Available Fonts",id:"available-fonts",level:2},{value:"Using Fonts in Wio Terminal",id:"using-fonts-in-wio-terminal",level:2},{value:"Method 1 Example",id:"method-1-example",level:4},{value:"Method 2 Example",id:"method-2-example",level:4},{value:"Method 3 Example",id:"method-3-example",level:4},{value:"Example code using different fonts",id:"example-code-using-different-fonts",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-different-fonts"},"Using different Fonts"),(0,i.kt)("p",null,"This repo describes how to use different free fonts(GNU FreeFonts) included in the library. You can follow this guide to choose your favourite font to display on the Wio Terminal!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg"})),(0,i.kt)("h2",{id:"available-fonts"},"Available Fonts"),(0,i.kt)("p",null,"There are three main fonts that can be used in this library including ",(0,i.kt)("inlineCode",{parentName:"p"},"Serif"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sans")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono"),". Each font is available with few styles(",(0,i.kt)("strong",{parentName:"p"},"bold"),", ",(0,i.kt)("em",{parentName:"p"},"italic"),", oblique) and font sizes from 9pt, 12pt, 18pt and 24pt."),(0,i.kt)("h2",{id:"using-fonts-in-wio-terminal"},"Using Fonts in Wio Terminal"),(0,i.kt)("p",null,"To use these fonts easily, it is strongly recommended to copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Free_Fonts.h")," file from the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/#installing-the-tft-lcd-library-separately"},"Seeed_Arduino_LCD repository"),". We assusme you have already dowmloaded the repository and the path is ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo"),", you can attach this header file to your sketch location. This would make referencing the fonts much easier."),(0,i.kt)("p",null,"To save a lot of typing, each font can  be referenced in the sketch in three ways, either with:"),(0,i.kt)("p",null,"1.Font file name with the ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," in front, such as: ",(0,i.kt)("inlineCode",{parentName:"p"},"&FreeSansBoldOblique24pt7b"),"."),(0,i.kt)("h4",{id:"method-1-example"},"Method 1 Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"tft.setFreeFont(&FreeSansBoldOblique24pt7b);\n")),(0,i.kt)("p",null,"2.FF# where # is a number determined by looking at the list in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Free_Fonts.h")),(0,i.kt)("h4",{id:"method-2-example"},"Method 2 Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"tft.setFreeFont(FF32);\n")),(0,i.kt)("p",null,"3.An abbreviation of the file name. Look at the list below to see the abbreviations used."),(0,i.kt)("h4",{id:"method-3-example"},"Method 3 Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"tft.setFreeFont(FSSBO24)\n")),(0,i.kt)("p",null,"Where the letters mean:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"F = Free font"),(0,i.kt)("li",{parentName:"ul"},"M = Mono"),(0,i.kt)("li",{parentName:"ul"},"SS = Sans Serif (double S to distinguish is form serif fonts)"),(0,i.kt)("li",{parentName:"ul"},"S = Serif"),(0,i.kt)("li",{parentName:"ul"},"B = Bold"),(0,i.kt)("li",{parentName:"ul"},"O = Oblique (letter O not zero)"),(0,i.kt)("li",{parentName:"ul"},"I = Italic"),(0,i.kt)("li",{parentName:"ul"},"No =  point size, either 9, 12, 18 or 24")),(0,i.kt)("h2",{id:"example-code-using-different-fonts"},"Example code using different fonts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\n#include"Free_Fonts.h" //include the header file\nTFT_eSPI tft;\n\nvoid setup() {\n  tft.begin();\n  tft.setRotation(3);\n  tft.fillScreen(TFT_BLACK); //Black background\n  \n  tft.setFreeFont(&FreeSansBoldOblique12pt7b); //select Free, Sans, Bold, Oblique, 12pt.\n  tft.drawString("Sans Serif 12pt",70,80);//prints string at (70,80)\n\n  tft.setFreeFont(FF10); //select Free, Mono, Oblique, 12pt.\n  tft.drawString("Mono 12pt",70,110);//prints string at (70,110)\n\n  tft.setFreeFont(FS12); //select Free, Serif, 12pt.\n  tft.drawString("Serif 12pt",70,140);//prints string at (70,140)\n  \n}\nvoid loop() {}\n')),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);