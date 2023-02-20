"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={description:"Gesture Recognition with Wio Terminal",title:"Gesture Recognition with Wio Terminal",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/30/2023",author:"jianjing Huang"}},o="Machine Learning with Wio Terminal - Gesture Recognition",l={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-Gesture-Recognition",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-Gesture-Recognition",title:"Gesture Recognition with Wio Terminal",description:"Gesture Recognition with Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-Gesture-Recognition.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite",slug:"/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-Gesture-Recognition",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-Gesture-Recognition",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-Gesture-Recognition.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Gesture Recognition with Wio Terminal",title:"Gesture Recognition with Wio Terminal",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Speech Recognition and Speech-to-Intent",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-3"},next:{title:"LoRa Node with AIoTs GPS",permalink:"/docusaurus_wiki/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/AIoTs_GPS_state_tester"}},s={},p=[{value:"Part List",id:"part-list",level:2},{value:"Features",id:"features",level:2},{value:"Arduino Libraries Needed",id:"arduino-libraries-needed",level:2},{value:"Training IMU data from the Wio Terminal",id:"training-imu-data-from-the-wio-terminal",level:2},{value:"Capturing Gestures Training Data",id:"capturing-gestures-training-data",level:2},{value:"Checking the <code>.csv</code> Files",id:"checking-the-csv-files",level:2},{value:"Training Data in TensorFlow",id:"training-data-in-tensorflow",level:2},{value:"Modifications in Google Colab Project",id:"modifications-in-google-colab-project",level:2},{value:"Uploading the Code on Wio Terminal",id:"uploading-the-code-on-wio-terminal",level:2},{value:"Example Model Files",id:"example-model-files",level:2},{value:"Further Development",id:"further-development",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"machine-learning-with-wio-terminal---gesture-recognition"},"Machine Learning with Wio Terminal - Gesture Recognition"),(0,a.kt)("p",null,"This tutorial will demonstrates how to use Wio Terminal to set up a simple gesture recognition machine learning demo with the help of ",(0,a.kt)("strong",{parentName:"p"},"TensorFlow Lite"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif"})),(0,a.kt)("p",null,"This example is modified from the official demo of Arduino team together with TensorFlow Lite team. For more information and reference, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://blog.arduino.cc/2019/10/15/get-started-with-machine-learning-on-arduino/"},"Get started with machine learning on Arduino"),". Some modifications are done to make the demo compatible with Wio Terminal."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Reference:")," ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/tensorflow/how-to-get-started-with-machine-learning-on-arduino-7daf95b4157"},"How-to Get Started with Machine Learning on Arduino")),(0,a.kt)("h2",{id:"part-list"},"Part List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html"},"Wio Terminal Battery Chassis")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Machine Learning on Wio Terminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gestures Recognition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TensorFlow Lite"))),(0,a.kt)("h2",{id:"arduino-libraries-needed"},"Arduino Libraries Needed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the on-board accelerator library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR"),", Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/"},"Wio Terminal IMU")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("strong",{parentName:"p"},"Arduino TensorFlow Lite")," Library, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-TensonFlow/"},"Wio Terminal TensorFlow Lite")," for more information."))),(0,a.kt)("h2",{id:"training-imu-data-from-the-wio-terminal"},"Training IMU data from the Wio Terminal"),(0,a.kt)("p",null,"Just like other machine learning project, we will obtain some sensor data to be used for training the model later. First, we will run a simple arduino program to stream sensor data from Wio Terminal."),(0,a.kt)("p",null,"Copy the following code and upload the code to Wio Terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\nconst float accelerationThreshold = 2; // threshold of significant in G\'s\nconst int numSamples = 119;\n\nint samplesRead = numSamples;\n\nvoid setup() {\n  Serial.begin(9600);\n  lis.begin(Wire1);\n\n  if (!lis) {\n    Serial.println("ERROR");\n    while(1);\n  }\n  \n  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n\n  Serial.println("Acceleration in G\'s");\n  Serial.println("X\\tY\\tZ");\n}\n\nvoid loop() {\n  float x, y, z;\n  \n  while (samplesRead == numSamples) {\n    x=lis.getAccelerationX();\n    y=lis.getAccelerationY();\n    z=lis.getAccelerationZ();\n\n\n     float aSum = fabs(x) + fabs(y) + fabs(z);\n\n      // check if it\'s above the threshold\n      if (aSum >= accelerationThreshold) {\n        // reset the sample read count\n        samplesRead = 0;\n        break;\n      }\n  }\n\n  while (samplesRead < numSamples) {\n    x=lis.getAccelerationX();\n    y=lis.getAccelerationY();\n    z=lis.getAccelerationZ();\n\n    samplesRead++;\n\n    Serial.print(x, 3);\n    Serial.print(\',\');\n    Serial.print(y, 3);\n    Serial.print(\',\');\n    Serial.print(z, 3);\n    Serial.println();\n\n    if (samplesRead == numSamples) {\n      Serial.println();\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Or download the code ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU.zip"},(0,a.kt)("strong",{parentName:"a"},"here"))," and upload the code to Wio Terminal. If you open the Serial Monitor, you should be able to see IMU data."),(0,a.kt)("h2",{id:"capturing-gestures-training-data"},"Capturing Gestures Training Data"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Capture IMU data as CSV")," and used for TensorFlow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open Serial Monitor, and pick up Wio Terminal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make a punch gesture, make sure that you've triggered the capture.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Repeat the same movement for at least 10 times, the more training data the better.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy and paste the data from the Serial Monitor to a new text file called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"punch.csv")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Clear and reset the Wio Terminal, and this time repeat all the steps above with a flex gesture and saved as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"flex.csv")),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you are using Linux or Mac, you can directly output the sensor data from Wio Terminal to a ",(0,a.kt)("inlineCode",{parentName:"p"},".csv")," file using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," cat /dev/cu.usbmodem[nnnnn] > punch.csv\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-data.png"})),(0,a.kt)("h2",{id:"checking-the-csv-files"},"Checking the ",(0,a.kt)("inlineCode",{parentName:"h2"},".csv")," Files"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"punch.csv")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flex.csv")," and make sure that the first line of the csv files is ",(0,a.kt)("strong",{parentName:"p"},"aX,aY,aZ")," check below for reference:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-csv.png"})),(0,a.kt)("h2",{id:"training-data-in-tensorflow"},"Training Data in TensorFlow"),(0,a.kt)("p",null,"Here we will use the ",(0,a.kt)("strong",{parentName:"p"},"Google Colab project")," that is created by the Arduino team. Colab provides a Jupyter notebook that allows us to run our TensorFlow training in a web browser. The colab will set up the environment, train the model and convert the model into a TensorFlow Lite mode and encode the model in an Arduino header file."),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb"},(0,a.kt)("strong",{parentName:"a"},"here"))," to access the ",(0,a.kt)("strong",{parentName:"p"},"Google Colab project"),"."),(0,a.kt)("h2",{id:"modifications-in-google-colab-project"},"Modifications in Google Colab Project"),(0,a.kt)("p",null,"Some modifications are needed in the Google Colab Project to adapt Wio Terminal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Setup the Python Environment"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Upload Data"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"Graph Data"),", comment out all the gyroscope data sections as shown:"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Parse and prepare the data, comment out all the gyroscope data sections as shown:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Randomize and split the input and output pairs for training"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Build & Train the Model"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Graph the loss"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Graph the loss again, skipping a bit of the start"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Graph the mean absolute error"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Run with Test Data"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Convert the Trained Model to Tensor Flow Lite"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"No changes are needed in ",(0,a.kt)("strong",{parentName:"p"},"Encode the Model in an Arduino Header File"),"."))),(0,a.kt)("p",null,"Download the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"model.h"))," files from the left panel."),(0,a.kt)("h2",{id:"uploading-the-code-on-wio-terminal"},"Uploading the Code on Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once downloaded the model header files. Open ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU_Classifier.zip"},"IMU_Classifier.ino")," or copy the following code in Arduino IDE:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  IMU Classifier\n  This example uses the on-board IMU to start reading acceleration and gyroscope\n  data from on-board IMU, once enough samples are read, it then uses a\n  TensorFlow Lite (Micro) model to try to classify the movement as a known gesture.\n  Note: The direct use of C/C++ pointers, namespaces, and dynamic memory is generally\n        discouraged in Arduino examples, and in the future the TensorFlowLite library\n        might change to make the sketch simpler.\n  The circuit:\n  - Arduino Nano 33 BLE or Arduino Nano 33 BLE Sense board.\n  Created by Don Coleman, Sandeep Mistry\n  Modified by Dominic Pajak, Sandeep Mistry\n  This example code is in the public domain.\n\n  Modified to adapt for Wio Terminal - Anson (Seeed Studio)\n*/\n\n#undef min\n#undef max\n#include <TensorFlowLite.h>\n#include <tensorflow/lite/experimental/micro/kernels/all_ops_resolver.h>\n#include <tensorflow/lite/experimental/micro/micro_error_reporter.h>\n#include <tensorflow/lite/experimental/micro/micro_interpreter.h>\n#include <tensorflow/lite/schema/schema_generated.h>\n#include <tensorflow/lite/version.h>\n\n#include "model.h"\n#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\n\nconst float accelerationThreshold = 2; // threshold of significant in G\'s\nconst int numSamples = 119;\n\nint samplesRead = numSamples;\n\n// global variables used for TensorFlow Lite (Micro)\ntflite::MicroErrorReporter tflErrorReporter;\n\n// pull in all the TFLM ops, you can remove this line and\n// only pull in the TFLM ops you need, if would like to reduce\n// the compiled size of the sketch.\ntflite::ops::micro::AllOpsResolver tflOpsResolver;\n\nconst tflite::Model* tflModel = nullptr;\ntflite::MicroInterpreter* tflInterpreter = nullptr;\nTfLiteTensor* tflInputTensor = nullptr;\nTfLiteTensor* tflOutputTensor = nullptr;\n\n// Create a static memory buffer for TFLM, the size may need to\n// be adjusted based on the model you are using\nconstexpr int tensorArenaSize = 8 * 1024;\nbyte tensorArena[tensorArenaSize];\n\n// array to map gesture index to a name\nconst char* GESTURES[] = {\n  "punch",\n  "flex"\n};\n\n\n#define NUM_GESTURES (sizeof(GESTURES) / sizeof(GESTURES[0]))\n\nvoid setup() {\n  Serial.begin(9600);\n//  while (!Serial);\n\n  lis.begin(Wire1);\n  \n  // initialize the IMU\n  if (!lis) {\n    Serial.println("Failed to initialize IMU!");\n    while (1);\n  }\n\n\n  // get the TFL representation of the model byte array\n  tflModel = tflite::GetModel(model);\n  if (tflModel->version() != TFLITE_SCHEMA_VERSION) {\n    Serial.println("Model schema mismatch!");\n    while (1);\n  }\n\n  // Create an interpreter to run the model\n  tflInterpreter = new tflite::MicroInterpreter(tflModel, tflOpsResolver, tensorArena, tensorArenaSize, &tflErrorReporter);\n\n  // Allocate memory for the model\'s input and output tensors\n  tflInterpreter->AllocateTensors();\n\n  // Get pointers for the model\'s input and output tensors\n  tflInputTensor = tflInterpreter->input(0);\n  tflOutputTensor = tflInterpreter->output(0);\n}\n\nvoid loop() {\n  float x, y, z;\n\n  // wait for significant motion\n  while (samplesRead == numSamples) {\n    x=lis.getAccelerationX();\n    y=lis.getAccelerationY();\n    z=lis.getAccelerationZ();\n\n    float aSum = fabs(x) + fabs(y) + fabs(z);\n\n      // check if it\'s above the threshold\n      if (aSum >= accelerationThreshold) {\n        // reset the sample read count\n        samplesRead = 0;\n        break;\n      }\n  }\n\n  // check if the all the required samples have been read since\n  // the last time the significant motion was detected\n  while (samplesRead < numSamples) {\n    // check if new acceleration AND gyroscope data is available\n      // read the acceleration and gyroscope data\n      x=lis.getAccelerationX();\n      y=lis.getAccelerationY();\n      z=lis.getAccelerationZ();\n\n\n\n      // normalize the IMU data between 0 to 1 and store in the model\'s\n      // input tensor\n      tflInputTensor->data.f[samplesRead * 6 + 0] = (x + 4.0) / 8.0;\n      tflInputTensor->data.f[samplesRead * 6 + 1] = (y + 4.0) / 8.0;\n      tflInputTensor->data.f[samplesRead * 6 + 2] = (z + 4.0) / 8.0;\n\n      samplesRead++;\n\n      if (samplesRead == numSamples) {\n        // Run inferencing\n        TfLiteStatus invokeStatus = tflInterpreter->Invoke();\n        if (invokeStatus != kTfLiteOk) {\n          Serial.println("Invoke failed!");\n          while (1);\n          return;\n        }\n\n        // Loop through the output tensor values from the model\n        for (int i = 0; i < NUM_GESTURES; i++) {\n          Serial.print(GESTURES[i]);\n          Serial.print(": ");\n          Serial.println(tflOutputTensor->data.f[i], 6);\n        }\n        Serial.println();\n      }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Put the trained ",(0,a.kt)("inlineCode",{parentName:"p"},"model.h")," header file in the same folder as the IMU_Classifier.ino file and upload the code to Wio Terminal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now, open serial monitor and perform your gestures! You should see confidence of each gesture printed (0 = low confidence, 1 = high confidence)."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step3.png"})),(0,a.kt)("h2",{id:"example-model-files"},"Example Model Files"),(0,a.kt)("p",null,"For reference, I have attached the trained-model of ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/model.h"},"model.h")," files to download. You use this with IMU_Classifier.ino to test."),(0,a.kt)("h2",{id:"further-development"},"Further Development"),(0,a.kt)("p",null,"For further development, more gestures can be trained on Wio Terminal via IMU, and to trigger different outputs! Explore with Machine Learning on Microcontroller with TensorFlow Lite!"))}m.isMDXComponent=!0}}]);