const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ScoreCard extends Model {}

ScoreCard.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        golfer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'golfer',
                key: 'id',
            },
        },
        courseName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roundScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // scoreImage: {
        //     type:DataTypes.STRING,
        //     allowNull:  true,
        // },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'scorecard',
    },
);

module.exports = ScoreCard;
