'use strict';
const bcrypt = require('bcryptjs')
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        firstName: 'Clark',
        lastName: 'Adams',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'FakeUser1',
        firstName: 'John',
        lastName: 'Smith',
        email: 'user1@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'FakeUser2',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'user2@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'Firestar',
        firstName: 'Angelica',
        lastName: 'Jones',
        email: 'firestar@spider.man',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'Iron Man',
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'ironman@avenger.com',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'Firestar', 'Iron Man'] }
    }, {});
  }
};
