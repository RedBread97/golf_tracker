const { Golfer } = require('../models');

const golferData = [
    {
        golferName: 'Tiger Woods',
        email: 'Twoods@test.com',
        password: 'test1234'
    }
]

const seedGolfer = () => Golfer.bulkCreate(golferData);