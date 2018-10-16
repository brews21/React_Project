const requireLogin = require("../middleware/requireLogin");
const requireLogin = require("../middleware/requireCredits");

module.exports = app => {
  app.post(
    "/api/surveys",
    requireLogin,
    requireCredits,
    async (req, res) => {}
  );
};
