const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
  inventory: { type: Number, required: true },
  brand: { type: String },
  modelNumber: { type: String },
  dimensions: { type: String },
  weight: { type: String },
  material: { type: String },
  color: { type: String },
  origin: { type: String },
});
module.exports = mongoose.model('Product', productSchema);