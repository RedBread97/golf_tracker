const { ScoreCard } = require('../models');

const scoreData = [
    {
      golfer_id: 1,
      courseName: 'Pebble Beach',
      roundScore: 68,
      notes: 'test 1 2 3'
    }
]

const seedScore = () => ScoreCard.bulkCreate(scoreData);