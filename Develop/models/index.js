const Golfer = require('./golfer');
const ScoreCard = require('./scorecard')

Golfer.hasMany(ScoreCard, {
    foreignKey: 'golfer_id',
});

ScoreCard.belongsTo(Golfer, {
    foreignKey: 'golfer_id',
});

module.exports = { Golfer, ScoreCard };