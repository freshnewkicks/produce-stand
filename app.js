const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Product = require('./models/products');

const indexRouter = require('./routes/index.js');
const productRouter = require('./routes/products.js');
const showRouter = require('./routes/show.js');

mongoose.connect('mongodb+srv://admin:fernis12@cluster0.afktq.mongodb.net/produceStand?retryWrites=true&w=majority')
    .then(() => {
      console.log('Mongo connection open');
    })
    .catch(err => {
      console.log('Mongo Connection Error', err);
    });

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/products', showRouter);
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.listen(process.env.PORT || 3000, () => {
    console.log('Localhost server listening');
});

module.exports = app;