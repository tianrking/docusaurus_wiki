"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={description:"Grove - Barometer Sensor",title:"Grove - Barometer Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor",id:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor",title:"Grove - Barometer Sensor",description:"Grove - Barometer Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Barometer",slug:"/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Barometer Sensor",title:"Grove - Barometer Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Barometer (High-Accuracy)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer-High-Accuracy"},next:{title:"Grove - Barometer Sensor(BME280)",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BME280"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"This Grove - Barometer Sensor features a Bosch BMP085 high-accuracy chip to detect barometric pressure and temperature. It can widely measure pressure ranging from 300hPa to 1100hPa, AKA +9000m to -500m above sea level, with a super high accuracy of 0.03hPa(0.25m) in ultra-high resolution mode. The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/#Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Barometer-Sensor-p-1199.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Digital two wire (I2C) interface"),(0,n.kt)("li",{parentName:"ul"},"Wide barometric pressure range"),(0,n.kt)("li",{parentName:"ul"},"Flexible supply voltage range"),(0,n.kt)("li",{parentName:"ul"},"Ultra-low power consumption"),(0,n.kt)("li",{parentName:"ul"},"Low noise measurement"),(0,n.kt)("li",{parentName:"ul"},"Fully calibrated"),(0,n.kt)("li",{parentName:"ul"},"Temperature measurement included")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enhancement of GPS navigation"),(0,n.kt)("li",{parentName:"ul"},"Indoor and outdoor navigation"),(0,n.kt)("li",{parentName:"ul"},"Leisure and sports"),(0,n.kt)("li",{parentName:"ul"},"Weather forecast"),(0,n.kt)("li",{parentName:"ul"},"Vertical velocity indication (rise/sink speed)")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"},"Item"),(0,n.kt)("th",{scope:"col"},"Min"),(0,n.kt)("th",{scope:"col"},"Typical"),(0,n.kt)("th",{scope:"col"},"Max"),(0,n.kt)("th",{scope:"col"},"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Voltage"),(0,n.kt)("td",null,"3"),(0,n.kt)("td",null,"5"),(0,n.kt)("td",null,"5.5"),(0,n.kt)("td",null,"VDC")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Current"),(0,n.kt)("td",null,"89"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"130"),(0,n.kt)("td",null,"uA")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Pressure Range"),(0,n.kt)("td",null,"300"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"1100"),(0,n.kt)("td",null,"hPa")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Faster I2C data transfer"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"3.4"),(0,n.kt)("td",null,"MHZ")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Dimension"),(0,n.kt)("td",{colspan:"3"},"20.4*24.3*9.7"),(0,n.kt)("td",null,"mm")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Weight"),(0,n.kt)("td",{colspan:"3"},"2"),(0,n.kt)("td",null,"g"))),"Usage -----",(0,n.kt)("h3",{id:"with-arduino"},"With Arduino"),(0,n.kt)("p",null,"Barometric condition is one of the criteria used to predict coming change in weather and deduce altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor."),(0,n.kt)("p",null,"1.Connect it to IIC port of Seeeduino or Grove - Base Shield via a Grove cable. And connect Arduino to PC via a USB cable."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"2.Download the library ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip"},"Barometer_Sensor Library"),";Unzip it into the libraries file of Arduino IDE by the path: ..","\\","arduino-1.0.1","\\","libraries."),(0,n.kt)("p",null,"3.Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/* Barometer demo V1.0\n*  Based largely on code by  Jim Lindblom\n*  Get pressure, altitude, and temperature from the BMP085.\n*  Serial.print it out at 9600 baud to serial monitor.\n*\n*  By:https://www.seeedstudio.com\n*/\n#include "Barometer.h"\n#include <Wire.h>\n\nfloat temperature;\nfloat pressure;\nfloat atm;\nfloat altitude;\nBarometer myBarometer;\n\nvoid setup(){\n    Serial.begin(9600);\n    myBarometer.init();\n}\n\nvoid loop()\n{\n    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first\n    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature\n    altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters\n    atm = pressure / 101325;\n\n    Serial.print("Temperature: ");\n    Serial.print(temperature, 2); //display 2 decimal places\n    Serial.println("deg C");\n\n    Serial.print("Pressure: ");\n    Serial.print(pressure, 0); //whole number only.\n    Serial.println(" Pa");\n\n    Serial.print("Ralated Atmosphere: ");\n    Serial.println(atm, 4); //display 4 decimal places\n\n    Serial.print("Altitude: ");\n    Serial.print(altitude, 2); //display 2 decimal places\n    Serial.println(" m");\n\n    Serial.println();\n\n    delay(1000); //wait a second and get values again.\n}\n')),(0,n.kt)("p",null,"4.Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"with-raspberry-pi"},"With Raspberry Pi"),(0,n.kt)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,n.kt)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,n.kt)("a",{parentName:"p",href:"/Top_Brand/Raspberry_Pi/Pi_HAT/GrovePi_Plus/"},"here"),"."),(0,n.kt)("p",null,"3.Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Plug the barometer sensor into the i2c sockets on grovepi.")),(0,n.kt)("p",null,"4.Navigate to the demos' directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To see the code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'nano grove_i2c_barometic_sensor_example.py   # "Ctrl+x" to exit #\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#!/usr/bin/python\n\nimport smbus\nimport RPi.GPIO as GPIO\n#import grovepi from grove_i2c_barometic_sensor import BMP085\n\n# ===========================================================================\n# Example Code\n# ===========================================================================\n\n# Initialise the BMP085 and use STANDARD mode (default value)\n# bmp = BMP085(0x77, debug=True)\nbmp = BMP085(0x77, 1)\n\n# To specify a different operating mode, uncomment one of the following:\n# bmp = BMP085(0x77, 0)  # ULTRALOWPOWER Mode\n# bmp = BMP085(0x77, 1)  # STANDARD Mode\n# bmp = BMP085(0x77, 2)  # HIRES Mode\n# bmp = BMP085(0x77, 3)  # ULTRAHIRES Mode\n\nrev = GPIO.RPI_REVISION\nif rev == 2 or rev == 3:\n    bus = smbus.SMBus(1)\nelse:\n    bus = smbus.SMBus(0)\n\ntemp = bmp.readTemperature()\n\n# Read the current barometric pressure level\npressure = bmp.readPressure()\n\n# To calculate altitude based on an estimated mean sea level pressure\n# (1013.25 hPa) call the function as follows, but this won\'t be very accurate\n# altitude = bmp.readAltitude()\n\n# To specify a more accurate altitude, enter the correct mean sea level\n# pressure level.  For example, if the current pressure level is 1023.50 hPa\n# enter 102350 since we include two decimal places in the integer value\naltitude = bmp.readAltitude(101560)\n\nprint "Temperature:\xa0%.2f C"\xa0% temp\nprint "Pressure:   \xa0%.2f hPa"\xa0% (pressure / 100.0)\nprint "Altitude:   \xa0%.2f m"\xa0% altitude\n')),(0,n.kt)("p",null,"5.Run the demo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python grove_i2c_barometic_sensor_example.py\n")),(0,n.kt)("p",null,"6.Result"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip"},"Grove - Barometer Sensor Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip"},"Barometer","_","Sensor Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Barometer_Sensor"},"Github repository for Barometer Sensor Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/BST-BMP085-DS000-06.pdf"},"BST-BMP085-DS000-06"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);