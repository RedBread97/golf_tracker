const express = require('express');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connections');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport-setup');
const passport = require('passport');
const authorization = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const app = express();

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Add cookie session npm
app.use(cookieSession({
  name: 'golf-session',
  keys: ['key1', 'key2']
}))

app.use(routes);


// === Authentication with Google - Middleware === 
const isLoggedIn = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      res.sendStatus(401);
  }
}
// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req, res) => res.send('You are not logged in'));
app.get('/failed', (req, res) => res.send("You failed to log in"));
app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName}`))

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })); //Add photo?

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  });

  //Log out route
  app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  })


  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });