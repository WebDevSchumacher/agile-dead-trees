const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookMeta: {type:  mongoose.Schema.Types.ObjectId, ref: 'BookMeta', required: true},
    chapters:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'}]  ,
    price: {type: Number}
});

module.exports = mongoose.model('Book', bookSchema);