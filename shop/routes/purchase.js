const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const db = require('../lib/shopDB');
const cart = require('./cart');
const quote = require('./quote');
const invoice = require('./invoice');
const catalog = require('./catalog');
const axios = require('axios');
const createInvoice = require('../lib/createInvoice');
const invoiceDB = require("../lib/invoiceDB");

router
    .use('/cart', checkAuth, cart)
    .use('/quote', checkAuth, quote)
    .use('/invoice', checkAuth, invoice)
    .use('/catalog', catalog)
    .get('/purchase', checkAuth, async (req, res, next) => {
        return res.status(200).json({
            message: "Not Implemented"
        });
    })
    .post('/instantBuy', async (req, res, next) => {
        axios.post(process.env.URL_LIBRARY + 'api/library/save', {bookID:req.body.bookID, userID:req.body.userID})
            .then(async () => {
                const result = await createInvoice.createInvoice({bookID:req.body.bookID, userID:req.body.userID})
                return res.status(200).json({
                    pdf: result
                });
            })
            .catch(err => console.log(err));
    });

// Shop sendet post an Library und Library speichert sich die MetaDaten ab,
// wenn man Content will fragt Libary bei Content nochmal nach
module.exports = router;
