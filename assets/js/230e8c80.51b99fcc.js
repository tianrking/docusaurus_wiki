"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(v,n(n({ref:t},d),{},{components:r})):a.createElement(v,n({ref:t},d))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var p=2;p<o;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const o={title:"Grove-LED_Matrix_Driver_v1.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-LED_Matrix_Driver_v1.0/",last_update:{date:"01/09/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0",title:"Grove-LED_Matrix_Driver_v1.0",description:"Grove - LED Matrix Driver v1.0 is UART (Serial) to dot matrix LED driver that incorporates various graphics functions.It can only support 32\xd764 LED matrix. This product is a Grove compatible UART interface. It provides easy and rich APIs that abstract the complexity of the underlying LED driving hardware. All you need to is just call these APIs in code to implement different functionalities for your project.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove-LED_Matrix_Driver_v1.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-LED_Matrix_Driver_v1.0/",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove-Infrared_Emitter",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter"},next:{title:"Grove-MP3_v2.0",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"<strong>Package includes</strong>(main parts)",id:"package-includesmain-parts",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"Material required",id:"material-required",level:4},{value:"Connections",id:"connections",level:4},{value:"Coding Work",id:"coding-work",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_view_700_s.jpg",alt:null})),(0,i.kt)("p",null,"Grove - LED Matrix Driver v1.0 is UART (Serial) to dot matrix LED driver that incorporates various graphics functions.It can only support 32\xd764 LED matrix. This product is a ",(0,i.kt)("strong",{parentName:"p"},"Grove")," compatible UART interface. It provides easy and rich APIs that abstract the complexity of the underlying LED driving hardware. All you need to is just call these APIs in code to implement different functionalities for your project."),(0,i.kt)("p",null,"Each dot(i.e pixel) support dual color LEDs. It can produce three colors totally: red (primary color), green(primary color) and yellow (mixed color). The input current for all LEDs can be set at a time."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-LED-Matrix-Driver-v1.0-p-2645.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This Grove module does not support changing the input current of each LED separately.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grove compatible and easy to use"),(0,i.kt)("li",{parentName:"ul"},"Highly abstracted and complete API"),(0,i.kt)("li",{parentName:"ul"},"Support dual-color LED-pixel. Three colors totally (the third color is a mix of two primary color)"),(0,i.kt)("li",{parentName:"ul"},"Interface: UART(SoftSerial in Arduino)")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating voltage(V)"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3\u20135 Volts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating current(mA)"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum: 28\u201350 mA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output voltage (from matrix driver)"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3 Volts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Symbols/Graphics functions supported"),(0,i.kt)("td",{parentName:"tr",align:null},"Dot, straight line, circle, char, string, number, emoji, image (you can display these symbols by calling API directly in code)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supported LED matrix size"),(0,i.kt)("td",{parentName:"tr",align:null},"32(row)\xd764(column)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supported color in each LED matrix dot"),(0,i.kt)("td",{parentName:"tr",align:null},"Dual LEDs (green and red) and a mixed color(yellow), and you can use only one LED in each LED matrix dot")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Connector for LED matrix"),(0,i.kt)("td",{parentName:"tr",align:null},"DBSTAR","_","HUB 08A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Protocol for Grove port"),(0,i.kt)("td",{parentName:"tr",align:null},"UART")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Working temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"-40\u201380 \u2103")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,i.kt)("td",{parentName:"tr",align:null},"46.5\xd744 mm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Weight"),(0,i.kt)("td",{parentName:"tr",align:null},"9 g(for the module), 12.5(for all single package)")))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_components_described_1200_s.jpg",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Grove socket"),", to connect this product to main control board."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LED matrix port(DBSTAR","_","HUB 08A )"),", to connect LED matrix. If you can not find a connector like this, you can user jumper wires as an alternative.")),(0,i.kt)("h3",{id:"package-includesmain-parts"},(0,i.kt)("strong",{parentName:"h3"},"Package includes"),"(main parts)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parts name"),(0,i.kt)("th",{parentName:"tr",align:null},"Quantity"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Grove - LED Matrix Driver v1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"1 piece")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable")),(0,i.kt)("td",{parentName:"tr",align:null},"1 piece")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Now let us run some basic examples with this module."),(0,i.kt)("h3",{id:"with-arduino"},"With Arduino"),(0,i.kt)("h4",{id:"material-required"},"Material required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grove - LED Matrix Driver v1.0 \xd7 1"),(0,i.kt)("li",{parentName:"ul"},"32\xd764 LED matrix with one red and one green LEDs in matrix dots (single color LED matrix will also be fine) \xd7 1"),(0,i.kt)("li",{parentName:"ul"},"Power line (ribbon shape) for \xd7 1"),(0,i.kt)("li",{parentName:"ul"},"5 Volts(output) Adapter to regulate input voltage for LED matrix \xd7 1"),(0,i.kt)("li",{parentName:"ul"},"8-pin(female) ribbon cable \xd7 1"),(0,i.kt)("li",{parentName:"ul"},"Arduino UNO (other Arduino models will also be fine) \xd7 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable")," \xd7 1"),(0,i.kt)("li",{parentName:"ul"},"Grove - Base Shield \xd7 1")),(0,i.kt)("h4",{id:"connections"},"Connections"),(0,i.kt)("p",null,"Connect all parts as following:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_front_3600.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_back_3600.jpg",alt:null})),(0,i.kt)("h4",{id:"coding-work"},"Coding Work"),(0,i.kt)("p",null,"You can find more demo sketch at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver"},"https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver")," and development library at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver"},"https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A typical demo code. You can upload code to main control board with ",(0,i.kt)("a",{parentName:"li",href:"https://codebender.cc"},"Codebender"),".")),(0,i.kt)("iframe",{frameBorder:0,height:500,src:"https://codebender.cc/embed/sketch:300168",width:"50%"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Download and upload the code. If you do not know how to upload an Arduino sketch, please visit ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/Windows"},"https://www.arduino.cc/en/Guide/Windows")," for Windows user or ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/MacOSX"},"https://www.arduino.cc/en/Guide/MacOSX")," for Mac user. You can see the result as below.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_result_view_s.jpg",alt:null})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip"},"Schematic file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/STM32F03C8T6.pdf"},"STM32F103C8T6 Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver"},"Library on Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver/tree/master/Firmware"},"Firmware for this product"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);