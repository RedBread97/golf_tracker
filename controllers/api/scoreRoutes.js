const router = require('express').Router();
const { Golfer, ScoreCard } = require('../../models');

router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const scoreData = await ScoreCard.findAll({
                include: [{ model: Golfer }]
            });

            const scorecard = scoreData.map((score) =>
                score.get({ plain: true })
            );

            res.render('scorecard', {
                scorecard,
                loggedIn: req.sessionOptions.loggedIn,
            });
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const dbScoreData = await ScoreCard.create({
            date: req.body.date,
            courseName: req.body.courseName,
            roundScore: req.body.roundScore,
            notes: req.body.notes
        });
        console.log(dbScoreData);
        res.status(200).json(dbScoreData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

module.exports = router;