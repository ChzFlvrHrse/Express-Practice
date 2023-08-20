'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Apparels', [
      {
        category: 'Men',
        type: 'Best Sellers',
        name: "Men's Turnine Short Sleeve Tee",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740275-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740275-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Best Sellers',
        name: "Men's Raven Lightweight Zip Up Bomber Jacket",
        price: '$100',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Best Sellers',
        name: "Men's Chill Crew Neck Sweatshirt",
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Cybertruck Horizon Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1932712-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1932712-00-A_2_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's AI Day Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1905127-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1905127-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Turbine Long Sleeve Tee",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1741425-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1741425-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's 3D T Logo Long Sleeve Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8529205-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8529205-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's 3D Wordmark Long Sleeve Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8764806-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8764806-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Plaid Quarter Mile Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1741210-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1741210-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Turbine Short Sleeve Tee",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740275-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740275-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Cybertruck Owl Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/7654393-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7654393-00-A_3.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Let the Sun Shine Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1700280-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1700280-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Solar Roof Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1703767-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1703767-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's 3D Large Wordmark Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8764741-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8764741-00-A_2.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's 3D T Logo Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/7652421-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7652421-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men’s 3D Small Wordmark Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8528839-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8528839-00-A_2.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Powerwall Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/9877034-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/9877034-00-A_2.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "",
        price: '',
        img: '',
        img2: ''
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Plaid Mode Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1549268-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1549268-00-A_2.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "",
        price: '',
        img: '',
        img2: ''
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Battery Day Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1633802-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1633802-00-A_2.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's Cybertruck Bulletproof Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/7654399-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7654399-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's S3XY Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8764600-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8764600-00-A_2.jpg'
      },
      {
        category: 'Men',
        type: 'Tees',
        name: "Men's CyberBear Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1931078-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1931078-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Men's Raven Lightweight Zip Up Bomber Jacket",
        price: '$100',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740250-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Men's Raven Lightweight Hoodie",
        price: '$85',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740245-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740245-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Chill Pullover Hoodie",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740113-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740113-00-A_2_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Men’s Chill Crew Neck Sweatshirt",
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740176-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Men's Chill Full Zip Hoodie",
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1741111-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1741111-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Men's Chill Quarter Zip Pullover",
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740140-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740140-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "Cybertruck Graffiti Hoodie",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/7654420-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/7654420-00-A_0_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Sweatshirts and Hoodies',
        name: "S3XY Hoodie",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8764613-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8764613-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Outerwear',
        name: "Men's Quilted Bomber Jacket",
        price: '$150',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740521-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740521-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Outerwear',
        name: "Men's Quilted Shirt Jacket",
        price: '$115',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740514-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740514-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Outerwear',
        name: "Men's Corp Jacket",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/5645685-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/5645685-00-A_3.jpg'
      },
      {
        category: 'Men',
        type: 'Outerwear',
        name: "Men's Chill Joggers",
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACTIVEWEAR/TRAINING/1740211-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACTIVEWEAR/TRAINING/1740211-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "CyberBear Trucker Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1943349-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1943349-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Tempest Rope Hat",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860532-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860532-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Icon Suede Hat",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860533-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860533-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Aero Snapback Hat",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857156-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857156-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Cyber Rodeo Trucker Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1809152-00-A_3_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1809152-00-A_4_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Relaxed T Logo Hat",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857705-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857705-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Relaxed Wordmark Hat",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1856861-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1856861-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Cybertruck Graffiti Trucker Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/HATS/1657891-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1657891-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Seamless Fitted T Logo Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/HATS/1657916-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1657916-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Cybertruck Graffiti Cuffed Beanie",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740413-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740413-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Thermal Cuffed Beanie",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740417-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740417-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "T Logo Cuffed Beanie",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740407-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740407-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Hats',
        name: "Tesla Wordmark Beanie",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740408-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740408-00-A_1.jpg'
      },
      {
        category: 'Men',
        type: 'Socks',
        name: "Cybertruck Graffiti Sock Set",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741613-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741613-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Socks',
        name: "Cybertruck Icon Sock Set",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741615-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741615-00-A_1_2000.jpg'
      },
      {
        category: 'Men',
        type: 'Socks',
        name: "Tesla Wordmark Sock Set",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741611-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741611-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Best Sellers',
        name: "Women's Raven Lightweight Zip Up Jacket",
        price: '$110',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1740255-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740255-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Best Sellers',
        name: "Women's Chill Half Zip Hoodie",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740226-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740226-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Best Sellers',
        name: "Women's Small Wordmark Short Sleeve V-Neck Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765130-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8765130-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's Turbine Long Sleeve Tee",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1740290-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1740290-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's Turbine Short Sleeve Tee",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1741441-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1741441-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's T Logo Short Sleeve Scoop Neck Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765090-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8765090-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's T Logo Long Sleeve Scoop Neck Tee",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765095-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8765095-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's Small Wordmark Short Sleeve V-Neck Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765130-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8765130-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765105-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/8765105-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women's Plaid Mode Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1549275-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1549275-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Tees',
        name: "Women’s Powerwall Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/9877040-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/9877040-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "Women's Raven Slouchy Crew Sweatshirt",
        price: '$90',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740260-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740260-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "Women's Raven Lightweight Zip Up Jacket",
        price: '$110',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1740255-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740255-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "Women's Chill Half Zip Hoodie",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740226-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740226-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "Women's Chill Crew Sweatshirt",
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740231-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740231-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "Chill Pullover Hoodie",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740113-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740113-00-A_2_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "Cybertruck Graffiti Hoodie",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/7654420-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/7654420-00-A_0_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Sweatshirts and Hoodies',
        name: "S3XY Hoodie",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8764613-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/8764613-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Outerwear',
        name: "Women's Puffer Jacket",
        price: '$130',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1740535-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740535-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Outerwear',
        name: "Women's Corp Jacket",
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/5645680-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/5645680-00-A_3.jpg'
      },
      {
        category: 'Women',
        type: 'Joggers',
        name: "Women's Raven Joggers",
        price: '$85',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACTIVEWEAR/TRAINING/1740270-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACTIVEWEAR/TRAINING/1740270-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "CyberBear Trucker Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1943349-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1943349-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Tempest Rope Hat",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860532-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860532-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Icon Suede Hat",
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860533-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1860533-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Aero Snapback Hat",
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857156-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857156-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Cyber Rodeo Trucker Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1809152-00-A_3_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1809152-00-A_4_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Relaxed T Logo Hat",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857705-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1857705-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Relaxed Wordmark Hat",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1856861-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1856861-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Cybertruck Graffiti Trucker Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/HATS/1657891-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1657891-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Seamless Fitted T Logo Hat",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/HATS/1657916-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1657916-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Cybertruck Graffiti Cuffed Beanie",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740413-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740413-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Thermal Cuffed Beanie",
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740417-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740417-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "T Logo Cuffed Beanie",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740407-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740407-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Hats',
        name: "Tesla Wordmark Beanie",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/HEADWEAR/BEANIES/1740408-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/BEANIES/1740408-00-A_1.jpg'
      },
      {
        category: 'Women',
        type: 'Socks',
        name: "Cybertruck Graffiti Sock Set",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741613-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741613-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Socks',
        name: "Cybertruck Icon Sock Set",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741615-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741615-00-A_1_2000.jpg'
      },
      {
        category: 'Women',
        type: 'Socks',
        name: "Tesla Wordmark Sock Set",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741611-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741611-00-A_1_2000.jpg'
      },
      {
        category: 'Kids',
        type: 'Best Sellers',
        name: "Kids Cyberquad Bomber Jacke",
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Best Sellers',
        name: "Kids T Logo Cuffed Beanie",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1740410-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/HATS/1740410-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Best Sellers',
        name: "Kids Cybertruck Long Sleeve Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1742694-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742694-00-A_3.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids 3D T Logo Tee",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/7652453-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7652453-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids Scribble T Logo Tee",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8529318-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/8529318-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids 3D Large Wordmark Tee",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8764766-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/8764766-00-A_2.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids Cybertruck Tee",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8529342-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/8529342-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids Let the Sun Shine Tee",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1753970-00-A_zoomed_01.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1753970-00-A_1_2000.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids Racing Stripe Tee",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8529366-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/8529366-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids Cybertruck Long Sleeve Tee",
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1742694-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742694-00-A_3.jpg'
      },
      {
        category: 'Kids',
        type: 'Tees',
        name: "Kids Checkered Tee",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/100042301_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/100042301_alt.jpg'
      },
      {
        category: 'Kids',
        type: 'Onesies',
        name: "Zero Emissions (Almost) Onesie",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/ONESIES/0_emissions_onesie_2.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/ONESIES/0_emissions_onesie_2.jpg'
      },
      {
        category: 'Kids',
        type: 'Onesies',
        name: "Made on Earth by Humans Onesie",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/ONESIES/1473809-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/ONESIES/1473809-00-A_alt.jpg'
      },
      {
        category: 'Kids',
        type: 'Onesies',
        name: "Scribble T Logo Onesie",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/ONESIES/8529387-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/ONESIES/8529387-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Onesies',
        name: "Kids Corp Jacket",
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/JACKETS/1643504-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/JACKETS/1643504-00-A_2.jpg'
      },
      {
        category: 'Kids',
        type: 'Onesies',
        name: "Kids Cyberquad Bomber Jacket",
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Hats',
        name: "Kids T Logo Cuffed Beanie",
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1740410-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/HATS/1740410-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Hats',
        name: "Kids Relaxed T Logo Hat",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1693867-02-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/HATS/1693867-02-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Hats',
        name: "Kids Relaxed Wordmark Hat",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1693862-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/HATS/1693862-00-A_1.jpg'
      },
      {
        category: 'Kids',
        type: 'Socks',
        name: "Kids Cybertruck Graffiti Sock Set",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/SOCKS/1741619-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/SOCKS/1741619-00-A_1_2000.jpg'
      },
      {
        category: 'Kids',
        type: 'Socks',
        name: "Kids Cybertruck Icon Sock Set",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/SOCKS/1741621-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/SOCKS/1741621-00-A_1_2000.jpg'
      },
      {
        category: 'Kids',
        type: 'Socks',
        name: "Kids Tesla Wordmark Sock Set",
        price: '$20',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/SOCKS/1741617-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/SOCKS/1741617-00-A_1_2000.jpg'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Apparels')
  }
};
