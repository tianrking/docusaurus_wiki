"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Project Seven - Temperature",title:"Project Seven - Temperature",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,u={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Seven-Temperature",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Seven-Temperature",title:"Project Seven - Temperature",description:"Project Seven - Temperature",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Seven-Temperature.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Seven-Temperature",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Seven-Temperature",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Seven-Temperature.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"Project Seven - Temperature",title:"Project Seven - Temperature",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Six \u2013 LCD Demonstration",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Six-LCD_Demonstration"},next:{title:"Project Eight - Thermostat",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat"}},s={},p=[{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Next on our Grove journey is the temperature sensor . It is an analog form of input, and as described earlier returns a voltage potential relative to the ambient temperature. We measure this voltage using an analog pin, and convert it to a temperature."),(0,o.kt)("p",null,"Connect the Temperature Sensor to the Analog A0/A1 input jack.\nThe Grove unit produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Conn-seven.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'// Project Seven - temperature\n//\n\nint a;\nint del=1000; // duration between temperature readings\nfloat ctemperature;\nfloat ftemperature;\nint B=3975;\nfloat resistance;\n\nvoid setup()\n{\n  Serial.begin(9600);\n}\n\nvoid loop()\n{\n  a=analogRead(0);\n  resistance=(float)(1023-a)*10000/a;\n  ctemperature=1/(log(resistance/10000)/B+1/298.15)-273.15;\n  ftemperature=ctemperature*9/5+32;\n  Serial.print(ctemperature);\n  Serial.print("C ");\n  Serial.print(ftemperature);\n  Serial.println("F");\n  delay(del);\n}\n')),(0,o.kt)("p",null,"You can copy and paste the lines above to add temperature capability to your own sketches."),(0,o.kt)("p",null,"After you have uploaded the sketch, open the serial monitor window in the Arduino IDE, and you should be presented with a box similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Aq0PYQjuq.png",alt:null})),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}l.isMDXComponent=!0}}]);