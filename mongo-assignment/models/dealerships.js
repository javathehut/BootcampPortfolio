const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const dealershipSchema = new Schema({
  make: String,
  created_at: Date,
  updated_at: Date,
  city: String,
  province: String,
  postal_code: String,
  street: String,
  reviews: Array
});


const Dealership = mongoose.model('Dealership', dealershipSchema);

module.exports = Dealership;