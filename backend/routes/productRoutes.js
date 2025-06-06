const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const { sort = 'name', order = 'asc', page = 1, limit = 3 } = req.query;
    const sortObj = {};
    sortObj[sort] = order === 'asc' ? 1 : -1;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [products, total] = await Promise.all([
      Product.find().sort(sortObj).skip(skip).limit(parseInt(limit)),
      Product.countDocuments()
    ]);

    res.json({ products, total });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;