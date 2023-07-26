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
      carModel: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      paint: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      wheels: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      hitch: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false
      },
      interior: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      seating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      steering: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      enhanced: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false
      },
      autopilot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};
