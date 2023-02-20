"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68595],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},46330:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={description:"Integrate into Azure IoT Hub",title:"Integrate into Azure IoT Hub",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",last_update:{date:"1/13/2023",author:"shuxu hu"}},a="Integrate into Azure IoT Hub",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Integrate-into-Azure-IoT-Hub",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Integrate-into-Azure-IoT-Hub",title:"Integrate into Azure IoT Hub",description:"Integrate into Azure IoT Hub",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Integrate-into-Azure-IoT-Hub.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated",slug:"/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Integrate-into-Azure-IoT-Hub",permalink:"/docusaurus_wiki/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Integrate-into-Azure-IoT-Hub",draft:!1,editUrl:"https://github.com/c1ev0ps/docusaurus_wiki/edit/main/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Integrate-into-Azure-IoT-Hub.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Integrate into Azure IoT Hub",title:"Integrate into Azure IoT Hub",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Connect to Helium",permalink:"/docusaurus_wiki/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Connecting-to-Helium"},next:{title:"Configure Web APP Visualization",permalink:"/docusaurus_wiki/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/Configuring-Web-APP-Visualization"}},l={},u=[{value:"Create resource groups",id:"create-resource-groups",level:2},{value:"Create a Microsoft Azure IoT Hub",id:"create-a-microsoft-azure-iot-hub",level:2},{value:"Create share secret key",id:"create-share-secret-key",level:2},{value:"Integration to Helium",id:"integration-to-helium",level:2},{value:"Connection Integration",id:"connection-integration",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Statement",id:"statement",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integrate-into-azure-iot-hub"},"Integrate into Azure IoT Hub"),(0,n.kt)("p",null,"The Internet of Things (IoT) is a network of physical devices that connect to and exchange data with other devices and services over the Internet or other network. There are currently over ten billion connected devices in the world and more are added every year. Anything that can be embedded with the necessary sensors and software can be connected over the internet."),(0,n.kt)("p",null,"Azure IoT Hub is a managed service hosted in the cloud that acts as a central message hub for communication between an IoT application and its attached devices. You can connect millions of devices and their backend solutions reliably and securely. Almost any device can be connected to an IoT hub."),(0,n.kt)("p",null,"Several messaging patterns are supported, including device-to-cloud telemetry, uploading files from devices, and request-reply methods to control your devices from the cloud. IoT Hub also supports monitoring to help you track device creation, device connections, and device failures."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For more information on using Microsoft Azure IoT Hub, please refer ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub"},"here"),".")),(0,n.kt)("p",null,"In this chapter, you\u2019ll need to switch over to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Microsoft Azure"),". After that, maybe you will need to sign up to get a free account. A new ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F"},"account registration")," will get you a free $200 credit, which you can fully use to complete our routines."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png"})),(0,n.kt)("h2",{id:"create-resource-groups"},"Create resource groups"),(0,n.kt)("p",null,"A resource group is a container that holds related resources for an Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group. You decide how you want to allocate resources to resource groups based on what makes the most sense for your organization. Generally, add resources that share the same lifecycle to the same resource group so you can easily deploy, update, and delete them as a group."),(0,n.kt)("p",null,"Then first, please login to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure portal")," with your registered account."),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Resource groups"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png"})),(0,n.kt)("p",null,"Enter the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Subscription"),": Select your Azure subscription.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Resource group"),": Enter a new resource group name.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Region"),": Select an Azure location, such as North Europe."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Review + Create"),"."),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Create"),". It takes a few seconds to create a resource group."),(0,n.kt)("p",null,"Select Refresh from the top menu to refresh the resource group list, and then select the newly created resource group to open it. Or select Notification(the bell icon) from the top, and then select Go to resource group to open the newly created resource group."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png"})),(0,n.kt)("h2",{id:"create-a-microsoft-azure-iot-hub"},"Create a Microsoft Azure IoT Hub"),(0,n.kt)("p",null,"This step describes how to create and manage Microsoft Azure IoT Hub using the Microsoft Azure portal. From the Microsoft Azure homepage, select the ",(0,n.kt)("strong",{parentName:"p"},"Create a resource")," button, and then enter IoT Hub in the Search the Marketplace field."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg"})),(0,n.kt)("p",null,"Select IoT Hub from the search results, and then select Create."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg"})),(0,n.kt)("p",null,"On the Basics tab, complete the fields as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Subscription"),": Select the subscription to use for your hub.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Resource Group"),": Select a resource group or create a new one. To create a new one, select Create new and fill in the name you want to use. To use an existing resource group, select that resource group. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"Manage Azure Resource Manager resource groups"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Region"),": Select the region in which you want your hub to be located. Select the location closest to you. Some features, such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-streams-overview"},"IoT Hub device streams"),", are only available in specific regions. For these limited features, you must select one of the supported regions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"IoT Hub Name"),": Enter a name for your hub. This name must be globally unique, with a length between 3 and 50 alphanumeric characters. The name can also include the dash ('-') character."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Because the IoT hub will be publicly discoverable as a DNS endpoint, be sure to avoid entering any sensitive or personally identifiable information when you name it.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Next: Networking")," to continue creating your hub."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Next: Management")," to continue creating your hub."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png"})),(0,n.kt)("p",null,"You can accept the default settings here. If desired, you can modify any of the following fields:"),(0,n.kt)("p",null,"Choose the endpoints that devices can use to connect to your IoT hub. You can select the default setting, Public access, or choose Private access. Accept the default setting for this example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pricing and scale tier"))),(0,n.kt)("p",null,"Your selected tier. You can choose from several tiers, depending on how many features you want and how many messages you send through your solution per day. The free tier is intended for testing and evaluation. It allows 500 devices to be connected to the hub and up to 8,000 messages per day. Each Azure subscription can create one IoT hub in the free tier."),(0,n.kt)("p",null,"If you are working through a Quickstart for IoT Hub device streams, select the free tier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IoT Hub units"))),(0,n.kt)("p",null,"The number of messages allowed per unit per day depends on your hub's pricing tier. For example, if you want the hub to support ingress of 700,000 messages, you choose two S1 tier units. For details about the other tier options, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling"},"Choosing the right IoT Hub tier"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Microsoft Defender for IoT"))),(0,n.kt)("p",null,"Turn this on to add an extra layer of threat protection to IoT and your devices. This option is not available for hubs in the free tier. Learn more about security recommendations for IoT Hub in Defender for IoT."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Role-based access control"))),(0,n.kt)("p",null,"Choose how access to the IoT hub is managed, whether shared access policies are allowed or only role-based access control is supported. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac"},"Control access to IoT Hub by using Azure Active Directory"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Device-to-cloud partitions"))),(0,n.kt)("p",null,"This property relates the device-to-cloud messages to the number of simultaneous readers of the messages. Most hubs need only four partitions."),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Next: Tags")," to continue to the next screen."),(0,n.kt)("p",null,"Tags are name/value pairs. You can assign the same tag to multiple resources and resource groups to categorize resources and consolidate billing. In this document, you won't be adding any tags. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources"},"Use tags to organize your Azure resources"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Next: Review + create")," to review your choices. You see something similar to this screen, but with the values you selected when creating the hub."),(0,n.kt)("p",null,"We leave the rest of the content as default and do not modify it."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Create")," to start the deployment of your new hub. Your deployment will be in progress a few minutes while the hub is being created. Once the deployment is complete, select ",(0,n.kt)("strong",{parentName:"p"},"Go to resource")," to open the new hub."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg"})),(0,n.kt)("p",null,"You can change the settings of an existing IoT hub after it's created from the IoT Hub pane."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg"})),(0,n.kt)("h2",{id:"create-share-secret-key"},"Create share secret key"),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Shared Access Policy")," and create a new access policy with the following permissions: ",(0,n.kt)("strong",{parentName:"p"},"Registry Read"),", ",(0,n.kt)("strong",{parentName:"p"},"Registry Write"),", ",(0,n.kt)("strong",{parentName:"p"},"Device Connect"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg"})),(0,n.kt)("p",null,"After creation, four sets of secret keys will be generated automatically, the one we need to copy is the ",(0,n.kt)("strong",{parentName:"p"},"Primary connection string"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Don't leak your Primary connection string, otherwise others can access your Azure IoT Hub at any time and get all the permissions you've set up for it.")),(0,n.kt)("h2",{id:"integration-to-helium"},"Integration to Helium"),(0,n.kt)("p",null,"So now we can go back to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.helium.com/integrations"},"Helium console")," and create the Azure to Helium integration."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:900,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png"})),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Integration")," in the new page."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png"})),(0,n.kt)("p",null,"Fill in the ",(0,n.kt)("strong",{parentName:"p"},"Primary connection string")," generated above on the new page and Helium will automatically generate the rest of the content."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png"})),(0,n.kt)("p",null,"Finally, just name this integration."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png"})),(0,n.kt)("h2",{id:"connection-integration"},"Connection Integration"),(0,n.kt)("p",null,"Now, use the click and drag interface in the Helium Console to connect the device to the function (Decoder) to the Azure Integration as shown ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Helium-Introduction/#helium-console-flows"},"previously"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg"})),(0,n.kt)("p",null,"At this point, follow the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium"},"previous steps")," to upload the code again, and Wio Terminal will reconnect to Helium and upload the data."),(0,n.kt)("p",null,"After the integration is complete and your device joins LoRaWAN\xae to send data to Helium all the time. A device should show up in the Device pane of Azure IoT hubs with the Device ID from the Helium Network."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg"})),(0,n.kt)("p",null,"We can also find out about the success of sending data by checking the data returned by the serial monitor."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg"})),(0,n.kt)("p",null,"When you click on \u201cOverview\u201d on IoT Hubs, you should also see messages flowing through IoT hubs and a device listed as \u201cConnected\u201d."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Number of messages used:")," Total number of messages used (Max).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Device to cloud messages:")," Telemetry messages sent (Count).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Connected Devices:")," Connexted devices (Max).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Total IoT Devices:")," Total devices (Max)."))),(0,n.kt)("p",null,"So at this point in the tutorial, you have completed the entire deployment of the local sensor to the Azure cloud. Next, you have the option to customize the processing of the data according to your needs, refer ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging"},"here"),"."),(0,n.kt)("p",null,"Of course, you can also continue our tutorial content to learn how to use Microsoft's Web APP integration to complete the visualization of your data."),(0,n.kt)("table",{align:"center"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"cent er"},(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{align:"left"},(0,n.kt)("strong",null,"Configuring Web APP Visualization"),(0,n.kt)("br",null),(0,n.kt)("br",null),"This section describes how to visualize the data information received by Microsoft Azure using the free Web APP integration.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{href:"https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization"},"Let's get started >"))))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))),(0,n.kt)("h2",{id:"statement"},"Statement"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The LoRa\xae Mark is a trademark of Semtech Corporation or its subsidiaries."),(0,n.kt)("li",{parentName:"ul"},"LoRaWAN\xae is a mark used under license from the LoRa Alliance\xae.")))}p.isMDXComponent=!0}}]);