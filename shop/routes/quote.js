const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const db = require('../lib/shopDB');

router.post('/', checkAuth, async (req, res, next) => {
    return res.status(200).json({
        message: "Not Implemented"
    });
});

router.get('/', checkAuth, async (req, res, next) => {
    return res.status(200).json({
        message: "Not Implemented"
    });
});

module.exports = router;
