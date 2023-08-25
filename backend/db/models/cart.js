'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(
        models.User,
        { foreignKey: 'userId' }
      )
    }
  }
  Cart.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      validate: {
        max: 5,
        tooMuch(value) {
          if (value > 5) {
            throw new Error("Quantity cannot exceed 5")
          }
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
