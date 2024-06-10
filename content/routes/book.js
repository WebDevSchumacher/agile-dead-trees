const express = require('express');
const router = express.Router();
const db = require('../lib/bookDB');

//Für Metadaten -> Shop & Library Service fragen hier an

router.get('/books/', async (req, res) => {
    const ids = req.query.ids;
    const authorID = req.query.authorID;
    let books;
    if(ids){
        books = await db.getBooks(ids);
    }else if(authorID){
        books = await db.getAllBooksByAuthorId(authorID);
    }else{
        books = await db.getAllPublishedBooks();
    }
    if (books){
        return res.status(200).json({
            message: 'books Found',
            body: books
        });
    }else{
        return res.status(200).json({
            message: 'not found'
        });
    }
});

router.get('/book/:id', async (req, res) => {
    const id = req.params.id;
    let book = await db.getBook(id);
    if (book){
        return res.status(200).json({
            message: 'book Found',
            body: book
        });
    }else{
        return res.status(200).json({
            message: 'not found'
        });
    }
});

router.post('/book', async (req, res) => {
    const metaData = req.body;
    let book = await db.postBook(metaData);
    if(book){
        return res.status(201).json({
            message: 'saved',
            body: {book: book}
        });
    }else{
        return res.status(200).json({
            message: 'Book with same MetaData already exists',
        });
    }
});

router.patch('/book', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.delete('/book', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

module.exports = router;
