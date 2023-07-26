'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(
        models.User,
        { foreignKey: 'ownerId' }
      )
    }
  }
  // add image column before
  Car.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    carModel: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    paint: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    wheels: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    hitch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false
    },
    interior: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    seating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    steering: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    enhanced: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false
    },
    autopilot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
