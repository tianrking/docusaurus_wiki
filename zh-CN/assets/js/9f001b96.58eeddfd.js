"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4832],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var r=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,l=function(e,t){if(null==e)return{};var i,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(i),p=l,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return i?r.createElement(f,n(n({ref:t},u),{},{components:i})):r.createElement(f,n({ref:t},u))}));function f(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,n=new Array(a);n[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,n[1]=o;for(var d=2;d<a;d++)n[d]=i[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},31351:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=i(87462),l=(i(67294),i(3905));const a={title:"TFT LCD API Examples",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-APIs/",last_update:{date:"01/11/2022",author:"gunengyu"}},n="TFT LCD API Examples",o={unversionedId:"Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-APIs",id:"Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-APIs",title:"TFT LCD API Examples",description:"This repo provides some gifs for the TFT LCD library examples, all the examples can be found under File->Example->SeeedArduinoLCD -> 320 x 240.  You can use these examples to implement in your design.",source:"@site/docs/Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-APIs.md",sourceDirName:"Sensor/Wio_Terminal/LCD",slug:"/Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-APIs",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-APIs",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-APIs.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"TFT LCD API Examples",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-APIs/",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio-Terminal-LCD-Histogram",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/LCD/Wio-Terminal-LCD-Histogram"},next:{title:"How to use LvGL Graphics Library for Wio Terminal",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/LCD/Wio-Terminal-LVGL"}},s={},d=[{value:"Useful Graphics",id:"useful-graphics",level:2},{value:"TFT_Pie_Chart",id:"tft_pie_chart",level:3},{value:"TFT_ArcFill",id:"tft_arcfill",level:3},{value:"TFT_ArcFillSpiral",id:"tft_arcfillspiral",level:3},{value:"Displaying Data",id:"displaying-data",level:2},{value:"TFT_Clock",id:"tft_clock",level:3},{value:"TFT_Clock_Digital",id:"tft_clock_digital",level:3},{value:"TFT_Terminal",id:"tft_terminal",level:3},{value:"Fonts",id:"fonts",level:2},{value:"AII_Free_Fonts_Demo",id:"aii_free_fonts_demo",level:3},{value:"RLE_Font_test",id:"rle_font_test",level:3},{value:"Displaying as Background",id:"displaying-as-background",level:2},{value:"TFT_Starfield",id:"tft_starfield",level:3},{value:"TFT_Matrix",id:"tft_matrix",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tft-lcd-api-examples"},"TFT LCD API Examples"),(0,l.kt)("p",null,"This repo provides some gifs for the TFT LCD library examples, all the examples can be found under ",(0,l.kt)("inlineCode",{parentName:"p"},"File"),"->",(0,l.kt)("inlineCode",{parentName:"p"},"Example"),"->",(0,l.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"320 x 240"),".  You can use these examples to implement in your design."),(0,l.kt)("p",null,"For more information about the TFT LCD screen, please visit ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Basic/"},"Basics of the TFT LCD Screen"),"."),(0,l.kt)("h2",{id:"useful-graphics"},"Useful Graphics"),(0,l.kt)("h3",{id:"tft_pie_chart"},"TFT_Pie_Chart"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif"})),(0,l.kt)("h3",{id:"tft_arcfill"},"TFT_ArcFill"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0131.2019-12-03%2014_18_05.gif"})),(0,l.kt)("h3",{id:"tft_arcfillspiral"},"TFT_ArcFillSpiral"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0132.2019-12-03%2014_27_24.gif"})),(0,l.kt)("h2",{id:"displaying-data"},"Displaying Data"),(0,l.kt)("h3",{id:"tft_clock"},"TFT_Clock"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0133.2019-12-03%2014_37_47.gif"})),(0,l.kt)("h3",{id:"tft_clock_digital"},"TFT_Clock_Digital"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0138.2019-12-03%2014_48_38.gif"})),(0,l.kt)("h3",{id:"tft_terminal"},"TFT_Terminal"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0136.2019-12-03%2014_45_13.gif"})),(0,l.kt)("h2",{id:"fonts"},"Fonts"),(0,l.kt)("h3",{id:"aii_free_fonts_demo"},"AII_Free_Fonts_Demo"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0143.2019-12-03%2015_15_06.gif"})),(0,l.kt)("h3",{id:"rle_font_test"},"RLE_Font_test"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0145.2019-12-03%2015_17_11.gif"})),(0,l.kt)("h2",{id:"displaying-as-background"},"Displaying as Background"),(0,l.kt)("h3",{id:"tft_starfield"},"TFT_Starfield"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0147.2019-12-03%2016_59_07.gif"})),(0,l.kt)("h3",{id:"tft_matrix"},"TFT_Matrix"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0141.2019-12-03%2014_57_30.gif"})),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,l.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,l.kt)("div",null,(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);