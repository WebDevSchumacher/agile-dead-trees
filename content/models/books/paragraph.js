const mongoose = require('mongoose');

const paragraphSchema = mongoose.Schema({
    text: {type: String, required: true}
});
module.exports = mongoose.model('Paragraph', paragraphSchema);