const router = require('express').Router();
const { Golfer, ScoreCard } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const scoreData = await ScoreCard.findAll({
            include: [{ model: Golfer}]
        });
        res.status(200).json(scoreData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});