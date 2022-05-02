const router = require('express').Router();
const { rest } = require('lodash');
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        console.log("working");
        res.render('homepage');
    } catch (error) {
        res.status(500).json(err);
        console.log(err)
    }
    
});

module.exports = router;