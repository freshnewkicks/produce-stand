const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index.js');
const productRouter = require('./routes/products.js');
const showRouter = require('./routes/show.js');
const editRouter = require('./routes/edit.js');
const createRouter = require('./routes/create.js');

mongoose.connect('mongodb+srv://admin:pw@cluster0.afktq.mongodb.net/produceStand?retryWrites=true&w=majority')
    .then(() => {
      console.log('Mongo connection open');
    })
    .catch(err => {
      console.log('Mongo Connection Error', err);
    });

// routers
app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/products', showRouter)
app.use('/products', createRouter);
app.use('/edit', editRouter);
app.use('/new', createRouter);

// 1. body-parser to parse request body
// 2. override HTTP methods
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

// 1. set view path, __dirname references current directory
// 2. set view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, () => {
    console.log('Localhost server listening');
});

module.exports = app;