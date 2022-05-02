const router = require('express').Router();
const stuRoutes = require('./stuRoutes');

router.use('/students', stuRoutes);

module.exports = router;
