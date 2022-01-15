const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', async (req, res, next) => {
    const products = await Product.find({});
    res.render('products/products', { products });
});

router.post('/', async (req,res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});



module.exports = router;