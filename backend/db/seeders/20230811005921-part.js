'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Parts', [
      {
        name: 'Wall Connector Color Mathced Faceplate',
        price: 75,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1551813-10-A_7_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1551813-10-A_2.jpg'
      },
      {
        name: 'Wall Connector Glass Faceplate',
        price: 75,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551813-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551813-00-A_2.jpg'
      },
      {
        name: 'Pedestal for Wall Connector',
        price: 425,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_3_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_0_2000.jpg'
      },
      {
        name: 'Wall Connector Fastener Kit',
        price: 20,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551814-00-A_0_2000.jpg',
        img2: null
      },
      {
        name: 'Wall Connector Wirebox Kit',
        price: 65,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551805-00-A_0_2000.jpg',
        img2: null
      },
      {
        name: 'Cable Organizer',
        price: 35,
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1.jpg',
        img2: null
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Parts')
  }
};
