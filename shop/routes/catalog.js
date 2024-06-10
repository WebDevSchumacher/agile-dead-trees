const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const shopDB = require('../lib/shopDB');
const axios = require('axios');

router.get('/', async (req, res, next) => {
    axios.get(process.env.URL_CONTENT + 'api/content/books')
        .then(resp => {
            console.log(resp)
            if(resp.status === 200) {
                console.log('Got response from Content Service', resp.data.body)
                return res.status(200).json({
                    body: resp.data.body.map(book => book.bookMeta)
                });
            }})
        .catch(err => console.log("Something went wrong", err));

});

module.exports = router;
