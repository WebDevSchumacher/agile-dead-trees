const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
    bookID: {type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true},
    title: {type: String, required: true},
    paragraphs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Paragraph'}]
});
module.exports = mongoose.model('Chapter', chapterSchema);

