const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // -- this is valid same syntax as "const Schema = mongoose.Schema;" , meanse that we want to assign a vaule within mongoose that has the same name as out variable

// creating a common schema that every DB object will have
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
