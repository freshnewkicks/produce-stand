const Product = require("../models/products");
const express = require("express");
const router = express.Router();

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})


module.exports = router;