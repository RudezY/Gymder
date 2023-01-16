const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');

// create our User model
class UserAttributes extends Model {}

UserAttributes.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    workoutstyle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gymMembershipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    age: {
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

module.exports = UserAttributes;
