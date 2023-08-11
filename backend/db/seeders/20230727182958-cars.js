'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', [
      {
        model: 'Model S',
        options: 'TS13',
        paint: '{"Pearl White Multi-Coat": "PSW", ""Solid Black": "BSB", "Midnight Silver Metallic": "MNG", "Deep Blue Metallic": "PSB", "Ultra Red": "R01"}',
        range: 405,
        topSpeed: 149,
        zeroSixty: 3.1,
        wheels: '{"21`` Tempest Wheels": "S11", "21`` Arachnid Wheels": "S91"}',
        hitch: false,
        interior: '{"All Black": "BE00", "Black and White": "WW00", "Cream": "CW00"}',
        seating: false,
        steering: '{"Steering Wheel": "T03", "Yoke Steering": "T0Y"}',
        price: 88490,
        savings: 6600
      },
      {
        model: 'Model S Plaid',
        options: 'TS14',
        paint: '{"Pearl White Multi-Coat": "PSW", ""Solid Black": "BSB", "Midnight Silver Metallic": "MNG", "Deep Blue Metallic": "PSB", "Ultra Red": "R01"}',
        range: 396,
        topSpeed: 200,
        zeroSixty: 1.99,
        wheels: '{"19`` Tempest Wheels": "S12", "21`` Arachnid Wheels": "S92"}',
        hitch: false,
        interior: '{"All Black": "BC00", "Black and White": "WC00", "Cream": "CC00"}',
        seating: false,
        steering: '{"Steering Wheel": "T03", "Yoke Steering": "T0Y"}',
        price: 108490,
        savings: 6600
      },
      {
        model: 'Model 3',
        options: 'T322',
        paint: '{"Midnight Silver Metallic": "MNG", "Pearl White Multi-Coat": "PSW", "Deep Blue Metallic": "PSB", "Solid Black": "BSB", "Red Multi-Coat": "PMR"}',
        range: 272,
        topSpeed: 140,
        zeroSixty: 5.8,
        wheels: '{"18`` Aero Wheels": "40B", "19`` Sport Wheels": "41B"}',
        hitch: false,
        interior: '{"All Black": "BB1", "Black and White": "BW1"}',
        seating: false,
        steering: null,
        price: 40240,
        savings: 12300
      },
      {
        model: 'Model 3 Long Range',
        options: 'T328',
        paint: '{"Midnight Silver Metallic": "MNG", "Pearl White Multi-Coat": "PSW", "Deep Blue Metallic": "PSB", "Solid Black": "BSB", "Red Multi-Coat": "PMR"}',
        range: 333,
        topSpeed: 145,
        zeroSixty: 4.2,
        wheels: '{"18`` Aero Wheels": "40B", "19`` Sport Wheels": "41B"}',
        hitch: true,
        interior: '{"All Black": "PB1", "Black and White": "PW1"}',
        seating: false,
        steering: null,
        price: 47240,
        savings: 12300
      },
      {
        model: 'Model 3 Performance',
        options: 'T317',
        paint: '{"Midnight Silver Metallic": "MNG", "Pearl White Multi-Coat": "PSW", "Deep Blue Metallic": "PSB", "Solid Black": "BSB", "Red Multi-Coat": "PMR"}',
        range: 315,
        topSpeed: 162,
        zeroSixty: 3.1,
        wheels: '{"20`` Überturbine Wheels": "33D"}',
        hitch: true,
        interior: '{"All Black": "PB1", "Black and White": "PW1"}',
        seating: false,
        steering: null,
        price: 53240,
        savings: 12300
      },
      {
        model: 'Model X',
        options: 'TX15',
        paint: '{"Pearl White Multi-Coat": "PSW", "Solid Black": "BSB", "Midnight Silver Metallic": "MNG", "Deep Blue Metallic": "PSB", "Ultra Red": "R01"}',
        range: 348,
        topSpeed: 149,
        zeroSixty: 3.8,
        wheels: '{"20`` Cyberstream Wheels": "X00", "22`` Turbine Wheels": "X20"}',
        hitch: true,
        interior: '{"All Black": "BE00", "Black and White": "WW00", "Cream": "CW00"}',
        seating: true,
        steering: '{"Steering Wheel": "T03", "Yoke Steering": "T0Y"}',
        price: 98490,
        savings: 6600
      },
      {
        model: 'Model X Plaid',
        options: 'TX16',
        paint: '{"Pearl White Multi-Coat": "PSW", "Solid Black": "BSB", "Midnight Silver Metallic": "MNG", "Deep Blue Metallic": "PSB", "Ultra Red": "R01"}',
        range: 333,
        topSpeed: 149,
        zeroSixty: 2.5,
        wheels: '{"20`` Cyberstream Wheels": "X01", "22`` Turbine Wheels": "X21"}',
        hitch: true,
        interior: '{"All Black": "BC00", "Black and White": "WC00", "Cream": "CC00"}',
        seating: true,
        steering: '{"Steering Wheel": "T03", "Yoke Steering": "T0Y"}',
        price: 108490,
        savings: 6600
      },
      {
        model: 'Model Y',
        options: 'TY14',
        paint: '{"Midnight Silver Metallic": "MNG", "Pearl White Multi-Coat": "PSW", "Deep Blue Metallic": "PSB", "Solid Black": "BSB", "Red Multi-Coat": "PMR"}',
        range: 279,
        topSpeed: 135,
        zeroSixty: 5.0,
        wheels: '{"20`` Cyberstream Wheels": "Y19B", "22`` Turbine Wheels": "Y20P"}',
        hitch: true,
        interior: '{"All Black": "NPB0", "Black and White": "NPW0"}',
        seating: true,
        steering: null,
        price: 47740,
        savings: 13300
      },
      {
        model: 'Model Y Long Range',
        options: 'TY11',
        paint: '{"Midnight Silver Metallic": "MNG", "Pearl White Multi-Coat": "PSW", "Deep Blue Metallic": "PSB", "Solid Black": "BSB", "Red Multi-Coat": "PMR"}',
        range: 330,
        topSpeed: 135,
        zeroSixty: 4.8,
        wheels: '{"19`` Gemini Wheels": "Y19B", "22`` Induction Wheels": "Y20P"',
        hitch: true,
        interior: '{"All Black": "NPB0", "Black and White": "NPW0"}',
        seating: true,
        steering: null,
        price: 50490,
        savings: 13300
      },
      {
        model: 'Model Y Long Performance',
        options: 'TY05',
        paint: '{"Midnight Silver Metallic": "MNG", "Pearl White Multi-Coat": "PSW", "Deep Blue Metallic": "PSB", "Solid Black": "BSB", "Red Multi-Coat": "PMR"}',
        range: 303,
        topSpeed: 155,
        zeroSixty: 3.5,
        wheels: '{"21`` Überturbine Wheels": "Y19B"}',
        hitch: true,
        interior: '{"All Black": "NPB0", "Black and White": "NPW0"}',
        seating: true,
        steering: null,
        price: 54490,
        savings: 13300
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars')
  }
};
