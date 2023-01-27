"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={description:"Grove - IMU 9DOF v2.0",title:"Grove - IMU 9DOF v2.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/5/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF_v2.0",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF_v2.0",title:"Grove - IMU 9DOF v2.0",description:"Grove - IMU 9DOF v2.0",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF_v2.0.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF_v2.0",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF_v2.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF_v2.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - IMU 9DOF v2.0",title:"Grove - IMU 9DOF v2.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - IMU 10DOF v2.0",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_10DOF_v2.0"},next:{title:"Grove - IMU 9DOF(lcm20600+AK09918)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF-lcm20600+AK09918"}},s={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"References",id:"references",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Grove - IMU 9DOF v2.0 is an upgraded version of ",(0,n.kt)("strong",{parentName:"p"},"Grove - IMU 9DOF v1.0")," and it is a high performance 9-axis motion tracking module, which is based on MPU-9250. The MPU-9250 is an integrated 9-axis motion tracking device designed for the low power, low cost, and high performance requirements of consumer electronics equipment including smartphones, tablets and wearable sensors. MPU-9250 features three 16-bit ADC for digitizing the gyroscope outputs and three 16-bit ADCs for digitizing the accelerometer outputs and three 16-bit ADCs for digitizing the magnetometer outputs."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I2C/SPI interface"),(0,n.kt)("li",{parentName:"ul"},"Auxiliary I2C"),(0,n.kt)("li",{parentName:"ul"},"Low Power Consumption"),(0,n.kt)("li",{parentName:"ul"},"400kHz Fast Mode I2C for communicating with all registers"),(0,n.kt)("li",{parentName:"ul"},"Digital-output 3-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of \xb1250, \xb1500, \xb11000, and \xb12000\xb0/sec"),(0,n.kt)("li",{parentName:"ul"},"Digital-output 3-Axis accelerometer with a programmable full scale range of \xb12g, \xb14g, \xb18g and \xb116g"),(0,n.kt)("li",{parentName:"ul"},"Digital-output 3-Axis accelerometer with a full scale measurement range is \xb14800\u03bcT"),(0,n.kt)("li",{parentName:"ul"},"I2C Address: 0x68")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).\n"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"\u2460 - Grove interface,connect to I2C"),(0,n.kt)("p",null,"\u2461 - I2C or SPI select pad(default is I2C), if want to use SPI, disconnect this pad"),(0,n.kt)("p",null,"\u2462 - Address select pad, default connected b and c address is 0x68, if connect b and a address is 0x69, if want to use SPI, disconnect this pad to either side."),(0,n.kt)("p",null,"\u2463 - SPI Interface"),(0,n.kt)("p",null,"\u2464 - Auxiliary I2C master serial data"),(0,n.kt)("p",null,"\u2465 - Auxiliary I2C master serial clock"),(0,n.kt)("p",null,"\u2466 - Interrupt digital output"),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-IMU_9DOF_v2.0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-IMU_9DOF_v2.0 to port ",(0,n.kt)("strong",{parentName:"li"},"I2C")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino_v4"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-IMU_9DOF_v2.0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_IMU_9DOF/archive/master.zip"},"library"),". from Github."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->IMU_9DOF_Demo_Compass_Calibrated->IMU_9DOF_Demo_Compass_Calibrated."),(0,n.kt)("p",null,"Here is the main part of the code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'\nvoid setup() {\n  // join I2C bus (I2Cdev library doesn\'t do this automatically)\n  Wire.begin();\n\n  // initialize serial communication\n  // (38400 chosen because it works as well at 8MHz as it does at 16MHz, but\n  // it\'s really up to you depending on your project)\n  Serial.begin(38400);\n\n  // initialize device\n  Serial.println("Initializing I2C devices...");\n  accelgyro.initialize();\n\n  // verify connection\n    Serial.println("Testing device connections...");\n    Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");\n    delay(1000);\n    Serial.println("     ");\n\n //Mxyz_init_calibrated ();\n}\n\nvoid loop()\n{   \n    getAccel_Data();\n    getGyro_Data();\n    getCompassDate_calibrated(); // compass data has been calibrated here\n    getHeading();               //before we use this function we should run \'getCompassDate_calibrated()\' frist, so that we can get calibrated data ,then we can get correct angle .                    \n    getTiltHeading();           \n\n    Serial.println("calibration parameter: ");\n    Serial.print(mx_centre);\n    Serial.print("         ");\n    Serial.print(my_centre);\n    Serial.print("         ");\n    Serial.println(mz_centre);\n    Serial.println("     ");\n\n\n    Serial.println("Acceleration(g) of X,Y,Z:");\n    Serial.print(Axyz[0]);\n    Serial.print(",");\n    Serial.print(Axyz[1]);\n    Serial.print(",");\n    Serial.println(Axyz[2]);\n    Serial.println("Gyro(degress/s) of X,Y,Z:");\n    Serial.print(Gxyz[0]);\n    Serial.print(",");\n    Serial.print(Gxyz[1]);\n    Serial.print(",");\n    Serial.println(Gxyz[2]);\n    Serial.println("Compass Value of X,Y,Z:");\n    Serial.print(Mxyz[0]);\n    Serial.print(",");\n    Serial.print(Mxyz[1]);\n    Serial.print(",");\n    Serial.println(Mxyz[2]);\n    Serial.println("The clockwise angle between the magnetic north and X-Axis:");\n    Serial.print(heading);\n    Serial.println(" ");\n    Serial.println("The clockwise angle between the magnetic north and the projection of the positive X-Axis in the horizontal plane:");\n    Serial.println(tiltheading);\n    Serial.println("   ");\n    Serial.println("   ");\n    Serial.println("   ");\n    delay(300);\n}\n')),(0,n.kt)("admonition",{title:"If we don't have Grove base shield , We also can directly connect this module to Seeeduino LoRaWAN,but we need add three line code as below picture.",type:"note"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the code and after that, you can see\xa0:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"In static state\uff0cthe z-Axis output value is about 0.98g\uff0cso you can refer to this to test if your sensor can work normally."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Orientation of Axes")),(0,n.kt)("p",null,"The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation.Note the pin 1 identifier (\u2022) in the figure."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Orientation of Axes of Sensitivity and Polarity of Rotation for Accelerometer and Gyroscope")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Orientation of Axes of Sensitivity for Compass")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle&PDF]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip"},"Grove - IMU 9DOF v2.0 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove_IMU_9DOF_9250.zip"},"Grove - IMU 9DOF v2.0 library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Product_Specification.pdf"},"MPU-9250 datashet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Reg_Map.pdf"},"MPU-9250 Register Map"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Speed testing the MPU9150's functions using a LinkIt ONE\n"),": I set up this project with the sole intention of determining the cost in milliseconds of the MPU9150's standard functions."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/kg6hxm/speed-testing-the-mpu9150-s-functions-using-a-linkit-one-181c67/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);