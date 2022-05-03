const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id); //Databas
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(null, user);
    });
});


//Passport use function to pass new Google Strategy
passport.use(new GoogleStrategy ({
    clientID: "276951669297-sq3ueesalenosvjqbj5npfaiko1kvspi.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/google/callback" //==== DEFINE
}, 
function(accessToken, refreshToken, profile, done) {
    //use profile info (profile id) to check if the user is registered in the DB
    User.findOrCreate({ googleId: profile.id}, function (err, user) {
        return done(null, user);
    });
}));