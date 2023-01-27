const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');

// create our User model
class Gym extends Model {}

Gym.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zipcode: {
      type: DataTypes.TEXT,
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
