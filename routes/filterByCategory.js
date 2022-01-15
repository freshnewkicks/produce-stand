const express = require('express');
const Product = require("../models/products");
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));

router.get('/category', (req))