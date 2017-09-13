const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  dealership_id: ObjectId,
  created_at: Date,
  updated_at: Date
});

const Car = mongoose.model('Car', carSchema);


module.exports = Car;