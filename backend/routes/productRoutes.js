// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ➕ Ajouter un produit
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📋 Lister tous les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // renvoie directement un tableau
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

