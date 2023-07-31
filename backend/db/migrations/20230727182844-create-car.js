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
        type: Sequelize.STRING
      },
      wheels: {
        type: Sequelize.STRING
      },
      hitch: {
        type: Sequelize.BOOLEAN
      },
      interior: {
        type: Sequelize.STRING
      },
      seating: {
        type: Sequelize.INTEGER
      },
      steering: {
        type: Sequelize.STRING
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
      ownerId: {
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
