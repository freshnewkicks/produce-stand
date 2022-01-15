const express = require('express');
const router = express.Router();
const Product = require('../models/products');


// show updated products
router.get('/', async (req, res, next) => {
    const products = await Product.find({});
    res.render('products/products', { products });
});

module.exports = router;