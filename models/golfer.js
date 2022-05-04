const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Golfer extends Model {}

Golfer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    googleId:{
      type: DataTypes.STRING,
    },
    golferName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    }
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [8],
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: 'golfer',
  },
);

module.exports = Golfer;
