const router = require('express').Router();
const golferRoutes = require('./golferRoutes');

router.use('/golfer', golferRoutes);

module.exports = router;
