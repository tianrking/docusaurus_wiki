"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19308],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(k,l(l({ref:e},u),{},{components:a})):r.createElement(k,l({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72989:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={description:"I2C LCD",title:"I2C LCD",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Display/I2C_LCD",id:"Sensor/Grove/Grove_Accessories/Display/I2C_LCD",title:"I2C LCD",description:"I2C LCD",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/I2C_LCD.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Sensor/Grove/Grove_Accessories/Display/I2C_LCD",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Display/I2C_LCD",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Accessories/Display/I2C_LCD.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"I2C LCD",title:"I2C LCD",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Display/Grove-OLED-Display-1.12-SH1107_V3.0"},next:{title:'Grove - Triple Color E-Ink Display 2.13"',permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Display/Grove-Triple_Color_E-Ink_Display_2_13"}},p={},s=[{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"I2C_LCD is an easy-to-use display module, It can make display easier. Using it can reduce the difficulty of make, so that makers can focus on the core of the work."),(0,n.kt)("p",null,"We developed the Arduino library for I2C_LCD, user just need a few lines of the code can achieve complex graphics and text display features. It can replace the serial monitor of Arduino in some place, you can get running informations without a computer."),(0,n.kt)("p",null,"More than that, we also develop the dedicated picture data convert software (bitmap converter)now is available to support PC platform of windows, Linux, Mac OS. Through the bitmap convert software you can get your favorite picture displayed on I2C_LCD, without the need for complex programming."),(0,n.kt)("p",null,"I2C_LCD can provide you with a very convenient way of make. Enjoy yourself!"),(0,n.kt)("p",null,"###Product Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"How to buy"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD (With universal Grove cable)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"}))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD (With conversion Grove cable)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"}))))))),(0,n.kt)("p",null,"##Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only 2 Arduino pins are occupied (Use I2C interface)."),(0,n.kt)("li",{parentName:"ul"},"Supports standard I2C mode (100Kbit/s) and fast I2C mode (400Kbit/s)."),(0,n.kt)("li",{parentName:"ul"},"Compatible with multiple communication logic levels: 2.8~5VDC."),(0,n.kt)("li",{parentName:"ul"},"Arduino library supported, use a line of code to complete the display."),(0,n.kt)("li",{parentName:"ul"},"Integrate 7 sizes of ASCll fonts, 5 graphics functions."),(0,n.kt)("li",{parentName:"ul"},"Provide dedicated picture data convert software (Bitmap Converter)."),(0,n.kt)("li",{parentName:"ul"},"Most of the complex operation is processed by I2C_LCD independent controller, saving user controller resources."),(0,n.kt)("li",{parentName:"ul"},"Supports cursor function, can set up 16 cursor flicker frequency."),(0,n.kt)("li",{parentName:"ul"},"Supports 128 level backlight lightness adjustment."),(0,n.kt)("li",{parentName:"ul"},"Support 64 level screen contrast adjustment."),(0,n.kt)("li",{parentName:"ul"},"Support device address modification."),(0,n.kt)("li",{parentName:"ul"},"Supports 127 I2C_LCD work in parallel."),(0,n.kt)("li",{parentName:"ul"},"When debugging code, it can take the place of the serial monitor to monitor the program running state."),(0,n.kt)("li",{parentName:"ul"},"Two abnormal recovery methods are provided: reset and restore the factory settings."),(0,n.kt)("li",{parentName:"ul"},"Compatible with Grove interface and 4Pin-100mil interface (under the Grove socket)."),(0,n.kt)("li",{parentName:"ul"},"4 symmetrical fixed hole design for easy user installation."),(0,n.kt)("li",{parentName:"ul"},"China style unique appearance.")),(0,n.kt)("p",null,"##Platforms Supported"),(0,n.kt)("p",null,"##Interface Function"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"##Specification\n|Parameter|Value|\n|---------|-------------|\n|Screen Type|Dual colour LCD|\n|Screen Resolution|128",(0,n.kt)("em",{parentName:"p"},"64 Pixels|\n|Screen Active Area (L"),"W)| 47.1",(0,n.kt)("em",{parentName:"p"},"26.5mm|\n|Individual Pixel Size|0.33"),"0.33mm|\n|Communication Mode|I2C(100Kbit/s and 400Kbit/s)|\n|Controller|STM8S005KBT6|\n|Operating Frequency|16 MHz|\n|Weight|20g|"),(0,n.kt)("p",null,"##Electrical Characteristics\n|Parameter|Min.|Typical|MNax.|Unit|\n|---------|------|------|------|------|\n|Supply voltage\uff085V to GND\uff09|4.5|5|5.5|V\n|Logic Voltage\uff08SCL/SDA\uff09|2.8|5|5.5|V\n|HBM ESD|-|5000|-|V\n|Temperature|-20|25|70|\u2103"),(0,n.kt)("p",null,"##Application Ideas"),(0,n.kt)("p",null,"Here is some funny project for your reference."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Display Picture"),(0,n.kt)("th",{parentName:"tr",align:null},"Clock With Calendar"),(0,n.kt)("th",{parentName:"tr",align:null},"Used As Debuger"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/"},"Make it Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/"},"Make it Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/"},"Make it Now"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Automatic Humidifier"),(0,n.kt)("th",{parentName:"tr",align:null},"Snake Game"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/"},"Make it Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://community.seeedstudio.com/project_detail.html?id=1621"},"Make it Now"))))),(0,n.kt)("p",null,"##Getting Started"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1:")," Install the latest version of Arduino IDE to your computer."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2:")," Download and install the I2C_LCD library to Arduino IDE:"),(0,n.kt)("p",null,"Open Arduino IDE, ",(0,n.kt)("strong",{parentName:"p"},"click Sketch -> Include library -> Add .ZIP library"),"."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Find and select the ",(0,n.kt)("strong",{parentName:"p"},"I2C_LCD.zip")," file you just downloaded."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Restart the Arduino IDE."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3:"),' Chose the example project which you like. (Take "HelloWorld" project for example here.)'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Click File > Examples > I2C_LCD > HelloWorld")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4:")," Connect I2C_LCD to your Seeeduino Vx board with Grove cable. Then connect Seeeduino Vx board to your computer."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5:")," Select your board and serial port."),(0,n.kt)("p",null,"Select the board: ",(0,n.kt)("strong",{parentName:"p"},'Click Tools > Board > "Arduino Duemilanove or Diecimila"(Seeeduino V3.0 Or early version), "Arduino Uno"(Seeeduino Lotus or Seeeduino V4.0)'),"."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Select the COM: ",(0,n.kt)("strong",{parentName:"p"},"Click Tools -> Serial Port -> COMX(which connected with your board.)")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 6:")," Upload the program and ",(0,n.kt)("strong",{parentName:"p"},"enjoy yourself!")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PS:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"For more details about library install please refer to ",(0,n.kt)("a",{parentName:"li",href:"https://arduino.cc/en/Guide/Liaries"},"https://arduino.cc/en/Guide/Liaries"),"."),(0,n.kt)("li",{parentName:"ol"},"If you encounter other problems during the use, please refer to the User Manual for help. If you can't solve it, please contact us.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Technical support:")," ",(0,n.kt)("a",{parentName:"p",href:"mailto:Joney.s@foxmail.com"},"Joney.s@foxmail.com")),(0,n.kt)("p",null,"##Version Tracker\n",(0,n.kt)("strong",{parentName:"p"},"I2C_LCD Hardware:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Revision"),(0,n.kt)("th",{parentName:"tr",align:null},"Release Note"),(0,n.kt)("th",{parentName:"tr",align:null},"Release Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.2"),(0,n.kt)("td",{parentName:"tr",align:null},"1. Add production test point."),(0,n.kt)("td",{parentName:"tr",align:null},"Sep 18, 2015")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"1. Modify the logo position. 2. Modify the board shape. 3. Modify the button position."),(0,n.kt)("td",{parentName:"tr",align:null},"May 8, 2014")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1. Modify the power circuit wiring."),(0,n.kt)("td",{parentName:"tr",align:null},"Mar 1, 2014")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v0.9b"),(0,n.kt)("td",{parentName:"tr",align:null},"1. Initial public release."),(0,n.kt)("td",{parentName:"tr",align:null},"Feb 15, 2014")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I2C_LCD Library:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Revision"),(0,n.kt)("th",{parentName:"tr",align:null},"Release Note"),(0,n.kt)("th",{parentName:"tr",align:null},"Release Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.21"),(0,n.kt)("td",{parentName:"tr",align:null},"Support LinkIt boards."),(0,n.kt)("td",{parentName:"tr",align:null},"Aug 21, 2016")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.20"),(0,n.kt)("td",{parentName:"tr",align:null},"Reorganize I2C_LCD driver interface, make it easy to transplant to any other boards."),(0,n.kt)("td",{parentName:"tr",align:null},"Apr 16, 2016")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.12"),(0,n.kt)("td",{parentName:"tr",align:null},"Modify the bug that can't display bitmap when y coordinate is more than 16."),(0,n.kt)("td",{parentName:"tr",align:null},"Sep 4, 2015")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.11"),(0,n.kt)("td",{parentName:"tr",align:null},"Modify the bug that '\\t' can't print."),(0,n.kt)("td",{parentName:"tr",align:null},"Jun 27, 2015")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.10"),(0,n.kt)("td",{parentName:"tr",align:null},"1.Add LCD print function. 2.Edit DeviceAddressConfig example."),(0,n.kt)("td",{parentName:"tr",align:null},"Jun 25, 2015")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C_LCD_v1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial public release."),(0,n.kt)("td",{parentName:"tr",align:null},"July 6, 2014")))),(0,n.kt)("p",null,"##Resources"),(0,n.kt)("p",null,"Keeping update the latest version."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SparkingStudio/I2C_LCD_library"},"repository of Arduino library hosted here"),", if you have any good idea of the code, you can pull to us."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip"},"I2C_LCD Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip"},"I2C_LCD User Manual EN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip"},"I2C_LCD User Manual \u4e2d\u6587")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar"},"BitmapConverter(ForWindows)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg"},"BitmapConverter(ForMacOS)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz"},"BitmapConverter(ForLinux)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip"},"I2C_LCD_SourceFile"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);