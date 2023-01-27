"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[20742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={description:"ODYSSEY - X86J4105",title:"Azure IoT",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,l={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT",title:"Azure IoT",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105",slug:"/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT",permalink:"/docusaurus_wiki/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT.md",tags:[{label:"ODYSSEY",permalink:"/docusaurus_wiki/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"Azure IoT",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Installing Android-x86",permalink:"/docusaurus_wiki/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-Android"},next:{title:"Installing FreeNAS",permalink:"/docusaurus_wiki/Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-FreeNAS"}},s={},u=[{value:"Receiving Raw Data",id:"receiving-raw-data",level:2},{value:"Visulization of Data",id:"visulization-of-data",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Prerequireties",id:"prerequireties",level:2},{value:"Azure CLI Pre-configurations",id:"azure-cli-pre-configurations",level:2},{value:"Log into Azure",id:"log-into-azure",level:3},{value:"Adding Microsoft IoT Azure Extensions for Azure CLI",id:"adding-microsoft-iot-azure-extensions-for-azure-cli",level:3},{value:"Creating an IoT Hub",id:"creating-an-iot-hub",level:2},{value:"Register a Device",id:"register-a-device",level:2},{value:"Note:",id:"note",level:3},{value:"Note:",id:"note-1",level:3},{value:"Collecting Data using Arduino Core",id:"collecting-data-using-arduino-core",level:2},{value:"Arduino Code",id:"arduino-code",level:3},{value:"Sending Light Sensor Readings to Azure IoT Hub",id:"sending-light-sensor-readings-to-azure-iot-hub",level:2},{value:"Python Code",id:"python-code",level:3},{value:"Reading Data from Azure IoT Hub",id:"reading-data-from-azure-iot-hub",level:2},{value:"Note:",id:"note-2",level:3},{value:"Real-time visualization of Sensor data Using Microsoft Power BI",id:"real-time-visualization-of-sensor-data-using-microsoft-power-bi",level:2},{value:"Add a consumer group to your IoT Hub",id:"add-a-consumer-group-to-your-iot-hub",level:2},{value:"Create, configure and run a Stream Analytic Job",id:"create-configure-and-run-a-stream-analytic-job",level:2},{value:"Add an Input to the Stream Analytics job",id:"add-an-input-to-the-stream-analytics-job",level:2},{value:"Add an Output to the Stream Analytics Job",id:"add-an-output-to-the-stream-analytics-job",level:2},{value:"Configure the query of the Stream Analytics job",id:"configure-the-query-of-the-stream-analytics-job",level:2},{value:"Run the Stream Analytics job",id:"run-the-stream-analytics-job",level:2},{value:"Create and publish a Power BI report to visulize data",id:"create-and-publish-a-power-bi-report-to-visulize-data",level:2},{value:"Further Development",id:"further-development",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edge-iot---sending-sensor-data-to-cloud"},"Edge IoT - Sending Sensor Data to Cloud"),(0,r.kt)("p",null,"This tutorial demonstrate how to read sensor values connnected to the ODYSSEY - X86J4105 and sends the data to ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Azure IoT Hub"),", where this data can be displayed or  processed for further IoT applications."),(0,r.kt)("h2",{id:"receiving-raw-data"},"Receiving Raw Data"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/receivingData.gif"})),(0,r.kt)("h2",{id:"visulization-of-data"},"Visulization of Data"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/visulizeData.jpg"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/iot-hub/"},"IoT Hub")," is an Microsoft Azure service that enables you to ingest high volumes of telemetry from your IOT devices into cloud for storing or processing."),(0,r.kt)("h2",{id:"prerequireties"},"Prerequireties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/windows/"},"Python 3")," on ODYSSEY - X86J4105")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Microsoft Azure account. If you don't have one, create a ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/free/?WT.mc_id=A261C142F"},"free account")," before you begin.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download and Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"},"Azure CLI"),", a command-line tool for managing Azure resources."))),(0,r.kt)("p",null,"Once installed Azure CLI, open ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"az")," command and you should see screen as below:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/AzureCLI.png"})),(0,r.kt)("h2",{id:"azure-cli-pre-configurations"},"Azure CLI Pre-configurations"),(0,r.kt)("h3",{id:"log-into-azure"},"Log into Azure"),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell")," and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"az login")," command. A browser window will appear and log in your Microsoft Azure account."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/azAcc.png"})),(0,r.kt)("h3",{id:"adding-microsoft-iot-azure-extensions-for-azure-cli"},"Adding Microsoft IoT Azure Extensions for Azure CLI"),(0,r.kt)("p",null,"Run the following command to add the Microsoft Azure IoT Extension for Azure CLI to your Cloud Shell instance. The IOT Extension adds IoT Hub, IoT Edge, and IoT Device Provisioning Service (DPS) specific commands to Azure CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"az extension add --name azure-cli-iot-ext\n")),(0,r.kt)("h2",{id:"creating-an-iot-hub"},"Creating an IoT Hub"),(0,r.kt)("p",null,"This part describes how to create an IoT Hub using Azure portal:"),(0,r.kt)("p",null,"1.Sign in to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},(0,r.kt)("strong",{parentName:"a"},"Azure portal")),"."),(0,r.kt)("p",null,"2.Choose ",(0,r.kt)("strong",{parentName:"p"},"Create an resource"),", and ",(0,r.kt)("em",{parentName:"p"},"Search the Marketplace")," ",(0,r.kt)("strong",{parentName:"p"},"IoT Hub"),"."),(0,r.kt)("p",null,"3.Select ",(0,r.kt)("strong",{parentName:"p"},"IoT Hub")," and click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("p",null,"4.On the ",(0,r.kt)("strong",{parentName:"p"},"Basics")," tab, complete the field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Subscription:")," Select the subscription to use for your hub.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource Group:")," Select a resource group or create a new one. To create a new one, select ",(0,r.kt)("strong",{parentName:"p"},"Create new")," and fill in the name you want to use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Region:")," Select the region in which your hub to be located. Select the region that is closest to you.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IoT Hub Name:")," Enter a name for your IoT hub. This name must be globally unique. If name is available, a green check mark will appear."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Note:")," the IoT hub will be pubilicity discoverable as a DNS endpoint, so ensure to avoid any sensitive information while naming the IoT Hub."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHub.jpg"})),(0,r.kt)("p",null,"1.Select ",(0,r.kt)("strong",{parentName:"p"},"Next: Size and scale")," to continue:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pricing and scale tier:")," Select ",(0,r.kt)("strong",{parentName:"li"},"F1: Free tier")," for now. You can choose from several tiers, depending on how many features and how many messages you send through your solution per day.")),(0,r.kt)("p",null,"2.Select ",(0,r.kt)("strong",{parentName:"p"},"Review + create")," tab to review settings and click ",(0,r.kt)("strong",{parentName:"p"},"Create")," to create your new IoT Hub. Creating the IoT might take few minutes."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHubProcess.jpg"})),(0,r.kt)("h2",{id:"register-a-device"},"Register a Device"),(0,r.kt)("p",null,"A device must be registered with your IoT Hub before it can connect:"),(0,r.kt)("p",null,"1.Run the following command in ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell")," to add the IoT Hub CLI extension and to create the device identity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"az iot hub device-identity create --hub-name iot-test-1 --device-id MyPythonDevice\n")),(0,r.kt)("h3",{id:"note"},"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hub-name")," -> Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"iot-test-1")," with your created IoT Hub name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"device-id")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPythonDevice"),". This is the name of the device that is registering. In my case, MyPythonDevice is the device id. "))),(0,r.kt)("p",null,"2.Run the following commands to get the ",(0,r.kt)("em",{parentName:"p"},"device connection string")," for the device we registered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"az iot hub device-identity show-connection-string --hub-name iot-test-1 --device-id MyPythonDevice --output table\n")),(0,r.kt)("p",null,"Make a note of the device connection string, which looks like: ",(0,r.kt)("inlineCode",{parentName:"p"},"HostName={YourIoTHubName}.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey={YourSharedAccessKey}"),". This will be used later."),(0,r.kt)("h3",{id:"note-1"},"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace your ",(0,r.kt)("inlineCode",{parentName:"li"},"hub-name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"device-id"),", the same as above.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/deviceID.png"})),(0,r.kt)("h2",{id:"collecting-data-using-arduino-core"},"Collecting Data using Arduino Core"),(0,r.kt)("p",null,"This section simply use Arduino core to read sensor values and prints the readings to the Serial monitor, which can be read using python from elsewhere."),(0,r.kt)("p",null,"1.Follow Getting Started to download, install and configure ",(0,r.kt)("strong",{parentName:"p"},"Arduino IDE"),"."),(0,r.kt)("p",null,"2.Connect a Grove Light sensor signal wire to ",(0,r.kt)("strong",{parentName:"p"},"A0")," of ODYSSEY - X86J4105, and also power and ground. Please refer to to Pinout diagram in Getting Started for more information."),(0,r.kt)("p",null,"3.Upload the following Code to ODYSSEY - X86J4105 using Arduino IDE. Remember to select the correct ",(0,r.kt)("strong",{parentName:"p"},"Board")," and ",(0,r.kt)("strong",{parentName:"p"},"Port"),". Make a note of the ",(0,r.kt)("strong",{parentName:"p"},"Port")," here, which will be used later. In my case, the port is ",(0,r.kt)("inlineCode",{parentName:"p"},"COM4"),". "),(0,r.kt)("h3",{id:"arduino-code"},"Arduino Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#define LIGHT A0\n#define Serial SerialUSB\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(115200);\n  pinMode(LIGHT, INPUT);\n\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  int state = analogRead(LIGHT);\n  Serial.println(state);\n  \n  delay(500);\n\n}\n")),(0,r.kt)("p",null,"4.Open ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," in Arduino IDE to check if the program is running correctly."),(0,r.kt)("h2",{id:"sending-light-sensor-readings-to-azure-iot-hub"},"Sending Light Sensor Readings to Azure IoT Hub"),(0,r.kt)("p",null,"The light sensor readings are printed to Serial, and Python is used to extract this data an send to Azure IoT Hub."),(0,r.kt)("p",null,"1.Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell")," and run the following command to install the required python libraries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install azure-iot-device\npip install pyserial\n")),(0,r.kt)("p",null,"2.Copy the following Python code and Save it to your Local Drive. Use a text editor to make the following changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"serialPort")," variable to the Serial Port that we made a note easier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECTION_STRING")," variable with the device connection string that we also made a note earlier."))),(0,r.kt)("h3",{id:"python-code"},"Python Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Copyright (c) Microsoft. All rights reserved.\n# Licensed under the MIT license. See LICENSE file in the project root for full license information.\n\nimport time\nimport serial\n\n\n# Using the Python Device SDK for IoT Hub:\n#   https://github.com/Azure/azure-iot-sdk-python\n# The sample connects to a device-specific MQTT endpoint on your IoT Hub.\nfrom azure.iot.device import IoTHubDeviceClient, Message\n\n# Settings for reading from Arduino Serial\nserialPort= "COM4" #Change it to your Serial Port, Check in Arudino IDE \nbaudRate = 115200\nser = serial.Serial(serialPort, baudRate, timeout=0.5)\n\n# The device connection string to authenticate the device with your IoT hub.\n# Using the Azure CLI:\n# az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table\nCONNECTION_STRING = "HostName=iot-test-1.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\n\n# Define the JSON message to send to IoT Hub.\nMSG_TXT = \'{{"Light": {light}}}\'\n\ndef iothub_client_init():\n    # Create an IoT Hub client\n    client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)\n    return client\n\ndef iothub_client_telemetry_sample_run():\n\n    try:\n        client = iothub_client_init()\n        print ( "IoT Hub device sending periodic messages, press Ctrl-C to exit" )\n\n        while True:\n            # Build the message with simulated telemetry values.\n            time.sleep(0.1)\n            light = ser.readline().decode("UTF-8")[:-2]\n            if light:\n              msg_txt_formatted = MSG_TXT.format(light=light)\n              message = Message(msg_txt_formatted)\n\n              # Send the message.\n              print( "Sending message: {}".format(message) )\n              client.send_message(message)\n              print ( "Message successfully sent" )\n              time.sleep(1)\n\n\n    except KeyboardInterrupt:\n        print ( "IoTHubClient sample stopped" )\n        ser.close()\n\nif __name__ == \'__main__\':\n    print ( "IoT Hub Quickstart #1 - Simulated device" )\n    print ( "Press Ctrl-C to exit" )\n    iothub_client_telemetry_sample_run()\n')),(0,r.kt)("p",null,"3.In ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell"),", navigate to the directory that you just saved the python file. Run the Python script to send the sensor data to Azure IoT Hub."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In my case, the Python file is named ",(0,r.kt)("inlineCode",{parentName:"p"},"SendingData.py"),", change the command to the name you saved the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 SendingData.py\n")),(0,r.kt)("p",null,"The following screenshot shows the output of sending sensor data to Azure IoT Hub."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/sendingData.png"})),(0,r.kt)("h2",{id:"reading-data-from-azure-iot-hub"},"Reading Data from Azure IoT Hub"),(0,r.kt)("p",null,"The IoT Hub CLI extension can connect to the service-side Events endpoint on IoT Hub. The extension receives the device-to-cloud messages sent from our device."),(0,r.kt)("p",null,"Run the following command in any terminal and you can start monitoring messages sent to the Azure IoT Hub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"az iot hub monitor-events --hub-name iot-test-1 --device-id MyPythonDevice\n")),(0,r.kt)("h3",{id:"note-2"},"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace your ",(0,r.kt)("inlineCode",{parentName:"li"},"hub-name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"device-id"),", the same as above.")),(0,r.kt)("p",null,"The following screenshot shows the messages sent from ODYSSEY - X86J4105 to the Iot Hub. This data can be processed or displayed."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/recevingData.jpg"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"real-time-visualization-of-sensor-data-using-microsoft-power-bi"},"Real-time visualization of Sensor data Using Microsoft Power BI"),(0,r.kt)("p",null,"In this section, we will process to display the light sensor reading in real-time using ",(0,r.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/"},"Microsoft Power BI"),". If you don't have a Power BI account, sign up a free a account before you begin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Make sure you have followed all the previous steps and messages can be receive by the IoT Hub sucessfully.")),(0,r.kt)("h2",{id:"add-a-consumer-group-to-your-iot-hub"},"Add a consumer group to your IoT Hub"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/azure/event-hubs/event-hubs-features#event-consumers"},"Consumer groups")," provide independent views into the event stream that enable apps and Azure services to independently consume data from the same Event Hub endpoint."),(0,r.kt)("p",null,"To add a consumer group:"),(0,r.kt)("p",null,"1.Sign in to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},(0,r.kt)("strong",{parentName:"a"},"Azure portal")),"."),(0,r.kt)("p",null,"2.Open your IoT Hub, select ",(0,r.kt)("strong",{parentName:"p"},"Built-in endpoints"),", under ",(0,r.kt)("strong",{parentName:"p"},"Consumer Groups")," enter a name to create a new consumer group, and ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/endpoint.jpg"})),(0,r.kt)("p",null,"In my case, ",(0,r.kt)("inlineCode",{parentName:"p"},"lightsensor")," is the new consumer group."),(0,r.kt)("h2",{id:"create-configure-and-run-a-stream-analytic-job"},"Create, configure and run a Stream Analytic Job"),(0,r.kt)("p",null,"To create a Stream Analytic Job:"),(0,r.kt)("p",null,"3.Sign in to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},(0,r.kt)("strong",{parentName:"a"},"Azure portal")),"."),(0,r.kt)("p",null,"4.Choose ",(0,r.kt)("strong",{parentName:"p"},"Create an resource"),", and ",(0,r.kt)("em",{parentName:"p"},"Search the Marketplace")," ",(0,r.kt)("strong",{parentName:"p"},"Stream Analytics job"),"."),(0,r.kt)("p",null,"5.Select ",(0,r.kt)("strong",{parentName:"p"},"Stream Analytics job")," and click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("p",null,"6.Complete the field as follow, and ",(0,r.kt)("strong",{parentName:"p"},"Create"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Job name:")," The name of the job. The name must be globally unique. In my case, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"light-analytic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource group:")," Use the same resource group that your IoT hub uses.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Location:")," Use the same location as your resource group."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/analytic.jpg"})),(0,r.kt)("h2",{id:"add-an-input-to-the-stream-analytics-job"},"Add an Input to the Stream Analytics job"),(0,r.kt)("p",null,"1.Open the Stream Analytics job"),(0,r.kt)("p",null,"2.Under ",(0,r.kt)("strong",{parentName:"p"},"Job topology")," click ",(0,r.kt)("strong",{parentName:"p"},"Inputs"),"."),(0,r.kt)("p",null,"3.Click ",(0,r.kt)("strong",{parentName:"p"},"Add stream input")," -> ",(0,r.kt)("strong",{parentName:"p"},"IoT Hub")),(0,r.kt)("p",null,"4.Complete the field as follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input alias:")," Your input name. This can be anything.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IoT Hub:")," Choose the one we used all along.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consumer group"),": Choose the one we just created."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/settings.jpg"})),(0,r.kt)("p",null,"1.Select ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h2",{id:"add-an-output-to-the-stream-analytics-job"},"Add an Output to the Stream Analytics Job"),(0,r.kt)("p",null,"2.Open the Stream Analytics job"),(0,r.kt)("p",null,"3.Under ",(0,r.kt)("strong",{parentName:"p"},"Job topology")," click ",(0,r.kt)("strong",{parentName:"p"},"Outputs"),"."),(0,r.kt)("p",null,"4.Click ",(0,r.kt)("strong",{parentName:"p"},"Add")," -> ",(0,r.kt)("strong",{parentName:"p"},"Power BI")),(0,r.kt)("p",null,"5.",(0,r.kt)("strong",{parentName:"p"},"Authorize")," with your Microsoft Power BI account."),(0,r.kt)("p",null,"6.Complete the field as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output alias:")," Your output name. This also be can anything.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Authentication mode:")," Choose User token."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/powerBI.jpg"})),(0,r.kt)("p",null,"7.Select ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h2",{id:"configure-the-query-of-the-stream-analytics-job"},"Configure the query of the Stream Analytics job"),(0,r.kt)("p",null,"1.Under ",(0,r.kt)("strong",{parentName:"p"},"Job topology")," click ",(0,r.kt)("strong",{parentName:"p"},"Query"),"."),(0,r.kt)("p",null,"2.Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"[YourInputAlias]")," with the input alias. In my case, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"SensorReadings"),"."),(0,r.kt)("p",null,"3.Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"[YourOutputAlias]")," with the output alias. In my case, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"SensorOutput"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBIsettings.jpg"})),(0,r.kt)("h2",{id:"run-the-stream-analytics-job"},"Run the Stream Analytics job"),(0,r.kt)("p",null,"1.Under ",(0,r.kt)("strong",{parentName:"p"},"Overview")," click ",(0,r.kt)("strong",{parentName:"p"},"Start")," -> ",(0,r.kt)("strong",{parentName:"p"},"Now")," -> ",(0,r.kt)("strong",{parentName:"p"},"Start"),". The job status changes from ",(0,r.kt)("strong",{parentName:"p"},"Stopped")," to ",(0,r.kt)("strong",{parentName:"p"},"Running"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/run.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: To start getting sensor readings, remember to run the Python script in ODYSSEY - X86J4105 to send data to cloud.")),(0,r.kt)("h2",{id:"create-and-publish-a-power-bi-report-to-visulize-data"},"Create and publish a Power BI report to visulize data"),(0,r.kt)("p",null,"1.Sign in to your ",(0,r.kt)("a",{parentName:"p",href:"https://app.powerbi.com/signupredirect?pbi_source=web"},"Power BI")," account."),(0,r.kt)("p",null,"2.Under ",(0,r.kt)("strong",{parentName:"p"},"Workplaces")," -> ",(0,r.kt)("strong",{parentName:"p"},"My workspace"),", select ",(0,r.kt)("strong",{parentName:"p"},"Datasets")," and you should see the datasheet you specified earlier."),(0,r.kt)("p",null,"3.Under ",(0,r.kt)("strong",{parentName:"p"},"Actions")," select the ",(0,r.kt)("strong",{parentName:"p"},"first icon(Create report)")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI1.jpg"})),(0,r.kt)("p",null,"4.Create a line chart to show real-time light sensor value over time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Visualizations")," select ",(0,r.kt)("strong",{parentName:"p"},"Line chart"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under Fields select ",(0,r.kt)("strong",{parentName:"p"},"EventEnqueuedUtcTime"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under Fields select ",(0,r.kt)("strong",{parentName:"p"},"Light"),"."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI2.jpg"})),(0,r.kt)("p",null,"5.Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," to save Report."),(0,r.kt)("p",null,"6.Click ",(0,r.kt)("strong",{parentName:"p"},"File")," -> ",(0,r.kt)("strong",{parentName:"p"},"Publish to web")," -> ",(0,r.kt)("strong",{parentName:"p"},"Create embed code")," -> ",(0,r.kt)("strong",{parentName:"p"},"Publish")),(0,r.kt)("p",null,"Now you can view the sensor reading on a dashboard via Power BI!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI3.jpg"})),(0,r.kt)("p",null,"Microsoft also offers the ",(0,r.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/documentation/powerbi-power-bi-apps-for-mobile-devices/"},"Power BI mobile apps")," for viewing and interacting with your Power BI dashboards and reports on your mobile device."),(0,r.kt)("h2",{id:"further-development"},"Further Development"),(0,r.kt)("p",null,"You've successfully set up your ODYSSEY - X86J4105 for one of the IoT scenario, you can now implement this and build your own IoT solutions!"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For more technical support please visit ",(0,r.kt)("a",{parentName:"em",href:"https://azure.microsoft.com/en-us/overview/iot/"},"Azure IoT"),".")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);