"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(h,n(n({ref:t},p),{},{components:r})):o.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var c=2;c<a;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const a={description:"Grove - 3-Axis Analog Accelerometer",title:"Grove - 3-Axis Analog Accelerometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/5/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer",title:"Grove - 3-Axis Analog Accelerometer",description:"Grove - 3-Axis Analog Accelerometer",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Analog_Accelerometer.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{description:"Grove - 3-Axis Analog Accelerometer",title:"Grove - 3-Axis Analog Accelerometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3 Axis Digital Accelerometer(\xb116g)",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer-16g"},next:{title:"Grove - 3-Axis Compass V1.0",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Compass_V1.0"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Before usage",id:"before-usage",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_Analog_Accelerometer_photo.JPG",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"The ADXL335 is a small, thin, low power, complete 3-axis accelerometer with signal conditioned voltage outputs. The product measures acceleration with a minimum full-scale range of \xb13 g.\nThe module was designed as breakout board because ADXL335's signal is analog( more ports requested ). But the board outline is grove module that you can fix it conveniently like other groves. The sensor combined 3.3 and 5V power supply, can be used in standard Arduino device and Seeeduino Stalker. The following program code includes first-order filter which can make the output smoothly if the sensor was used in robot or toy car."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wide power range DC3V to 5V"),(0,i.kt)("li",{parentName:"ul"},"Grove outline"),(0,i.kt)("li",{parentName:"ul"},"3 axis sensing"),(0,i.kt)("li",{parentName:"ul"},"Small, low-profile package: 4\xd74\xd71.45mm LFCSP"),(0,i.kt)("li",{parentName:"ul"},"Low power 350\xb5A at 3V (typical)"),(0,i.kt)("li",{parentName:"ul"},"High sensitive"),(0,i.kt)("li",{parentName:"ul"},"10,000 g shock survival"),(0,i.kt)("li",{parentName:"ul"},"BW adjustment with a single capacitor per axis"),(0,i.kt)("li",{parentName:"ul"},"RoHS/WEEE lead-free compliant")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Motion Sensor"),(0,i.kt)("li",{parentName:"ul"},"Shock detector"),(0,i.kt)("li",{parentName:"ul"},"Vibration sensor"),(0,i.kt)("li",{parentName:"ul"},"Toy car"),(0,i.kt)("li",{parentName:"ul"},"Robot")),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"before-usage"},"Before usage"),(0,i.kt)("p",null,"We suggest you to read those knowledge before using the Gas sensor, it'll help you to learn more about Arduino and our products, and also it'll let you to use open souse hardware more easier."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Getting Started with Arduino"),(0,i.kt)("li",{parentName:"ul"},"What is Grove system"),(0,i.kt)("li",{parentName:"ul"},"Why i need a Base shield?")),(0,i.kt)("p",null,"After reading that you will know how to use Base shield with Grove products to work well with Arduino. Let's start it\xa0!"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The sensor's outline is breakout board, you can welding wire in the board or use jumper wire to connect the sensor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The VCC connect to power source\uff08DC5V or DC3.3V\uff09, GND to ground, X to Arduino analog port A0, Y to A1, Z to A2."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_analog_accelerometer_V1.0_hardware.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip"},"3-Axis Analog Accelerometer Library")," and Unzip it into the libraries file of Arduino IDE by the path: ..","\\","arduino-1.0.1","\\","libraries.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Regulate the sensor"))),(0,i.kt)("p",null,"The sensor is analog device, you should regulate the sensor before combining it with your system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Open the Demo: Calibration and upload it to Arduino."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Open your serial monitor, make sure the sensor is connected. Follow the axis institutions printed on sensor's board. First, make sure that Z-axis direction is straight up, please type any character if you are ready. Change the sensor position, repeat the above operation to obtain X-axis and Y-axis direction are straight up ."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," You can get the values as shown above. Please modify the macro definitions with these results in ADXL335.h"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Now the calibration has been completed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloading the demo code: Measuring Acceleration, then open serial monitor, turn the sensor any angle, you can see the digital angle value sent from the accelerometer to the monitor.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip"},"Grove - 3-Axis Analog Accelerometer Eagle File"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip"},"3-Axis Analog Accelerometer Library"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_3Axis_Analog_Accelerometer"},"github repository for 3-Axis Analog Accelerometer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/ADXL335_datasheet.pdf"},"ADXL335 datasheet.pdf")))),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Grove - Introduction in 3-Axis Digital Accelerometer")," How to use a 3-axis digital accelerometer."),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed",width:"350"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solar Panel Dual Management System (SP DMS)")," This IoT prototype performs two functions: 1) Theft prevention and 2) Maintenance Indication of solar panel using LinkIt ONE and Sensors."),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/skyline/solar-panel-dual-management-system-sp-dms-3a87ca/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);