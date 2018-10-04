const passport = require("passport");

// giving the request function to what ever get passed into the module and the export it out
module.exports = app => {
  // passport.authenticate "google" -- knows to use the GoogleStrategy has an internal data which states if 'google' is used then use me
  // 'scope' -- is what access/permission to get from google -- google has many inbuilt "scope" to use
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // app -- represent the underlining express app
  // get -- route handler, http request (get, put, post, delete, patch)
  // '/' - watch for incoming requests -- route portion of the handler -- localhost:5000/
  // req -- 'request' js object that represents the incoming data
  // res -- 'response' js object that send back the data
  // => -- excute the following
  app.get("/greeting", (req, res) => {
    res.send({ hi: "there" });
  });

  app.get("/test", (req, res) => {
    res.send({ bye: "bye" });
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
