const mongoose = require('mongoose');
const Cart = require('../models/cartSchema');

const cartToDB = async cartData => {
    const cart = new Cart({
        title: cartData.title,
        isbn: cartData.isbn,
        authorName: cartData.bookInfo,
        price: cartData.price,
    });
    await cart.save();
    return cart;
};

async function cartFromDB() {
    await Cart.find({}, function (err, cartContent){
        let cart = {};
        cartContent.forEach(function(content){
            cart[cartContent._id] = content;
        })
        return cartContent;
    })
}

module.exports = {
    cartToDB,
    cartFromDB
};
