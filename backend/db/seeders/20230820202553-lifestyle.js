'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Lifestyles', [
      {
        category: 'Best Sellers',
        name: "Mega [back] Pack",
        price: '$245',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859926-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859926-00-A_1_2000.jpg'
      },
      {
        category: 'Best Sellers',
        name: "Wireless Charging Platform",
        price: '$300',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1799799-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1799799-00-A_1_2000.jpg'
      },
      {
        category: 'Best Sellers',
        name: "Ludicrously Cozy Throw",
        price: '$140',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1950257-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1950257-00-A_1_2000.jpg'
      },
      {
        category: 'Bags',
        name: "Mega [back] Pack",
        price: '$245',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859926-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859926-00-A_1_2000.jpg'
      },
      {
        category: 'Bags',
        name: "Mega [mini] Pack",
        price: '$185',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859925-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859925-00-A_1_2000.jpg'
      },
      {
        category: 'Drinkware',
        name: "Tesla Sipping Glasses",
        price: '$75',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1581744-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1581744-00-A_0_2000.jpg'
      },
      {
        category: 'Drinkware',
        name: "Plaid Mug",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860887-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860887-00-A_1_2000.jpg'
      },
      {
        category: 'Drinkware',
        name: "On the Road Vessel",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860631-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860631-00-A_1_2000.jpg'
      },
      {
        category: 'Drinkware',
        name: "On the Road Tumbler",
        price: '$32',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860626-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860626-00-A_1_2000.jpg'
      },
      {
        category: 'Drinkware',
        name: "On the Road Cup",
        price: '$28',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1859203-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1859203-00-A_1_2000.jpg'
      },
      {
        category: 'Mini Teslas',
        name: "Diecast 1:18 Scale Roadster",
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1524001-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1524001-00-A_7.jpg'
      },
      {
        category: 'Mini Teslas',
        name: "Diecast 1:24 Scale Semi",
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1474970-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1474970-00-A_3.jpg'
      },
      {
        category: 'Mini Teslas',
        name: "Diecast 1:18 Scale Model 3",
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1474940-00-A_15_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1474940-00-A_6.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Ludicrously Cozy Throw",
        price: '$140',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1950257-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1950257-00-A_1_2000.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Tesla Branding Iron",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1808276-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1808276-00-A_1_2000.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Wireless Charging Platform",
        price: '$300',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1799799-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1799799-00-A_1_2000.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Wireless Portable Charger 2.0",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/HOME_OFFICE/1625888-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/HOME_OFFICE/1625888-00-A_1.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Giga Texas Belt Buckle",
        price: '$100',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_6_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_3.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Cyberwhistle",
        price: '1000 DOGE',
        img: '',
        img2: ''
      },
      {
        category: 'Outdoor and Tech',
        name: "Desktop Supercharger",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/HOME_OFFICE/8756722-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/HOME_OFFICE/8756722-00-A_alt.jpg'
      },
      {
        category: 'Outdoor and Tech',
        name: "Umbrella",
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1616115-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1616115-00-A_3.jpg'
      },
      {
        category: 'Gift Card',
        name: "Tesla Shop Gift Card",
        price: '$10 - $500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/Tesla_giftcard.png',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/Tesla_giftcard.png'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lifestyles')
  }
};
