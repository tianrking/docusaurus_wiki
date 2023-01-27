"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={description:"Build mini router with Dual Gigabit Ethernet Carrier Board",title:"Build mini router with Dual Gigabit Ethernet Carrier Board",keywords:["Device"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/10/2023",author:"jianjing Huang"}},o="Getting Started with OpenWrt on Your Router",p={unversionedId:"Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started",id:"Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started",title:"Build mini router with Dual Gigabit Ethernet Carrier Board",description:"Build mini router with Dual Gigabit Ethernet Carrier Board",source:"@site/docs/Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started.md",sourceDirName:"Top_Brand/Raspberry_Pi/Device",slug:"/Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started",permalink:"/docusaurus_wiki/Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673308800,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"Build mini router with Dual Gigabit Ethernet Carrier Board",title:"Build mini router with Dual Gigabit Ethernet Carrier Board",keywords:["Device"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/10/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4",permalink:"/docusaurus_wiki/Top_Brand/Raspberry_Pi/Device/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4"},next:{title:"Grove Base Hat for Raspberry Pi",permalink:"/docusaurus_wiki/Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi"}},l={},s=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Quick Start with Mini Router",id:"quick-start-with-mini-router",level:2},{value:"OpenWrt Pre-Installed",id:"openwrt-pre-installed",level:3},{value:"2 Step to run Mini Router with OpenWrt",id:"2-step-to-run-mini-router-with-openwrt",level:2},{value:"FAQ",id:"faq",level:2},{value:"Q1 I can\u2019t change root password on OpenWrt because of the read-only file system. How should I deal with it?",id:"q1-i-cant-change-root-password-on-openwrt-because-of-the-read-only-file-system-how-should-i-deal-with-it",level:3},{value:"Q2: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?",id:"q2-what-if-i-connect-the-openwrt-router-to-my-existing-router-which-has-a-default-gateway-ip-of-19216821",level:3},{value:"Q3: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?",id:"q3-what-if-i-have-the-dual-gigabit-ethernet-carrier-board-non-cm4-version-and-attach-a-cm4-without-emmc",level:3},{value:"Q4: I cannot successfully set up Rclone from web UI",id:"q4-i-cannot-successfully-set-up-rclone-from-web-ui",level:3},{value:"Q5: How do I fix my device when I faced the &quot;Read Only Root filesystem&quot;?",id:"q5-how-do-i-fix-my-device-when-i-faced-the-read-only-root-filesystem",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-openwrt-on-your-router"},"Getting Started with OpenWrt on Your Router"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png",alt:"pir",width:"650",height:"auto"})),(0,n.kt)("p",null,"This Mini Router is equipped with dual Gigabit Ethernet ports and dual USB 3.0 ports, making it suitable for soft router applications, while keeping the hardware to a minimum. We have pre-installed a Raspberry Pi Compute Module 4 with 4GB RAM and 32GB eMMC to enable fast boot-up times and a smooth overall experience."),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview1.png",alt:"pir",width:"650",height:"auto"})),(0,n.kt)("h2",{id:"quick-start-with-mini-router"},"Quick Start with Mini Router"),(0,n.kt)("h3",{id:"openwrt-pre-installed"},"OpenWrt Pre-Installed"),(0,n.kt)("p",null,"The Compute Module 4 comes with\xa0",(0,n.kt)("a",{href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started/",target:"_blank"},(0,n.kt)("span",null,"OpenWrt Firmware"))," out-of-the-box. This means you just need to unbox the package, take out the board, connect to your existing home network and have your own mini router!"),(0,n.kt)("p",null,"OpenWrt is an open-source Linux operating system which runs on embedded devices/ routers. It offers more features, performance, and security than a traditional router. It has a filesystem that\u2019s fully writable and includes a package management system. You can make use of these packages to suit your applications in various ways. Once you connect this board to your home network and access the router from a web browser, you will be presented with a beautiful and interactive dashboard as follows."),(0,n.kt)("h2",{id:"2-step-to-run-mini-router-with-openwrt"},"2 Step to run Mini Router with OpenWrt"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Required")),(0,n.kt)("p",null,"You need to prepare the following hardware before getting started with OpenWRT on Mini Router\n\u25cf 1 x\xa0Mini Router\n\u25cf 1 x\xa0Power adapter (5V/3A) with USB Type-C cable\n\u25cf 2 x Ethernet cables"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Instruction")),(0,n.kt)("p",null,"Once the ethernet cables are connected,\n\u25cf Step 1.\xa0Power on the board\n\u25cf Step 2.\xa0Open a web browser and type\xa0192.168.2.1\nYou will see the OpenWrt Luci web-interface here. The OpenWrt image compiled by Seeed is included with many packages out-of-the-box. So you can use these package to realize many applications!"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview2.png",alt:"pir",width:"650",height:"auto"})),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"q1-i-cant-change-root-password-on-openwrt-because-of-the-read-only-file-system-how-should-i-deal-with-it"},"Q1 I can\u2019t change root password on OpenWrt because of the read-only file system. How should I deal with it?"),(0,n.kt)("p",null,"It can be solved by reflashing the image on to the eMMC."),(0,n.kt)("h3",{id:"q2-what-if-i-connect-the-openwrt-router-to-my-existing-router-which-has-a-default-gateway-ip-of-19216821"},"Q2: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1?"),(0,n.kt)("p",null,"Seeed OpenWrt image comes preconfigured with the necessary network settings. You might only need to change one network setting for the scenario which involves the Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 connecting to your existing router, and the router has the default gateway IP set to 192.168.2.1 which is the same as the default gateway IP for OpenWrt. In this scenario, you need to change the default IP of LAN interface on OpenWrt as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open a web browser and log in to the OpenWrt portal by typing ",(0,n.kt)("strong",{parentName:"p"},"192.168.2.1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,n.kt)("strong",{parentName:"p"},"System > TTYD Terminal")," and login with ",(0,n.kt)("strong",{parentName:"p"},"root")," as the username")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Open the following file"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"vi /etc/config/network\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Change the static IP address on the LAN interface as follows")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"config interface 'lan'\n        option type 'bridge'\n        option ifname 'eth0'\n        option proto 'static'\n        option ipaddr '192.168.3.1'\n        option netmask '255.255.255.0'\n        option ip6assign '60'\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Here the static IP is changhed to ",(0,n.kt)("strong",{parentName:"p"},"192.168.3.1"),". However, you can type any IP address of your choice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Reboot the router")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"reboot\n")),(0,n.kt)("h3",{id:"q3-what-if-i-have-the-dual-gigabit-ethernet-carrier-board-non-cm4-version-and-attach-a-cm4-without-emmc"},"Q3: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?"),(0,n.kt)("p",null,"If you want to use a Compute Module 4 without eMMC on the Dual Gigabit Ethernet Carrier Board, then you need to flash OpenWrt on to a micro-SD card and insert it into the board. Follow the steps below according to your operating system."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Insert a micro-SD card to the computer using a ",(0,n.kt)("strong",{parentName:"p"},"micro-SD card reader")," connected to the computer, or by using a ",(0,n.kt)("strong",{parentName:"p"},"built-in card reader")," on a laptop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Download ",(0,n.kt)("strong",{parentName:"p"},"balenaEtcher")," software by visiting ",(0,n.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"this link")," according to your operating system")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Run ",(0,n.kt)("strong",{parentName:"p"},"balenaEtcher")," as ",(0,n.kt)("strong",{parentName:"p"},"administrator")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg",alt:"pir",width:"650",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Click ",(0,n.kt)("strong",{parentName:"p"},"Flash from file")," and point to the OpenWrt image file that you downloaded before")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Click ",(0,n.kt)("strong",{parentName:"p"},"Select target")," and select the connected micro-SD card")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Finally, click ",(0,n.kt)("strong",{parentName:"p"},"Flash!")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg",alt:"pir",width:"650",height:"auto"})),(0,n.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 7.")," Eject the micro-SD card from computer and insert it into the Dual Gigabit Ethernet Carrier Board")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png",alt:"pir",width:"400",height:"auto"})),(0,n.kt)("h3",{id:"q4-i-cannot-successfully-set-up-rclone-from-web-ui"},"Q4: I cannot successfully set up Rclone from web UI"),(0,n.kt)("p",null,"Rclone is a program to manage files on cloud storage drives. You can use it to make sure your cloud files are always in sync with the local storage."),(0,n.kt)("p",null,"Eventhough there is a UI to configure Rclone within OpenWrt Luci interface, you need to first do all the configurations within a command line. After that only you will be able to view your files by using the web UI."),(0,n.kt)("p",null,"Please follow the steps below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Visit ",(0,n.kt)("strong",{parentName:"p"},"OpenWrt Luci web UI")," and navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Services > Terminal"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Log in with your OpenWrt credentials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Start the ",(0,n.kt)("strong",{parentName:"p"},"rclone configuration process")," by typing the following"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"rclone config\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Press ",(0,n.kt)("strong",{parentName:"p"},"n")," and press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to create a new remote.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Type a name of your choice for the new remote"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6.")," Find the ",(0,n.kt)("strong",{parentName:"li"},"type of storage")," you are creating a remote connection to, and enter the corresponding number from the long list")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png",alt:"pir",width:"450",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Here number ",(0,n.kt)("strong",{parentName:"p"},"13")," is chosen for ",(0,n.kt)("strong",{parentName:"p"},"Google Drive")," as an example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," When you are prompted for a ",(0,n.kt)("strong",{parentName:"p"},"Client ID"),", press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8.")," When you are prompted for a ",(0,n.kt)("strong",{parentName:"p"},"Client Secret"),", press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 9.")," Choose ",(0,n.kt)("strong",{parentName:"p"},"1")," as the scope that rclone should use when requesting access from the drive"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png",alt:"pir",width:"550",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," This will give full access to all the files in the drive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 10.")," When you are prompted for ",(0,n.kt)("strong",{parentName:"p"},"root folder ID"),", press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 11.")," When you are prompted for ",(0,n.kt)("strong",{parentName:"p"},"service account credentials JSON file path"),", press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 12.")," On ",(0,n.kt)("strong",{parentName:"p"},"Edit advanced config"),"  prompt, press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," which selects ",(0,n.kt)("strong",{parentName:"p"},"No")," by default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 13.")," On ",(0,n.kt)("strong",{parentName:"p"},"Use auto config")," menu, press ",(0,n.kt)("strong",{parentName:"p"},"n")," and then press ",(0,n.kt)("strong",{parentName:"p"},"Enter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 14.")," Copy and paste the link shown on a web browser"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png",alt:"pir",width:"500",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 15.")," Sign in to your Google account and ",(0,n.kt)("strong",{parentName:"p"},"Allow")," access")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 16.")," ",(0,n.kt)("strong",{parentName:"p"},"Copy")," the code shown on the ",(0,n.kt)("strong",{parentName:"p"},"Google sign in page")," and ",(0,n.kt)("strong",{parentName:"p"},"paste")," it inside the ",(0,n.kt)("strong",{parentName:"p"},"command line")," that we used before")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 17.")," On ",(0,n.kt)("strong",{parentName:"p"},"Configure as a team drive")," press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to accept the default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 18.")," Press ",(0,n.kt)("strong",{parentName:"p"},"Enter")," to confirm the creation of the remote"))),(0,n.kt)("p",null,"You will see the output as follows:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png",alt:"pir",width:"300",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 19.")," Type ",(0,n.kt)("strong",{parentName:"p"},"q")," to quit the configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 20.")," Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"NAS > Rclone"),", check the box next to ",(0,n.kt)("strong",{parentName:"p"},"run Rclone as daemon")," and click ",(0,n.kt)("strong",{parentName:"p"},"SAVE & APPLY"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 21.")," Copy the ",(0,n.kt)("strong",{parentName:"p"},"rclone address")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png",alt:"pir",width:"600",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 22.")," Click ",(0,n.kt)("strong",{parentName:"p"},"WEBUI REACT")," and a new web page will open")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 23.")," Paste the previously copied ",(0,n.kt)("strong",{parentName:"p"},"rclone address")," on to the first blank column")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 24.")," Type ",(0,n.kt)("strong",{parentName:"p"},"admin")," for both username and password, and press ",(0,n.kt)("strong",{parentName:"p"},"Verify")))),(0,n.kt)("p",null,"You will see the following output if the connection is verified"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png",alt:"pir",width:"300",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 25.")," Click ",(0,n.kt)("strong",{parentName:"p"},"Login")," and go to ",(0,n.kt)("strong",{parentName:"p"},"Explore")," from the side menu")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 26.")," Type the name of the remote we created before and click ",(0,n.kt)("strong",{parentName:"p"},"Open")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,"Now you will see all your files in available in your drive"),(0,n.kt)("h3",{id:"q5-how-do-i-fix-my-device-when-i-faced-the-read-only-root-filesystem"},'Q5: How do I fix my device when I faced the "Read Only Root filesystem"?'),(0,n.kt)("p",null,'For devices in the "Read Only Root filesystem", we can use ',(0,n.kt)("inlineCode",{parentName:"p"},"e2fsck")," to check the system and fix it. Please open the terminal window and run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"e2fsck /dev/mmcblk0p2\n")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,n.kt)("a",{parentName:"p",href:"https://openwrt.org"},"OpenWrt Offficial Documentation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[GitHub]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-linux-openwrt"},"Seeed OpenWrt"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[OneDrive]")," ",(0,n.kt)("a",{parentName:"p",href:"https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd"},"Seeed OpenWrt Images")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);