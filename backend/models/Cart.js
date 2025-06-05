const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  items: [{
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],
});
module.exports = mongoose.model('Cart', cartSchema);