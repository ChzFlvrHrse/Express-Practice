'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cars', [
      {
        model: 'Model S',
        paint: 'Solid Black',
        wheels: '19" Tempest Wheels',
        hitch: false,
        interior: 'Black and White',
        seating: 5,
        steering: 'Steering Wheel',
        enhanced: false,
        autopilot: false,
        price: 88460,
        ownerId: 1
      },
      {
        model: 'Model 3',
        paint: 'Pearl White Multi-Coat',
        wheels: '19" Sport Wheels',
        hitch: false,
        interior: 'All Black',
        seating: 5,
        steering: 'Steering Wheel',
        enhanced: false,
        autopilot: true,
        price: 40240,
        ownerId: 2
      },
      {
        model: 'Model X',
        paint: 'Midnight Silver Metallic',
        wheels: '20" Cyberstream Wheels',
        hitch: true,
        interior: 'Black and White',
        seating: 5,
        steering: 'Yoke Steering',
        enhanced: true,
        autopilot: true,
        price: 98490,
        ownerId: 5
      },
      {
        model: 'Model Y',
        paint: 'Deep Blue Metallic',
        wheels: '20" Induction Wheels',
        hitch: true,
        interior: 'All Black',
        seating: 7,
        steering: 'Yoke Steering',
        enhanced: true,
        autopilot: false,
        price: 47740,
        ownerId: 4
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars')
  }
};
