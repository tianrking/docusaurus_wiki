"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,k=u["".concat(d,".").concat(f)]||u[f]||c[f]||i;return r?o.createElement(k,l(l({ref:t},p),{},{components:r})):o.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[u]="string"==typeof e?e:n,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={description:"SEEED IOT BUTTON FOR AWS",title:"SEEED IOT BUTTON FOR AWS",keywords:["IOT_Button_For_AWS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"jianjing Huang"}},l=void 0,a={unversionedId:"Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS",id:"Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS",title:"SEEED IOT BUTTON FOR AWS",description:"SEEED IOT BUTTON FOR AWS",source:"@site/docs/Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS.md",sourceDirName:"Sensor/IOT_Button_For_AWS",slug:"/Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS",permalink:"/docusaurus_wiki/Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"SEEED IOT BUTTON FOR AWS",title:"SEEED IOT BUTTON FOR AWS",keywords:["IOT_Button_For_AWS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"MT3620 Grove Breakout",permalink:"/docusaurus_wiki/Sensor/Azure_Sphere_MT3620_Development_Kit/MT3620_Grove_Breakout"},next:{title:"Grove Shield for Pi Pico v1.0",permalink:"/docusaurus_wiki/Sensor/Pi_Pico/Grove-Starter-Kit-for-Raspberry-Pi-Pico"}},d={},s=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"LED Status Indications",id:"led-status-indications",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Powering Up",id:"powering-up",level:3},{value:"Method 1 - USB Type-C",id:"method-1---usb-type-c",level:4},{value:"Method 2 - Using Battery",id:"method-2---using-battery",level:4},{value:"How To Take Out The Enclosure",id:"how-to-take-out-the-enclosure",level:4},{value:"Setting up Wi-Fi on the Button",id:"setting-up-wi-fi-on-the-button",level:3},{value:"Operating Instructions",id:"operating-instructions",level:3},{value:"OTA Update",id:"ota-update",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png",alt:null})),(0,n.kt)("p",null,"The Seeed IoT Button For AWS is a Wi-Fi based, programmable button that is easy to configure and simple to use. You can use the Seeed IoT Button For AWS to capture quick customer feedback without burdening customers with time-consuming questionnaires. It is designed for enterprises and developers to easily integrate with existing business workflows and systems using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html"},"AWS IoT 1-Click service"),". And this IoT Button is fully compatible with official AWS IoT 1-Click iOS app and Android app. The battery for this device is NCR18650B chargeable Li-ion battery. Please kindly know that no battery in the package, while the battery is available in regular convenience store and customer need to prepare themselves. And what we propose is Panasonic NCR18650B 3.6V 3400mAh.There is a bracket for this IoT Button. Customer can stick it on the wall or other surface and easy to put the IoT Button  in and get out from the bracket. The Seeed IoT Button for AWS supports three types of clicks: single, double, and long press, and 3 LEDs for different indications."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html",target:"_blank"},(0,n.kt)("img",{src:"https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Single/Double/Long Press Click Events"),(0,n.kt)("li",{parentName:"ul"},"Onboard Power/Event/Wi-Fi Configuration Status LED"),(0,n.kt)("li",{parentName:"ul"},"Equipped with Realtek RTL8720DN, dual-band 2.4Ghz / 5Ghz Wi-Fi"),(0,n.kt)("li",{parentName:"ul"},"Removable and Chargeable NCR18650B Battery"),(0,n.kt)("li",{parentName:"ul"},"Battery polarity reversed protection and indication"),(0,n.kt)("li",{parentName:"ul"},"USB Type-C Charging"),(0,n.kt)("li",{parentName:"ul"},"Stickable Bracket")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"92","*","32","*","25mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MCU"),(0,n.kt)("td",{parentName:"tr",align:null},"Realteak, RTL8720DNL 20MHz Cortex M0; 200MHz Cortex M4F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flash"),(0,n.kt)("td",{parentName:"tr",align:null},"4MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Button"),(0,n.kt)("td",{parentName:"tr",align:null},"100,000 Cycles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LED"),(0,n.kt)("td",{parentName:"tr",align:null},"RGB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Wi-Fi"),(0,n.kt)("td",{parentName:"tr",align:null},"802.11 a/b/g/n 2.4GHz & 5GHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bluetooth"),(0,n.kt)("td",{parentName:"tr",align:null},"BLE 5.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Battery"),(0,n.kt)("td",{parentName:"tr",align:null},"3.6V Li-ion 18650 Rechargeable battery")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Charging Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"USB Type-C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Charging Current"),(0,n.kt)("td",{parentName:"tr",align:null},"500mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Charging time"),(0,n.kt)("td",{parentName:"tr",align:null},"4-6 Hours(According to battery capacity)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Battery Protection"),(0,n.kt)("td",{parentName:"tr",align:null},"Over charge,Over current,Over discharge, Reverse polarity protection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Firmware Update"),(0,n.kt)("td",{parentName:"tr",align:null},"Support OTA")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png"}))))),(0,n.kt)("h3",{id:"led-status-indications"},"LED Status Indications"),(0,n.kt)("table",{style:{borderCollapse:"collapse",borderSpacing:0},className:"tg"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{fontFamily:"Arial, sans-serif",fontSize:14,fontWeight:"bold",padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",backgroundColor:"#9b9b9b",color:"#ffffff",textAlign:"center",verticalAlign:"top"}},"Power LED Status"),(0,n.kt)("th",{style:{fontFamily:"Arial, sans-serif",fontSize:14,fontWeight:"bold",padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",backgroundColor:"#9b9b9b",color:"#ffffff",textAlign:"center",verticalAlign:"top"}},"Indication")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",textAlign:"left",verticalAlign:"top"}},"Battery Reversed"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",textAlign:"left",verticalAlign:"top"}},"Red")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",textAlign:"left",verticalAlign:"top"}},"Battery Charging"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",textAlign:"left",verticalAlign:"top"}},"Green ON")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",textAlign:"left",verticalAlign:"top"}},"Battery Finished Charging"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"inherit",textAlign:"left",verticalAlign:"top"}},"Green OFF")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",fontWeight:"bold",backgroundColor:"#9b9b9b",color:"#ffffff",textAlign:"center",verticalAlign:"top"}},"Event LED Status"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",fontWeight:"bold",backgroundColor:"#9b9b9b",color:"#ffffff",textAlign:"center",verticalAlign:"top"}},"Indication")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"Red Always"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"The certificate has not been flashed or the certificate is invalid")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"White flashes -> Green"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"Event sent successfully")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"White flashes -> Red"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"Event sent failed")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"White flashes -> Orange"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"Wi-Fi connection failed, please check router or change network configuration")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"White flashes -> Purple"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"The server connection failed, please check the network environment")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",fontWeight:"bold",backgroundColor:"#9b9b9b",color:"#ffffff",textAlign:"center",verticalAlign:"top"}},"Wi-Fi Configuration LED Status"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",fontWeight:"bold",backgroundColor:"#9b9b9b",color:"#ffffff",textAlign:"center",verticalAlign:"top"}},"Indication")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"Blue flashing"),(0,n.kt)("td",{style:{fontFamily:"Arial, sans-serif",fontSize:14,padding:"10px 5px",borderStyle:"solid",borderWidth:1,overflow:"hidden",wordBreak:"normal",borderColor:"black",textAlign:"left",verticalAlign:"top"}},"BLE network configuring")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"powering-up"},"Powering Up"),(0,n.kt)("p",null,"The first step of getting started is to power on the IoT button. There are two ways to power on the buttons:"),(0,n.kt)("h4",{id:"method-1---usb-type-c"},"Method 1 - USB Type-C"),(0,n.kt)("p",null,"Simply plug in the USB Type-C cable to the USB port to power on the device. You should see the power indication LED is flash ",(0,n.kt)("strong",{parentName:"p"},"Green")," once."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"After Green light flashed once, you should also see the LED blink a green light at a very low brightness. You can see it under darker surrounding.")),(0,n.kt)("h4",{id:"method-2---using-battery"},"Method 2 - Using Battery"),(0,n.kt)("p",null,"You can also use battery to power on the IoT button. Open the enclosure (please refer to the gif below) and put the battery in. Once the battery is installed, you will also need to plug the IoT button to a computer or a power adapter via USB Type-C ",(0,n.kt)("strong",{parentName:"p"},"once")," to initialize the battery circuit. You should see the power indication LED is ",(0,n.kt)("strong",{parentName:"p"},"Green"),". You may now remove the USB connection and LED will go off and everything is set."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When the Power Status LED is red, it indicates that the battery is reversed!")),(0,n.kt)("h4",{id:"how-to-take-out-the-enclosure"},"How To Take Out The Enclosure"),(0,n.kt)("p",null,"The following gif demonstrates how to take out the enclosure using the Triangle Plastic Pry Opening Tool provided in the package."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{250}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"})),(0,n.kt)("h3",{id:"setting-up-wi-fi-on-the-button"},"Setting up Wi-Fi on the Button"),(0,n.kt)("p",null,"1.Download the latest AWS IoT 1-Click App from Apple App Store or Google Play Store"),(0,n.kt)("p",null,"2.Launch the ",(0,n.kt)("strong",{parentName:"p"},"AWS IoT 1-Click App")," and sign up with an Amazon AWS account"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure that the Bluetooth is turned on, or error will appeared as shown.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{250}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"})),(0,n.kt)("p",null,"3.Press ",(0,n.kt)("strong",{parentName:"p"},"Claim with Device ID")," in the App. Press ",(0,n.kt)("strong",{parentName:"p"},"Scan")," in the app and Scan the ",(0,n.kt)("strong",{parentName:"p"},"DSN")," from the bottom of Seeed IoT Button for AWS."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"})),(0,n.kt)("p",null,"4.Press ",(0,n.kt)("strong",{parentName:"p"},"Configure")),(0,n.kt)("p",null,"5.Press your ",(0,n.kt)("strong",{parentName:"p"},"Seeed IoT Button for AWS")," for 7 seconds until the blue light flashes"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{250}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"})),(0,n.kt)("p",null,"6.Select a Wi-Fi network from the list of networks. This is the Wi-Fi network you want your buttons to use"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{250}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"})),(0,n.kt)("p",null,"7.Input the password (if any) for the Wi-Fi network and Continue"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{250}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"})),(0,n.kt)("p",null,"8.Wait until configuration succeeded is appeared in the App and press ",(0,n.kt)("strong",{parentName:"p"},"Finish"),". The configuration is done"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"})),(0,n.kt)("p",null,"Now you can start playing with your AWS 1-Click service!"),(0,n.kt)("p",null,"Please make sure update to the latest firmware following ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/SEEED-IOT-BUTTON-FOR-AWS/#ota-update"},(0,n.kt)("strong",{parentName:"a"},"this")),"."),(0,n.kt)("h3",{id:"operating-instructions"},"Operating Instructions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Single Click:")," Send single click event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Double-Click:")," Send double click event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Long Press(2s~5s):")," Send long press event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Long Press(>7s):")," Enter BLE network configuration mode. In this mode, other events are blocked. If you need to manually exit the BLE distribution mode, you can press and hold it for more than 7s again, and it will exit automatically in two minutes."))),(0,n.kt)("h2",{id:"ota-update"},"OTA Update"),(0,n.kt)("p",null,"Long Press ",(0,n.kt)("strong",{parentName:"p"},"15s")," to start searching for new version upgrades:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Long Press(>7s)"),", the Wi-Fi Configuration LED starts to blink. If released now will enter network configuration mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Continue to ",(0,n.kt)("strong",{parentName:"p"},"press and hold >8s (total > 15s)"),", Event Status LED starts to flash blue and enter OTA mode."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"When it's the latest version"),", the Event Status LED blinks from ",(0,n.kt)("strong",{parentName:"p"},"Blue")," to ",(0,n.kt)("strong",{parentName:"p"},"Green"),". For more information, please refer to the table below:"),(0,n.kt)("table",{style:{borderCollapse:"collapse",borderSpacing:0},className:"tg"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{backgroundColor:"#9b9b9b",borderColor:"#000000",borderStyle:"solid",borderWidth:1,color:"#ffffff",fontFamily:"Arial, sans-serif",fontSize:14,fontWeight:"bold",overflow:"hidden",padding:"10px 5px",textAlign:"center",verticalAlign:"middle",wordBreak:"normal"}},"Event LED Status"),(0,n.kt)("th",{style:{backgroundColor:"#9b9b9b",borderColor:"#000000",borderStyle:"solid",borderWidth:1,color:"#ffffff",fontFamily:"Arial, sans-serif",fontSize:14,fontWeight:"bold",overflow:"hidden",padding:"10px 5px",textAlign:"center",verticalAlign:"middle",wordBreak:"normal"}},"Indication")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Blue flashes -> Green"),(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Update sent successfully")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Blue flashes -> Red"),(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Update sent failed")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Blue flashes -> Orange"),(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Wi-Fi connection failed, please check router or change network configuration")),(0,n.kt)("tr",null,(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"Blue flashes -> Purple"),(0,n.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"middle",wordBreak:"normal"}},"The server connection failed, please check the network environment")))),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1.")," The outer enclosure SN (Serial Number) is rubbed off."),(0,n.kt)("p",null,"There is also a backup SN sticker inside the AWS button enclosure, underneath the battery."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{250}",src:"https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"})),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,n.kt)("div",null,(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg"})))))}u.isMDXComponent=!0}}]);