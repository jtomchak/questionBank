var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var questionSchema = new Schema(
  {
    question: String,
    answer: String,
    author: String
  },
  {
    timestamps: true
  }
);
var question = mongoose.model("question", questionSchema, "questions");
module.exports = question;
