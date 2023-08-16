'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chargings', [
      {
        area: 'Chargers',
        name: 'Wall Connector',
        price: '475',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/Gen3WC.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg'
      },
      {
        area: 'Chargers',
        name: 'J1772 Wall Connector',
        price: '550',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1509549-02-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1509549-02-B_05_2000.jpg'
      },
      {
        area: 'Chargers',
        name: 'Mobile Connector',
        price: '230',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1763817-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1763817-00-A_4_2000.jpg'
      },
      {
        area: 'Adapters',
        name: 'NEMA Adapter Bundle',
        price: '245',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1515100-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1515100-00-A_1.jpg'
      },
      {
        area: 'Adapters',
        name: 'Gen 2 NEMA Adapters',
        price: '45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1104936-10-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1104936-10-C_0_2000.jpg'
      },
      {
        area: 'Adapters',
        name: 'CCS Combo 1 Adapter',
        price: '175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1656565-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1656565-00-A_1_2000.jpg'
      },
      {
        area: 'Adapters',
        name: 'SAE J1772 Charging Adapter',
        price: '50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1067348-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1067348-00-B_0_2000.jpg'
      },
      {
        area: 'Parts',
        name: 'Wall Connector Color Mathced Faceplate',
        price: '75',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1551813-10-A_7_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1551813-10-A_2.jpg'
      },
      {
        area: 'Parts',
        name: 'Wall Connector Glass Faceplate',
        price: '75',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551813-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551813-00-A_2.jpg'
      },
      {
        area: 'Parts',
        name: 'Pedestal for Wall Connector',
        price: '425',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_3_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_0_2000.jpg'
      },
      {
        area: 'Parts',
        name: 'Wall Connector Fastener Kit',
        price: '20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551814-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551814-00-A_0_2000.jpg'
      },
      {
        area: 'Parts',
        name: 'Wall Connector Wirebox Kit',
        price: '65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551805-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551805-00-A_0_2000.jpg'
      },
      {
        area: 'Parts',
        name: 'Cable Organizer',
        price: '35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1.jpg'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chargings')
  }
};
