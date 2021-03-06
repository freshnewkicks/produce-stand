const mongoose = require('mongoose');
const Product = require('./products');

//seed  the db with some info
mongoose.connect('mongodb+srv://admin:pw@cluster0.afktq.mongodb.net/produceStand?retryWrites=true&w=majority')
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo Connection Error', err);
    });

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 1.50,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// });
//
// p.save().then(p => {
//     console.log(p);
// })
// .catch(err => {
//     console.log('Error: ', err);
// })