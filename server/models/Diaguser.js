const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const diaguserSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref:"User"},
  diagnosis: {type: Schema.Types.ObjectId, ref:"Diagnosis"}
});

const Diaguser = mongoose.model('Diaguser', diaguserSchema);
module.exports = Diaguser;
