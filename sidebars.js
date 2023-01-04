/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {type: 'autogenerated', dirName: '.'},
  // ],

  // But you can create a sidebar manually

  ProductSidebar: [
    // 'intro',

    // 'About',

    'weekly_wiki',

    {


      type: 'category',
      label: 'Arduino',
      items: [
        'Arduino/Arduino_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'Grove',
      items: [
        'Grove/Grove',
        'Grove/Grove_System',
        'Grove/Grove_A',
        {
          type: 'category',
          label: 'Temperature',
          items: [
            'Grove/Temperature/Sensor_temperature',
          ]
        },
        {
          type: 'category',
          label: 'Distance',
          items: [
            'Grove/Distance/Sensor_distance',
            'Grove/Distance/Grove-TF_Mini_LiDAR', 
          ]
        }
      ],

    },

    {
      type: 'category',
      label: 'Wio Terminal',
      items: [
        'Wio_Terminal/Wio_Terminal_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'Seeed Studio XIAO',
      items: [
        'SeeedStudio_XIAO/SeeedStudio_XIAO_Getting_Started',
        'SeeedStudio_XIAO/XIAO-RP2040',
      ],

    },

    {
      type: 'category',
      label: 'micro:bit',
      items: [
        'micro_bit/micro_bit_Getting_Started',
      ],

    },

    {
      type: 'category',
      label: 'LoRa®',
      items: [
        'LoRaWAN/LoRaWAN_Getting_Started',
      ],

    },

    {
      type: 'category',
      label: 'Shield',
      items: [
        'shield/shield_Getting_Started',
      ],

    },

    {
      type: 'category',
      label: 'BeagleBone®',
      items: [
        'Beagle_Bone/Beagle_Bone_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'Raspberry Pi',
      items: [
        'Raspberry_Pi/Raspberry_Pi_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'reTerminal',
      items: [
        'reTerminal/reTerminal_Getting_Started',
      ],

    },

    {
      type: 'category',
      label: 'reSpeaker',
      items: [
        'reSpeaker/reSpeaker_Getting_Started',
      ],

    },

    {
      type: 'category',
      label: 'ODYSSEY',
      items: [

        {
          type: 'category',
          label: 'ODYSSEY_X86J4105',
          items: [
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-GPIO',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-OS',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Updating-Firmware',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories',
            
            {
              type: 'category',
              label: 'Home Assistant',
              items: [
                'ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/ODYSSEY-X86-Home-Assistant',
                'ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Home-Assistant-Customize',
                'ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Connect-Grove-to-Home-Assistant-ESPHome',
              ]
            },

            'ODYSSEY/ODYSSEY_X86J4105/Jellyfin-on-Docker-Ubuntu-X86',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-openwrt',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-OPNsense',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-pfSense',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-TrueNAS',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-Android',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-FreeNAS',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Intel-OpenVINO',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-NCS2',
            'ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105',
            'ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module',

            {
              type: 'category',
              label: 'Projects',
              items: [
                'ODYSSEY/ODYSSEY_X86J4105/Projects/ODYSSEY-X86J4105-Frigate',
              ]
            },
          ]
        },

        'ODYSSEY/ODYSSEY_Getting_Started',
        'ODYSSEY/SEEED-SOM-STM32MP157C',
        'ODYSSEY/ODYSSEY-STM32MP157C',
      ],

    },

    {
      type: 'category',
      label: 'LinkStar-H68K',
      items: [
        'LinkStar-H68K/Linkstar_Datasheet',
        'LinkStar-H68K/linkstar-install-system',
      ],

    },

    {

      type: 'category',
      label: 'NVIDIA',
      items: [
        'NVIDIA/NVIDIA_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'reServer',
      items: [
        'reServer/reServer_Getting_Started',
      ],

    },

    {
      type: 'category',
      label: 'Others',
      items: [
        'Others/Others_Product',
      ],

    },

    //  'About',
    //  'License',

  ],

  SenseCAPSidebar:



    [
      'SenseCAP/SenseCAP_Introdution',

      {

        type: 'category',
        label: 'SenseCAP',
        items: [
          'SenseCAP/SenseCAP_Getting_Started',
        ],


      },

      {

        type: 'category',
        label: 'SenseCAP Probe Accessories',
        items: [
          'SenseCAP_Probe_Accessories/Liquid_level_sensor',
        ],


      },

      {

        type: 'category',
        label: 'SenseCAP the Sensor Prototype Kit',
        items: [
          'SenseCAP_The_Sensor_Prototype_Kit/Contents',
        ],


      },

    ],

  MakerSidebar:

    [
      'Maker/Maker_Introduction',
      {

        type: 'category',
        label: 'Maker',
        items: [
          'Maker/Maker_Getting_Started',
        ],

      },

      {

        type: 'category',
        label: 'Tutorials',
        items: [
          'Maker/Tutorials/Tutorials_Introduction',
        ],

      },

      {

        type: 'category',
        label: 'Software',
        items: [
          'Maker/Software/Software_Introduction',
        ],

      },

      {
        type: 'category',
        label: 'Arduino',
        items: [
          'Maker/Arduino/Arduino_Introduction',
        ],

      },

      {
        type: 'category',
        label: 'Raspberry Pi',
        items: [
          'Maker/Raspberry_Pi/Raspberry_Pi_Introduction',
        ],

      },


      {
        type: 'category',
        label: 'NVIDIA Jetson',
        items: [
          'Maker/NVIDIA/NVIDIA_Introduction',
        ],

      },


    ],

};

module.exports = sidebars;
