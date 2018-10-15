// next id the function we call when the actions is complete
// similar to done in previous examples
// next will pass the info to the next middleware in the chain
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Error You Must Log In" });
  }

  // if there is a user then continue on
  next();
};
