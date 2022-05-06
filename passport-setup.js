const res = require('express/lib/response');
const passport = require('passport');
var PassportHerokuAddon = require('passport-heroku-addon');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const models = require("./models")
const Golfer = models.Golfer


passport.serializeUser(function(user, done) {
    done(null, user.id); //Database
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(null, user);
    });
});

// passport.use(new PassportHerokuAddon({
//     sso_salt: process.env.SSO_SALT
//   }));
  
//   app.get('/heroku/resources/:id',
//     passport.authenticate('heroku-addon'),
//     function(req, res) {
//       res.redirect("/");
//     });


//Passport use function to pass new Google Strategy
passport.use(new GoogleStrategy ({
    // clientID: "276951669297-thf9g4tj9trdknjqu09i3u3j71l4975l.apps.googleusercontent.com",
    //Local Client ID
    clientID: "276951669297-sq3ueesalenosvjqbj5npfaiko1kvspi.apps.googleusercontent.com",

    // clientSecret: "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",
    //Local Client Secret
    clientSecret: "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",

    // callbackURL: "https://morning-bastion-43801.herokuapp.com/google/callback"
    //Local Callback URL
    callbackURL: "http://localhost:3001/google/callback" 
}, 
function(accessToken, refreshToken, profile, done) {
    //use profile info (profile id) to check if the user is registered in the DB
    // Golfer.findOrCreate({ googleId: profile.id} function (err, user) {
    //     return done(null, user);
    // });
    Golfer.findOne({where: {googleId: profile.id}})
    .then((golferInfo)=> {
        // console.log(profile.id)
        // console.log (profile.displayName)
        // console.log (profile)
        if(!golferInfo){
            Golfer.create({googleId:profile.id, 
                golferName:profile.displayName,
                email: profile.emails[0].value
             }).then((profileInfo)=>{
                 done(null, profileInfo)
             }).catch((err)=>{
                 console.log(err)
                 done(err, null)
                })
        } else{
            done(null, golferInfo)
        }
    }).catch((error)=>{
        done(error, null)
    })
}));