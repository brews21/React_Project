const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // -- this is valid same syntax as "const Schema = mongoose.Schema;" , meanse that we want to assign a vaule within mongoose that has the same name as out variable

const recipientSchema = require("./recipient");

// creating a common schema that every DB object will have
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

// putting the schema into mongoose
mongoose.model("surveys", surveySchema);
