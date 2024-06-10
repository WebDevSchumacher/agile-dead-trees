const mongoose = require('mongoose');
const Book = require('../models/books/book');
const Meta = require('../models/books/bookMeta');

const postBook = async (bookMeta) => {

    let book;
    const doesBookExist = await Meta.exists({ 'isbn': bookMeta.isbn });
        if(!doesBookExist){
            const meta = await createBookMeta(bookMeta);
             book = new Book({
                 bookMeta: mongoose.Types.ObjectId(meta._id),
                 price: bookMeta.price
            });
            await book.save();
            Meta.findByIdAndUpdate(meta._id, {$set: {bookID: book._id}})
        }
     return book ? await Book.findById(book._id).lean().populate("bookMeta") : book

};

const getAllPublishedBooks = async () => {
    const books = await Book.find({'price': { $gt : -1}}).lean().populate('bookMeta');
    return books;
}

const getAllBooksByAuthorId = async (authorID) => {
    const books = await Meta.find({'authorID' : authorID}).lean();
    return books;
}


const createBookMeta = async (bookMeta) => {
    let meta = new Meta({
       title: bookMeta.title,
       isbn: bookMeta.isbn,
       authorID: bookMeta.authorID,
       authorName: bookMeta.authorName
    });
    await meta.save();
    return meta;
}

const getBook = async (bookID) => {
    const book = await Book.findById(bookID).lean().populate("bookMeta");
    return book;
}

const addChapterToBook = (chapter) => {
    Book.findByIdAndUpdate(
        chapter.bookID,
        {$push: { chapters: chapter._id }},
        {safe: true, upsert: true},
        function(err, model) {});
}

const getBooks = async (bookIDs) => {
    let books = [];
    if (Array.isArray(bookIDs)){
        for (let id of bookIDs){
            books.push(await getBook(id));
        }
    }else{
        books.push(await getBook(bookIDs));
    }

    return books;
}

const deleteBook = async (bookID) => {

}

const updateBook = async (bookID) => {

}

module.exports = {
    postBook,
    getBook,
    getBooks,
    deleteBook,
    updateBook,
    addChapterToBook,
    getAllPublishedBooks,
    getAllBooksByAuthorId
};
