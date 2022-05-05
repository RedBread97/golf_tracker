const router = require('express').Router();
const { rest } = require('lodash');
const { User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
   //If user is logged in, show homepage
    // console.log("working", req.session.passport)
    res.render('homepage', req.session.passport)
  } catch (err) {
    //If user is not logged in, redirect request to login page
    res.status(500).json(err);
  }
  });

module.exports = router;