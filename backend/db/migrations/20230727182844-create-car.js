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
      paint: {
        type: Sequelize.JSON
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
        type: Sequelize.ARRAY
      },
      hitch: {
        type: Sequelize.BOOLEAN
      },
      interior: {
        type: Sequelize.ARRAY
      },
      seating: {
        type: Sequelize.INTEGER
      },
      steering: {
        type: Sequelize.ARRAY
      },
      enhanced: {
        type: Sequelize.BOOLEAN
      },
      autopilot: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.INTEGER
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
