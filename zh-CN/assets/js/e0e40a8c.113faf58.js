"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=o.createContext({}),u=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||i;return r?o.createElement(m,n(n({ref:t},s),{},{components:r})):o.createElement(m,n({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,n[1]=l;for(var u=2;u<i;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const i={description:"How to install an Arduino library",title:"How to install an Arduino library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},n=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library",title:"How to install an Arduino library",description:"How to install an Arduino library",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_install_Arduino_Library.md",tags:[{label:"Tutorial",permalink:"/docusaurus_wiki/zh-CN/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"2023\u5e742\u67082\u65e5",frontMatter:{description:"How to install an Arduino library",title:"How to install an Arduino library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How_to_detect_finger_touch",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch"},next:{title:"How to use and write a library",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_use_and_write_a_library"}},d={},u=[{value:"Download the Library",id:"download-the-library",level:2},{value:"1.Download in the product page",id:"1download-in-the-product-page",level:3},{value:"2.Download from github",id:"2download-from-github",level:3},{value:"Add the library",id:"add-the-library",level:2},{value:"1.Add ZIP Library",id:"1add-zip-library",level:3},{value:"2.Add Library folder manually",id:"2add-library-folder-manually",level:3},{value:"Check",id:"check",level:3},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"This tutorial is based on Arduino 1.6.9.\n"))),(0,a.kt)("p",null,"Here we will show you how to install an Arduino library. You should notice that almost all of our library was stored at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio"},"Github"),". We will provide Arduino library when a product need a library. For some simple product, there is no need to write a library such as Grove - Button."),(0,a.kt)("h2",{id:"download-the-library"},"Download the Library"),(0,a.kt)("p",null,"There are two ways to download a Arduino library."),(0,a.kt)("h3",{id:"1download-in-the-product-page"},"1.Download in the product page"),(0,a.kt)("p",null,"Normally, if a product needs a library, you will find a download library button bar like this below:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png",alt:"enter image description here"}))),(0,a.kt)("p",null,"Click on the button to start downloading. Seconds you will get a package."),(0,a.kt)("h3",{id:"2download-from-github"},"2.Download from github"),(0,a.kt)("p",null,"If you need to download from a Github page, then you can click on the ",(0,a.kt)("strong",{parentName:"p"},"Clone or download >Download ZIP")," button to get the library package."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png",alt:"enter image description here"})),(0,a.kt)("h2",{id:"add-the-library"},"Add the library"),(0,a.kt)("p",null,"Also there are two ways to add a library to Arduino IDE."),(0,a.kt)("h3",{id:"1add-zip-library"},"1.Add ZIP Library"),(0,a.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,a.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",alt:"enter image description here"})),(0,a.kt)("p",null,"Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,a.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png",alt:null})),(0,a.kt)("h3",{id:"2add-library-folder-manually"},"2.Add Library folder manually"),(0,a.kt)("p",null,"Sometimes you can not add a ZIP library correctly, because the root folder of the Zip Library lacks of .cpp or .h file, the Arduino can not recognize. Then you can Unzip the zip file and copy the Library folder into the following path ",(0,a.kt)("strong",{parentName:"p"},"...\\Arduino\\libraries"),". ",(0,a.kt)("strong",{parentName:"p"},"....","*","* is the path you setup Arduino. In my case is "),"D:\\Workwork\\Software\\Arduino\\libraries**."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png",alt:null})),(0,a.kt)("h3",{id:"check"},"Check"),(0,a.kt)("p",null,"Then let's check if the library install correctly."),(0,a.kt)("p",null,"When you add a library successfully, there will be a demo in the Example. In this case, click on ",(0,a.kt)("strong",{parentName:"p"},"File > Example > OLED_Display_96x96-master > OLED_Hello_World")," to open an example, click on the Verify button, if there's no error, congratulation, the library is installed perfectly. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png",alt:"enter image description here"})),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);