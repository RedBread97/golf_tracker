const router = require('express').Router();
const { rest } = require('lodash');
const { User } = require('../models');

// router.get('/login', async (req, res) => { 
//     try {
//         console.log("working");
//         res.render('login');
//     } catch (error) {
//         res.status(500).json(err);
//         console.log(err)
//     }
// });

router.get('/', async (req, res) => {
    console.log("working")
    // If the user is not logged in, redirect the user to the login page
    // res.redirect('login');
    // if (!req.session.loggedIn) {
    //   res.redirect('/login');
    // } else {
    //   // If the user is logged in, allow them to view the gallery
    //   try {
        res.render('homepage')
    //   } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    //   }
    // }
  });

module.exports = router;