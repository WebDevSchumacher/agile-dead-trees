const mongoose = require('mongoose');

const bookMeta = mongoose.Schema({
    bookID: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    title: {type: String, required: true},
    isbn: {type: String, required: true, unique: true},
    authorID: {type: String, required: true},
    authorName: {type: String, required: true},
    cover: {type: String},
    genre: {type: mongoose.Schema.Types.ObjectId, ref: 'Genre'},

});
module.exports = mongoose.model('BookMeta', bookMeta);
