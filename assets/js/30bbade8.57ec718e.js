"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={description:"Getting started with Nvidia Jetson",title:"Getting started with Nvidia Jetson",keywords:["ReSpeaker_2-Mics_Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"jianjing Huang"}},o=void 0,d={unversionedId:"Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT/ReSpeaker_2_Mics_Pi_HAT_Jetson",id:"Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT/ReSpeaker_2_Mics_Pi_HAT_Jetson",title:"Getting started with Nvidia Jetson",description:"Getting started with Nvidia Jetson",source:"@site/docs/Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT/ReSpeaker_2_Mics_Pi_HAT_Jetson.md",sourceDirName:"Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT",slug:"/Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT/ReSpeaker_2_Mics_Pi_HAT_Jetson",permalink:"/docusaurus_wiki/Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT/ReSpeaker_2_Mics_Pi_HAT_Jetson",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Seeed_Elderly/reSpeaker/ReSpeaker_2-Mics_Pi_HAT/ReSpeaker_2_Mics_Pi_HAT_Jetson.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Getting started with Nvidia Jetson",title:"Getting started with Nvidia Jetson",keywords:["ReSpeaker_2-Mics_Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/11/2023",author:"jianjing Huang"}}},s={},c=[{value:"Driver installation and configuration",id:"driver-installation-and-configuration",level:3},{value:"Usage overview",id:"usage-overview",level:2},{value:"Record sound with Python",id:"record-sound-with-python",level:3}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"driver-installation-and-configuration"},"Driver installation and configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Connect ReSpeaker 2-Mics Pi HAT to Jetson Nano")),(0,a.kt)("p",null,"Mount ReSpeaker 2-Mics Pi HAT on your Jetson Nano, make sure that the pins are properly aligned when stacking the ReSpeaker 2-Mics Pi HAT."),(0,a.kt)("p",null,"Jetson Nano Connection"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Setup the driver on Jetson Nano")),(0,a.kt)("p",null,"Make sure that you are running ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/downloads"},"the latest Jetson Nano OS image")," on your device. ",(0,a.kt)("em",{parentName:"p"},"(updated at 2021.07.03)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is tested for JetPack 4.5.1. For other version, you will need to check kernel headers version number with ",(0,a.kt)("inlineCode",{parentName:"p"},"ls /usr/src/linux-headers-*"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 1.")," Clone the repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays\ncd ~/seeed-linux-dtoverlays\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 2.")," Build dtbo & driver"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"\nKBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 3.")," Install the Driver"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -E KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 4.")," Install dtbo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 5.")," Reboot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 6.")," Restore Alsa widgets settings"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    Must wait a moment the time sound card busy after login.\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-dtoverlays\nalsactl -f extras/wm8960_asound.state-jetson-nano restore 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 7."),"  Check that the sound card name matches the source code seeed-voicecard by command ",(0,a.kt)("inlineCode",{parentName:"p"},"aplay -l")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"arecord -l"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jetson@jetson:~$ aplay -l\n**** List of PLAYBACK Hardware Devices ****\ncard 0: tegrahda [tegra-hda], device 3: HDMI 0 [HDMI 0]\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []\n  Subdevices: 0/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\n\n\njetson@jetson:~$ arecord -l\n**** List of CAPTURE Hardware Devices ****\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\ncard 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []\n  Subdevices: 1/1\n  Subdevice #0: subdevice #0\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 3. Test, you will hear what you say to the microphones (don't forget to plug in an earphone or a speaker):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arecord -f cd -Dhw:1 test.wav\naplay -Dhw:1 test.wav\n")),(0,a.kt)("p",null,"or (to play the sound from microphone immediately to speakers/headphones):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," -Dhw:1 is the recording(or playback device number), depending on your system this number may differ."),(0,a.kt)("h2",{id:"usage-overview"},"Usage overview"),(0,a.kt)("p",null,"To run the following examples, clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/respeaker/mic_hat.git"},"https://github.com/respeaker/mic_hat.git")," repository to your Jetson Nano"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/respeaker/mic_hat.git\n")),(0,a.kt)("p",null,"All the Python scripts, mentioned in the examples below can be found inside this repository. To install the necessary dependencies, from mic_hat repository folder, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install portaudio19-dev libatlas-base-dev\npip3 install Jetson.GPIO spidev pyaudio\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"APA102 LEDs")),(0,a.kt)("p",null,"Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 interfaces/pixels.py\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReSpeaker/img/IMG_20210703_125819.jpg"})),(0,a.kt)("h3",{id:"record-sound-with-python"},"Record sound with Python"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://people.csail.mit.edu/hubert/pyaudio/"},"PyAudio python library")," to record sound with Python."),(0,a.kt)("p",null,"First, run the following script to get the device index number of 2 Mic pi hat:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 recording_examples/get_device_index.py\n")),(0,a.kt)("p",null,"You will see the device ID as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input Device id  1  -  tegra-snd-t210ref-mobile-rt565x: - (hw:1,1)\n")),(0,a.kt)("p",null,"To record the sound, open ",(0,a.kt)("inlineCode",{parentName:"p"},"recording_examples/record.py")," file with nano or other text editor and change  ",(0,a.kt)("inlineCode",{parentName:"p"},"RESPEAKER_INDEX = 1")," to index number of ReSpeaker on your system. Then run python script record.py to make a recording:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 recording_examples/record.py\n")),(0,a.kt)("p",null,"If you want to extract channel 0 data from 2 channels, have a look at the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"record_one_channel.py"),". For other channel X, please change ","[0::2]"," to ","[X::2]","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 recording_examples/record_one_channel.py\n")),(0,a.kt)("p",null,"To play the recorded samples you can either use aplay system utility, for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aplay -f cd -Dhw:1 output.wav #for Stereo sound\n")))}p.isMDXComponent=!0}}]);