const express = require('express');
const Product = require("../models/products");
const router = express.Router();

// router get requests from the client
router.get('/:id', async (req,res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product })
});

module.exports = router;
