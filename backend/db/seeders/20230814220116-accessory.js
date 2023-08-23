'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Accessories', [
      {
        model: 'Model S',
        area: 'Best Sellers',
        title: 'Model S All-Weather Interior Liners',
        price: '$250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_1_2000.jpg',
      },
      {
        model: 'Model S',
        area: 'Best Sellers',
        title: 'Model S Plaid Track Package',
        price: '$15,000 - $20,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Best Sellers',
        title: 'Model S Plaid 20" Zero-G Wheel and Tire Package',
        price: '$6,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: 'Model S/3/Y Pet Liner',
        price: '$145',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_10_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: 'Model S/X Steering Wheel Retrofit',
        price: '$700',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1916503-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1916503-00-A_02_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: 'Model S Glass Roof Sunshade',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801350-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: 'Model S Rear Liftgate Sunshade',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801349-00-A_01_wht.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801349-00-A_04.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Fixed Glass Roof Sunshade',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Rear Liftgate Sunshade',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1034622-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1034622-00-A_0.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Panoramic Roof Sunshades',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1041683-00-B_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1041683-00-B_0.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Illuminated Door Sills',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1537258-00-A_3.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1537258-00-A_3.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S/X Coat Hooks',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_1.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S/X Performance Pedal Set',
        price: '$150',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: '2012-2020 | Model S Enhanced Anti-theft Upgrade',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/6565500-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/6565500-00-A_0.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: 'Solid State Drive | 1 TB',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Interior',
        title: 'USB Drive | 128 GB',
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Exterior',
        title: 'Model S Roof Rack - Glass Roof',
        price: '$450',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1494684-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1494684-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Exterior',
        title: 'Model S Carbon Fiber Spoiler',
        price: '$900',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1624227-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1624227-00-B_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Exterior',
        title: '2012-2020 | Model S Carbon Fiber Spoiler',
        price: '$900',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1121299-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1121299-00-A_1.jpg'
      },
      {
        model: 'Model S',
        area: 'Exterior',
        title: 'Model S Mud Flaps',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1762507-00-B_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1762507-00-B_1.jpg'
      },
      {
        model: 'Model S',
        area: 'Exterior',
        title: 'Model S Car Cover',
        price: '$325 - $400',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-00-A_alt.jpg'
      },
      {
        model: 'Model S',
        area: 'Exterior',
        title: 'Powered By the Sun License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S Plaid Track Package',
        price: '$15,000 - $20,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S Plaid 20" Zero-G Wheel and Tire Package',
        price: '$6,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S 19" Tempest Wheel and Winter Tire Package',
        price: '$2,750',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744009-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744009-00-A_3.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S 21" Arachnid Wheel and Winter Tire Package',
        price: '$6,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744033-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744033-00-A_2.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S 19" Snow Chains',
        price: '$615',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1716198-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1716198-00-A_3.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Model S Tempest Wheel Cover',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1486286-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1486286-01-A_1.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: '2012-2020 | Model S 19” Snow Chains',
        price: '$470',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1538901-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1538901-00-A_1.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Repair Kit',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Repair Sealant',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Pressure Monitoring System',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Tire Tote',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_3.jpg'
      },
      {
        model: 'Model S',
        area: 'Wheels and Tires',
        title: 'Wheel Locks',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: 'Model S All-Weather Interior Liners',
        price: '$250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: 'Model S All-Weather Rear Cargo Liner Set',
        price: '$200',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669543-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669543-01-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: 'Model S All-Weather Front Trunk Liner',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669542-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669542-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S All-Weather Rear Trunk Liner Set',
        price: '$190',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019291-01-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019291-01-A_alt.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S All-Weather Rear Well Liner',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1024370-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1024370-00-A_alt.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S All-Weather Front Trunk Liner',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019289-02-B_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019289-02-B_0.jpg'
      },
      {
        model: 'Model S',
        area: 'Floor Mats',
        title: '2012-2020 | Model S Carpet Interior Mats',
        price: '$150',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1047686-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1047686-00-B_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Parts',
        title: 'Model S Wiper Blade',
        price: '$28',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1562215-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1562215-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Parts',
        title: 'Model S/X Air Filter',
        price: '$34',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Parts',
        title: '2012-2020 | Model S Wiper Blade',
        price: '$28',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Parts',
        title: '2012-2020 | Model S HEPA Air Filtration Upgrade',
        price: '$500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1494109-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1494109-00-A_0_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Parts',
        title: 'Paint Repair Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_alt.jpg'
      },
      {
        model: 'Model S',
        area: 'Parts',
        title: 'Roadside Safety Kit',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Keys',
        title: 'Model S Key Fob',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1819443-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1819443-00-A_1_2000.jpg'
      },
      {
        model: 'Model S',
        area: 'Keys',
        title: 'Model S Key Band',
        price: '$18',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1490875-00-A_4_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1587383-00-A_1.jpg'
      },
      {
        model: 'Model S',
        area: 'Keys',
        title: 'Key Card',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_2.jpg'
      },
      {
        model: 'Model 3',
        area: 'Best Sellers',
        title: 'Model 3 All-Weather Interior Liners',
        price: '$225',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Best Sellers',
        title: 'Model 3 18"/19" Snow Chains',
        price: '$160',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Best Sellers',
        title: 'Model 3 Roof Rack',
        price: '$400',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Model S/3/Y Pet Liner',
        price: '$145',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_10_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Model 3 Illuminated Door Sills',
        price: '$175 - $250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1537260-01-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1537260-01-A_3.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Model 3/Y Center Console Trays',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_2.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Model 3 Glass Roof Sunshades',
        price: '$115',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1763464-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1135833-00-B_2.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Model 3/Y Automatic Garage Opener',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Model 3 Phone Charging Cable',
        price: '$14',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1116143-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1116143-00-A_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'Solid State Drive | 1 TB',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Interior',
        title: 'USB Drive | 128 GB',
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Roof Rack',
        price: '$400',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Car Cover',
        price: '$230 - $300',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1135831-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1135831-00-A_alt.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Carbon Fiber Spoiler',
        price: '$700',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1455166-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1455166-00-B_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Paint Protection Film',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547351-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547351-00-C_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 Mud Flaps',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547974-00-B_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547974-00-B_0.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Model 3 License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1703855-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1703855-00-A_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Exterior',
        title: 'Powered By the Sun License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 18" Aero Wheel and Winter Tire Package',
        price: '$2,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643520-00-D_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643520-00-D_3.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 19" Sport Wheel and Winter Tire Package',
        price: '$3,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643517-00-C_1.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643517-00-C_3.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 20" Überturbine Wheel and Winter Tire Package',
        price: '$4,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643533-00-B_5_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643533-00-B_8_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 18"/19" Snow Chains',
        price: '$160',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 20" Performance Snow Chains',
        price: '$460',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1538902-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1538902-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 Track Package',
        price: '$5,500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1501561-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1501561-00-A_2.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 Aero Wheel Cover',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1044271-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1044271-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Model 3 Aero Wheel Cap Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1603630-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1603630-00-A_2.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Repair Kit',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Repair Sealant',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Pressure Monitoring System',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Tire Tote',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_3.jpg'
      },
      {
        model: 'Model 3',
        area: 'Wheels and Tires',
        title: 'Wheel Locks',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 All-Weather Interior Liners',
        price: '$225',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 All-Weather Rear Cargo Liner Set',
        price: '$190',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1896493-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1143622-00-B_0_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 All-Weather Front Trunk Liner',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1616600-00-A_0.jpg',
        img2: 'src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1616600-00-A_1.jpg"'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 Rugged Textile Interior Mats',
        price: '$125',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1619352-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1619352-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 Rugged Textile Rear Trunk Mat',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1584028-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1584028-00-A_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 Carpet Interior Mats',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1103250-00-D_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1103250-00-D_3.jpg'
      },
      {
        model: 'Model 3',
        area: 'Floor Mats',
        title: 'Model 3 Carpet Front Trunk Mat',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1090853-00-D_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1090853-00-D_4_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Parts',
        title: 'Paint Repair Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_alt.jpg'
      },
      {
        model: 'Model 3',
        area: 'Parts',
        title: 'Roadside Safety Kit',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Parts',
        title: 'Model 3/Y Air Filter',
        price: '$17',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Parts',
        title: 'Model 3 Wiper Blade',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg'
      },
      {
        model: 'Model 3',
        area: 'Keys',
        title: 'Model 3 Key Band',
        price: '$18',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/m3_key_band.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1587383-00-A_1.jpg'
      },
      {
        model: 'Model 3',
        area: 'Keys',
        title: 'Key Card',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_2.jpg'
      },
      {
        model: 'Model 3',
        area: 'Keys',
        title: 'Model 3/Y Key Fob',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Best Sellers',
        title: 'Model X All-Weather Interior Liners',
        price: '$295 - $325',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846376-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846099-00-A_5_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Best Sellers',
        title: 'Model X Glass Roof Sunshade',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1859937-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1859937-00-A_4_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Best Sellers',
        title: 'Model X/Y Hitch Rack',
        price: '$540',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Model X Pet Liner',
        price: '$135',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1562263-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1562263-00-A_3.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Model S/X Steering Wheel Retrofit',
        price: '$700',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1916503-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1916503-00-A_02_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Model X Cargo Net',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1521206-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1521206-00-A_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Model X Glass Roof Sunshade',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1859937-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1859937-00-A_4_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Model X Falcon Wing Sunshades',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1078357-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1078357-00-A_2.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Model X Rear Liftgate Sunshade',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1078360-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1078360-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: '2012-2020 | Model S/X Coat Hooks',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: '2012-2020 | Model S/X Performance Pedal Set',
        price: '$150',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: '2015-2020 | Model X Enhanced Anti-Theft Upgrade',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/6565501-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/6565501-00-A_0.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'Solid State Drive | 1 TB',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_0_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Interior',
        title: 'USB Drive | 128 GB',
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Exterior',
        title: 'Model X/Y Hitch Rack',
        price: '$540',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Exterior',
        title: 'Model X/Y Ski/Snowboard Carrier for Hitch Rack',
        price: '$280',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1104792-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1104792-00-A_alt.jpg'
      },
      {
        model: 'Model X',
        area: 'Exterior',
        title: 'Model X Car Cover',
        price: '$375 - $450',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1069533-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1069533-00-A_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Exterior',
        title: 'Powered By the Sun License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Exterior',
        title: 'Model X Mud Flaps',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1803059-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1803059-00-_3_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Model X 20" Cyberstream Wheel and Winter Tire Package',
        price: '$3,000',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/WHEELS_TIRES/1744065-00-A_6_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/WHEELS_TIRES/1744065-00-A_7_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Model X 20”/22” Snow Chains',
        price: '$610',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/WHEELS_TIRES/1538899-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/WHEELS_TIRES/1538899-00-A_1.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Tire Repair Kit',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Tire Repair Sealant',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Tire Pressure Monitoring System',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Tire Tote',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_3.jpg'
      },
      {
        model: 'Model X',
        area: 'Wheels and Tires',
        title: 'Wheel Locks',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_0_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: 'Model X All-Weather Interior Liners',
        price: '$295 - $325',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846099-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846099-00-A_8_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: 'Model X All-Weather Rear Cargo Liner Set',
        price: '$200 - $225',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1849817-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1849817-00-A_2_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: 'Model X All-Weather Front Trunk Liner',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846377-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846377-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: 'Model X All-Weather Interior Mats',
        price: '$120',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1763873-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1763873-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: '2015-2020 | Model X All-Weather Interior Liners',
        price: '$160',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1468511-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1468511-00-A_0.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: '2015-2020 | Model X All-Weather Rear Trunk Liner',
        price: '$90 - $130',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1103027-02-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1103027-02-A_0.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: '2015-2020 | Model X All-Weather Front Trunk Liner',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1103024-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1103024-00-A_alt.jpg'
      },
      {
        model: 'Model X',
        area: 'Floor Mats',
        title: '2015-2020 | Model X Carpet Interior Mats',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1100517-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1100517-00-A_0_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Parts',
        title: 'Model X Wiper Blade',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1615631-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1615631-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Parts',
        title: 'Model S/X Air Filter',
        price: '$34',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Parts',
        title: '2015-2020 | Model X Wiper Blade',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Parts',
        title: '2015-2020 | Model X HEPA Air Filtration Upgrade',
        price: '$500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1104288-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1104288-00-A_0_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Parts',
        title: 'Paint Repair Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_alt.jpg'
      },
      {
        model: 'Model X',
        area: 'Parts',
        title: 'Roadside Safety Kit',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Keys',
        title: 'Model X Key Fob',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1819444-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1819444-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Keys',
        title: 'Model X Key Band',
        price: '$18',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1819444-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1819444-00-A_1_2000.jpg'
      },
      {
        model: 'Model X',
        area: 'Keys',
        title: 'Key Card',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_2.jpg'
      },
      {
        model: 'Model Y',
        area: 'Best Sellers',
        title: 'Model Y All-Weather Interior Liners',
        price: '$225',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Best Sellers',
        title: 'Model Y 19"/20" Snow Chains',
        price: '$265',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625881-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625881-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Best Sellers',
        title: 'Model Y Roof Rack',
        price: '$500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model S/3/Y Pet Liner',
        price: '$145',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_10_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model Y Illuminated Door Sills',
        price: '$250',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1658682-01-A_5_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1658682-01-A_7.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model 3/Y Center Console Trays',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_2.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model Y Trunk Storage Bins',
        price: '$85',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1658688-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1658688-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model Y Rear Liftgate Sunshade',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1623601-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1623601-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model Y Glass Roof Sunshade',
        price: '$105',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1623600-00-A_3_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1623600-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Model 3/Y Automatic Garage Opener',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'Solid State Drive | 1 TB',
        price: '$350',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Interior',
        title: 'USB Drive | 128 GB',
        price: '$45',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1628188-00-A_1_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y Carbon Fiber Spoiler',
        price: '$800',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1533971-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1533971-00-A_1_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y Roof Rack',
        price: '$500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model X/Y Hitch Rack',
        price: '$540',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model X/Y Ski/Snowboard Carrier for Hitch Rack',
        price: '$280',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1104792-00-A_0.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1104792-00-A_alt.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y Tow Package',
        price: '$1,300',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1609595-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1609595-00-A_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y Paint Protection Film',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1618247-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1618247-00-A_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y Mud Flaps',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1634443-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1634443-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y Car Cover',
        price: '$230 - $300',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1553614-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1553614-00-A_2.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Model Y License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1703856-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1703856-00-A_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Exterior',
        title: 'Powered By the Sun License Plate Frame',
        price: '$40',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y 19" Gemini Wheel and Pirelli Winter Tire Package',
        price: '$2,500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625535-00-B_8_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625535-00-B_6.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y 20" Induction Wheel and Pirelli Winter Tire Package',
        price: '$3,500',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625536-00-B__6_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625536-00-B__7_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y 21" Überturbine Wheel and Winter Tire Package',
        price: '$4,750',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1738785-00-A_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1738785-00-A_3.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y 19"/20" Snow Chains',
        price: '$265',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625881-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625881-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y 21" Snow Chains',
        price: '$610',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625882-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625882-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y Gemini Wheel Cover',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1044235-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1044235-00-B_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Model Y Gemini Wheel Cap Kit',
        price: '$90',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1588816-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1588816-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Tire Repair Kit',
        price: '$70',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_1_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Tire Repair Sealant',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_1_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Tire Pressure Monitoring System',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-01-A_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Tire Tote',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_3.jpg'
      },
      {
        model: 'Model Y',
        area: 'Wheels and Tires',
        title: 'Wheel Locks',
        price: '$50',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_0_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y All-Weather Interior Liners',
        price: '$225',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y All-Weather Rear Cargo Liner Set',
        price: '$190',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1713539-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1619350-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y All-Weather Front Trunk Liner',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1618834-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1618834-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y Rugged Textile Interior Mats',
        price: '$125',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1619354-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1619354-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y Rugged Textile Rear Trunk Mat',
        price: '$80',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1619365-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1619365-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y Carpet Interior Mats',
        price: '$95',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1493064-00-B_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1493064-00-B_3.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y Carpet Interior Third Row Mats',
        price: '$30',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1660378-00-A_2_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1660378-00-A_0.jpg'
      },
      {
        model: 'Model Y',
        area: 'Floor Mats',
        title: 'Model Y Carpet Front Trunk Mat',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1582591-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1582591-00-A_3.jpg'
      },
      {
        model: 'Model Y',
        area: 'Parts',
        title: 'Model Y Wiper Blade',
        price: '$25',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1490250-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1490250-00-A_1_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Parts',
        title: 'Model 3/Y Air Filter',
        price: '$17',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Parts',
        title: 'Paint Repair Kit',
        price: '$60',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_alt.jpg'
      },
      {
        model: 'Model Y',
        area: 'Parts',
        title: 'Roadside Safety Kit',
        price: '$65',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_1_2000.jpg'
      },
      {
        model: 'Model Y',
        area: 'Keys',
        title: 'Model Y Key Band',
        price: '$18',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1587383-00-A_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1587383-00-A_1.jpg'
      },
      {
        model: 'Model Y',
        area: 'Keys',
        title: 'Key Card',
        price: '$35',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_2.jpg'
      },
      {
        model: 'Model Y',
        area: 'Keys',
        title: 'Model 3/Y Key Fob',
        price: '$175',
        img: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_0_2000.jpg',
        img2: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_1.jpg'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accessories')
  }
};
