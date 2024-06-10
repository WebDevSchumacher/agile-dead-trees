const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const cartDB = require('../lib/cartDB');

router.post('/', checkAuth, async (req, res, next) => {
    let cart = await cartDB.cartToDB(req.body.id);
    return res.status(200).json({
        message: 'Not Implemented',
    });
});

router.get('/', checkAuth, async (req, res, next) => {
    // Warenkorb anzeigen
    let cart = await cartDB.cartFromDB();
    return res.status(200).json({
        message: 'Not Implemented',
    })
});

module.exports = router;
