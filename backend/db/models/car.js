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
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    options: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    paint: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    range: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    topSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    zeroSixty: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: false
    },
    wheels: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    hitch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false
    },
    interior: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    seating: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    steering: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    drive: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    savings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
