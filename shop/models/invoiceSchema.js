const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    invoice: {type: Object, required: true},
    bookID: {type: String, required: true},
    userID: {type: String, required: true}
}, {collection: "invoices"});

module.exports = mongoose.model('Invoice', invoiceSchema);