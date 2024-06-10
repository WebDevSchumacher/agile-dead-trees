const mongoose = require('mongoose');
const Shop = require('../models/shopSchema');

const shopToDB = async shopData => {
    const shop = new Shop({
      bookID: shopData.bookID,
      userID: shopData.userID
    });
    Shop.find({
        $and: [
            {userID: shop.userID},
            {bookID: shop.bookID}
        ]}, async (err, response)=> {
        if(err) console.log(err);
        response.length ? console.log("Was already bought.") : await shop.save();
    });
    return shop;
};

const searchShop = async searchOptions => {
    const search = {
        userID: searchOptions.userID
    };
    return Shop.find({userID: search.userID});
}

module.exports = {
    shopToDB,
    searchShop
};
