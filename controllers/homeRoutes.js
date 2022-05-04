const router = require('express').Router();
const { rest } = require('lodash');
const { User } = require('../models');
const withAuth = require('../utils/auth');

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
  try {
   //If user is logged in, show homepage
    console.log("working")
    res.render('homepage')
  } catch (err) {
    //If user is not logged in, redirect request to login page
    res.status(500).json(err);
  }
  
  // console.log("working")
  //   // If the user is not logged in, redirect the user to the login page
  //   // res.redirect('login');
  //   // if (!req.session.loggedIn) {
  //   //   res.redirect('/login');
  //   // } else {
  //   //   // If the user is logged in, allow them to view the gallery
  //   //   try {
  //       res.render('homepage')
  //   //   } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    //   }
    // }
  });

module.exports = router;