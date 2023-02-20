"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={description:"Bluetooth Ibeacon",title:"Bluetooth Ibeacon",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/BLE-ibeacon-using-Wio-terminal",id:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/BLE-ibeacon-using-Wio-terminal",title:"Bluetooth Ibeacon",description:"Bluetooth Ibeacon",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/BLE-ibeacon-using-Wio-terminal.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/BLE-ibeacon-using-Wio-terminal",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/BLE-ibeacon-using-Wio-terminal",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/BLE-ibeacon-using-Wio-terminal.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Bluetooth Ibeacon",title:"Bluetooth Ibeacon",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Web Bluetooth APIs",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Web-Bluetooth"},next:{title:"Overview",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/RTC/Wio-Terminal-RTC"}},l={},c=[{value:"Wio terminal basic on BLE ibeacon",id:"wio-terminal-basic-on-ble-ibeacon",level:2},{value:"Overview",id:"overview",level:2},{value:"hardware required",id:"hardware-required",level:2},{value:"Software required",id:"software-required",level:2},{value:"Instruction",id:"instruction",level:2},{value:"<strong>Wio terminal iBeacon test</strong>",id:"wio-terminal-ibeacon-test",level:3},{value:"<strong>the nRF connect APP</strong>",id:"the-nrf-connect-app",level:3},{value:"Ibeacon simple exhibition",id:"ibeacon-simple-exhibition",level:3},{value:"Code",id:"code",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"wio-terminal-basic-on-ble-ibeacon"},"Wio terminal basic on BLE ibeacon"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Wio terminal is a powerful IoT device having inbuilt support for classic Bluetooth and Bluetooth LOW Energy (BLE), the classic Bluetooth is used to in the Bluetooth audio module, file, or large code stream data transmission, the BLE is used for battery optimized applications, such as Bluetooth beacons, fitness bands, proximity advertisements, etc. So we are able to according to users required to connecting with some specific function module, then as a beacon on the specific occasion."),(0,a.kt)("p",null,"The previous Wio terminal tutorials we has to introduce the Client mode and Server mode to using on the wio terminal, if there is any doubt please review  ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/"},(0,a.kt)("strong",{parentName:"a"},"Client and Server introduction"))),(0,a.kt)("p",null,"In this tutorial we are going to build a BLE Ibeacon using Wio terminal, in addition, we will use a smartphone to present the iBeacon information. I assume that you are already know on how to use the Wio terminal with Arduino IDE, if not fall back to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,a.kt)("strong",{parentName:"a"},"the Wio terminal get start")),"."),(0,a.kt)("h2",{id:"hardware-required"},"hardware required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio terminal")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Type-C cable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html"},(0,a.kt)("strong",{parentName:"a"},"Wio terminal chassis battery"))))),(0,a.kt)("h2",{id:"software-required"},"Software required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Downlord the ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/main/software"},(0,a.kt)("strong",{parentName:"a"},"Arduino IDE"))," on PC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US"},(0,a.kt)("strong",{parentName:"a"},"nRF Connect APP"))," on the smartphone"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are unfamiliar on how to use nRF connect APP, please view this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/#nrf-connect-app-usage"},(0,a.kt)("strong",{parentName:"a"},"tutorial")),".")),(0,a.kt)("h2",{id:"instruction"},"Instruction"),(0,a.kt)("h3",{id:"wio-terminal-ibeacon-test"},(0,a.kt)("strong",{parentName:"h3"},"Wio terminal iBeacon test")),(0,a.kt)("p",null,"This is a simple test for scan the Wio terminal iBeacon device and presents the information, make sure the Wio terminal Ibeacon device can be detected, you will see the Ibeacon specific icon."),(0,a.kt)("h3",{id:"the-nrf-connect-app"},(0,a.kt)("strong",{parentName:"h3"},"the nRF connect APP")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("strong",{parentName:"li"},"nRF Connect APP")," then open the the APP, find the ",(0,a.kt)("strong",{parentName:"li"},"SCAN")," option on the upper right, you will see the Wio terminal iBeacon devices on the list, there are MAC address, RSSI(dBm) and connection delay time.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"In this test the device did not named, so it will display N/A.\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CPP"},'\n#include "sys/time.h"\n#include "rpcBLEDevice.h"\n#include "BLEBeacon.h"\n\nBLEAdvertising *pAdvertising;\n//struct timeval now;\n\n#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 \n\nvoid setBeacon() {\n\n  BLEBeacon oBeacon = BLEBeacon();\n  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)\n  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));\n  oBeacon.setMajor(0x007B);\n  oBeacon.setMinor(0x01C8);\n  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();\n  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();\n  \n  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04\n  \n  std::string strServiceData = "";\n  \n  strServiceData += (char)26;     // Len\n  strServiceData += (char)0xFF;   // Type\n  strServiceData += oBeacon.getData(); \n  oAdvertisementData.addData(strServiceData);\n  \n  pAdvertising->setAdvertisementData(oAdvertisementData);\n  pAdvertising->setScanResponseData(oScanResponseData);\n  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_NONCONN_IND);\n\n}\n\nvoid setup() {\n\n    \n  Serial.begin(115200);\n  while(!Serial){};\n  \n  // Create the BLE Device\n  BLEDevice::init("");\n\n  // Create the BLE Server\n  // BLEServer *pServer = BLEDevice::createServer(); // <-- no longer required to instantiate BLEServer, less flash and ram usage\n\n  pAdvertising = BLEDevice::getAdvertising();\n  \n  setBeacon();\n   // Start advertising\n  pAdvertising->start();\n  Serial.println("Advertizing started...");\n  delay(100);\n  Serial.printf("in deep sleep\\n");\n}\n\nvoid loop() {\n delay(1000);\n}\n')),(0,a.kt)("h3",{id:"ibeacon-simple-exhibition"},"Ibeacon simple exhibition"),(0,a.kt)("p",null,"This demo is introduced how to use Wio terminal on some specific occasion, for example, the Wio terminal Ibeacon can advertising the gateway information to guide the people, as below picture, there are door-1, door-2...etc, and door-1 inside have product A and the instruction. We can install the Wio terminal in each door to advertising information and display the introduction information on the screen."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"})),(0,a.kt)("p",null,'Open the nRF connect APP we will see the "Wio" Ibeacon device on the list, then click the device, there will display the device UUID, RSSI, and manufacturer data.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"})),(0,a.kt)("p",null,"Click manufacturer data, there will display 3 options which are Manufacturer data(Bluetooth Core 4.1), Manufacturer data, and Text(UTF-8). Then click the text(UTF-8), the manufacturer data will transfer to normal data."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"})),(0,a.kt)("p",null,"The Text(UTF-8) displays the gateway information, A in door-1, B in door-2, thus people will know A and B where they are.  "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"})),(0,a.kt)("p",null,"we can see, after people enter the door, they will see about A or B more detail, such as history or other text introduction that depends on the usage occasion."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"})),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CPP"},'#include "sys/time.h"\n#include "BLEDevice.h"\n#include "BLEBeacon.h"\n\n#include <TFT_eSPI.h> // Hardware-specific library\n#include <SPI.h>\nTFT_eSPI tft = TFT_eSPI();       // Invoke custom library\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\nLIS3DHTR<TwoWire> lis;\nBLEAdvertising *pAdvertising;\n\n#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 128-Bit \n#define SERVICE_UUID           0x1801\n#define SERVICE_UUID1          0x1802\n#define SERVICE_UUID2          0x1803\n\nvoid setBeacon() {\n  BLEBeacon oBeacon = BLEBeacon();\n  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)\n  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));\n  oBeacon.setMajor(0x007B);\n  oBeacon.setMinor(0x01C8);\n  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();\n  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();\n\n  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04\n  std::string strServiceData = "";\n  strServiceData += (char)26;     // Len\n  strServiceData += (char)0xFF;   // Type\n  strServiceData += oBeacon.getData();\n  oAdvertisementData.addData(strServiceData);\n\n  union cracked_float_t {\n    float f;\n    uint32_t l;\n    word w[sizeof(float) / sizeof(word)];\n    byte b[sizeof(float)];\n  };\n\n  oScanResponseData.setName("wio");\n\n  oScanResponseData.setManufacturerData("oxA-door-1");   // Ibeacon information(MAX:31 byte) \n  oScanResponseData.setManufacturerData("oxB-door-2");\n \n  pAdvertising->setAdvertisementData(oAdvertisementData);\n  pAdvertising->setScanResponseData(oScanResponseData);\n  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);\n\n\n  spr.fillSprite(TFT_BLACK);\n  spr.createSprite(240, 160);\n  spr.fillSprite(TFT_BLACK);\n  spr.setTextColor(TFT_WHITE, TFT_BLACK);\n  spr.setFreeFont(&FreeSansBoldOblique12pt7b);\n\n  spr.drawString("what is A", 20 , 10);                // product introduction\n  spr.drawString("The A history: .....", 20 , 35);      \n\n  spr.drawString("what is B", 20 , 110);\n  spr.drawString("The B history: .....", 20 , 135);\n\n\n  spr.pushSprite(0, 0);\n}\n\n  void setup() {\n\n    tft.begin();\n    tft.init();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_BLACK);\n    Serial.begin(115200);\n\n    // Create the BLE Device\n    BLEDevice::init("");\n    lis.begin(Wire1);\n    if (!lis) {\n      Serial.println("ERROR");\n      while (1);\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n\n\n    pAdvertising = BLEDevice::getAdvertising();\n\n\n\n    Serial.println("Advertizing started...");\n    delay(100);\n  }\n\n  void loop() {\n    setBeacon();\n    // Start advertising\n    pAdvertising->start();\n    delay(5000);\n    pAdvertising->stop();\n    delay(1000);\n  }\n')))}p.isMDXComponent=!0}}]);