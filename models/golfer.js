const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Golfer extends Model {}

Golfer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    }
      },
    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'golfer',
  },
);

module.exports = Golfer;
