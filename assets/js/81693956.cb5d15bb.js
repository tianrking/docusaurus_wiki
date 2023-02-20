"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={description:"Grove - Red LED",title:"Grove - Red LED",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/LED/Grove-Red_LED",id:"Sensor/Grove/Grove_Accessories/LED/Grove-Red_LED",title:"Grove - Red LED",description:"Grove - Red LED",source:"@site/docs/Sensor/Grove/Grove_Accessories/LED/Grove-Red_LED.md",sourceDirName:"Sensor/Grove/Grove_Accessories/LED",slug:"/Sensor/Grove/Grove_Accessories/LED/Grove-Red_LED",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/LED/Grove-Red_LED",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Grove/Grove_Accessories/LED/Grove-Red_LED.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"Grove - Red LED",title:"Grove - Red LED",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/9/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Screw Terminal",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/Current/Grove-Screw_Terminal"},next:{title:"Grove - Circular LED",permalink:"/docusaurus_wiki/Sensor/Grove/Grove_Accessories/LED/Grove-Circular_LED"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Hardware",id:"hardware-3",level:4},{value:"Software",id:"software-3",level:4},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Grove - Red LED is similar to the Grove - LED module which houses an LED light source. In addition, it also has a potentiometer on-board to manage the power requirements of the LED. The PCB of this module has mounting holes which can be mounted on the required surface of your prototype. For example, it can be used as a pilot lamp for indicating power or signal presence."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove-LED_v1.3"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"Mar 15 2016")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide an LED light indication for your project"),(0,a.kt)("li",{parentName:"ul"},"Support different color LEDs, the LED is pluged into the LED holder rather than soldered on the board"),(0,a.kt)("li",{parentName:"ul"},"Support brightness control and higher range of input voltages with On-board potentiometer adjustment")),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Red LED"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 2. Connect Grove-Red LED to port D2 of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},"Step 3. Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},"Step 4. Connect Seeeduino to PC through a USB cable.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect Grove-Red_Led to Seeeduino as below.\n"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Red Led"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D2"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Copy the code into Arduino IDE and upload.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void setup() {\n  // initialize digital pin2  as an output.\n  pinMode(2, OUTPUT);\n}\n\n// the loop function runs over and over again forever\nvoid loop() {\n  digitalWrite(2, HIGH);   // turn the LED on (HIGH is the voltage level)\n  delay(1000);                       // wait for a second\n  digitalWrite(2, LOW);    // turn the LED off by making the voltage LOW\n  delay(1000);                       // wait for a second\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". We will see the LED on and off.")),(0,a.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Red LED to port D2 of a Base Shield."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,a.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you will see the LED blinking.\n"))),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.kt)("h4",{id:"hardware-2"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Red LED"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Red LED to port 12 of the Base Hat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.",(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the Red LED to **any GPIO Port** but make sure you change the command with the corresponding port number.\n"))),(0,a.kt)("h4",{id:"software-2"},"Software"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Excute below command to run the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd yourpath/grove.py/grove\npython3 grove_led.py 12\n")),(0,a.kt)("p",null,"If you connect the Red LED to the different port of the Base Hat, instead of excuting ",(0,a.kt)("strong",{parentName:"p"},"python grove_led.py 12"),", you should run the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 grove_led.py portnumber\n")),(0,a.kt)("p",null,"Following is the grove_led.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom grove.gpio import GPIO\n\n\nclass GroveLed(GPIO):\n    def __init__(self, pin):\n        super(GroveLed, self).__init__(pin, GPIO.OUT)\n\n    def on(self):\n        self.write(1)\n\n    def off(self):\n        self.write(0)\n\n\nGrove = GroveLed\n\n\ndef main():\n    import sys\n    import time\n\n    if len(sys.argv) < 2:\n        print('Usage: {} pin'.format(sys.argv[0]))\n        sys.exit(1)\n\n    led = GroveLed(int(sys.argv[1]))\n\n    while True:\n        led.on()\n        time.sleep(1)\n        led.off()\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the led on and off.\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"For most of the grove modules, you need to add the pin number parameter, as in this example  `python3 grove_led.py 12`, **12** is the chosen GPIO pin and the output from pin 12 will feed the led.  \n"))),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,a.kt)("h4",{id:"hardware-3"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Red Led"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 2. Plug the GrovePi_Plus into Raspberry."),(0,a.kt)("li",{parentName:"ul"},"Step 3. Connect Grove-Red Led to D4 port of GrovePi_Plus."),(0,a.kt)("li",{parentName:"ul"},"Step 4. Connect the Raspberry to PC through USB cable.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h4",{id:"software-3"},"Software"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Git clone the Github repository.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/GrovePi/Software/Python\npython3 grove_led_blink.py\n")),(0,a.kt)("p",null,"Here is the grove_led_blink.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nimport time\nfrom grovepi import *\n\n# Connect the Grove LED to digital port D4\nled = 4\n\npinMode(led,"OUTPUT")\ntime.sleep(1)\n\nprint ("This example will blink a Grove LED connected to the GrovePi+ on the port labeled D4. If you\'re having trouble seeing the LED blink, be sure to check the LED connection and the port number. You may also try reversing the direction of the LED on the sensor.")\nprint (" ")\nprint ("Connect the LED to the port labele D4!" )\n\nwhile True:\n    try:\n        #Blink the LED\n        digitalWrite(led,1)     # Send HIGH to switch on LED\n        print ("LED ON!")\n        time.sleep(1)\n\n        digitalWrite(led,0)     # Send LOW to switch off LED\n        print ("LED OFF!")\n        time.sleep(1)\n\n    except KeyboardInterrupt:   # Turn LED off before stopping\n        digitalWrite(led,0)\n        break\n    except IOError:             # Print "Error" if communication error encountered\n        print ("Error")\n        \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". We will see the led on and off.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_led_blink.py\nThis example will blink a Grove LED connected to the GrovePi+ on the port labeled D4.\nIf you're having trouble seeing the LED blink, be sure to check the LED connection and the port number.\nYou may also try reversing the direction of the LED on the sensor.\n\nConnect the LED to the port labele D4!\nLED ON!\nLED OFF!\nLED ON!\nLED OFF!\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove-LED_v1.3.pdf"},"Grove-Red LED Schematic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Codecraft]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove_Red_LED_CDC_File.zip"},"CDC File"))),(0,a.kt)("h2",{id:"projects"},"Projects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using Grove Button To Control Grove LED"),": How to connect and use Grove Button to control Grove LED socket kit."),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed",width:"350"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Button and LED Grove modules"),":"),(0,a.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/RCtsxwx4OaA",frameBorder:0,allow:"autoplay; encrypted-media",allowFullScreen:!0}),(0,a.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/78lVn_-oYaY",frameBorder:0,allow:"autoplay; encrypted-media",allowFullScreen:!0}),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);