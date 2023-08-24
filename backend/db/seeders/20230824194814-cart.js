'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Carts', [
      {
        item: "Men's Turbine Short Sleeve Tee",
        price: 40,
        size: "M",
        quantity: 1,
        userId: 1
      },
      {
        item: "Tesla Sipping Glasses",
        price: 75,
        size: "M",
        quantity: 1,
        userId: 1
      },
      {
        item: "Women's Turbine Long Sleeve Tee",
        price: 45,
        size: "M",
        quantity: 1,
        userId: 2
      },
      {
        item: "S3XY Hoodie",
        price: 45,
        size: "M",
        quantity: 1,
        userId: 2
      },
      {
        item: "Women's Turbine Short Sleeve Tee",
        price: 40,
        size: "M",
        quantity: 1,
        userId: 4
      },
      {
        item: "Men's Cybertruck Horizon Tee",
        price: 35,
        size: "M",
        quantity: 1,
        userId: 5
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Carts');
  }
};
