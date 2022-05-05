const router = require('express').Router();
const golferRoutes = require('./golferRoutes');
const scoreRoutes = require('./scoreRoutes')
router.use('/golfer', golferRoutes);
router.use('/scorecard', scoreRoutes);
module.exports = router;
