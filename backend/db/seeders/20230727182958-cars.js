'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', [
      {
        model: 'Model S',
        paint: {"Pearl White Multi-Coat": ["https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$IBE00,$ST03&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"]
        , "Solid Black": ["https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PBSB,$IBE00,$ST03&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"],
        "Midnight Silver Metallic": ["https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PMNG,$IBE00,$ST03&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"],
        "Deep Blue Metallic": ["https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"],
        "Ultra Red": ["https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&", "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$IBE00,$ST03&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"]},
        range: 405,
        topSpeed: 149,
        zeroSixty: 3.1,
        wheels: ['19" Tempest Wheels', '21" Arachnid Wheels'],
        hitch: false,
        interior: ['All Black', 'Black and White', 'Cream'],
        seating: false,
        steering: 'Steering Wheel',
        price: 88490,
        savings: 6600
      },
      {
        model: 'Model S Plaid',
        paint: ['Pearl White Multi-Coat', 'Solid Black', 'Midnight Silver Metallic', 'Deep Blue Metallic', 'Ultra Red'],
        range: 396,
        topSpeed: 200,
        zeroSixty: 1.99,
        wheels: ['19" Tempest Wheels', '21" Arachnid Wheels'],
        hitch: false,
        interior: ['All Black', 'Black and White', 'Cream'],
        seating: false,
        steering: 'Steering Wheel',
        price: 108490,
        savings: 6600
      },
      {
        model: 'Model 3',
        paint: ['Midnight Silver Metallic', 'Pearl White Multi-Coat', 'Deep Blue Metallic', 'Solid Black',  'Ultra Red'],
        range: 272,
        topSpeed: 140,
        zeroSixty: 5.8,
        wheels: ['18" Aero Wheels', '19" Sport Wheels'],
        hitch: false,
        interior: 'All Black',
        seating: false,
        steering: null,
        price: 40240
      },
      {
        model: 'Model 3 Long Range',
        paint: ['Midnight Silver Metallic', 'Pearl White Multi-Coat', 'Deep Blue Metallic', 'Solid Black',  'Ultra Red'],
        range: 333,
        topSpeed: 145,
        zeroSixty: 4.2,
        wheels: ['18" Aero Wheels', '19" Sport Wheels'],
        hitch: true,
        interior: 'All Black',
        seating: false,
        steering: null,
        price: 47240
      },
      {
        model: 'Model 3 Performance',
        paint: ['Midnight Silver Metallic', 'Pearl White Multi-Coat', 'Deep Blue Metallic', 'Solid Black',  'Ultra Red'],
        range: 315,
        topSpeed: 162,
        zeroSixty: 3.1,
        wheels: '18" Aero Wheels',
        hitch: true,
        interior: ['18" Aero Wheels', '19" Sport Wheels'],
        seating: false,
        steering: null,
        price: 53240
      },
      {
        model: 'Model X',
        paint: ['Pearl White Multi-Coat', 'Solid Black', 'Midnight Silver Metallic', 'Deep Blue Metallic', 'Ultra Red'],
        range: 348,
        topSpeed: 149,
        zeroSixty: 3.8,
        wheels: ['20" Cyberstream Wheels', '22" Turbine Wheels'],
        hitch: true,
        interior: 'All Black',
        seating: true,
        steering: 'Steering Wheel',
        price: 98490
      },
      {
        model: 'Model X Plaid',
        paint: ['Pearl White Multi-Coat', 'Solid Black', 'Midnight Silver Metallic', 'Deep Blue Metallic', 'Ultra Red'],
        range: 333,
        topSpeed: 149,
        zeroSixty: 2.5,
        wheels: ['20" Cyberstream Wheels', '22" Turbine Wheels'],
        hitch: true,
        interior: 'All Black',
        seating: true,
        steering: 'Steering Wheel',
        price: 108490
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars')
  }
};
