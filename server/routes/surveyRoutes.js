const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const mailer = require("../services/mailer");

const Survey = mongoose.model("surveys");

const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // sending the email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
