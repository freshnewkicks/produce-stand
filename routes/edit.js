const Product = require("../models/products");
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});

router.put('/:id', async (req,res) => {
    const { id } = req.params;
    console.log(req.body);
    console.log(id);
    res.send('Successful put');
});




module.exports = router;