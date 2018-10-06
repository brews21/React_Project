// HEROKU env
// process.env.NODE_ENV === 'prodiction'
/*
if(process.ev.NODE_ENV === 'production') {
  module.exports = require("./prod")
} else {
  module.exports = require("./dev")
}
*/

// forcing dev file to be loaded
module.exports = require("./dev");
