"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,m=u["".concat(s,".").concat(c)]||u[c]||_[c]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"BeagleBone Green and Grove IoT Starter Kit Powered by AWS",title:"BeagleBone Green and Grove IoT Starter Kit Powered by AWS",keywords:["Beagle_Bone","Kit_with_Courses"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Edge/Beagle_Bone/Kit_with_Courses/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS",id:"Edge/Beagle_Bone/Kit_with_Courses/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS",title:"BeagleBone Green and Grove IoT Starter Kit Powered by AWS",description:"BeagleBone Green and Grove IoT Starter Kit Powered by AWS",source:"@site/docs/Edge/Beagle_Bone/Kit_with_Courses/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS.md",sourceDirName:"Edge/Beagle_Bone/Kit_with_Courses",slug:"/Edge/Beagle_Bone/Kit_with_Courses/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS",permalink:"/docusaurus_wiki/Edge/Beagle_Bone/Kit_with_Courses/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Edge/Beagle_Bone/Kit_with_Courses/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"BeagleBone Green and Grove IoT Starter Kit Powered by AWS",title:"BeagleBone Green and Grove IoT Starter Kit Powered by AWS",keywords:["Beagle_Bone","Kit_with_Courses"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove Starter Kit for BeagleBone\xae Green",permalink:"/docusaurus_wiki/Edge/Beagle_Bone/Kit_with_Courses/Grove_Starter_Kit_for_BeagleBone_Green"},next:{title:"Getting Started",permalink:"/docusaurus_wiki/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Included in the Box",id:"included-in-the-box",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Configure Your AWS IoT Service",id:"configure-your-aws-iot-service",level:3},{value:"Setup your BeagleBone Green",id:"setup-your-beaglebone-green",level:3},{value:"Software Works",id:"software-works",level:3},{value:"Upload SDK and keys file to Cloud9 examples folder",id:"upload-sdk-and-keys-file-to-cloud9-examples-folder",level:4},{value:"Open a new terminal",id:"open-a-new-terminal",level:4},{value:"Programming on BBG",id:"programming-on-bbg",level:4},{value:"Run the Code",id:"run-the-code",level:4},{value:"View Result",id:"view-result",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Can&#39;t open 192.168.7.2",id:"cant-open-19216872",level:3},{value:"Firmware update",id:"firmware-update",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg_cover.JPG",alt:null})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113"},"BeagleBone Green")," (BBG) is a joint effort by BeagleBoard.org and Seeed Studio. It is based on the open-source hardware design of ",(0,o.kt)("a",{parentName:"p",href:"https://beagleboard.org/BLACK"},"BeagleBone Black")," and has added two Grove connectors. The kit contains the new BBG, 10 Grove modules as well as step-by-step tutorials to hook them up quickly. The Grove IoT Starter Kit includes most frequently used sensors and actuators to turn your ideas into tangible applications with AWS Cloud computing."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wwww.amazon.com/dp/B0168L6B0C"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Out-of-box, plug and play, no breadboard or soldering"),(0,o.kt)("li",{parentName:"ul"},"Fully compliant with AWS Services and AWS best practices"),(0,o.kt)("li",{parentName:"ul"},"Step-by-step tutorials for developers and makers to get started quickly")),(0,o.kt)("h2",{id:"included-in-the-box"},"Included in the Box"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg.JPG",alt:null})),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"configure-your-aws-iot-service"},"Configure Your AWS IoT Service"),(0,o.kt)("p",null,"At the very beginning, we need to get an AWS IoT service account, and do some configuring."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create an ",(0,o.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html"},"AWS Account"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot/"},"AWS IoT Console")," and open the AWS IoT Dashboard"),(0,o.kt)("p",{parentName:"li"},"  1.Click the ",(0,o.kt)("strong",{parentName:"p"},"Services")," on the top-left corner, and then click on AWS IoT, as shown in the image below."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_service.jpg",alt:null})),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  2.Click ",(0,o.kt)("strong",{parentName:"p"},"Get started")," button."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg",alt:null})),(0,o.kt)("p",{parentName:"li"},"  3.Click on ",(0,o.kt)("strong",{parentName:"p"},"Create a Resource")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Creat a thing"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg",alt:null})),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_view_a_thing.jpg",alt:null})),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_name_a_thing.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  4.Enter a name, whatever you like, here we name it temperature."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSCreateAThing.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  5.Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," to complete it and then click on ",(0,o.kt)("strong",{parentName:"p"},"View thing")," to get information of the thing you create."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSViewThing.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  6.Click on ",(0,o.kt)("strong",{parentName:"p"},"Connect a device"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConnectADevice.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  7.Choose Node JS and Click on ",(0,o.kt)("strong",{parentName:"p"},"Generate certificate and policy"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGenerate.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  8.You will find 3 files. Download the file, we need them later. And click on ",(0,o.kt)("strong",{parentName:"p"},"Confirm & start connecting"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConfirm.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"  9.Then we should download the AWS IoT Node.js SDK and click on ",(0,o.kt)("strong",{parentName:"p"},"Return to Thing Detail"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSReturn.png",alt:null})))),(0,o.kt)("p",null,"Now, this step is done. Let's move to the next step."),(0,o.kt)("h3",{id:"setup-your-beaglebone-green"},"Setup your BeagleBone Green"),(0,o.kt)("p",null,"Connect Grove modules to BBG as the picture below shows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSSetup.jpg",alt:null})),(0,o.kt)("h3",{id:"software-works"},"Software Works"),(0,o.kt)("h4",{id:"upload-sdk-and-keys-file-to-cloud9-examples-folder"},"Upload SDK and keys file to Cloud9 examples folder"),(0,o.kt)("p",null,"1.Do you still remember the 3 key files and Node JS SDK that you have already download before."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSFile.png",alt:null})),(0,o.kt)("p",null,"2.Now, upload the SDK and keys file to your Cloud9 examples folder."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload2.png",alt:null})),(0,o.kt)("h4",{id:"open-a-new-terminal"},"Open a new terminal"),(0,o.kt)("p",null,"We need unzip the SDK and move the keys to right place."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUNzip.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# cd examples\n")),(0,o.kt)("p",null,"And unzip the SDK file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# unzip aws-iot-device-sdk-js-latest.zip\n")),(0,o.kt)("p",null,"Then entering the unziped folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#cd aws-iot-device-sdk-js\n")),(0,o.kt)("p",null,"Install the dependent packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# npm install\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSMkdir.png",alt:null})),(0,o.kt)("p",null,"Create a new folder named awsCerts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# mkdir awsCerts && cd awsCerts\n")),(0,o.kt)("p",null,"And then move the 3 key files to the new folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# mv ../../31f2fd2680-* .\n")),(0,o.kt)("p",null,"Please note that 31f2fd2680 should be replaced by your own key files number."),(0,o.kt)("p",null,"And rename the key files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# mv 31f2fd2680-certificate.pem.crt.txt  certificate.pem.crt\n# mv 31f2fd2680-private.pem.key   private.pem.key\n")),(0,o.kt)("p",null,"Download a file from the internet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# wget https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem\n")),(0,o.kt)("p",null,"And rename the downloaded file as root-CA.crt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#mv VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem root-CA.crt\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRename.png",alt:null})),(0,o.kt)("h4",{id:"programming-on-bbg"},"Programming on BBG"),(0,o.kt)("p",null,"Enter the examples folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# cd .. && cd examples/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSexamples.png",alt:null})),(0,o.kt)("p",null,"Create a new file named grove","_","temperature","_","sensor.py."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# vim grove_temperature_sensor.py\n")),(0,o.kt)("p",null,"And copy the following code to the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#!/usr/bin/python\n# -*- coding: utf-8 -*-\n\xa0\nimport time\nimport math\nimport Adafruit_BBIO.GPIO as GPIO\nfrom Adafruit_I2C import Adafruit_I2C\nBUZZER = \"P9_22\"            # GPIO P9_22\nGPIO.setup(BUZZER, GPIO.OUT)\n\xa0\n# The threshold to turn the buzzer on 28 Celsius\nTHRESHOLD_TEMPERATURE = 28\nADDR_ADC121 = 0x50\n\xa0\nREG_ADDR_RESULT = 0x00\nREG_ADDR_ALERT = 0x01\nREG_ADDR_CONFIG = 0x02\nREG_ADDR_LIMITL = 0x03\nREG_ADDR_LIMITH = 0x04\nREG_ADDR_HYST = 0x05\nREG_ADDR_CONVL = 0x06\nREG_ADDR_CONVH = 0x07\n\xa0\ni2c = Adafruit_I2C(ADDR_ADC121)           \n\xa0\nclass I2cAdc:\n    def __init__(self):\n        i2c.write8(REG_ADDR_CONFIG, 0x20)\n\xa0\n    def read_adc(self):\n        \"Read ADC data 0-4095.\"\n        data_list = i2c.readList(REG_ADDR_RESULT, 2)\n        #print 'data list', data_list\n        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff\n        return data\nadc = I2cAdc()\n\xa0\n#   The argument in the read_temperature() method defines which Grove board(Grove Temperature Sensor) version you have connected.\n#   Defaults to 'v1.2'. eg.\n#       temp = read_temperature('v1.0')          # B value = 3975\n#       temp = read_temperature('v1.1')          # B value = 4250\n#       temp = read_temperature('v1.2')          # B value = 4250\ndef read_temperature(model = 'v1.2'):\n    \"Read temperature values in Celsius from Grove Temperature Sensor\"\n    # each of the sensor revisions use different thermistors, each with their own B value constant\n    if model == 'v1.2':\n        bValue = 4250  # sensor v1.2 uses thermistor\xa0??? (assuming NCP18WF104F03RC until SeeedStudio clarifies)\n    elif model == 'v1.1':\n        bValue = 4250  # sensor v1.1 uses thermistor NCP18WF104F03RC\n    else:\n        bValue = 3975  # sensor v1.0 uses thermistor TTC3A103*39H\n\xa0\n    total_value = 0\n    for index in range(20):\n        sensor_value = adc.read_adc()\n        total_value += sensor_value\n        time.sleep(0.05)\n    average_value = float(total_value / 20)\n\xa0\n    # Transform the ADC data into the data of Arduino platform.\n    sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)\n    resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp\n    temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)\n    return temperature\n\xa0\n# Function: If the temperature sensor senses the temperature that is up to the threshold you set in the code, the buzzer is ringing for 1s.\n# Hardware: Grove - I2C ADC, Grove - Temperature Sensor, Grove - Buzzer\n# Note: Use P9_22(UART2_RXD) as GPIO.\n# Connect the Grove Buzzer to UART Grove port of Beaglebone Green.\n# Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green, and then connect the Grove - Temperature Sensor to Grove - I2C ADC.\nif __name__ == '__main__':\n\xa0\n    while True:\n        try:\n            # Read temperature values in Celsius from Grove Temperature Sensor\n            temperature = read_temperature('v1.2')\n\xa0\n            # When the temperature reached predetermined value, buzzer is ringing.\n            if temperature > THRESHOLD_TEMPERATURE:\n                # Send HIGH to switch on BUZZER\n                GPIO.output(BUZZER, GPIO.HIGH)\n            else:\n                # Send LOW to switch off BUZZER\n                GPIO.output(BUZZER, GPIO.LOW)\n\xa0\n            print \"temperature = \", temperature\n\xa0\n        except KeyboardInterrupt:\n            GPIO.output(BUZZER, GPIO.LOW)\n            break\n\xa0\n        except IOError:\n            print \"Error\"\n")),(0,o.kt)("p",null,"Create a new file named python","_","sensor.py."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#vim  python_sensor.py\n")),(0,o.kt)("p",null,"Copy the following code to the new file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import socket\nimport grove_temperature_sensor\nif __name__ == \"__main__\":\n    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    client.connect(('127.0.0.1', 7000))\n\xa0\n    while True:\n        temperature = grove_temperature_sensor.read_temperature('v1.2')\n    print temperature\n        client.sendall(str('%.2f'%temperature))\n    data = client.recv(1024)\n    print data\n    client.close()\n\xa0\n    print 'Received', repr(data)\n")),(0,o.kt)("p",null,"Create a new file named rgbled.js."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#vim rgbled.js\n")),(0,o.kt)("p",null,"And copy the following code to the new file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'var exec = require(\'child_process\').exec; \nvar value = 0;\n\xa0\nexports.initpins = function(){\n    exec("echo 3 > /sys/class/gpio/export",function(error,stdout,stderr){\n        if(error) \n                console.info(\'stderr\xa0: \'+stderr);\n    });\n    exec("echo out > /sys/class/gpio/gpio3/direction",function(error,stdout,stderr){\n                if(error) \n                        console.info(\'stderr\xa0: \'+stderr);\n        });\n\xa0\n    exec("echo 2 > /sys/class/gpio/export",function(error,stdout,stderr){\n                if(error) \n                        console.info(\'stderr\xa0: \'+stderr);\n        });\n\xa0\n    exec("echo out > /sys/class/gpio/gpio2/direction",function(error,stdout,stderr){\n                if(error) \n                        console.info(\'stderr\xa0: \'+stderr);\n        });\n\xa0\n}\ndigitalwrite = function(pin,state){\n    exec("echo "+state.toString()+" > /sys/class/gpio/gpio"+pin.toString()+"/value",\n        function(error,stdout,stderr){\n                    if(error) \n                            console.log(\'stderr\xa0: \'+stderr);\n        });\n\xa0\n}\nsleep = function(sleepTime) {\n    for(var start = +new Date; +new Date - start <= sleepTime; ) { }\n}\nclk = function(){\n        digitalwrite(2,0);\n        sleep(2);\n                digitalwrite(2,1);\n        sleep(2);\n}\nsendByte = function(b){\n    for(var i = 0 ; i < 8 ;i++){\n        if((b & 0x80) != 0)\n            digitalwrite(3,1);\n        else\n            digitalwrite(3,0);\n        clk();\n        b = b << 1; \n    }\n}\nsetColor = function(red,green,blue){\n    var prefix = 0xc0;\n    if((blue & 0x80) == 0)\n        prefix |= 0x20;\n    if((blue & 0x40) == 0)\n        prefix |= 0x10;\n    if((green & 0x80) == 0)\n        prefix |= 0x08;\n    if((green & 0x40) == 0)\n        prefix |= 0x04;\n    if((red & 0x80) == 0)\n        prefix |= 0x02;\n    if((red & 0x40) == 0)\n        prefix |= 0x01;\n    sendByte(prefix);\n    sendByte(blue);\n    sendByte(green);\n    sendByte(red);\n}\nexports.setColorRGB = function(led,red,green,blue){\n    sendByte(0x00);\n    sendByte(0x00);\n    sendByte(0x00);\n    sendByte(0x00);\n    for(var i = 0; i < led; i++ ){\n        setColor(red,green,blue);\n    }\n    sendByte(0x00);\n    sendByte(0x00);\n    sendByte(0x00);\n    sendByte(0x00);\n    console.log("set rgb");\n}\ntest = function(){\n    initpins();\n    while(1){\n    console.log("loop");\n        setColorRGB(1, 255, 0, 0)\n        setColorRGB(1, 0, 255, 0)\n        setColorRGB(1, 0, 0, 255)\n        setColorRGB(1, 0, 255, 255)\n        setColorRGB(1, 255, 0, 255)\n        setColorRGB(1, 255, 255, 0)\n        setColorRGB(1, 255, 255, 255)\n    }\n}\n')),(0,o.kt)("p",null,"Create a new file named shadow.js."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#vim shadow.js\n")),(0,o.kt)("p",null,"Copy the following code to the new file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var awsIot = require('..');\nvar net = require('net');\nvar rgbled = require('./rgbled.js');\nvar exec = require('child_process').exec;    \nvar myThingName = 'temperature';\nvar thingShadows = awsIot.thingShadow({\n   keyPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/private.pem.key',\n  certPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/certificate.pem.crt',\n    caPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/root-CA.crt',\n  clientId: 'myAwsClientId',\n    region: 'us-west-2'\n});\nvar HOST = '127.0.0.1';\nvar PORT = 7000;\nvar temperature = 25;\nvar red = 0;\nvar green = 0;\nvar blue = 0;\n// Create a server instance, and chain the listen function to it\nnet.createServer(function(socket) {\n    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);\n            // Add a 'data' event handler to this instance of socket\n    socket.on('data', function(data) {\n        console.log('DATA ' + socket.remoteAddress + ': ' + data);\n        temperature = data.toString().substr(0,5);\n        socket.write('This is your request: \"' + data + '\"');\n    });\n    // Add a 'close' event handler to this instance of socket\n    socket.on('close', function(data) {\n        console.log('Socket connection closed... ');\n    });\n}).listen(PORT, HOST);\n//\n// Thing shadow state\n//\nvar rgbLedLampState = {\"state\":{\"desired\":{\"red\":187,\"green\":114,\"blue\":222,value:25}}};\n\xa0\n//\n// Client token value returned from thingShadows.update() operation\n//\nvar clientTokenUpdate;\n\xa0\nthingShadows.on('connect', function() {\n//\n// After connecting to the AWS IoT platform, register interest in the\n// Thing Shadow named 'RGBLedLamp'.\n//\n    thingShadows.register( myThingName );\n//\n// 2 seconds after registering, update the Thing Shadow named \n// 'RGBLedLamp' with the latest device state and save the clientToken\n// so that we can correlate it with status or timeout events.\n//\n// Note that the delay is not required for subsequent updates; only\n// the first update after a Thing Shadow registration using default\n// parameters requires a delay.  See API documentation for the update\n// method for more details.\n//\n    exec('python python_sensor.py',function(error,stdout,stderr){\n            if(stdout.length >1){\n                console.log('you offer args:',stdout);\n            }else {\n                console.log('you don\\'t offer args');\n            }\n            if(error) {\n                console.info('stderr\xa0: '+stderr);\n            }});\n    rgbled.initpins();\n    setTimeout( function() {\n       clientTokenUpdate = thingShadows.update(myThingName, rgbLedLampState );\n       }, 2000 );\n    });\nsetInterval(function(){\n        new_data = {\"state\":{\"desired\":{\"red\":187,\"green\":114,\"blue\":222,value:temperature.toString()}}};\n        //new_data = {\"state\":{\"desired\":{\"value\":temperature.toString()}}};\n        console.log(new_data);\n       clientTokenUpdate = thingShadows.update(myThingName, new_data )\n},2000);\nthingShadows.on('status', \n    function(thingName, stat, clientToken, stateObject) {\n       console.log('received '+stat+' on '+thingName+': '+\n                   JSON.stringify(stateObject));\n    });\n\xa0\nthingShadows.on('delta', \n    function(thingName, stateObject) {\n       console.log('received delta '+' on '+thingName+': '+\n                   JSON.stringify(stateObject));\n        //console.log(stateObject[\"state\"]);\n    if(stateObject[\"state\"][\"red\"]      != red ||\n       stateObject[\"state\"][\"green\"]  != green||\n      stateObject[\"state\"][\"blue\"]    != blue)\n            rgbled.setColorRGB(1,stateObject[\"state\"][\"red\"],\n                        stateObject[\"state\"][\"green\"],\n                        stateObject[\"state\"][\"blue\"]);\n\xa0\n    red = stateObject[\"state\"][\"red\"];\n    green = stateObject[\"state\"][\"green\"];\n    blue = stateObject[\"state\"][\"blue\"];\n    });\n\xa0\nthingShadows.on('timeout',\n    function(thingName, clientToken) {\n       console.log('received timeout '+' on '+thingName+': '+\n                   clientToken);\n    });\n")),(0,o.kt)("p",null,"Please note that, the value of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"myThingName"))," in the 5 line should be the same as your Thing name that you have already create before in your AWS account."),(0,o.kt)("h4",{id:"run-the-code"},"Run the Code"),(0,o.kt)("p",null,"When the BBG reboot done, run the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# cd examples/aws-iot-device-sdk-js/examples/\n# node shadow.js\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRun.png",alt:null})),(0,o.kt)("h3",{id:"view-result"},"View Result"),(0,o.kt)("p",null,"Then let's open ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot/"},"AWS IoT")," website, sign in to your account. And click the thing you created minutes ago. Now you can see the temperature was upload to website."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSResult.png",alt:null})),(0,o.kt)("p",null,"If you want change the grove chainable led color. You can update the shadow value. eg:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSChange.png",alt:null})),(0,o.kt)("p",null,"You can see the BBG get the new RGB value."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRGB.png",alt:null})),(0,o.kt)("p",null,"And the Grove - Chainable RGB LED alse turned into green."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGreen.png",alt:null})),(0,o.kt)("p",null,"Put hand on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/iot-dg.pdf"},"AWS IoT Services Getting Started Guide")," to get more information about AWS IoT."),(0,o.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,o.kt)("h3",{id:"cant-open-19216872"},"Can't open 192.168.7.2"),(0,o.kt)("p",null,"Please update the latest software if you can't open 192.168.7.2."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","1: Download the latest software image.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("font",{color:"Blue"},"Updated time: 11/15/15"))),(0,o.kt)("p",null,"Download the latest image from ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing"},"google drive")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_4.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","2: Install compression utility")),(0,o.kt)("p",null,"Download and install ",(0,o.kt)("a",{parentName:"p",href:"http://www.7-zip.org/download.html"},"7-zip"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","3: Decompress the image")),(0,o.kt)("p",null,"Use 7-zip to decompress the .img file on the desktop or other folder."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","4: Install SD card programming utility")),(0,o.kt)("p",null,"Download and install ",(0,o.kt)("a",{parentName:"p",href:"http://sourceforge.net/projects/win32diskimager/files/latest/download"},"Image Writer for Windows"),". Be sure to download the binary distribution."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_2.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","5: Connect SD card to your computer")),(0,o.kt)("p",null,"Use an 8G microSD card at least to SD adapter or a USB adapter to connect the SD card to your computer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","6: Write the image to your SD card")),(0,o.kt)("p",null,"Use either the Ubuntu Image Writer or instructions on its page to write the decompressed image to your SD card."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_3.png",alt:null})),(0,o.kt)("div",{className:"admonition danger"},(0,o.kt)("p",{className:"admonition-title"},"Notes"),(0,o.kt)("p",null," 1. You may see a warning about damaging your device. This is fine to accept as long as you are pointing to your SD card for writing."),(0,o.kt)("p",null," 2. You should not have your BeagleBone connected to your computer at this time.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","7: Eject the SD card")),(0,o.kt)("p",null,"Eject the newly programmed SD card."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step ","#","8: Boot your board off of the SD card")),(0,o.kt)("p",null,"Insert SD card into your (powered-down) board and apply power, either by the USB cable or 5V adapter. You'll see flash led if getting started, and this reboot will take up to 10 minutes. The latest Debian flasher images automatically power down the board upon completion. Power-down your board, remove the SD card and apply power again to be complete."),(0,o.kt)("p",null,"Good Luck."),(0,o.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing"},"Updated by 11/15/15"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix the problem of not being able to access 192.168.7.2"),(0,o.kt)("li",{parentName:"ul"},"Win 10 supported now")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_IoT_Developer_Guide.pdf"},"\u3010PDF\u3011AWS IoT Developer Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_User_Guide_for_BBG.pdf"},"\u3010PDF\u3011AWS User Guide for BBG")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/AWS_SDK_for_BBG"},"\u3010Github\u3011AWS SDK for BeagleBone Green kit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG"},"\u3010Github\u3011Libraries for BeagleBone Green kit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://beagleboard.org/getting-started"},"Main page of Beagleboard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C_Hub"},"Grove - I2C Hub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Sensor/Grove/Grove_Accessories/Display/Grove-OLED_Display_0.96inch"},"Grove - OLED Display 96","*","96")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Button"},"Grove - Button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2"},"Grove - Temperature sensor v1.2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor"},"Grove - Sound sensor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer-16g"},"Grove - 3-Axis Digital Accelerometer ADXL345"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);