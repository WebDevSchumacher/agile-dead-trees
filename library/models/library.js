const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
  userID: {type: String, required: true},
  bookID: {type: String, required: true},
}, {collection:'library'});
module.exports = mongoose.model('Library', librarySchema);
