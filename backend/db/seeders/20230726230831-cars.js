'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        carModel: 'Model S',
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
        carModel: 'Model 3',
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
        carModel: 'Model X',
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
        carModel: 'Model Y',
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars')
  }
};
