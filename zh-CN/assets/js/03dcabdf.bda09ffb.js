"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={description:"Build mini router with Dual Gigabit Ethernet Carrier Board",title:"Build mini router with Dual Gigabit Ethernet Carrier Board",keywords:["Device"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/10/2022",author:"jianjing Huang"}},i="Getting Started with OpenWrt on Your Router",p={unversionedId:"Network/reRouter/Raspberry-OpenWrt-Getting-Started",id:"Network/reRouter/Raspberry-OpenWrt-Getting-Started",title:"Build mini router with Dual Gigabit Ethernet Carrier Board",description:"Build mini router with Dual Gigabit Ethernet Carrier Board",source:"@site/docs/Network/reRouter/Raspberry-OpenWrt-Getting-Started.md",sourceDirName:"Network/reRouter",slug:"/Network/reRouter/Raspberry-OpenWrt-Getting-Started",permalink:"/docusaurus_wiki/zh-CN/Network/reRouter/Raspberry-OpenWrt-Getting-Started",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Network/reRouter/Raspberry-OpenWrt-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1641772800,formattedLastUpdatedAt:"2022\u5e741\u670810\u65e5",frontMatter:{description:"Build mini router with Dual Gigabit Ethernet Carrier Board",title:"Build mini router with Dual Gigabit Ethernet Carrier Board",keywords:["Device"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/10/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4",permalink:"/docusaurus_wiki/zh-CN/Network/reRouter/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4"},next:{title:"reTerminal",permalink:"/docusaurus_wiki/zh-CN/Edge/reTerminal/"}},l={},s=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Quick Start with Mini Router",id:"quick-start-with-mini-router",level:2},{value:"OpenWrt Pre-Installed",id:"openwrt-pre-installed",level:3},{value:"2 Step to run Mini Router with OpenWrt",id:"2-step-to-run-mini-router-with-openwrt",level:2},{value:"FAQ",id:"faq",level:2},{value:"Q1 I can\u2019t change root password on OpenWrt because of the read-only file system. How should I deal with it?",id:"q1-i-cant-change-root-password-on-openwrt-because-of-the-read-only-file-system-how-should-i-deal-with-it",level:3},{value:"Q2: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?",id:"q2-what-if-i-connect-the-openwrt-router-to-my-existing-router-which-has-a-default-gateway-ip-of-19216821",level:3},{value:"Q3: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?",id:"q3-what-if-i-have-the-dual-gigabit-ethernet-carrier-board-non-cm4-version-and-attach-a-cm4-without-emmc",level:3},{value:"Q4: I cannot successfully set up Rclone from web UI",id:"q4-i-cannot-successfully-set-up-rclone-from-web-ui",level:3},{value:"Q5: How do I fix my device when I faced the &quot;Read Only Root filesystem&quot;?",id:"q5-how-do-i-fix-my-device-when-i-faced-the-read-only-root-filesystem",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-openwrt-on-your-router"},"Getting Started with OpenWrt on Your Router"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png",alt:"pir",width:"650",height:"auto"})),(0,a.kt)("p",null,"This Mini Router is equipped with dual Gigabit Ethernet ports and dual USB 3.0 ports, making it suitable for soft router applications, while keeping the hardware to a minimum. We have pre-installed a Raspberry Pi Compute Module 4 with 4GB RAM and 32GB eMMC to enable fast boot-up times and a smooth overall experience."),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview1.png",alt:"pir",width:"650",height:"auto"})),(0,a.kt)("h2",{id:"quick-start-with-mini-router"},"Quick Start with Mini Router"),(0,a.kt)("h3",{id:"openwrt-pre-installed"},"OpenWrt Pre-Installed"),(0,a.kt)("p",null,"The Compute Module 4 comes with\xa0",(0,a.kt)("a",{href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started/",target:"_blank"},(0,a.kt)("span",null,"OpenWrt Firmware"))," out-of-the-box. This means you just need to unbox the package, take out the board, connect to your existing home network and have your own mini router!"),(0,a.kt)("p",null,"OpenWrt is an open-source Linux operating system which runs on embedded devices/ routers. It offers more features, performance, and security than a traditional router. It has a filesystem that\u2019s fully writable and includes a package management system. You can make use of these packages to suit your applications in various ways. Once you connect this board to your home network and access the router from a web browser, you will be presented with a beautiful and interactive dashboard as follows."),(0,a.kt)("h2",{id:"2-step-to-run-mini-router-with-openwrt"},"2 Step to run Mini Router with OpenWrt"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Required")),(0,a.kt)("p",null,"You need to prepare the following hardware before getting started with OpenWRT on Mini Router\n\u25cf 1 x\xa0Mini Router\n\u25cf 1 x\xa0Power adapter (5V/3A) with USB Type-C cable\n\u25cf 2 x Ethernet cables"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instruction")),(0,a.kt)("p",null,"Once the ethernet cables are connected,\n\u25cf Step 1.\xa0Power on the board\n\u25cf Step 2.\xa0Open a web browser and type\xa0192.168.2.1\nYou will see the OpenWrt Luci web-interface here. The OpenWrt image compiled by Seeed is included with many packages out-of-the-box. So you can use these package to realize many applications!"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview2.png",alt:"pir",width:"650",height:"auto"})),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"q1-i-cant-change-root-password-on-openwrt-because-of-the-read-only-file-system-how-should-i-deal-with-it"},"Q1 I can\u2019t change root password on OpenWrt because of the read-only file system. How should I deal with it?"),(0,a.kt)("p",null,"It can be solved by reflashing the image on to the eMMC."),(0,a.kt)("h3",{id:"q2-what-if-i-connect-the-openwrt-router-to-my-existing-router-which-has-a-default-gateway-ip-of-19216821"},"Q2: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?"),(0,a.kt)("p",null,"Seeed OpenWrt image comes preconfigured with the necessary network settings. You might only need to change one network setting for the scenario which involves the Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 connecting to your existing router, and the router has the default gateway IP set to 192.168.2.1 which is the same as the default gateway IP for OpenWrt. In this scenario, you need to change the default IP of LAN interface on OpenWrt as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open a web browser and log in to the OpenWrt portal by typing ",(0,a.kt)("strong",{parentName:"p"},"192.168.2.1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,a.kt)("strong",{parentName:"p"},"System > TTYD Terminal")," and login with ",(0,a.kt)("strong",{parentName:"p"},"root")," as the username")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Open the following file"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vi /etc/config/network\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Change the static IP address on the LAN interface as follows")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"config interface 'lan'\n        option type 'bridge'\n        option ifname 'eth0'\n        option proto 'static'\n        option ipaddr '192.168.3.1'\n        option netmask '255.255.255.0'\n        option ip6assign '60'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Here the static IP is changhed to ",(0,a.kt)("strong",{parentName:"p"},"192.168.3.1"),". However, you can type any IP address of your choice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Reboot the router")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"reboot\n")),(0,a.kt)("h3",{id:"q3-what-if-i-have-the-dual-gigabit-ethernet-carrier-board-non-cm4-version-and-attach-a-cm4-without-emmc"},"Q3: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?"),(0,a.kt)("p",null,"If you want to use a Compute Module 4 without eMMC on the Dual Gigabit Ethernet Carrier Board, then you need to flash OpenWrt on to a micro-SD card and insert it into the board. Follow the steps below according to your operating system."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Insert a micro-SD card to the computer using a ",(0,a.kt)("strong",{parentName:"p"},"micro-SD card reader")," connected to the computer, or by using a ",(0,a.kt)("strong",{parentName:"p"},"built-in card reader")," on a laptop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Download ",(0,a.kt)("strong",{parentName:"p"},"balenaEtcher")," software by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"this link")," according to your operating system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Run ",(0,a.kt)("strong",{parentName:"p"},"balenaEtcher")," as ",(0,a.kt)("strong",{parentName:"p"},"administrator")))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg",alt:"pir",width:"650",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Click ",(0,a.kt)("strong",{parentName:"p"},"Flash from file")," and point to the OpenWrt image file that you downloaded before")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Click ",(0,a.kt)("strong",{parentName:"p"},"Select target")," and select the connected micro-SD card")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 6.")," Finally, click ",(0,a.kt)("strong",{parentName:"p"},"Flash!")))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg",alt:"pir",width:"650",height:"auto"})),(0,a.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Eject the micro-SD card from computer and insert it into the Dual Gigabit Ethernet Carrier Board")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png",alt:"pir",width:"400",height:"auto"})),(0,a.kt)("h3",{id:"q4-i-cannot-successfully-set-up-rclone-from-web-ui"},"Q4: I cannot successfully set up Rclone from web UI"),(0,a.kt)("p",null,"Rclone is a program to manage files on cloud storage drives. You can use it to make sure your cloud files are always in sync with the local storage."),(0,a.kt)("p",null,"Eventhough there is a UI to configure Rclone within OpenWrt Luci interface, you need to first do all the configurations within a command line. After that only you will be able to view your files by using the web UI."),(0,a.kt)("p",null,"Please follow the steps below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Visit ",(0,a.kt)("strong",{parentName:"p"},"OpenWrt Luci web UI")," and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Services > Terminal"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Log in with your OpenWrt credentials")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Start the ",(0,a.kt)("strong",{parentName:"p"},"rclone configuration process")," by typing the following"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rclone config\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Press ",(0,a.kt)("strong",{parentName:"p"},"n")," and press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to create a new remote.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Type a name of your choice for the new remote"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Find the ",(0,a.kt)("strong",{parentName:"li"},"type of storage")," you are creating a remote connection to, and enter the corresponding number from the long list")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png",alt:"pir",width:"450",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Here number ",(0,a.kt)("strong",{parentName:"p"},"13")," is chosen for ",(0,a.kt)("strong",{parentName:"p"},"Google Drive")," as an example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 7.")," When you are prompted for a ",(0,a.kt)("strong",{parentName:"p"},"Client ID"),", press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 8.")," When you are prompted for a ",(0,a.kt)("strong",{parentName:"p"},"Client Secret"),", press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 9.")," Choose ",(0,a.kt)("strong",{parentName:"p"},"1")," as the scope that rclone should use when requesting access from the drive"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png",alt:"pir",width:"550",height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This will give full access to all the files in the drive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 10.")," When you are prompted for ",(0,a.kt)("strong",{parentName:"p"},"root folder ID"),", press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 11.")," When you are prompted for ",(0,a.kt)("strong",{parentName:"p"},"service account credentials JSON file path"),", press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 12.")," On ",(0,a.kt)("strong",{parentName:"p"},"Edit advanced config"),"  prompt, press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," which selects ",(0,a.kt)("strong",{parentName:"p"},"No")," by default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 13.")," On ",(0,a.kt)("strong",{parentName:"p"},"Use auto config")," menu, press ",(0,a.kt)("strong",{parentName:"p"},"n")," and then press ",(0,a.kt)("strong",{parentName:"p"},"Enter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 14.")," Copy and paste the link shown on a web browser"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png",alt:"pir",width:"500",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 15.")," Sign in to your Google account and ",(0,a.kt)("strong",{parentName:"p"},"Allow")," access")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 16.")," ",(0,a.kt)("strong",{parentName:"p"},"Copy")," the code shown on the ",(0,a.kt)("strong",{parentName:"p"},"Google sign in page")," and ",(0,a.kt)("strong",{parentName:"p"},"paste")," it inside the ",(0,a.kt)("strong",{parentName:"p"},"command line")," that we used before")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 17.")," On ",(0,a.kt)("strong",{parentName:"p"},"Configure as a team drive")," press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 18.")," Press ",(0,a.kt)("strong",{parentName:"p"},"Enter")," to confirm the creation of the remote"))),(0,a.kt)("p",null,"You will see the output as follows:"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png",alt:"pir",width:"300",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 19.")," Type ",(0,a.kt)("strong",{parentName:"p"},"q")," to quit the configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 20.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"NAS > Rclone"),", check the box next to ",(0,a.kt)("strong",{parentName:"p"},"run Rclone as daemon")," and click ",(0,a.kt)("strong",{parentName:"p"},"SAVE & APPLY"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 21.")," Copy the ",(0,a.kt)("strong",{parentName:"p"},"rclone address")))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 22.")," Click ",(0,a.kt)("strong",{parentName:"p"},"WEBUI REACT")," and a new web page will open")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 23.")," Paste the previously copied ",(0,a.kt)("strong",{parentName:"p"},"rclone address")," on to the first blank column")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 24.")," Type ",(0,a.kt)("strong",{parentName:"p"},"admin")," for both username and password, and press ",(0,a.kt)("strong",{parentName:"p"},"Verify")))),(0,a.kt)("p",null,"You will see the following output if the connection is verified"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png",alt:"pir",width:"300",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 25.")," Click ",(0,a.kt)("strong",{parentName:"p"},"Login")," and go to ",(0,a.kt)("strong",{parentName:"p"},"Explore")," from the side menu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 26.")," Type the name of the remote we created before and click ",(0,a.kt)("strong",{parentName:"p"},"Open")))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png",alt:"pir",width:"1000",height:"auto"})),(0,a.kt)("p",null,"Now you will see all your files in available in your drive"),(0,a.kt)("h3",{id:"q5-how-do-i-fix-my-device-when-i-faced-the-read-only-root-filesystem"},'Q5: How do I fix my device when I faced the "Read Only Root filesystem"?'),(0,a.kt)("p",null,'For devices in the "Read Only Root filesystem", we can use ',(0,a.kt)("inlineCode",{parentName:"p"},"e2fsck")," to check the system and fix it. Please open the terminal window and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"e2fsck /dev/mmcblk0p2\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://openwrt.org"},"OpenWrt Offficial Documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[GitHub]")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-linux-openwrt"},"Seeed OpenWrt"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[OneDrive]")," ",(0,a.kt)("a",{parentName:"p",href:"https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd"},"Seeed OpenWrt Images")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);