'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Accessory.belongsTo(
        models.Models,
        { foreignKey: '' }
      )
    }
  }
  Accessory.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    title: {
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
    modelName: 'Accessory',
  });
  return Accessory;
};
