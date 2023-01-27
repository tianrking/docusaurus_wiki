"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27732],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>w});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=n,w=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return t?a.createElement(w,o(o({ref:r},p),{},{components:t})):a.createElement(w,o({ref:r},p))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33428:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const i={description:"Arduino Software Serial User Guide",title:"Arduino Software Serial User Guide",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Arduino Software Serial User Guide",l={unversionedId:"Software/Software-Serial",id:"Software/Software-Serial",title:"Arduino Software Serial User Guide",description:"Arduino Software Serial User Guide",source:"@site/docs/Software/Software-Serial.md",sourceDirName:"Software",slug:"/Software/Software-Serial",permalink:"/docusaurus_wiki/zh-CN/Software/Software-Serial",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Software/Software-Serial.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Arduino Software Serial User Guide",title:"Arduino Software Serial User Guide",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}}},s={},u=[{value:"Software Serial Example",id:"software-serial-example",level:2},{value:"Using Multiple Software Serial",id:"using-multiple-software-serial",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"arduino-software-serial-user-guide"},"Arduino Software Serial User Guide"),(0,n.kt)("p",null,"The Arduino hardware has the built-in support for ",(0,n.kt)("strong",{parentName:"p"},"Serial communications")," on pins 0 and 1 (Hardware Serial) but in some circumstances such as when these pins are already in-use or you need more Serial ports for debugging, ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/softwareSerial"},(0,n.kt)("strong",{parentName:"a"},"Software Serial"))," may seem to be the solution."),(0,n.kt)("p",null,"Here will also use an example to demonstrate how to use Software Serial with you Arduino!"),(0,n.kt)("h2",{id:"software-serial-example"},"Software Serial Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\nRX is digital pin 2 (connect to TX of other device)\nTX is digital pin 3 (connect to RX of other device)\n*/\n\n#include <SoftwareSerial.h>\nSoftwareSerial mySerial(2, 3); // RX, TX\n\nvoid setup()\n{\n  Serial.begin(115200);\n  while (!Serial) {\n  }\n\n  Serial.println("Goodnight moon!");\n\n  mySerial.begin(9600);\n  mySerial.println("Hello, world?");\n}\n\nvoid loop()\n{\n  if (mySerial.available())\n    Serial.write(mySerial.read());\n  if (Serial.available())\n    mySerial.write(Serial.read());\n}\n')),(0,n.kt)("p",null,"In practice, you may also use other serial devices, such as serial wireless pass-through modules, serial sensors, etc., as long as it is standard. The serial devices are all programmed in much the same way."),(0,n.kt)("h2",{id:"using-multiple-software-serial"},"Using Multiple Software Serial"),(0,n.kt)("p",null,"When you need multiple serial devices to be connected, it is possible to create multiple software serial ports. But due to hardware limitation, Arduino UNO can only listen to one software serial at a time. Here provides an example for multiple software serial:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SoftwareSerial.h>\nSoftwareSerial serialOne(2, 3); // Software Serial ONE\nSoftwareSerial serialTwo(8, 9); // Software Serial TWO\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial) { // wait till Serial\n  }\n\n  serialOne.begin(9600);\n  serialTwo.begin(9600);\n}\n\nvoid loop() {\n  serialOne.listen(); // listening on Serial One\n\n  Serial.println("Data from port one:");\n  while (serialOne.available() > 0) {\n    char inByte = serialOne.read();\n    Serial.write(inByte);\n  }\n\n  Serial.println();\n\n  serialTwo.listen(); // listening on Serial Two\n\n  Serial.println("Data from port two:");\n  while (serialTwo.available() > 0) {\n    char inByte = serialTwo.read();\n    Serial.write(inByte);\n  }\n\n  Serial.println();\n}\n')),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);