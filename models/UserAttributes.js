const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');

// create our User model
class UserAttributes extends Model {}

UserAttributes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    workoutstyle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gymId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender : {
      type : DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userattributes'
  }
);

module.exports = UserAttributes;
