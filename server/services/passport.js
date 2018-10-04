const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy; // Only need the "Strategy" part of the oauth20

const keys = require("../config/keys");
const mongoose = require("mongoose");

// trying to get something out of mongoose
const User = mongoose.model("users");

// Google OAuth
// .use -- passport to handle auth with a certian auth type -- GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleID: profile.id }).save();
    }
  )
);
