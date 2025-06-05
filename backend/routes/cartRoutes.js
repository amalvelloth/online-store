const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add or update cart
router.post('/', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne();
    if (!cart) cart = new Cart({ items: [] });
    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get cart
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;