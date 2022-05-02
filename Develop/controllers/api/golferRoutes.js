const router = require('express').Router();
const Golfer = require('../../models/golfer');

// GET all golfers
router.get('/', async (req, res) => {

    try {
        const golferData = await Golfer.findAll({});
        // console.log(studentData);
        const plainGolferData = golferData.map(stu => stu.get({plain:true}))
        res.render('homepage', { golfers: plainGolferData })
    } catch (err) {
        res.status(500).json(err);
    }
});

//check data first
router.post('/', async (req, res) => {
    try {
        const golferData = await Golfer.create({
            golferName: req.body.s_name,
            email: req.body.s_email
        });
        res.status(200).json(golferData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;
