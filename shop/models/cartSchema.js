const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    title: {type: String, required: true},
    isbn: {type: String, required: true},
    authorName: {type: String, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Cart', cartSchema);