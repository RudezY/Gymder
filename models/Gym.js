const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');

// create our User model
class Gym extends Model {}

Gym.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gym_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gym'
  }
);

module.exports = Gym;
