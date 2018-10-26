//import express from 'express' -- would be use on the front end
// pulling in js so it will be excuted --
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/user");
require("./models/survey");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURL);

// the express app variable
const app = express();

// express middlewares -- these are called before before processing with express
// app.use *** -- middleware assignment
app.use(bodyParser.json());

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
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// if im production
/*
if(process.env.NODE_ENV === "production"){
  // express will serve up production assests
  // like main.js or main.css
  // if someone come looking for a route we donot understand
  // then look in here
  app.use(express.static("client/build"));

  // express will serve up index.html if
  // it doesnt recognize the routes
  const path = require("path");
  app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
});
}
*/
// listen on port 5000
// const PORT = process.env.PORT || 5000; // boolean variable for deciding what the value should be -- either get the env var or be 5000
app.listen(5000);
