'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', [
      {
        model: 'Model S',
        options: 'TS13',
        paint: {"Pearl White Multi-Coat": "PSW","Solid Black": "BSB",
              "Midnight Silver Metallic": "MNG","Deep Blue Metallic": "PSB","Ultra Red": "R01"},
        range: 405,
        topSpeed: 149,
        zeroSixty: 3.1,
        wheels: {"19'' Tempest Wheels": "S11", "21'' Arachnid Wheels": "S91"},
        hitch: false,
        interior: {"All Black": "BE00", "Black and White": "WW00", "Cream": "CW00"},
        seating: false,
        steering: {"Steering Wheel": "T03", "Yoke Steering": "T0Y"},
        price: 88490,
        savings: 6600
      },
      {
        model: 'Model S Plaid',
        options: 'TS14',
        paint: {"Pearl White Multi-Coat": "PSW","Solid Black": "BSB",
        "Midnight Silver Metallic": "MNG","Deep Blue Metallic": "PSB","Ultra Red": "R01"},
        range: 396,
        topSpeed: 200,
        zeroSixty: 1.99,
        wheels: {"19'' Tempest Wheels": "S12", "21'' Arachnid Wheels": "S92"},
        hitch: false,
        interior: {"All Black": "BC00", "Black and White": "WC00", "Cream": "CC00"},
        seating: false,
        steering: {"Steering Wheel": "T03", "Yoke Steering": "T0Y"},
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
