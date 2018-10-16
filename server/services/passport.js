const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy; // Only need the "Strategy" part of the oauth20

const keys = require("../config/keys");
const mongoose = require("mongoose");

// trying to get something out of mongoose
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // user.id is the unique ID that mongo assigns when added to the DB -- we are getting that not the profile ID4
  // this is because not every user entry in the db will contain a google profile ID as we might use another OAuth method, but mongo will always have a ID
  // we only care about the id mongo assigns as this is unique to our DB
  //console.log("serializeUser : " + user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //console.log("deserializeUser : " + id);
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Google OAuth
// .use -- passport to handle auth with a certian auth type -- GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      console.log("PROFILE ID : " + profile.displayName);
      //console.log("existingUser : " + existingUser.id);

      // .then is part of a async request -- this is a promise
      if (existingUser) {
        //all ready have a record with given profile ID

        //console.log(existingUser.id);
        //console.log("ALL READY LOGGED IN");
        // call "done" -- states we have done someting with passport
        //-- requires two pramas 1st is a error, second is the user being affected
        return done(null, existingUser);
      } else {
        // no record, Create a new one
        //this is also a promise
        //console.log("NOT LOGGED IN ADDING NEW USER");
        const user = await new User({
          googleID: profile.id,
          DisplayName: profile.displayName
        }).save();
        done(null, user);
      }
    }
  )
);
