// next id the function we call when the actions is complete
// similar to done in previous examples
// next will pass the info to the next middleware in the chain
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Error You Need More Credits" });
  }

  // if there is a user then continue on
  next();
};
