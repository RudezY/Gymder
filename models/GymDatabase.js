const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');

// create our User model
class Gym extends Model {}

Gym.init(
  {
    gymMembershipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Gym'
  }
);

module.exports = Gym;
