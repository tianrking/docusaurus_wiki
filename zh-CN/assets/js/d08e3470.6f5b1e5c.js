"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14265],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(n),k=a,h=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(h,o(o({ref:e},u),{},{components:n})):r.createElement(h,o({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},10101:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={description:"Motor Shield V1.0",title:"Motor Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/16/2023",author:"jianjing Huang"}},o=void 0,i={unversionedId:"Top_Brand/Arduino/shield/Motor_Shield_V1.0",id:"Top_Brand/Arduino/shield/Motor_Shield_V1.0",title:"Motor Shield V1.0",description:"Motor Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/Motor_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Top_Brand/Arduino/shield/Motor_Shield_V1.0",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/shield/Motor_Shield_V1.0",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Top_Brand/Arduino/shield/Motor_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{description:"Motor Shield V1.0",title:"Motor Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth Shield",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/shield/Bluetooth_Shield"},next:{title:"Motor Shield",permalink:"/docusaurus_wiki/zh-CN/Top_Brand/Arduino/shield/Motor_Shield"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software",id:"software",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"Motor Shield V2.0 Demo",id:"motor-shield-v20-demo",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Motor Shield is a perfect platform for robotics and mechanical applications.  It enables the Arduino to drive two brushed DC motors or one 4-wire two-phase stepper motor.  Based on the H-bridge driver Chip L298N motor driver integrated circuit, it requires a 6V to 15V power supply to power the motor and also includes an on-board 5V voltage regulator for powering the main Arduino board.  Additional plug and play Grove sensors can be connected to the 13 on-board Grove connectors."),(0,a.kt)("p",null,"Model: ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134"},"SLD80256P")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Smotoshield2.jpg",alt:null})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Standard Arduino compatible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pulse-width modulated speed control mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 direction indicator lights")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compatible with Grove plug and play sensors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Extra large heat sink helps handle big loads")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supports up to 14 servos"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CAUTION:")),(0,a.kt)("p",null,"The Driver IC and Heat sink may become very hot when working with current more than 1000mA."),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Logic Control Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"4.5"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"5.5"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Motor Supply Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Vinput -1"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Current( For Each Channel)"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"2000"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Duty range"),(0,a.kt)("td",{parentName:"tr",align:null},"0%~100%"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,a.kt)("td",{parentName:"tr",align:null},"68.5x54.5x29.5"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Net Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"37"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"g")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recommend maximum duty <50% at full load")),(0,a.kt)("h2",{id:"interface-function"},"Interface Function"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield-hard3.jpg",alt:null}),"\n",(0,a.kt)("strong",{parentName:"p"},"External Power Jack:")," External Power supply for Motor Shield."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Motor Interface:")," Out 1 and Out 2(Out 3 and Out 4) can connect Motor A(B) for DC Motor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Motor A Connector:")," Connect above two interfaces with a jumper cap when driving the DC motor A."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Motor B Connector:")," Connect below two interfaces with a jumper cap when driving the DC motor B."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supply Power Select Connector:"),"  USB/Extern Power can supply for driving the Motor. When connect the connector using a jumper cap, the USB power for the motor shieled."),(0,a.kt)("p",null,"The following table describes Motor A/B indicator LEDs."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Indicators"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN1_red"),(0,a.kt)("td",{parentName:"tr",align:null},"lights when motor A turns clockwise, out1 pin outputs high level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN2_green"),(0,a.kt)("td",{parentName:"tr",align:null},"lights when motor A turns counterclockwise, out2 pin outputs high level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN3_red"),(0,a.kt)("td",{parentName:"tr",align:null},"lights when motor B turns clockwise, out3 pin outputs high level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN4_green"),(0,a.kt)("td",{parentName:"tr",align:null},"lights when motor B turns counterclockwise, out4 pin outputs high level")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Pin Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Direction"),(0,a.kt)("th",{parentName:"tr",align:null},"Connection to Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VCC"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC"),(0,a.kt)("td",{parentName:"tr",align:null},"Power supply selector")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VS, GND"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Power Supply for Motor, 6V - 15V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EA"),(0,a.kt)("td",{parentName:"tr",align:null},"Input"),(0,a.kt)("td",{parentName:"tr",align:null},"D9"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL Compatible Enable Input of Bridge A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EB"),(0,a.kt)("td",{parentName:"tr",align:null},"Input"),(0,a.kt)("td",{parentName:"tr",align:null},"D10"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL Compatible Enable Input of Bridge B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN1"),(0,a.kt)("td",{parentName:"tr",align:null},"Input"),(0,a.kt)("td",{parentName:"tr",align:null},"D8"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL Compatible Inputs of the Bridge A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN2"),(0,a.kt)("td",{parentName:"tr",align:null},"Input"),(0,a.kt)("td",{parentName:"tr",align:null},"D11"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL Compatible Inputs of the Bridge A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN3"),(0,a.kt)("td",{parentName:"tr",align:null},"Input"),(0,a.kt)("td",{parentName:"tr",align:null},"D12"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL Compatible Inputs of the Bridge B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IN4"),(0,a.kt)("td",{parentName:"tr",align:null},"Input"),(0,a.kt)("td",{parentName:"tr",align:null},"D13"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL Compatible Inputs of the Bridge B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"M1-, M1+"),(0,a.kt)("td",{parentName:"tr",align:null},"Output"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Outputs of the Bridge A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"M2-, M2+"),(0,a.kt)("td",{parentName:"tr",align:null},"Output"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Outputs of the Bridge B")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("p",null,"Connect DC motor to the motor shield Output Pins M1+& M1-(M2+& M2-), if using a 4-wire stepper motor, make sure the 4 Pins are correctly connected. Connect the drive voltage (The required voltage depends upon the motor used. Refer to the motor datasheet) to the Power supply terminals."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor-basic.jpg",alt:null})),(0,a.kt)("p",null,"With the jumper J4 inserted, Arduino can be powered by the drive voltage via an on-board voltage regulator, which regulates the drive voltage to 5v."),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("p",null,"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip"},"Motor shield Demo code")," and open the ",(0,a.kt)("strong",{parentName:"p"},"Motor_shield_demo_code")," sketch. Select the corresponding Arduino board in ",(0,a.kt)("strong",{parentName:"p"},"tools-boards")," and serial port in ",(0,a.kt)("strong",{parentName:"p"},"tools-serial port"),".\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield.png",alt:null}),"\nUpload the sketch to your arduino board, then you would found the 2 motors begin to work. If you power the motor shield via the power terminal and the power jumper J4 was inserted, you can remove the USB cable now."),(0,a.kt)("p",null,"Speed control is achieved through conventional PWM which can be obtained from Arduino's PWM output D9(EA) and D10(EB). Using the function ",(0,a.kt)("strong",{parentName:"p"},"analogWrite()")," to generate the drive PWM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int speedpinA=9;//enable motor A\nint speedpinB=10;//enable motor B\nint speed =127;//define the speed of motor\n    ......\nanalogWrite(speedpinA,speed);//AnalogWrite to Generate PWM to control the motor speed\nanalogWrite(speedpinB,speed);\n\n")),(0,a.kt)("p",null,"And Set the Digital D8(IN1) and D11(IN2) to control the motor attached to OUT1/2, while digital D12(IN3) and D13(IN4) to control motor attached to OUT3/4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int pinI1=8;//define I1 interface\nint pinI2=11;//define I2 interface\n    ......\ndigitalWrite(pinI2,HIGH);//turn DC Motor A move clockwise\ndigitalWrite(pinI1,LOW);\n\n")),(0,a.kt)("p",null,"Follows the logic between EA(B) and INx with motor motion:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"EA(B)"),(0,a.kt)("th",{parentName:"tr",align:null},"IN1(IN3)"),(0,a.kt)("th",{parentName:"tr",align:null},"IN2(IN4)"),(0,a.kt)("th",{parentName:"tr",align:null},"Motion of MotorA(B)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Clockwise")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Anticlockwise")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/*\n SEEED Studio Stepper Motor Control - one revolution\n\n Adapts the Stepper example for use with the SEEED STUDIO motor shield.\n This program drives a unipolar or bipolar stepper motor\n by using the included Stepper library of the Arduino.\n The motor is attached to the Seeed Studio motor shield and an Arduino.\n\n The digital pins 8,11,12,13 drive the L298N and are used when creating the stepper object\n Digital pins 9 and 10 must be high to enable the chip.\n\n The motor should revolves one revolution in one direction, then\n one revolution in the other direction.\n\n\n Created 11 Mar. 2007\n Modified 30 Nov. 2009\n by Tom Igoe\n Modified 4 July 2012\n By R. Dumouchelle\n\n */\n\n#include <Stepper.h>\n\nconst int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution\n// for your motor\n\n// initialize the stepper library on pins 8 through 11:\nStepper myStepper(stepsPerRevolution, 8,11,12,13);           \n\nvoid setup() {\n  // set the speed at 60 rpm:\n  myStepper.setSpeed(60);\n  // initialize the serial port:\n  Serial.begin(9600);\n  pinMode(9,OUTPUT);\n  pinMode(10,OUTPUT);\n  digitalWrite(9,HIGH);\n  digitalWrite(10,HIGH);\n}\n\nvoid loop() {\n  // step one revolution  in one direction:\n  Serial.println("clockwise");\n  myStepper.step(stepsPerRevolution);\n  delay(500);\n\nstep one revolution in the other direction:\n  Serial.println("counterclockwise");\n  myStepper.step(-stepsPerRevolution);\n  delay(500);\n}\n\n')),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Revision"),(0,a.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,a.kt)("th",{parentName:"tr",align:null},"Release"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"V1.0 Release"),(0,a.kt)("td",{parentName:"tr",align:null},"2012/3/29")))),(0,a.kt)("h2",{id:"related-projects"},"Related Projects"),(0,a.kt)("h3",{id:"motor-shield-v20-demo"},"Motor Shield V2.0 Demo"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Seeed-Recipe-Motor_Shield_V2.0_.png",alt:null})),(0,a.kt)("p",null,"This is a recipe about how to control motors individually with the Seeedstudio 2.0 motor shield."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/171-seeed-2-0-motor-shield-individual-control.html"},"I want to make it"),"."),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/5/5e/L298datasheet.pdf"},"L298datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[EAGLE]"),"  ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip"},"Motor Shield eagle files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver.pdf"},"Motor Driver pcb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver%20SCH.pdf"},"Motor Driver sch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Code]"),"  ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip"},"Motor shield Demo code"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);