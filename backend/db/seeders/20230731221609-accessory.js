'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accessories', [
      {
        name: 'Model 2 All-Wheather Interior Liners',
        price: 250,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_1_2000.jpg',
      },
      {
        name: 'Model S Plaid Track Package',
        price: 15000,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_0_2000.jpg',
      },
      {
        name: 'Model S Plaid 20" Zero-G Wheel and Tire Package',
        price: 6000,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_1_2000.jpg',
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accessories')
  }
};
