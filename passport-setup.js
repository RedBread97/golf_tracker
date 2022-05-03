const passport = require('passport');
const Golfer = require('./models/golfer')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, golfer.id); //Database
});

passport.deserializeUser(function(id, done) {
    Golfer.findById(id, function(err, user) {
        done(null, user);
    });
});


//Passport use function to pass new Google Strategy === Cut and Paste to .env file
passport.use(new GoogleStrategy ({
    clientID: "276951669297-sq3ueesalenosvjqbj5npfaiko1kvspi.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/google/callback" //==== DEFINE
}, 
function(accessToken, refreshToken, golfer, done) {
    //use profile info (profile id) to check if the user is registered in the DB
    Golfer.findOrCreate({where: {googleId: golfer.googleId}, function (err, user) {
        return done(null, user);
    }});
}));