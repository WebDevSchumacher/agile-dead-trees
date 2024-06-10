const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const invoiceDB = require('../lib/invoiceDB');
const invoice = require('easyinvoice');
const fs = require('fs');

router.get('/book', async function(req, res){
    console.log("Invoice/book: "+ JSON.stringify(req.query.par));
    await invoiceDB.searchInvoices({bookID: req.body.bookID, userID: req.body.userID})
        .then(result => {
                if(result.length !== 0) {
                    res.status(200).json({
                        message: "Invoices from " + req.body.userID + " of the Book " + req.body.bookID,
                        body: result
                    })
                } else {
                    res.status(200).json({
                        message: "No Invoices found"
                    })
                }
            })
        .catch(err => console.log("Something went wrong didn't get Invoices: ", err));
})

module.exports = router;