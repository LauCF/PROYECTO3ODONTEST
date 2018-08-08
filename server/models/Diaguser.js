const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const diaguserSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref:"User"},
  diagnosis: {type: Schema.Types.ObjectId, ref:"Diagnosis"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Diaguser = mongoose.model('Diaguser', diaguserSchema);
module.exports = Diaguser;
