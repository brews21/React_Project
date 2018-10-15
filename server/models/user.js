const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // -- this is valid same syntax as "const Schema = mongoose.Schema;" , meanse that we want to assign a vaule within mongoose that has the same name as out variable

// creating a common schema that every DB user object will have
const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0 }
});

// putting the schema into mongoose
mongoose.model("users", userSchema);
