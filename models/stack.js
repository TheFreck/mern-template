const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stackSchema = new Schema({
  theKey: {
    type: String,
    required: true
  },
  theValue: {
    type: String,
    required: true
  }
});

const Stack = mongoose.model("Stack", stackSchema);

module.exports = Stack;
