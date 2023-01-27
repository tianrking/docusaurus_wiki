"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,k=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"Grove - PIR Motion Sensor",title:"Grove - PIR Motion Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/6/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-PIR_Motion_Sensor",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-PIR_Motion_Sensor",title:"Grove - PIR Motion Sensor",description:"Grove - PIR Motion Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-PIR_Motion_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Sensor/Grove/Grove_Sensors/Motion/Grove-PIR_Motion_Sensor",permalink:"/docusaurus_wiki/zh-CN/Sensor/Grove/Grove_Sensors/Motion/Grove-PIR_Motion_Sensor",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-PIR_Motion_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - PIR Motion Sensor",title:"Grove - PIR Motion Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/6/2023",author:"shuxu hu"}}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Hardware",id:"hardware-3",level:4},{value:"Software",id:"software-3",level:4},{value:"FAQs",id:"faqs",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"This sensor allows you to sense motion, usually human movement in its range. Simply connect it to Grove - Base shield and program it, when anyone moves in its detecting range, the sensor will output HIGH on its SIG pin."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove compatible interface"),(0,o.kt)("li",{parentName:"ul"},"Adjustable detecting distance"),(0,o.kt)("li",{parentName:"ul"},"Adjustable holding time")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"3V\u20135V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Current(VCC = 3V)"),(0,o.kt)("td",{parentName:"tr",align:null},"100uA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Current(VCC = 5V)"),(0,o.kt)("td",{parentName:"tr",align:null},"150uA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Measuring Range"),(0,o.kt)("td",{parentName:"tr",align:null},"0.1 - 6m")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Default detecting distance"),(0,o.kt)("td",{parentName:"tr",align:null},"3m")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Holding Time"),(0,o.kt)("td",{parentName:"tr",align:null},"1 - 25s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Working Wave Length"),(0,o.kt)("td",{parentName:"tr",align:null},"7 - 14um")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Detecting Angle"),(0,o.kt)("td",{parentName:"tr",align:null},"120 degrees")))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,o.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,o.kt)("h4",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - PIR Motion Sensor"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove - PIR Motion Sensor to port ",(0,o.kt)("strong",{parentName:"p"},"D2")," of Grove-Base Shield.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect Grove-PIR Motion Sensor to Seeeduino as below.\n"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - PIR Motion Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5V"),(0,o.kt)("td",{parentName:"tr",align:null},"Red")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GND"),(0,o.kt)("td",{parentName:"tr",align:null},"Black")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,o.kt)("td",{parentName:"tr",align:null},"White")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"D2"),(0,o.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,o.kt)("h4",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the code below into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/*macro definitions of PIR motion sensor pin and LED pin*/\n#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module\n\n\nvoid setup()\n{\n    pinMode(PIR_MOTION_SENSOR, INPUT);\n    Serial.begin(9600);  \n\n}\n\nvoid loop()\n{\n    if(digitalRead(PIR_MOTION_SENSOR))//if it detects the moving people?\n        Serial.println("Hi,people is coming");\n    else\n        Serial.println("Watching");\n\n delay(200);\n}\n\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The detecting distance and holding time can be adjusted by adding two extra potentiometers on board. For the details please refer to the V1.2 Eagle below. The module can also be set as retriggerable or un- retriggerable by changing the jumper hat.\n"))),(0,o.kt)("p",null,"The result should be like:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,o.kt)("h4",{id:"hardware-1"},"Hardware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - PIR Motion Sensor to port D2 of a Base Shield."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,o.kt)("h4",{id:"software-1"},"Software"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,o.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When the code finishes uploaded, the LED will goes on when people is coming.\n"))),(0,o.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,o.kt)("h4",{id:"hardware-2"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - PIR Motion Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html"},"Get ONE Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Connect the PIR motion sensor to port 12 of the Base Hat."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the PIR motion sensor to **any GPIO Port** but make sure you change the command with the corresponding port number.\n"))),(0,o.kt)("h4",{id:"software-2"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython grove_mini_pir_motion_sensor.py 12\n\n")),(0,o.kt)("p",null,"Following is the grove_mini_pir_motion_sensor.py code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nimport time\nfrom grove.gpio import GPIO\n\n\nclass GroveMiniPIRMotionSensor(GPIO):\n    def __init__(self, pin):\n        super(GroveMiniPIRMotionSensor, self).__init__(pin, GPIO.IN)\n        self._on_detect = None\n\n    @property\n    def on_detect(self):\n        return self._on_detect\n\n    @on_detect.setter\n    def on_detect(self, callback):\n        if not callable(callback):\n            return\n\n        if self.on_event is None:\n            self.on_event = self._handle_event\n\n        self._on_detect = callback\n\n    def _handle_event(self, pin, value):\n        if value:\n            if callable(self._on_detect):\n                self._on_detect()\n\nGrove = GroveMiniPIRMotionSensor\n\n\ndef main():\n    import sys\n\n    if len(sys.argv) < 2:\n        print('Usage: {} pin'.format(sys.argv[0]))\n        sys.exit(1)\n\n    pir = GroveMiniPIRMotionSensor(int(sys.argv[1]))\n\n    def callback():\n        print('Motion detected.')\n\n    pir.on_detect = callback\n\n    while True:\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n")),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_mini_pir_motion_sensor.py 12\nMotion detected.\nMotion detected.\nMotion detected.\n^CTraceback (most recent call last):\n  File "grove_mini_pir_motion_sensor.py", line 84, in <module>\n    main()\n  File "grove_mini_pir_motion_sensor.py", line 80, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n')),(0,o.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,o.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,o.kt)("h4",{id:"hardware-3"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,o.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - PIR Motion Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html"},"Get One Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the GrovePi_Plus into Raspberry.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Connect the sensor to ",(0,o.kt)("strong",{parentName:"p"},"D8")," port of GrovePi_Plus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC through USB cable."))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h4",{id:"software-3"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.\n"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.\n"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Run below commands to use the PIR Motion Sensor to monitor the movement of people.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/GrovePi/Software/Python\nsudo python3 grove_pir_motion_sensor.py\n")),(0,o.kt)("p",null,"Here is the grove_pir_motion_sensor.py code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import time\nimport grovepi\n\n# Connect the Grove PIR Motion Sensor to digital port D8\n# SIG,NC,VCC,GND\npir_sensor = 8\n\ngrovepi.pinMode(pir_sensor,\"INPUT\")\n\nwhile True:\n    try:\n        # Sense motion, usually human, within the target range\n        if grovepi.digitalRead(pir_sensor):\n            print 'Motion Detected'\n        else:\n            print '-'\n\n        # if your hold time is less than this, you might not see as many detections\n        time.sleep(.2)\n\n    except IOError:\n        print \"Error\"\n")),(0,o.kt)("p",null,"The result should be like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_pir_motion_sensor.py\n\n-\n-\n-\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\nMotion Detected\n-\n-\n\n")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q1: How to make the distance adjustable?")),(0,o.kt)("p",null,"A1: R2: used to adjust the detecting distance(the AMP coefficient, 2M\u03a9). R6: used to adjust the holding time(the trigger duty, 100K\u03a9). "),(0,o.kt)("p",null,"The detecting distance can be adjusted from 6 meters to only several centimeters. If the potentiometer is set to one end, the module will be too sensitive to be triggered by the atmosphere even there is no people moving before it. The holding time can also be adjusted by the Delay_time potentiometer, the value is about from  25s to 1s."),(0,o.kt)("p",null,"If R2 and R6 are soldered, please make sure R13 and R14 are empty."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"There is risk that the board may be destroyed. Please think it over before making this modification.\n"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip"},"Grove - PIR Motion Sensor Eagle File v1.2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Grove_PIR_Sensor_v1.2.pdf"},"Grove - PIR Motion Sensor v1.2 Schematics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf"},"Grove - PIR Motion Sensor Eagle V1.2 PCB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Library]")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/PIR_Motion_Sensor"},"Github repository for PIR Motion Sensor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Twig_-_BISS0001.pdf"},"BISS0001 Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Fresnel_lens_8120.pdf"},"Fresnel lens 8120 Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Codecraft]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove_PIR_Motion_Sensor_CDC_File.zip"},"CDC File"))),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Burglar Alarm with PIR Motion Sensor"),": This article explains Burglar Alarms with a PIR Motion Sensor."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/pooja_baraskar/burglar-alarm-with-pir-motion-sensor-964c42/embed",width:"350"}),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);