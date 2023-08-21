'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      options: {
        type: Sequelize.STRING
      },
      paint: {
        type: Sequelize.TEXT
      },
      range: {
        type: Sequelize.INTEGER
      },
      topSpeed: {
        type: Sequelize.INTEGER
      },
      zeroSixty: {
        type: Sequelize.DECIMAL
      },
      wheels: {
        type: Sequelize.TEXT
      },
      hitch: {
        type: Sequelize.BOOLEAN
      },
      interior: {
        type: Sequelize.TEXT
      },
      seating: {
        type: Sequelize.TEXT
      },
      steering: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      drive: {
        type: Sequelize.STRING
      },
      savings: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};
