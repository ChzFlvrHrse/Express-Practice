'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Apparels', [
      {
        name: "Men's Turnine Short Sleeve Tee",
        price: '40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740275-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740275-00-A_1.jpg'
      },
      {
        name: "Men's Raven Lightweight Zip Up Bomber Jacket",
        price: '100',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_1.jpg'
      },
      {
        name: "Men’s Chill Crew Neck Sweatshirt $60",
        price: '60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_1.jpg'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Apparels')
  }
};
