const router = require('express').Router();
const { Golfer, ScoreCard } = require('../../models');

router.get('/', async (req, res) => {
    if (!req.session.passport) {
        res.redirect('/');
    } else {
        try {
            const scoreData = await ScoreCard.findAll({
                include: [{ model: Golfer }]
            });

            const scorecard = scoreData.map(score => score.get({ plain: true }));
            console.log(scorecard);
            res.render('homepage', {
                scorecard,
                user: req.session.passport.user,
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
            golfer_id: req.session.passport.user,
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