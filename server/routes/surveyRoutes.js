const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireLogin = require("../middleware/requireCredits");

const Survey = mongoose.model("survey");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipient
        .split(",")
        .map(email => ({ email }))
        .trim(),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
