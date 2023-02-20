"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={description:"Xadow - IMU 6DOF",title:"Xadow - IMU 6DOF",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_IMU_6DOF",id:"Seeed_Elderly/Xadow/Xadow_IMU_6DOF",title:"Xadow - IMU 6DOF",description:"Xadow - IMU 6DOF",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_IMU_6DOF.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Seeed_Elderly/Xadow/Xadow_IMU_6DOF",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_IMU_6DOF",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Seeed_Elderly/Xadow/Xadow_IMU_6DOF.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - IMU 6DOF",title:"Xadow - IMU 6DOF",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Gesture v1.0",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_Gesture_v1.0"},next:{title:"Xadow - IMU 9DOF",permalink:"/docusaurus_wiki/zh-CN/Seeed_Elderly/Xadow/Xadow_IMU_9DOF"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Imu_6dof_01.jpg",alt:null})),(0,r.kt)("p",null,"Xadow - IMU 6DOF is a motion tracking module. Its design is based on the sensor MPU6050 which is the world\u2019s first integrated 6-axis MotionTracking device, that combines a 3-axis gyroscope, 3-axis accelerometer, and a Digital Motion Processor\u2122 (DMP). MPU6050 features three 16-bit analog-to-digital converters (ADCs) for digitizing the gyroscope outputs and three 16-bit ADCs for digitizing the accelerometer outputs so Xadow - IMU 6DOF achieves a high converter accuracy. For precision tracking of both fast and slow motions, the parts feature a user-programmable gyroscope full-scale range and a user-programmable accelerometer full-scale range."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-IMU-6DOF-p-1670.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Working Voltage: 3.3V"),(0,r.kt)("li",{parentName:"ul"},"Measure Range:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Gyroscope full-scale range: \xb1250,. \xb1500,. \xb11000,. \xb12000\xb0/sec"),(0,r.kt)("li",{parentName:"ul"},"Accelerometer full-scale range\uff1a\xb12g, \xb14g, \xb18g, and \xb116g."))),(0,r.kt)("li",{parentName:"ul"},"Control Mode: I2C"),(0,r.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,r.kt)("h2",{id:"demonstration"},"Demonstration"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Based on our available library\uff0cyou can get accele and gyro value easily.Now let's show how to use the module."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware Connection\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow-IMU_6DOF_installation.png",alt:null})),(0,r.kt)("p",null,"Note: when connect Xadow IMU 6DOF to Xadow Main Board, the connection direction should be cautious. The connection method is that the unfilled corner of one Xadow module connect to the right angle of another module(see four corners of each Xadow module)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test Code\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Xadow_IMU_6DOF"},"Xadow - IMU 6DOF  MPU6050 Library")," from Github, and install I2Cdev file and MPU6050 file to your Arduino Library. About the library installation\uff0cplease refer to ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"here")," in wiki page."),(0,r.kt)("li",{parentName:"ul"},"Open the example: ",(0,r.kt)("strong",{parentName:"li"},"MPU6050_DMP6 by the pathFile - >Examples -> MPU6050 ->Examples->MPU6050_DMP6"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <I2Cdev.h>//add necessary headfiles\n#include <MPU6050.h>//add necessary headfiles\n#include <Wire.h>\n//====the offset of gyro===========\n#define Gx_offset  -1.50\n#define Gy_offset  0\n#define Gz_offset  0.80\n//====the offset of accelerator===========\n#define Ax_offset -0.07\n#define Ay_offset 0.02\n#define Az_offset 0.14\n//====================\nMPU6050 accelgyro;\n\nint16_t ax,ay,az;//original data;\nint16_t gx,gy,gz;//original data;\nfloat Ax,Ay,Az;//Unit g(9.8m/s^2)\nfloat Gx,Gy,Gz;//Unit deg/s\n\n\nvoid setup()\n{\n  Wire.begin();\n  Serial.begin(9600);\n\n  Serial.println("Initializing I2C device.....");\n  accelgyro.initialize();\n\n  Serial.println("Testing device connections...");\n  Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful":"MPU6050 connection failure");\n}\nvoid loop()\n{\n\n  accelgyro.getMotion6(&ax,&ay,&az,&gx,&gy,&gz);//get the gyro and accelerator\n   //==========accelerator================================\n   Ax=ax/16384.00;//to get data of unit(g)\n   Ay=ay/16384.00;//to get data of unit(g)\n   Az=az/16384.00;//to get data of unit(g)\n   Serial.println("Acce data.....");\n   Serial.print(Ax+Ax_offset);\n   Serial.print("   ");\n   Serial.print(Ay+Ay_offset);\n   Serial.print("   ");\n   Serial.println(Az+Az_offset);\n   //===============gyro================================\n   Gx=gx/131.00;\n   Gy=gy/131.00;\n   Gz=gz/131.00;\n   Serial.println("Gyro data.....");\n   Serial.print(Gx+Gx_offset);\n   Serial.print("   ");\n   Serial.print(Gy+Gy_offset);\n   Serial.print("   ");\n   Serial.println(Gz+Gz_offset);\n  //blinkState=!blinkState;\n  //digitalWrite(LED_PIN,blinkState);\n  delay(1000);//control time of sampling\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload code to Xadow Main Board. Remember to select 'Seeeduino Xadow'from Tools ->Board.Open serial monitor to observe the output value of MPU6050 Sensor.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow_IMU_6DOF_result.jpg",alt:null})),(0,r.kt)("p",null,"In static state\uff0cthe z-Axis output value is about 0.98g\uff0cso you can refer to this to test if your sensor can work normally."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Orientation of Axes"),"\nThe diagram below shows the orientation of the axes of sensitivity and the polarity of rotation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/MPU6050_%E8%BD%B4%E5%90%91%E5%AE%9A%E4%BD%8D.png",alt:null})),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip"},"Xadow - IMU 6DOF Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/MPU6050.pdf"},"MPU6050 datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Xadow_IMU_6DOF"},"Library File"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);