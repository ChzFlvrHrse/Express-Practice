'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chargings', [
      {
        name: 'Wall Connector',
        price: 475,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/Gen3WC.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg',
        ownerId: 1
      },
      {
        name: 'J1772 Wall Connector',
        price: 550,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1509549-02-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1509549-02-B_05_2000.jpg',
        ownerId: 2
      },
      {
        name: 'Pedestal for Wall Connector',
        price: 425,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_3_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_0_2000.jpg',
        ownerId: 3
      },
      {
        name: 'Wall Connector Color Mathced Faceplate',
        price: 75,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1551813-10-A_7_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1551813-10-A_2.jpg',
        ownerId: 4
      },
      {
        name: 'Cable Organizer',
        price: 35,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1.jpg',
        img2: '',
        ownerId: 5
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chargings')
  }
};
