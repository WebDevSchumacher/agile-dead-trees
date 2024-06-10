const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
  bookID: {type: String, required: true},
  userID: {type: String, required: true},
}, {collection:'shop'});

module.exports = mongoose.model('Shop', shopSchema);