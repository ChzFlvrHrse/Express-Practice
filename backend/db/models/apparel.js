'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apparel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Apparel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING,
      allownul: false,
      unique: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    img2: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {
    sequelize,
    modelName: 'Apparel',
  });
  return Apparel;
};
