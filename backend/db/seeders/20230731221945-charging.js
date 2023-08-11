'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chargings', [
      {
        name: 'Wall Connector',
        price: 475,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/Gen3WC.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg'
      },
      {
        name: 'J1772 Wall Connector',
        price: 550,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1509549-02-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1509549-02-B_05_2000.jpg'
      },
      {
        name: 'Mobile Connector',
        price: 230,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1763817-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1763817-00-A_4_2000.jpg'
      },
      {
        name: 'NEMA Adapter Bundle',
        price: 245,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1515100-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1515100-00-A_1.jpg'
      },
      {
        name: 'Gen 2 NEMA Adapters',
        price: 45,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1104936-10-C_0_2000.jpg',
        img2: null
      },
      {
        name: 'CCS Combo 1 Adapter',
        price: 175,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1656565-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1656565-00-A_1_2000.jpg'
      },
      {
        name: 'SAE J1772 Charging Adapter',
        price: 50,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1067348-00-B_0_2000.jpg',
        img2: null
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chargings')
  }
};
