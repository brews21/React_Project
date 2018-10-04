const express = require("express"); // uses common modules for node -- use these on server side
//import express from 'express' -- would be use on the front end

// pulling in js so it will be excuted --
require("./models/user"); // order of operations this must be done before calling "passport"
require("./services/passport");

const mongoose = require("mongoose");
const keys = require("./config/keys");

const cookieSession = require("cookie-session");
const passport = require("passport");

mongoose.connect(keys.mongoURL);

// the express app variable
const app = express();

app.use(
  cookieSession({
    // takes millisecs -- 30 * 24 * 60 * 60 * 1000 = 30days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// assiging the function within authRoutes
require("./routes/authRoutes")(app);

// listen on port 5000
// const PORT = process.env.PORT || 5000; // boolean variable for deciding what the value should be -- either get the env var or be 5000
app.listen(5000);
