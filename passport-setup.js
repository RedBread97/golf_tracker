const passport = require('passport');
const Golfer = require('./models/golfer')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "276951669297-sq3ueesalenosvjqbj5npfaiko1kvspi.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

//Passport use function to pass new Google Strategy === Cut and Paste to .env file
passport.use(new GoogleStrategy ({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/google/callback" //==== DEFINE
}, 
function(request, accessToken, refreshToken, profile, done) {
    //use profile info (profile id) to check if the user is registered in the DB
    console.log(profile)
    // Golfer.findOrCreate({where: {googleId: Golfer.id}, function (err, user) {
    //     return 
        done(null, profile);
    // }});
}));

passport.serializeUser(function(user, done) {
    done(null, user) //Database
});

passport.deserializeUser(function(id, done) {
    Golfer.findById(id, function(err, user) {
        done(null, user);
    });
});