const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const diagnosisSchema = new Schema({
  pathology: String,
  tagsasociados: [String],
  treatment: String,
  tips: String
});

const Diagnosis = mongoose.model('Diagnosis', diagnosisSchema);
module.exports = Diagnosis;