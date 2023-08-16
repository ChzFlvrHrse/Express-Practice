'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Accessories', [
      {
        name: 'Model S',
        area: 'Best Sellers',
        title: 'Model S All-Weather Interior Liners',
        price: '$250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_1_2000.jpg',
      },
      {
        name: 'Model S',
        area: 'Best Sellers',
        title: 'Model S Plaid Track Package',
        price: '$15,000 - $20,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Best Sellers',
        title: 'Model S Plaid 20" Zero-G Wheel and Tire Package',
        price: '$6,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: 'Model S/3/Y Pet Liner',
        price: '$145',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_10_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: 'Model S/X Steering Wheel Retrofit',
        price: '$700',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1916503-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1916503-00-A_02_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: 'Model S Glass Roof Sunshade',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801350-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: 'Model S Rear Liftgate Sunshade',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801349-00-A_01_wht.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801349-00-A_04.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Fixed Glass Roof Sunshade',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Rear Liftgate Sunshade',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1034622-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1034622-00-A_0.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Panoramic Roof Sunshades',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1041683-00-B_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1041683-00-B_0.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Illuminated Door Sills',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1537258-00-A_3.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1537258-00-A_3.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S/X Coat Hooks',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_1.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S/X Performance Pedal Set',
        price: '$150',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Enhanced Anti-theft Upgrade',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/6565500-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/6565500-00-A_0.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: 'Solid State Drive | 1 TB',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Interior',
        title: 'USB Drive | 128 GB',
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Exterior',
        title: 'Model S Roof Rack - Glass Roof',
        price: '$450',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1494684-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1494684-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Exterior',
        title: 'Model S Carbon Fiber Spoiler',
        price: '$900',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1624227-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1624227-00-B_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Exterior',
        title: '2012-2020 | Model S Carbon Fiber Spoiler',
        price: '$900',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1121299-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1121299-00-A_1.jpg'
      },
      {
        name: 'Model S',
        area: 'Exterior',
        title: 'Model S Mud Flaps',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1762507-00-B_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1762507-00-B_1.jpg'
      },
      {
        name: 'Model S',
        area: 'Exterior',
        title: 'Model S Car Cover',
        price: '$400',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-00-A_alt.jpg'
      },
      {
        name: 'Model S',
        area: 'Exterior',
        title: 'Powered By the Sun License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S Plaid Track Package',
        price: '$15,000 - $20,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S Plaid 20" Zero-G Wheel and Tire Package',
        price: '$6,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S 19" Tempest Wheel and Winter Tire Package',
        price: '$2,750',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744009-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744009-00-A_3.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S 21" Arachnid Wheel and Winter Tire Package',
        price: '$6,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744033-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744033-00-A_2.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S 19" Snow Chains',
        price: '$615',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1716198-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1716198-00-A_3.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S Tempest Wheel Cover',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1486286-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1486286-01-A_1.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: '2012-2020 | Model S 19” Snow Chains',
        price: '$470',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1538901-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1538901-00-A_1.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Repair Kit',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Repair Sealant',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Pressure Monitoring System',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Tote',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_3.jpg'
      },
      {
        name: 'Model S',
        area: 'Wheels and Tires',
        title: 'Wheel Locks',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: 'Model S All-Weather Interior Liners',
        price: '$250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: 'Model S All-Weather Rear Cargo Liner Set',
        price: '$200',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669543-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669543-01-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: 'Model S All-Weather Front Trunk Liner',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669542-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669542-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S All-Weather Rear Trunk Liner Set',
        price: '$190',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019291-01-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019291-01-A_alt.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S All-Weather Rear Well Liner',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1024370-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1024370-00-A_alt.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S All-Weather Front Trunk Liner',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019289-02-B_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019289-02-B_0.jpg'
      },
      {
        name: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S Carpet Interior Mats',
        price: '$150',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1047686-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1047686-00-B_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Parts',
        title: 'Model S Wiper Blade',
        price: '$28',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1562215-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1562215-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Parts',
        title: 'Model S/X Air Filter',
        price: '$34',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Parts',
        title: '2012-2020 | Model S Wiper Blade',
        price: '$28',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Parts',
        title: '2012-2020 | Model S HEPA Air Filtration Upgrade',
        price: '$500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1494109-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1494109-00-A_0_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Parts',
        title: 'Paint Repair Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_alt.jpg'
      },
      {
        name: 'Model S',
        area: 'Parts',
        title: 'Roadside Safety Kit',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Keys',
        title: 'Model S Key Fob',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1819443-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1819443-00-A_1_2000.jpg'
      },
      {
        name: 'Model S',
        area: 'Keys',
        title: 'Model S Key Band',
        price: '$18',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1490875-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1587383-00-A_1.jpg'
      },
      {
        name: 'Model S',
        area: 'Keys',
        title: 'Key Card',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_2.jpg'
      },
      {
        name: 'Model 3',
        area: 'Best Sellers',
        title: 'Model 3 All-Weather Interior Liners',
        price: '$225',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_1.jpg'
      },
      {
        name: 'Model 3',
        area: 'Best Sellers',
        title: 'Model 3 18"/19" Snow Chains',
        price: '$160',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_1.jpg'
      },
      {
        name: 'Model 3',
        area: 'Best Sellers',
        title: 'Model 3 Roof Rack',
        price: '$400',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Model S/3/Y Pet Liner',
        price: '$145',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_10_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Model 3 Illuminated Door Sills',
        price: '$175 - $250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1537260-01-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1537260-01-A_3.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Model 3/Y Center Console Trays',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_2.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Model 3 Glass Roof Sunshades',
        price: '$115',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1763464-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1135833-00-B_2.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Model 3/Y Automatic Garage Opener',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Model 3 Phone Charging Cable',
        price: '$14',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1116143-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1116143-00-A_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'Solid State Drive | 1 TB',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_0_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Interior',
        title: 'USB Drive | 128 GB',
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Roof Rack',
        price: '$400',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Car Cover',
        price: '$230 - $300',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1135831-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1135831-00-A_alt.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Carbon Fiber Spoiler',
        price: '$700',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1455166-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1455166-00-B_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Paint Protection Film',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547351-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547351-00-C_0_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Mud Flaps',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547974-00-B_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547974-00-B_0.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1703855-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1703855-00-A_0_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Exterior',
        title: 'Powered By the Sun License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 18" Aero Wheel and Winter Tire Package',
        price: '$2,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643520-00-D_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643520-00-D_3.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 19" Sport Wheel and Winter Tire Package',
        price: '$3,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643517-00-C_1.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643517-00-C_3.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 20" Überturbine Wheel and Winter Tire Package',
        price: '$4,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643533-00-B_5_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643533-00-B_8_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 18"/19" Snow Chains',
        price: '$160',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_1.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 20" Performance Snow Chains',
        price: '$460',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1538902-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1538902-00-A_1.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 Track Package',
        price: '$5,500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1501561-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1501561-00-A_2.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 Aero Wheel Cover',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1044271-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1044271-00-A_1.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 Aero Wheel Cap Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1603630-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1603630-00-A_2.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Repair Kit',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Repair Sealant',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_1_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Pressure Monitoring System',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Tote',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_3.jpg'
      },
      {
        name: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Wheel Locks',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_0_2000.jpg'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accessories')
  }
};
