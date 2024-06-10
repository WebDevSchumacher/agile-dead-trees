const mongoose = require('mongoose');
const Invoice = require('../models/invoiceSchema');

const invoiceToDB = async invoiceData => {
    const invoice = new Invoice({
        invoice: invoiceData.invoice,
        bookID: invoiceData.bookID,
        userID: invoiceData.userID
    });
    Invoice.find({
        $and: [
            {userID: invoice.userID},
            {bookID: invoice.bookID}
        ]}, async (err, response)=> {
        if(err) console.log(err);
        response.length ? console.log("Invoice already exists.") : await invoice.save();
    });
    return invoice;
};
const searchInvoices = async searchOptions => {
    const search = {
        bookID: searchOptions.bookID,
        userID: searchOptions.userID
    };
    return Invoice.find({
        $and: [
            {userID: search.userID},
            {bookID: search.bookID}
            ]});
}

module.exports = {
    invoiceToDB,
    searchInvoices
};
