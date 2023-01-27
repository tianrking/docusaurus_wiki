"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={description:"Getting Started with balenaOS on ODYSSEY-X86",title:"Getting Started with balenaOS on ODYSSEY-X86",keywords:["Sorftware Allxon"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"jianjing Huang"}},r="Getting Started with balenaOS on ODYSSEY-X86",o={unversionedId:"Software/balenaOS/BalenaOS-X86-Getting-Started",id:"Software/balenaOS/BalenaOS-X86-Getting-Started",title:"Getting Started with balenaOS on ODYSSEY-X86",description:"Getting Started with balenaOS on ODYSSEY-X86",source:"@site/docs/Software/balenaOS/BalenaOS-X86-Getting-Started.md",sourceDirName:"Software/balenaOS",slug:"/Software/balenaOS/BalenaOS-X86-Getting-Started",permalink:"/docusaurus_wiki/Software/balenaOS/BalenaOS-X86-Getting-Started",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Software/balenaOS/BalenaOS-X86-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Getting Started with balenaOS on ODYSSEY-X86",title:"Getting Started with balenaOS on ODYSSEY-X86",keywords:["Sorftware Allxon"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Update Jetson Linux Over-the-Air Using Allxon",permalink:"/docusaurus_wiki/Software/Allxon/Update-Jetson-Linux-OTA-Using-Allxon"},next:{title:"Getting Started with alwaysAI on NVIDIA\xae Jetson",permalink:"/docusaurus_wiki/Software/alwaysAI/alwaysAI-Jetson-Getting-Started"}},s={},p=[{value:"What is balenaOS?",id:"what-is-balenaos",level:2},{value:"What is balenaCloud?",id:"what-is-balenacloud",level:2},{value:"Quickstart with balenaOS on ODYSSEY - X86",id:"quickstart-with-balenaos-on-odyssey---x86",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create a device fleet on balenaCloud",id:"create-a-device-fleet-on-balenacloud",level:3},{value:"Flash and run balenaOS image from a USB drive",id:"flash-and-run-balenaos-image-from-a-usb-drive",level:3},{value:"Manage ODYSSEY - X86 from balenaCloud dashboard",id:"manage-odyssey---x86-from-balenacloud-dashboard",level:3},{value:"FAQ",id:"faq",level:2},{value:"Q1: How can I run balenaOS image from HDD/ SSD?",id:"q1-how-can-i-run-balenaos-image-from-hdd-ssd",level:3},{value:"Q2: How can I access ODYSSEY - X86 using terminal?",id:"q2-how-can-i-access-odyssey---x86-using-terminal",level:3},{value:"Q3: How can I compile balenaOS from source code",id:"q3-how-can-i-compile-balenaos-from-source-code",level:3},{value:"Manual Compilation on Local Machine",id:"manual-compilation-on-local-machine",level:4},{value:"Find the Compiled Image",id:"find-the-compiled-image",level:4},{value:"Using the Compiled Image",id:"using-the-compiled-image",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started-with-balenaos-on-odyssey-x86"},"Getting Started with balenaOS on ODYSSEY-X86"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/thumb.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("h2",{id:"what-is-balenaos"},"What is balenaOS?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.balena.io/os"},"balenaOS")," is an operating system optimized for running Docker containers on embedded devices, with an emphasis on reliability over long periods of operation, as well as a productive developer workflow inspired by the lessons learned while building balena."),(0,l.kt)("p",null,"The core insight behind balenaOS is that Linux containers offer, for the first time, a practical path to using virtualization on embedded devices. VMs and hypervisors have led to huge leaps in productivity and automation for cloud deployments, but their abstraction of hardware, as well as their resource overhead and lack of hardware support, means that they are not suitable for embedded scenarios. With OS-level virtualization, as implemented for Linux containers, both those objections are lifted for Linux devices, of which there are many in the Internet of Things."),(0,l.kt)("h2",{id:"what-is-balenacloud"},"What is balenaCloud?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.balena.io/cloud"},"balenaCloud")," is a comprehensive cloud-based device deployment and management infrastructure hosted by balena. It allows even the most novice fleet owner to build applications in any language, seamlessly provision devices, quickly test new features, and easily manage their device fleet. Docker container technology enables safe, secure, and reliable updates through a single command while devices remain online and fully functional. Users can view and manage their entire device fleet using the balenaCloud dashboard or they can choose to interact directly with the API."),(0,l.kt)("h2",{id:"quickstart-with-balenaos-on-odyssey---x86"},"Quickstart with balenaOS on ODYSSEY - X86"),(0,l.kt)("p",null,"The easiest way to install balenaOS on the ODYSSEY - X86, along with balenaCloud, involves just a few steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a device fleet on balenaCloud"),(0,l.kt)("li",{parentName:"ul"},"Flash the balenaOS image to a USB drive"),(0,l.kt)("li",{parentName:"ul"},"Connect a USB drive to ODYSSEY - X86 and boot live image"),(0,l.kt)("li",{parentName:"ul"},"Booted ODYSSEY - X86 appears on balenaCloud dashboard")),(0,l.kt)("p",null,"Now let's proceed!"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Prepare the following before getting started:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/ODYSSEY-X86J4125864-p-4916.html"},"ODYSSEY - X86 board")),(0,l.kt)("li",{parentName:"ul"},"USB flash drive"),(0,l.kt)("li",{parentName:"ul"},"Ethernet cable or WiFi connectivity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dashboard.balena-cloud.com/signup"},"balena account")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.balena.io/etcher"},"balenaEtcher")," or any other image flashing software")),(0,l.kt)("h3",{id:"create-a-device-fleet-on-balenacloud"},"Create a device fleet on balenaCloud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," ",(0,l.kt)("a",{parentName:"p",href:"https://dashboard.balena-cloud.com/signup"},"Sign up")," for a balena account and log in")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," After logging in, click ",(0,l.kt)("strong",{parentName:"p"},"Create fleet")," to create your first device fleet"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/5.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," A fleet is a group of devices that share the same architecture and run the same code. When you provision a device, it is added to a specific fleet, but can be migrated to another fleet at any time."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Type a name for the fleet, select ",(0,l.kt)("strong",{parentName:"li"},"Seeed ODYSSEY-X86")," as the default device type, keep ",(0,l.kt)("strong",{parentName:"li"},"Starter")," as the Fleet type and finally click ",(0,l.kt)("strong",{parentName:"li"},"Create new fleet"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/6.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," To create a fleet with multiple containers, you'll want to use the Starter or Microservices fleet type. The Starter fleets are full-featured and free for all users, with a limit of up to 10 total devices across all Starter fleets."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Click ",(0,l.kt)("strong",{parentName:"li"},"+ Add device")," to add ODYSSEY - X86 board to this fleet and connect it with balenaCloud")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/7.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 5.")," Here ",(0,l.kt)("strong",{parentName:"li"},"device type")," will be already selected and ",(0,l.kt)("strong",{parentName:"li"},"version")," will be selected as the latest available one. Select ",(0,l.kt)("strong",{parentName:"li"},"Development")," as the ",(0,l.kt)("strong",{parentName:"li"},"edition"),", since it is recommended for first time users. You can also select the network connection as either ",(0,l.kt)("strong",{parentName:"li"},"Ethernet only")," or ",(0,l.kt)("strong",{parentName:"li"},"Wifi + Ethernet"),".")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/8.png",alt:"pir",width:"650",height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," When you're getting started, a Development image is the most useful, as it permits many testing and troubleshooting features. For production use, be sure to switch to a Production image. More details on the differences between Development and Production images are detailed ",(0,l.kt)("a",{parentName:"p",href:"https://www.balena.io/docs/reference/OS/overview/2.x/#development-vs-production-images"},"here"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 6.")," Click ",(0,l.kt)("strong",{parentName:"li"},"+ Advanced")," to select the rate at which your device checks for updates")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/9.png",alt:"pir",width:"350",height:"auto"})),(0,l.kt)("h3",{id:"flash-and-run-balenaos-image-from-a-usb-drive"},"Flash and run balenaOS image from a USB drive"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Once the image configuration is done, click the arrow next to ",(0,l.kt)("strong",{parentName:"li"},"Flash"),", and select ",(0,l.kt)("strong",{parentName:"li"},"Download balenaOS"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/10.jpg",alt:"pir",width:"300",height:"auto"})),(0,l.kt)("p",null,"When the download completes, you should have a zipped image file with a name like ",(0,l.kt)("strong",{parentName:"p"},"balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img"),", where ",(0,l.kt)("strong",{parentName:"p"},"ODYSSEY-fleet")," is the name you gave your fleet on the dashboard. Alternatively, by clicking on the toggle section of the download button, you also have the option to download just a configuration file (config.json) rather than an entire image."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Open ",(0,l.kt)("a",{parentName:"li",href:"https://www.balena.io/etcher"},"balenaEtcher"),", click ",(0,l.kt)("strong",{parentName:"li"},"Flash from file")," and select the ",(0,l.kt)("strong",{parentName:"li"},"zip")," file that we downloaded before.")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/etcher.png",alt:"pir",width:"600",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Connect a USB flash drive to the PC, select the ",(0,l.kt)("strong",{parentName:"li"},"target")," as the connected flash drive and then click ",(0,l.kt)("strong",{parentName:"li"},"Flash"))),(0,l.kt)("p",null,"Next, we will run this image on the ODYSSEY - X86"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 4.")," Connect Flash drive to ODYSSEY - X86 board and turn on the board")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 5.")," While turning on the board, keep pressing ",(0,l.kt)("strong",{parentName:"p"},"DELETE key")," to enter ",(0,l.kt)("strong",{parentName:"p"},"BIOS setup"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 6.")," Go to ",(0,l.kt)("strong",{parentName:"p"},"Boot")," section and set the ",(0,l.kt)("strong",{parentName:"p"},"Boot Option #1")," to ",(0,l.kt)("strong",{parentName:"p"},"UEFI: USB, Partition 1")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mender/client/UEFI.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 7.")," Go to ",(0,l.kt)("strong",{parentName:"li"},"Save & Exit")," and select ",(0,l.kt)("strong",{parentName:"li"},"Save Changes and Reset"))),(0,l.kt)("p",null,"Now the OS will be successfully booted from the USB Flash Drive"),(0,l.kt)("h3",{id:"manage-odyssey---x86-from-balenacloud-dashboard"},"Manage ODYSSEY - X86 from balenaCloud dashboard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Open balenaCloud dashboard again and the ODYSSEY - X86 board will appear after about a minute!")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/11.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Click on the device from the list to access the device dashboard")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/12.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("p",null,"If you can't get the device online, please visit  ",(0,l.kt)("a",{parentName:"p",href:"https://www.balena.io/docs/learn/welcome/support"},"balena support channel")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"q1-how-can-i-run-balenaos-image-from-hdd-ssd"},"Q1: How can I run balenaOS image from HDD/ SSD?"),(0,l.kt)("p",null,"If you want to run the balenaOS image from HDD/ SSD rather than running from a USB drive, you can follow the steps below"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Follow from ",(0,l.kt)("strong",{parentName:"p"},"step 1 - step 7")," in above ",(0,l.kt)("strong",{parentName:"p"},"Flash and run balenaOS image from a USB drive")," section")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," After booting successfully, turn off the board from balenaCloud dashboard"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/13.png",alt:"pir",width:"700",height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," We need to boot once after flashing because the ",(0,l.kt)("strong",{parentName:"p"},"resin-data")," partition will grow to take up the remaining space on the flash drive, and we will use that space to store the image we need to flash to the HDD/SSD."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 3.")," Remove the flash drive from the ODYSSEY - X86 and connect to the PC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 4.")," Extract the ",(0,l.kt)("strong",{parentName:"p"},"zipped image file")," downloaded before")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 5.")," Open a terminal window and copy the extracted ",(0,l.kt)("strong",{parentName:"p"},"balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img")," image to the ",(0,l.kt)("strong",{parentName:"p"},"resin-data")," folder inside ",(0,l.kt)("strong",{parentName:"p"},"resin-data")," partition of the flash drive"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img /media/username/resin-data/resin-data\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Change ",(0,l.kt)("strong",{parentName:"p"},"username")," to the username of your PC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 6.")," Remove Flash drive from PC and connect to the ODYSSEY - X86 board. Also connect an external HDD/ SSD to the ODYSSEY board.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 7.")," After the board is booted, navigate to balenaCloud dashboard and access the ",(0,l.kt)("strong",{parentName:"p"},"Terminal"),". Here click on the ",(0,l.kt)("strong",{parentName:"p"},"Select a target")," drop-down-menu, select ",(0,l.kt)("strong",{parentName:"p"},"Host OS")," and click ",(0,l.kt)("strong",{parentName:"p"},"Start terminal session")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/15.jpg",alt:"pir",width:"10000",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 8.")," Type the following command on the terminal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"fdisk -l\n")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/fdisk-l.png",alt:"pir",width:"620",height:"auto"})),(0,l.kt)("p",null,"We can see that the connected HDD as ",(0,l.kt)("strong",{parentName:"p"},"/dev/sda")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 9.")," Flash the ",(0,l.kt)("strong",{parentName:"li"},"balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img")," file that we copied before to the connected HDD/SSD using ",(0,l.kt)("strong",{parentName:"li"},"dd")," utility")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"dd if=/resin-data/balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img of=/dev/sda\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Replace ",(0,l.kt)("strong",{parentName:"p"},"/dev/sda")," with the name corresponding to the connected HDD/SSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 10.")," Once flashing is done, poweroff the ODYSSEY - X86")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 11.")," Remove the USB Flash drive and turn on the ODYSSEY - X86")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 12.")," While turning on the board, keep pressing ",(0,l.kt)("strong",{parentName:"p"},"DELETE KEY")," to enter BIOS setup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 13.")," Go to ",(0,l.kt)("strong",{parentName:"p"},"BOOT")," section and set the ",(0,l.kt)("strong",{parentName:"p"},"Boot Option #1")," to ",(0,l.kt)("strong",{parentName:"p"},"UEFI OS xxxxx")))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/bios.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 14.")," Go to ",(0,l.kt)("strong",{parentName:"li"},"Save & Exit")," and select ",(0,l.kt)("strong",{parentName:"li"},"Save Changes and Reset"))),(0,l.kt)("p",null,"Now the OS will be successfully booted from the HDD/SSD"),(0,l.kt)("h3",{id:"q2-how-can-i-access-odyssey---x86-using-terminal"},"Q2: How can I access ODYSSEY - X86 using terminal?"),(0,l.kt)("p",null,"You can access ODYSSEY - X86 via terminal but you need to have Balena CLI installed on the host PC. Balena CLI is a Command Line Interface for balenaCloud or openBalena. It is a software tool available for Windows, macOS and Linux, used through a command prompt / terminal window. It can be used interactively or invoked in scripts."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/balena-io/balena-cli/blob/master/INSTALL.md"},"this link")," to install Balena CLI according to your operating system.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," For this tutorial, we will use Balena CLI on Ubuntu. However, the instructions will be similar for other systems."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Connect an Ethernet cable to the ODYSSEY - X86 board from your router")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Make sure host PC and ODYSSEY - X86 are on the same network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Open a terminal window and scan for BalenaOS devices on the local network")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo balena scan\n")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/scan.png",alt:"pir",width:"550",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," SSH into the board using the IP address")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"balena ssh <ip address>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"example:\nbalena ssh 192.168.1.78\n")),(0,l.kt)("p",null,"Now we are inside the ODYSSEY - X86 running BalenaOS!"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/ssh.png",alt:"pir",width:"650",height:"auto"})),(0,l.kt)("p",null,"Learn more about balena CLI ",(0,l.kt)("a",{parentName:"p",href:"https://www.balena.io/docs/reference/balena-cli/"},"here")),(0,l.kt)("h3",{id:"q3-how-can-i-compile-balenaos-from-source-code"},"Q3: How can I compile balenaOS from source code"),(0,l.kt)("p",null,"Eventhough we can obtain the balenaOS image from the balenaCloud dashboard as explained before, if you feel adventurous, you can go ahead and compile the balenaOS image from source code!"),(0,l.kt)("h4",{id:"manual-compilation-on-local-machine"},"Manual Compilation on Local Machine"),(0,l.kt)("p",null,"Now we will move on to manually compiling the BalenaOS system image for ODYSSEY - X86 using Yocto via the command line."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," This guide was written after testing on a host PC with Ubuntu 20.04 installed. However, it will work for other Linux systems."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the development environment on the host PC by installing the following packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," If the host PC is running a different Linux distribution, please check ",(0,l.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system"},"here")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Clone the following repo and enter the repo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/balena-os/balena-seeed-x86\ncd balena-seeed-x86\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 3.")," Download all the required dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git submodule update --init --recursive\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 4.")," Run the build script")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./balena-yocto-scripts/build/barys\n")),(0,l.kt)("p",null,"Now the compilation process will start. Wait patiently until the compilation is finished. The compilation time will depend on the hardware specifications of the build machine."),(0,l.kt)("h4",{id:"find-the-compiled-image"},"Find the Compiled Image"),(0,l.kt)("p",null,"After compilation is finished, run the following command to check whether the system image is successfully generated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd build/tmp/deploy/images/odyssey-x86/;ls -lh *balenaos-img\n")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/balenaOS/image-location.png",alt:"pir",width:"1000",height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"balena-image-odyssey-x86")," is used to boot directly from external storage (Flash Drive, SSD, HDD) connected to ODYSSEY - X86."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"balena-image-flasher-odyssey-x86")," is used to boot directly from internal eMMC storage on ODYSSEY - X86. So this flasher image is burned onto a Flash Drive that is used for the initial boot. When booted, this flasher image will automatically install BalenaOS on internal eMMC storage.")),(0,l.kt)("h4",{id:"using-the-compiled-image"},"Using the Compiled Image"),(0,l.kt)("p",null,"By default, the images have the file extension ",(0,l.kt)("strong",{parentName:"p"},".balenaos-img"),". Before moving onto flashing these images, you need to rename the file extension to ",(0,l.kt)("strong",{parentName:"p"},".img"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rename ",(0,l.kt)("strong",{parentName:"li"},"balena-image-odyssey-x86.balenaos-img")," to ",(0,l.kt)("strong",{parentName:"li"},"balena-image-odyssey-x86.img"),"."),(0,l.kt)("li",{parentName:"ul"},"Rename ",(0,l.kt)("strong",{parentName:"li"},"balena-image-flasher-odyssey-x86.balenaos-img")," to ",(0,l.kt)("strong",{parentName:"li"},"balena-image-flasher-odyssey-x86.img"))),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Web Page]")," ",(0,l.kt)("a",{parentName:"li",href:"https://www.balena.io/docs"},"Balena documentation"))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Please submit any technical issue into our ",(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,l.kt)("br",null)),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);