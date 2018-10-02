const express = require('express'); // uses common modules for node -- use these on server side
//import express from 'express' -- would be use on the front end
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy // Only need the "Strategy" part of the oauth20

const keys = require ('./config/keys')

// the express app variable
const app = express();

// app -- represent the underlining express app
// get -- route handler, http request (get, put, post, delete, patch)
// '/' - watch for incoming requests -- route portion of the handler -- localhost:5000/
// req -- 'request' js object that represents the incoming data
// res -- 'response' js object that send back the data
// => -- excute the following
app.get('/greeting', (req, res) => {
    res.send({hi: 'there'});
});

// Google OAuth
// .use -- passport to handle auth with a certian auth type -- GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
  })
);

// passport.authenticate "google" -- knows to use the GoogleStrategy has an internal data which states if 'google' is used then use me
// 'scope' -- is what access/permission to get from google -- google has many inbuilt "scope" to use
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

// listen on port 5000
// const PORT = process.env.PORT || 5000; // boolean variable for deciding what the value should be -- either get the env var or be 5000
app.listen(5000);
