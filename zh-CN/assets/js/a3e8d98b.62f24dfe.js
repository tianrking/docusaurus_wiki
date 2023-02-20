"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15091],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return t?i.createElement(h,r(r({ref:n},s),{},{components:t})):i.createElement(h,r({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const o={description:"Play and Record",title:"Play and Record",keywords:["Wio_terminal Audio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},r="Audio Features",l={unversionedId:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Play-Record",id:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Play-Record",title:"Play and Record",description:"Play and Record",source:"@site/docs/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Play-Record.md",sourceDirName:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board",slug:"/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Play-Record",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Play-Record",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Play-Record.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Play and Record",title:"Play and Record",keywords:["Wio_terminal Audio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Overview"},next:{title:"Audio System Design Tool",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-GUI"}},d={},u=[{value:"Playing Audio from SD Card",id:"playing-audio-from-sd-card",level:2},{value:"Recording Sound and Playback",id:"recording-sound-and-playback",level:2},{value:"Peak Detection",id:"peak-detection",level:2},{value:"Playing Audio with the LCD Display",id:"playing-audio-with-the-lcd-display",level:2},{value:"Example Demos",id:"example-demos",level:2},{value:"Audio Spectrum Visualizer",id:"audio-spectrum-visualizer",level:3},{value:"Feature",id:"feature",level:4},{value:"Complete Code",id:"complete-code",level:4},{value:"Mic Spectrum Visualizer",id:"mic-spectrum-visualizer",level:3},{value:"Feature",id:"feature-1",level:4},{value:"Complete Code",id:"complete-code-1",level:4},{value:"Record and Play at Real Time",id:"record-and-play-at-real-time",level:3},{value:"Feature",id:"feature-2",level:4},{value:"Complete Code",id:"complete-code-2",level:4}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audio-features"},"Audio Features"),(0,a.kt)("p",null,"This wiki introduces how to set the Audio for Wio Terminal using with ReSpeaker 2-Mic Hats."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/"},(0,a.kt)("strong",{parentName:"a"},"Audio Overview"))," for the ",(0,a.kt)("strong",{parentName:"p"},"Hardware Connection"),".")),(0,a.kt)("h2",{id:"playing-audio-from-sd-card"},"Playing Audio from SD Card"),(0,a.kt)("p",null,"This example plays a music file from MicroSD card using ReSpeaker 2-Mic Hat."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You will need a MicroSD card for Wio Terminal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Save your music file in the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".wav"))," format and save it into your MicroSD card. In this example, you will need to name the music file as ",(0,a.kt)("inlineCode",{parentName:"p"},"SDTEST2.WAV"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Insert the MicroSD card to Wio Terminal, upload the following code to Wio Terminal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure that ReSpeaker 2-Mic is connected with Wio Terminal correctly, and ",(0,a.kt)("strong",{parentName:"p"},"a speaker is plugged into the JST2.0 Speaker pin on the ReSpeaker 2-Mic"),"."))),(0,a.kt)("p",null,"You may also find this example in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_1_03_Playing_Music/Part_1_03_Playing_Music.ino"},"github")," page."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"wm8960.volume(0.7)")," to adjust the volume of the speaker! Furthermore, you can also uncomment ",(0,a.kt)("inlineCode",{parentName:"p"},"wm8960.outputSelect(HEADPHONE)")," to have audio jack as the output!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\nAudioPlaySdWav           playSdWav1;\nAudioOutputI2S           i2s1;\nAudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);\nAudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);\nAudioControlWM8960 wm8960;\n\nvoid setup() {\n  Serial.begin(9600);\n  AudioMemory(8);\n  while (!Serial) {};\n  wm8960.enable();\n  // wm8960.outputSelect(HEADPHONE);\n  wm8960.volume(0.7);\n  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {\n      Serial.println("Card Mount Failed");\n      return;\n  }\n  delay(1000);\n}\n\nvoid loop() {\n  if (playSdWav1.isPlaying() == false) {\n    Serial.println("Start playing");\n    playSdWav1.play("SDTEST2.WAV");\n    delay(10); // wait for library to parse WAV info\n  }\n  // do nothing while playing...\n}\n')),(0,a.kt)("h2",{id:"recording-sound-and-playback"},"Recording Sound and Playback"),(0,a.kt)("p",null,"This example records sound using the mic on ReSpeaker 2-Mic Hat, stores the raw data to MicroSD card and plays it back through the Speaker."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You will need a MicroSD card for Wio Terminal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Press the ",(0,a.kt)("strong",{parentName:"p"},"right button")," on the top of Wio Terminal (",(0,a.kt)("inlineCode",{parentName:"p"},"WIO_KEY_A"),") and it will start recording. Speak to the mic of ReSpeaker 2-Mic Hat. It saves the recording to the MicroSD card as ",(0,a.kt)("inlineCode",{parentName:"p"},"RECORD.WAV"),"."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"While recording, press one of any other two buttons to stop recording.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Press the ",(0,a.kt)("strong",{parentName:"p"},"left button")," on the top of Wio Terminal (",(0,a.kt)("inlineCode",{parentName:"p"},"WIO_KEY_C"),") and it will play the ",(0,a.kt)("inlineCode",{parentName:"p"},"RECORD.WAV")," that just recorded.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Press the ",(0,a.kt)("strong",{parentName:"p"},"middle button")," on the top of Wio Terminal (",(0,a.kt)("inlineCode",{parentName:"p"},"WIO_KEY_B"),") will stop playing the recording."))),(0,a.kt)("p",null,"You may also find this example in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Recorder/Recorder.ino"},"github")," page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Record sound as raw data to a SD card, and play it back.\n#include <Bounce.h>\n#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\n// GUItool: begin automatically generated code\nAudioInputI2S            i2s2;           //xy=105,63\nAudioAnalyzePeak         peak1;          //xy=278,108\nAudioRecordQueue         queue1;         //xy=281,63\nAudioPlaySdRaw           playRaw1;       //xy=302,157\nAudioOutputI2S           i2s1;           //xy=470,120\nAudioConnection          patchCord1(i2s2, 0, queue1, 0);\nAudioConnection          patchCord2(i2s2, 0, peak1, 0);\nAudioConnection          patchCord3(playRaw1, 0, i2s1, 0);\nAudioConnection          patchCord4(playRaw1, 0, i2s1, 1);\n\nAudioControlWM8960 wm8960;\n\n// GUItool: end automatically generated code\nBounce buttonRecord = Bounce(WIO_KEY_A, 8);\nBounce buttonStop =   Bounce(WIO_KEY_B, 8);  // 8 = 8 ms debounce time\nBounce buttonPlay =   Bounce(WIO_KEY_C, 8);\n\n// which input on the audio shield will be used?\nconst int myInput = AUDIO_INPUT_MIC;\n\n// Remember which mode we\'re doing\nint mode = 0;  // 0=stopped, 1=recording, 2=playing\n\n// The file where data is recorded\nFile frec;\n\nvoid setup() {\n  Serial.begin(9600);\n  // Configure the pushbutton pins\n  pinMode(WIO_KEY_A, INPUT_PULLUP);\n  pinMode(WIO_KEY_B, INPUT_PULLUP);\n  pinMode(WIO_KEY_C, INPUT_PULLUP);\n\n  // Audio connections require memory, and the record queue\n  // uses this memory to buffer incoming audio.\n  AudioMemory(60);\n\n  // Enable the audio shield, select input, and enable output\n  wm8960.enable();\n  wm8960.inputSelect(myInput);\n  wm8960.volume(1);\n\n  // Initialize the SD card\n  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {\n      Serial.println("Card Mount Failed");\n      return;\n  }\n}\n\nvoid loop() {\n  // First, read the buttons\n  buttonRecord.update();\n  buttonStop.update();\n  buttonPlay.update();\n\n  // Respond to button presses\n  if (buttonRecord.fallingEdge()) {\n    Serial.println("Record Button Press");\n    if (mode == 2) stopPlaying();\n    if (mode == 0) startRecording();\n  }\n  if (buttonStop.fallingEdge()) {\n    Serial.println("Stop Button Press");\n    if (mode == 1) stopRecording();\n    if (mode == 2) stopPlaying();\n  }\n  if (buttonPlay.fallingEdge()) {\n    Serial.println("Play Button Press");\n    if (mode == 1) stopRecording();\n    if (mode == 0) startPlaying();\n  }\n\n  // If we\'re playing or recording, carry on...\n  if (mode == 1) {\n    continueRecording();\n  }\n  if (mode == 2) {\n    continuePlaying();\n  }\n\n  // when using a microphone, continuously adjust gain\n  if (myInput == AUDIO_INPUT_MIC) adjustMicLevel();\n  \n}\n\nvoid startRecording() {\n  Serial.println("startRecording");\n  if (SD.exists("RECORD.RAW")) {\n    // The SD library writes new data to the end of the\n    // file, so to start a new recording, the old file\n    // must be deleted before new data is written.\n    SD.remove("RECORD.RAW");\n  }\n  frec = SD.open("RECORD.RAW", FILE_WRITE);\n  if (frec) {\n    queue1.begin();\n    mode = 1;\n  }\n}\n\nvoid continueRecording() {\n  if (queue1.available() >= 2) {\n    byte buffer[512];\n    // Fetch 2 blocks from the audio library and copy\n    // into a 512 byte buffer.  The Arduino SD library\n    // is most efficient when full 512 byte sector size\n    // writes are used.\n    memcpy(buffer, queue1.readBuffer(), 256);\n    queue1.freeBuffer();\n    memcpy(buffer+256, queue1.readBuffer(), 256);\n    queue1.freeBuffer();\n    // write all 512 bytes to the SD card\n    elapsedMicros usec = 0;\n    frec.write(buffer, 512);\n    // Uncomment these lines to see how long SD writes\n    // are taking.  A pair of audio blocks arrives every\n    // 5802 microseconds, so hopefully most of the writes\n    // take well under 5802 us.  Some will take more, as\n    // the SD library also must write to the FAT tables\n    // and the SD card controller manages media erase and\n    // wear leveling.  The queue1 object can buffer\n    // approximately 301700 us of audio, to allow time\n    // for occasional high SD card latency, as long as\n    // the average write time is under 5802 us.\n    Serial.print("SD write, us=");\n    Serial.println(usec);\n  }\n}\n\nvoid stopRecording() {\n  Serial.println("stopRecording");\n  queue1.end();\n  if (mode == 1) {\n    while (queue1.available() > 0) {\n      frec.write((byte*)queue1.readBuffer(), 256);\n      queue1.freeBuffer();\n    }\n    frec.close();\n  }\n  mode = 0;\n}\n\nvoid startPlaying() {\n  Serial.println("startPlaying");\n  playRaw1.play("RECORD.RAW");\n  mode = 2;\n}\n\nvoid continuePlaying() {\n  if (!playRaw1.isPlaying()) {\n    playRaw1.stop();\n    mode = 0;\n  }\n}\n\nvoid stopPlaying() {\n  Serial.println("stopPlaying");\n  if (mode == 2) playRaw1.stop();\n  mode = 0;\n}\n\nvoid adjustMicLevel() {\n  // TODO: read the peak1 object and adjust sgtl5000_1.micGain()\n  // if anyone gets this working, please submit a github pull request :-)\n}\n')),(0,a.kt)("h2",{id:"peak-detection"},"Peak Detection"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detect.gif"})),(0,a.kt)("p",null,"This example plays a music file from the MicroSD card and detects peak value of both channels and display on the Serial Monitor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Same configurations as the ",(0,a.kt)("em",{parentName:"p"},"Playing Audio from SD Card")," from above.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upload the code, and you should be able to see the peaks of both channels of on the Serial Monitor, whilst the music is playing via the speaker."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Audio.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\n// GUItool: begin automatically generated code\nAudioPlaySdWav           playSdWav1;     //xy=422,359\nAudioAnalyzePeak         peak1;          //xy=611,306\nAudioAnalyzePeak         peak2;          //xy=612,396\nAudioOutputI2S           i2s1;           //xy=792,365\nAudioConnection          patchCord1(playSdWav1, 0, peak1, 0);\nAudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);\nAudioConnection          patchCord3(playSdWav1, 1, peak2, 0);\nAudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);\nAudioControlWM8960 wm8960;\n// GUItool: end automatically generated code\n\nvoid setup() {\n  Serial.begin(9600);\n  AudioMemory(10);\n  wm8960.enable();\n  // wm8960.outputSelect(HEADPHONE);\n  wm8960.volume(0.7);\n  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {\n      Serial.println("Card Mount Failed");\n      return;\n  }\n  delay(1000);\n}\n\n// for best effect make your terminal/monitor a minimum of 62 chars wide and as high as you can.\nelapsedMillis msecs;\n\nvoid loop() {\n  if (playSdWav1.isPlaying() == false) {\n    Serial.println("Start playing");\n    //playSdWav1.play("SDTEST1.WAV");\n    playSdWav1.play("SDTEST2.WAV");\n    //playSdWav1.play("SDTEST3.WAV");\n    //playSdWav1.play("SDTEST4.WAV");\n    delay(10); // wait for library to parse WAV info\n  }\n  \n  if (msecs > 40) {\n    if (peak1.available() && peak2.available()) {\n      msecs = 0;\n      float leftNumber = peak1.read();\n      float rightNumber = peak2.read();\n      int leftPeak = leftNumber * 30.0;\n      int rightPeak = rightNumber * 30.0;\n      int count;\n      for (count=0; count < 30-leftPeak; count++) {\n        Serial.print(" ");\n      }\n      while (count++ < 30) {\n        Serial.print("<");\n      }\n      Serial.print("||");\n      for (count=0; count < rightPeak; count++) {\n        Serial.print(">");\n      }\n      while (count++ < 30) {\n        Serial.print(" ");\n      }\n      Serial.print(leftNumber);\n      Serial.print(", ");\n      Serial.print(rightNumber);\n      Serial.println();\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"playing-audio-with-the-lcd-display"},"Playing Audio with the LCD Display"),(0,a.kt)("div",{align:"center"},(0,a.kt)("video",{width:560,height:315,controls:!0},(0,a.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio.mp4",type:"video/mp4"}))),(0,a.kt)("p",null,"This example also plays music file from the MicroSD card and displays both channels peak on the screen of Wio Terminal."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Same configurations as the ",(0,a.kt)("em",{parentName:"p"},"Playing Audio from SD Card")," from above.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upload the code, and you should be able to see the peaks of both channels of on the screen, whilst the music is playing via the speaker."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Because we are using LCD graphics with the audio library, it has a bigger workload. It is recommended to ",(0,a.kt)("strong",{parentName:"p"},"Overclock the SAMD51")," in this example. Under Arduino IDE, select ",(0,a.kt)("strong",{parentName:"p"},"Tools")," -> ",(0,a.kt)("strong",{parentName:"p"},"CPU Speed")," -> ",(0,a.kt)("strong",{parentName:"p"},"200MHz"),". This will increase the overall graphics performance."),(0,a.kt)("p",null,"You may also find this example in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_3_03_TFT_Display/Part_3_03_TFT_Display.ino"},"github")," page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <TFT_eSPI.h> // Hardware-specific library\n#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\n// GUItool: begin automatically generated code\nAudioPlaySdWav           playSdWav1;     //xy=512,375\nAudioAnalyzePeak         peak2;          //xy=787,543\nAudioAnalyzePeak         peak1;          //xy=790,488\nAudioOutputI2S           i2s1;           //xy=827,334\nAudioConnection          patchCord1(playSdWav1, 0, peak1, 0);\nAudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);\nAudioConnection          patchCord3(playSdWav1, 1, peak2, 0);\nAudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);\nAudioControlWM8960 wm8960;\n\n// GUItool: end automatically generated code\nTFT_eSPI tft_e = TFT_eSPI();\nTFT_eSprite tft = TFT_eSprite(&tft_e);\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(500);\n\n  tft_e.begin();\n  tft_e.fillScreen(ILI9341_BLACK);\n  tft.createSprite(240, 320);\n  tft.fillSprite(TFT_BLACK);\n  tft.setTextColor(ILI9341_YELLOW);\n  //tft.setTextSize(3);\n  tft.setCursor(40, 8);\n  tft.println("Peak Meter");\n  \n  AudioMemory(10);\n  wm8960.enable();\n  // wm8960.outputSelect(HEADPHONE);\n  wm8960.volume(0.7);\n\n  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {\n      Serial.println("Card Mount Failed");\n      return;\n  }\n  delay(1000);\n}\n\nelapsedMillis msecs;\n\nvoid loop() {\n  if (playSdWav1.isPlaying() == false) {\n    Serial.println("Start playing");\n    playSdWav1.play("SDTEST2.WAV");\n    delay(10); // wait for library to parse WAV info\n  }\n  \n  if (msecs > 15) {\n    if (peak1.available() && peak2.available()) {\n      msecs = 0;\n      float leftNumber = peak1.read();\n      float rightNumber = peak2.read();\n      Serial.print(leftNumber);\n      Serial.print(", ");\n      Serial.print(rightNumber);\n      Serial.println();\n\n      // draw the verticle bars\n      int height = leftNumber * 240;\n      tft.fillRect(60, 280 - height, 40, height, ILI9341_GREEN);\n      tft.fillRect(60, 280 - 240, 40, 240 - height, ILI9341_BLACK);\n      height = rightNumber * 240;\n      tft.fillRect(140, 280 - height, 40, height, ILI9341_GREEN);\n      tft.fillRect(140, 280 - 240, 40, 240 - height, ILI9341_BLACK);\n      // a smarter approach would redraw only the changed portion...\n\n      // draw numbers underneath each bar\n      tft.fillRect(60, 284, 40, 16, ILI9341_BLACK);\n      tft.setCursor(67, 284);\n      tft.print(leftNumber);\n      tft.fillRect(140, 284, 40, 16, ILI9341_BLACK);\n      tft.setCursor(147, 284);\n      tft.print(rightNumber);\n      tft.pushSprite(0, 0);\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"example-demos"},"Example Demos"),(0,a.kt)("h3",{id:"audio-spectrum-visualizer"},"Audio Spectrum Visualizer"),(0,a.kt)("div",{align:"center"},(0,a.kt)("video",{width:560,height:315,controls:!0},(0,a.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/Audio-Spectrum.mp4",type:"video/mp4"}))),(0,a.kt)("p",null,"This is an example using the FFT function of the Audio Library to calculate and visualize Audio Spectrum."),(0,a.kt)("h4",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Audio Spectrum of Music")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Press buttons to increase/decrease volume"))),(0,a.kt)("h4",{id:"complete-code"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n#include <TFT_eSPI.h> // Hardware-specific library\n#include <Bounce.h>\n\n// The display size and color to use\nconst unsigned int matrix_width = 19;\nconst unsigned int matrix_height = 12;\n\n// These parameters adjust the vertical thresholds\nconst float maxLevel = 0.5;      // 1.0 = max, lower is more "sensitive"\nconst float dynamicRange = 10.0; // total range to display, in decibels\nconst float linearBlend = 0.4;   // useful range is 0 to 0.7\n\n// GUItool: begin automatically generated code\nAudioPlaySdWav           playSdWav1;     //xy=260,184\nAudioMixer4              mixer1;         //xy=505,238\nAudioOutputI2S           i2s2;           //xy=701,139\nAudioAnalyzeFFT1024      fft1024_1;      //xy=761,235\nAudioConnection          patchCord1(playSdWav1, 0, mixer1, 0);\nAudioConnection          patchCord2(playSdWav1, 0, i2s2, 0);\nAudioConnection          patchCord3(playSdWav1, 1, mixer1, 1);\nAudioConnection          patchCord4(playSdWav1, 1, i2s2, 1);\nAudioConnection          patchCord5(mixer1, fft1024_1);\nAudioControlWM8960 wm8960;\n// GUItool: end automatically generated code\n\nconst int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};\nconst int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};\nfloat thresholdVertical[matrix_height];\nfloat thresholdVert[matrix_height];\n\nfloat level;\nunsigned int x, y;\nconst uint8_t gridSize = 10;\nfloat val = 0.7;\n\nBounce buttonUp = Bounce(WIO_KEY_A, 8);\nBounce buttonDown =   Bounce(WIO_KEY_C, 8);\n\nTFT_eSPI tft = TFT_eSPI();\nTFT_eSprite spr = TFT_eSprite(&tft);\n\nvoid setup() {\n  Serial.begin(115200);\n//  while (!Serial);\n\n  pinMode(WIO_KEY_A, INPUT_PULLUP);\n  pinMode(WIO_KEY_C, INPUT_PULLUP);\n\n  tft.begin();\n  tft.fillScreen(TFT_BLACK);\n  tft.setRotation(3);\n  tft.setTextSize(2);\n  tft.drawString("Audio Spectrum Visualiser", 10, 10);\n\n  AudioMemory(20);\n  computeVerticalLevels();\n\n  for (int i = 0; i < 8; i++) {\n    Serial.print("thresholdVertical ");\n    Serial.print(i);\n    Serial.print(" = ");\n    Serial.println(thresholdVertical[i]);\n  }\n  for (unsigned int j = 0; j < matrix_height; j++) {\n    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];\n  }\n  wm8960.enable();\n//  wm8960.outputSelect(HEADPHONE);\n  wm8960.volume(val);\n  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {\n    Serial.println("Card Mount Failed");\n    return;\n  }\n  playSdWav1.play("SDTEST2.WAV");\n  delay(20);\n  \n  fft1024_1.windowFunction(AudioWindowHanning1024);\n  \n  spr.createSprite(180, 320);\n  spr.fillSprite(TFT_BLACK);\n  tft.setRotation(2);\n}\n\nvoid loop() {\n    buttonUp.update();\n    buttonDown.update();\n    if (buttonUp.fallingEdge() && val < 1.0) {\n        val += 0.1;\n    }\n    if(buttonDown.fallingEdge() && val >= 0.1) {\n        val -= 0.1;\n    }\n    wm8960.volume(val);\n  \n    if (fft1024_1.available()) {\n        colorRainbow();\n        spr.pushSprite(0, 10);\n    }\n}\n\nvoid colorRainbow() {\n  for (x = 0; x < matrix_width; x++) {\n    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);\n    for (y = 0; y < 12; y++) {\n      if (level >= thresholdVert[y]) {\n        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));\n        // Serial.println(xy(x, y));\n      }\n      else {\n        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);\n      }\n    }\n  }\n}\n\n// Input a value 0 to 255 to get a color value.\n// The colours are a transition r - g - b - back to r.\nuint32_t Wheel(byte WheelPos) {\n  WheelPos = 255 - WheelPos;\n  if (WheelPos < 85) {\n    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);\n  } else if (WheelPos < 170) {\n    WheelPos -= 85;\n    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);\n  } else {\n    WheelPos -= 170;\n    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);\n  }\n}\n\nuint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {\n  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;\n}\n\nunsigned int xy(unsigned int x, unsigned int y) {\n  return x * 8;\n}\n\nvoid computeVerticalLevels() {\n  unsigned int y;\n  float n, logLevel, linearLevel;\n\n  for (y = 0; y < matrix_height; y++) {\n    n = (float)y / (float)(matrix_height - 1);\n    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);\n    linearLevel = 1.0 - n;\n    linearLevel = linearLevel * linearBlend;\n    logLevel = logLevel * (1.0 - linearBlend);\n    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;\n  }\n}\n')),(0,a.kt)("h3",{id:"mic-spectrum-visualizer"},"Mic Spectrum Visualizer"),(0,a.kt)("div",{align:"center"},(0,a.kt)("video",{width:560,height:315,controls:!0},(0,a.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/mic-spec.mp4",type:"video/mp4"}))),(0,a.kt)("p",null,"This is an example using the Mics of ReSpeaker 2-Mic Hats and FFT calculations."),(0,a.kt)("h4",{id:"feature-1"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Audio Spectrum of Mics")),(0,a.kt)("h4",{id:"complete-code-1"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n#include <TFT_eSPI.h> // Hardware-specific library\n\n// The display size and color to use\nconst unsigned int matrix_width = 19;\nconst unsigned int matrix_height = 12;\n\n// These parameters adjust the vertical thresholds\nconst float maxLevel = 0.6;      // 1.0 = max, lower is more "sensitive"\nconst float dynamicRange = 10.0; // total range to display, in decibels\nconst float linearBlend = 0.6;   // useful range is 0 to 0.7\n\n// GUItool: begin automatically generated code\nAudioInputI2S            i2s1;           //xy=376,203\nAudioMixer4              mixer1;         //xy=608,235\nAudioAnalyzeFFT1024      fft1024_1;      //xy=770,200\nAudioConnection          patchCord1(i2s1, 0, mixer1, 0);\nAudioConnection          patchCord2(i2s1, 1, mixer1, 1);\nAudioConnection          patchCord3(mixer1, fft1024_1);\nAudioControlWM8960 wm8960;\n// GUItool: end automatically generated code\n\nconst int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};\nconst int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};\nfloat thresholdVertical[matrix_height];\nfloat thresholdVert[matrix_height];\n\nfloat level;\nunsigned int x, y;\nconst uint8_t gridSize = 10;\n\nTFT_eSPI tft = TFT_eSPI();\nTFT_eSprite spr = TFT_eSprite(&tft);\n\nvoid setup() {\n  Serial.begin(115200);\n  //  while (!Serial);\n\n  tft.begin();\n  tft.fillScreen(TFT_BLACK);\n  tft.setRotation(3);\n  tft.setTextSize(2);\n  tft.drawString("Mic Spectrum Visualiser", 20, 10);\n\n  AudioMemory(20);\n  computeVerticalLevels();\n\n  for (int i = 0; i < 8; i++) {\n    Serial.print("thresholdVertical ");\n    Serial.print(i);\n    Serial.print(" = ");\n    Serial.println(thresholdVertical[i]);\n  }\n  for (unsigned int j = 0; j < matrix_height; j++) {\n    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];\n  }\n  wm8960.enable();\n  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {\n    Serial.println("Card Mount Failed");\n    return;\n  }\n  delay(20);\n\n  fft1024_1.windowFunction(AudioWindowHanning1024);\n\n  spr.createSprite(180, 320);\n  spr.fillSprite(TFT_BLACK);\n  tft.setRotation(2);\n}\n\nvoid loop() {\n  if (fft1024_1.available()) {\n    colorRainbow();\n    spr.pushSprite(0, 10);\n  }\n}\n\nvoid colorRainbow() {\n  for (x = 0; x < matrix_width; x++) {\n    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);\n    for (y = 0; y < 12; y++) {\n      if (level >= thresholdVert[y]) {\n        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));\n        // Serial.println(xy(x, y));\n      }\n      else {\n        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);\n      }\n    }\n  }\n}\n\n// Input a value 0 to 255 to get a color value.\n// The colours are a transition r - g - b - back to r.\nuint32_t Wheel(byte WheelPos) {\n  WheelPos = 255 - WheelPos;\n  if (WheelPos < 85) {\n    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);\n  } else if (WheelPos < 170) {\n    WheelPos -= 85;\n    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);\n  } else {\n    WheelPos -= 170;\n    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);\n  }\n}\n\nuint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {\n  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;\n}\n\nunsigned int xy(unsigned int x, unsigned int y) {\n  return x * 8;\n}\n\nvoid computeVerticalLevels() {\n  unsigned int y;\n  float n, logLevel, linearLevel;\n\n  for (y = 0; y < matrix_height; y++) {\n    n = (float)y / (float)(matrix_height - 1);\n    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);\n    linearLevel = 1.0 - n;\n    linearLevel = linearLevel * linearBlend;\n    logLevel = logLevel * (1.0 - linearBlend);\n    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;\n  }\n}\n')),(0,a.kt)("h3",{id:"record-and-play-at-real-time"},"Record and Play at Real Time"),(0,a.kt)("div",{align:"center"},(0,a.kt)("video",{width:560,height:315,controls:!0},(0,a.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play.mp4",type:"video/mp4"}))),(0,a.kt)("p",null,"This is an example of real-time recording and playing."),(0,a.kt)("h4",{id:"feature-2"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recording and Playing at real-time")),(0,a.kt)("h4",{id:"complete-code-2"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\n// GUItool: begin automatically generated code\nAudioInputI2S            i2s1;           //xy=274,186\nAudioRecordQueue         queue1;         //xy=550,172\nAudioPlayQueue           queue2;         //xy=550,220\nAudioOutputI2S           i2s2;           //xy=769,208\nAudioConnection          patchCord1(i2s1, 0, queue1, 0);\nAudioConnection          patchCord2(queue2, 0, i2s2, 0);\nAudioConnection          patchCord3(queue2, 0, i2s2, 1);\nAudioControlWM8960 wm8960;\n// GUItool: end automatically generated code\n\nconst int myInput = AUDIO_INPUT_MIC;\n\nvoid setup() {\n  Serial.begin(9600);\n//  while (!Serial);\n  AudioMemory(20);\n  wm8960.enable();\n  wm8960.inputSelect(myInput);\n  wm8960.volume(0.9);\n  //  wm8960.outputSelect(HEADPHONE);\n  queue1.begin();\n}\n\nvoid loop() {\n  if (queue1.available() >= 2)\n  {\n    // Recording buffer\n    byte buffer[256];\n    memcpy(buffer, queue1.readBuffer(), 256);\n    queue1.freeBuffer();\n    // Playing buffer\n    queue2.getBuffer();\n    queue2.playBuffer();\n  }\n}\n')))}p.isMDXComponent=!0}}]);