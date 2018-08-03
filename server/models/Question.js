const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const questionSchema = new Schema({
  content: String,
  tag: String
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
