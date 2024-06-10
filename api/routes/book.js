const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const axios = require('axios').default;

router.get('/author', checkAuth, async (req, res, next) => {
    const url = process.env.URL_CONTENT + "books"
    const response = await axios.get(url, {params: {authorID: req.userData.userId}});
    return res.status(200).json(response.data);
});

router.get('/user', checkAuth, async (req, res, next) => {
    const url = process.env.URL_LIBRARY;
    const response = await axios.get(url, {params: {userId: req.userData.userId}});
    return res.status(200).json(response.data);
});

router.get('/', checkAuth, async (req, res, next) => {
    const url = process.env.URL_CONTENT + "books"
    const response = await axios.get(url);
    const data = {message: "books", body: []};
    response.data.body.forEach(book => {
        data.body.push({_id: book._id, authorID: book.bookMeta.authorID, authorName: book.bookMeta.authorName, title: book.bookMeta.title, isbn: book.bookMeta.isbn})
    })
    return res.status(200).json(data);
});

router.post('/', checkAuth, async (req, res, next) => {
    const url = process.env.URL_CONTENT + "book/";
    const response = await axios.post(url, {
        title: req.body.title,
        isbn: req.body.isbn,
        authorID: req.userData.userId,
        authorName: req.userData.username,
        price: req.body.price
    });
    const book = response.data.body.book;
    return res.status(200).json({
        message: "created",
        body: {
            id: book._id,
            title: book.bookMeta.title,
            author: book.bookMeta.authorName,
            isbn: book.bookMeta.isbn,
            price: book.price
        }
    });
});
module.exports = router;
