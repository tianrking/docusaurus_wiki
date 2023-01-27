"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),_=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=_(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=_(n),m=i,c=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var _=2;_<a;_++)l[_]=n[_];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>_});var r=n(87462),i=(n(67294),n(3905));const a={description:"Grove - Mini Track Ball",title:"Grove - Mini Track Ball",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/7/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-Mini_Track_Ball",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-Mini_Track_Ball",title:"Grove - Mini Track Ball",description:"Grove - Mini Track Ball",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Mini_Track_Ball.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Sensor/Grove/Grove_Sensors/Motion/Grove-Mini_Track_Ball",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Motion/Grove-Mini_Track_Ball",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Mini_Track_Ball.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"2023\u5e741\u67087\u65e5",frontMatter:{description:"Grove - Mini Track Ball",title:"Grove - Mini Track Ball",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/7/2023",author:"shuxu hu"}}},p={},_=[{value:"Features",id:"features",level:2},{value:"Application ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:_};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Grove - Mini Track ball will give an easy access to prototyping a practical motion-tracking function module for your applications. It has implanted 360\xb0 detection and click detection with high accuracy and quick response. With chips ",(0,i.kt)("strong",{parentName:"p"},"STM32F103C8T6")," and ",(0,i.kt)("strong",{parentName:"p"},"AN48841B")," inside, you can turn plenty of your ideas into tangible things. It is also standardized with Grove interface which will save you a lot of work in the prototyping process."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"360\xb0 and quick detection."),(0,i.kt)("li",{parentName:"ul"},"Translucent click Button."),(0,i.kt)("li",{parentName:"ul"},"Standardized with Grove interface."),(0,i.kt)("li",{parentName:"ul"},"Powerful MCU for you to enrich your applications.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tracking module for a gamepad."),(0,i.kt)("li",{parentName:"ul"},"Tracking module for a haptic controller."),(0,i.kt)("li",{parentName:"ul"},"Tracking module for toys.")),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V~5.5V (typical at 5V)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating current"),(0,i.kt)("td",{parentName:"tr",align:null},"28 mA (maximum operating current: 40 mA)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating temperature range"),(0,i.kt)("td",{parentName:"tr",align:null},"-25 ~ 75 \u2103")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MCU frequency"),(0,i.kt)("td",{parentName:"tr",align:null},"64 MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating frequency"),(0,i.kt)("td",{parentName:"tr",align:null},"105\xb15kHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hall effect filed strength range"),(0,i.kt)("td",{parentName:"tr",align:null},"(0.5) ~ (8) mT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,i.kt)("td",{parentName:"tr",align:null},"0x4A")))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Grove interface"),(0,i.kt)("br",{parentName:"p"}),"\n","Connect main control board such as ",(0,i.kt)("strong",{parentName:"p"},"Seeeduino")," board with Grove - Mini Track Ball.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MCU (STM32F103C8T6)"),(0,i.kt)("br",{parentName:"p"}),"\n","Microcontroller.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Track ball"),(0,i.kt)("br",{parentName:"p"}),"\n","Interface to control motions."))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-Mini_Track_Ball"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html"},"Get One Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Mini_Track_Ball to ",(0,i.kt)("strong",{parentName:"li"},"I2C")," port of Seeeduino."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Connect Seeeduino to PC via a USB cable.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_test.zip"},"demo")," from Github."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Open the file ",(0,i.kt)("strong",{parentName:"p"},"Grove - Mini Track ball test.ino")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'\n\n#include <Wire.h>\n\n/*---------------------------------------------------------------------------------------//\n * define the default data\n */\n#define ReadMode 0\n#define WriteMode 1\n#define DeAddr 0X4A\n#define ConfigValid 0x3a6fb67c\n\n\n/*---------------------------------------------------------------------------------------//\n * define the enum type for Register\n */\nenum MOTION_REG_ADDR\n{\n  MOTION_REG_UP = 0X00,\n  MOTION_REG_DOWN,\n  MOTION_REG_LEFT,\n  MOTION_REG_RIGHT,\n  MOTION_REG_CONFIRM,\n  MOTION_REG_NUM\n};\n\nenum CONFIG_REG_ADDR\n{\n  CONFIG_REG_VALID = MOTION_REG_NUM,\n  CONFIG_REG_I2C_ADDR = CONFIG_REG_VALID + 4,\n  CONFIG_REG_I2C_SPEED,\n  CONFIG_REG_LED_MODE = CONFIG_REG_I2C_SPEED + 2,\n  CONFIG_REG_LED_FLASH_TIME,\n  CONFIG_REG_DATA_CLEAR_TIME = CONFIG_REG_LED_FLASH_TIME + 2,  //CONFIG_REG_LED_FLASH_TIME has 2bytes\n  CONFIG_REG_DATA_READ_TIME = CONFIG_REG_DATA_CLEAR_TIME + 2,\n  CONFIG_REG_NUM = CONFIG_REG_DATA_READ_TIME + 2\n};\n\n\n/*---------------------------------------------------------------------------------------//\n * define the LED word mode\n */\nenum LED_MODE\n{\n  LED_FLASH_1 = 0X00,\n  LED_FLASH_2,\n  LED_FLASH_TOGGLE,\n  LED_FLASH_ALL,\n  LED_ALWAYS_ON_1,\n  LED_ALWAYS_ON_2, \n  LED_ALWAYS_ON_ALL,\n  LED_ALWAYS_OFF,\n  LED_BREATHING_1,\n  LED_BREATHING_2,\n  LED_BREATHING_ALL,\n  LED_MOVE_FLASH,\n  LED_MODE_NUM\n};\n\n\n\n/*---------------------------------------------------------------------------------------//\n * Write one byte into register\n */\nvoid WriteByte(uint8_t Reg, uint8_t Value)\n{\n    Wire.beginTransmission(DeAddr); \n    Wire.write(WriteMode); \n    Wire.write(Reg); \n    Wire.write(Value); \n    Wire.endTransmission(); \n}\n\n/*---------------------------------------------------------------------------------------//\n * Write N byte into register\n */\nvoid WriteNByte(uint8_t Reg , uint8_t * Value , uint8_t len)\n{\n    Wire.beginTransmission(DeAddr); \n    Wire.write(WriteMode); \n    Wire.write(Reg); \n    for(int i = 0;i<len;i++)\n    {\n      Wire.write(Value[i]); \n    }\n    Wire.endTransmission(); \n}\n\n/*---------------------------------------------------------------------------------------//\n * Write one word(4 bytes,32 bits) into register ,the register address must be continuous\n */\nvoid WriteOneWord(uint8_t Reg, uint32_t Value)\n{\n  uint8_t tmp[4]={0};\n  tmp[0] = (Value>>0)&0XFF;\n  tmp[1] = (Value>>8)&0XFF;\n  tmp[2] = (Value>>16)&0XFF;\n  tmp[3] = (Value>>24)&0XFF;\n  WriteNByte(Reg,tmp,4);\n}\n\n\n/*---------------------------------------------------------------------------------------//\n * Write half word(2 bytes,16 bits) into register ,the register address must be continuous\n */\nvoid WriteHalfWord(uint8_t Reg, uint16_t Value)\n{\n  uint8_t tmp[2]={0};\n  tmp[0] = (Value>>0)&0XFF;\n  tmp[1] = (Value>>8)&0XFF;\n  WriteNByte(Reg,tmp,2);\n}\n\n/*---------------------------------------------------------------------------------------//\n * Read one byte from register\n */\n uint8_t ReadByte(uint8_t Reg)\n {\n    Wire.beginTransmission(DeAddr); \n    Wire.write(ReadMode); \n    Wire.write(Reg); \n    Wire.write(1); \n    Wire.endTransmission(); \n    Wire.requestFrom(DeAddr, 1);  \n    return Wire.read();\n }\n /*---------------------------------------------------------------------------------------//\n * Read half word from register\n */\n uint16_t ReadHalfWord(uint8_t Reg)\n {\n   uint16_t tmp;\n   tmp = ReadByte(Reg);\n   tmp |= ((uint16_t)ReadByte(Reg+1))<<8;\n   return tmp;\n }\n /*---------------------------------------------------------------------------------------//\n * Read one word from register\n */\n uint32_t ReadOneWord(uint8_t Reg)\n {\n   uint32_t tmp;\n   tmp = ReadByte(Reg);\n   tmp |= ((uint32_t)ReadByte(Reg+1))<<8;\n   tmp |= ((uint32_t)ReadByte(Reg+2))<<16;\n   tmp |= ((uint32_t)ReadByte(Reg+3))<<24;\n   return tmp;\n }\n\n/*---------------------------------------------------------------------------------------//\n * Set LED mode ,reference to the enum type LED_MODE\n */\nvoid SetLedMode(uint8_t LED_MODE)\n{\n  WriteByte(CONFIG_REG_LED_MODE,LED_MODE);\n}\n\n/*---------------------------------------------------------------------------------------//\n * test api ,Set LED mode circularly  ,reference to the enum type LED_MODE \n */\nvoid test_SetLedMode(void)\n{\n  unsigned char tmp[8]={0};\n  for(int i=0;i<LED_MODE_NUM;i++)\n  {\n     //WriteByte(CONFIG_REG_LED_MODE,(enum LED_MODE)i);\n     tmp[0] = i;\n     WriteNByte(CONFIG_REG_LED_MODE ,tmp , 1);\n     delay(5000);\n  }\n}\n\n/*---------------------------------------------------------------------------------------//\n * test api,print the track ball data\n */\nvoid test_PrintTrackData(void)\n{\n  for(int i=0;i<500;i++)\n  {\n    Serial.print(ReadByte(MOTION_REG_UP));\n    Serial.print("-");\n    Serial.print(ReadByte(MOTION_REG_DOWN));\n    Serial.print("-");\n    Serial.print(ReadByte(MOTION_REG_LEFT));\n    Serial.print("-");\n    Serial.print(ReadByte(MOTION_REG_RIGHT));\n    Serial.print("-");\n    Serial.println(ReadByte(MOTION_REG_CONFIRM));\n    delay(100);\n  }\n}\n\n/*---------------------------------------------------------------------------------------//\n * test api,Write register\n */\nvoid test_WriteReg(void)\n{ \n  unsigned char tmp[8]={0};\n  tmp[0] = 0X4A;\n  WriteByte(CONFIG_REG_I2C_ADDR ,tmp[0]);\n  delay(100);\n  tmp[0] = 0X64;\n  tmp[1] = 0X00;\n  WriteByte(CONFIG_REG_I2C_SPEED ,tmp[0]);\n  WriteByte(CONFIG_REG_I2C_SPEED+1 ,tmp[1]);\n  delay(100);\n  tmp[0] = 10;\n  WriteByte(CONFIG_REG_LED_MODE ,tmp[0]);\n  delay(100);\n  tmp[0] = 0xc8;\n  tmp[1] = 0x00;\n  WriteByte(CONFIG_REG_LED_FLASH_TIME ,tmp[0]);\n  WriteByte(CONFIG_REG_LED_FLASH_TIME+1 ,tmp[1]);\n  delay(100);\n  tmp[0] = 0XEA;\n  tmp[1] = 0X14;\n  WriteByte(CONFIG_REG_DATA_CLEAR_TIME ,tmp[0]);\n  WriteByte(CONFIG_REG_DATA_CLEAR_TIME+1 ,tmp[1]);\n  delay(100);\n  tmp[0] = 0X22;\n  tmp[1] = 0X05;\n  WriteByte(CONFIG_REG_DATA_READ_TIME ,tmp[0]);\n  WriteByte(CONFIG_REG_DATA_READ_TIME+1 ,tmp[1]);\n  delay(1000);\n  Serial.println("Setted Value are over here");\n  Serial.print("valid:0x");Serial.print(ReadByte(CONFIG_REG_VALID+3),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+2),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+1),HEX);Serial.println(ReadByte(CONFIG_REG_VALID+0),HEX);\n  Serial.print("I2C_ADDR:0x");Serial.println(ReadByte(CONFIG_REG_I2C_ADDR+0),HEX);\n  Serial.print("I2C_SPEED:0x");Serial.print(ReadByte(CONFIG_REG_I2C_SPEED+1),HEX);Serial.println(ReadByte(CONFIG_REG_I2C_SPEED+0),HEX);\n  Serial.print("LED_MODE:0x");Serial.println(ReadByte(CONFIG_REG_LED_MODE+0),HEX);\n  Serial.print("LED_FLASH_TIME:0x");Serial.print(ReadByte(CONFIG_REG_LED_FLASH_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_LED_FLASH_TIME+0),HEX);\n  Serial.print("DATA_CLEAR_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+0),HEX);\n  Serial.print("DATA_READ_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_READ_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_READ_TIME+0),HEX);\n  Serial.println();Serial.println();Serial.println();\n  delay(3000);\n  \n}\n\n\n/*---------------------------------------------------------------------------------------//\n * test api,Set all config to default value\n */\nvoid test_SetDefault(void)\n{ \n  unsigned char Zero[]={0,0,0,0};\n  Serial.println("Setting Default Value");\n  WriteNByte(CONFIG_REG_VALID , Zero , 4);\n  delay(100);\n  Serial.println("Default Value are over here");\n  Serial.print("valid:0x");Serial.print(ReadByte(CONFIG_REG_VALID+3),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+2),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+1),HEX);Serial.println(ReadByte(CONFIG_REG_VALID+0),HEX);\n  Serial.print("I2C_ADDR:0x");Serial.println(ReadByte(CONFIG_REG_I2C_ADDR+0),HEX);\n  Serial.print("I2C_SPEED:0x");Serial.print(ReadByte(CONFIG_REG_I2C_SPEED+1),HEX);Serial.println(ReadByte(CONFIG_REG_I2C_SPEED+0),HEX);\n  Serial.print("LED_MODE:0x");Serial.println(ReadByte(CONFIG_REG_LED_MODE+0),HEX);\n  Serial.print("LED_FLASH_TIME:0x");Serial.print(ReadByte(CONFIG_REG_LED_FLASH_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_LED_FLASH_TIME+0),HEX);\n  Serial.print("DATA_CLEAR_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+0),HEX);\n  Serial.print("DATA_READ_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_READ_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_READ_TIME+0),HEX);\n  Serial.println();Serial.println();Serial.println();\n  delay(3000);\n}\n\nvoid setup() {\n \n Wire.begin();\n Serial.begin(115200);\n}\n\nvoid loop() {\n\n  test_SetLedMode();\n\n  test_PrintTrackData();\n\n test_WriteReg();  \n\n test_SetDefault();\n \n delay(3000);\n}\n\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Upload your code into Seeeduino board. If uploading process is done, to open Serial Monitor window, Click ",(0,i.kt)("strong",{parentName:"p"},"Serial Monitor")," under menu ",(0,i.kt)("strong",{parentName:"p"},"Tool"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4.")," LED indicator under tracking ball will light on in different mode which will last around 50 seconds"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5."),' After that you can rotate or "click" the track ball to get information of its trace.'),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip"},"Grove-Mini Track ball v1.0 schematic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_PDF.zip"},"Grove-Mini Track ball v1.0 schematic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/STM32F03C8T6.pdf"},"STM32F103C8T6 Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.semicon.panasonic.co.jp/ds4/AN48841B_E.pdf"},"AN48841B Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Mini_Track_Ball"},"Library file in Github"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);