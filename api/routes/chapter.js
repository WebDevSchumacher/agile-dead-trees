const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const axios = require('axios').default;

router.get('/:book', checkAuth, async (req, res, next) => {
    const chapterResponse = await axios.get(process.env.URL_CONTENT + 'chapters/' + req.params.book, {params: {pretty: true}});
    return res.status(200).json({message: "ok", body: chapterResponse.data});
});

router.post('/', checkAuth, async (req, res, next) => {
    const url = process.env.URL_CONTENT + "chapter/";
    const response = await axios.post(url, {
        bookID: req.body.bookId,
        title: req.body.title,
        text: req.body.text
    });
    return res.status(200).json({message: "ok", body: response.data});
});
module.exports = router;
