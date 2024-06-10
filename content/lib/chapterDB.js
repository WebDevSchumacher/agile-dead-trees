const mongoose = require('mongoose');
const Chapter = require('../models/books/chapter');
const paragraphDB = require('../lib/paragraphDB');
const bookDB = require('../lib/bookDB');
const Book = require('../models/books/book');


const postChapter = async (chapterData) => {
    let chapter;
    const doesChapterExist = await Chapter.exists({ title: chapterData.title, bookID: chapterData.bookID });
    if(!doesChapterExist){
        const paragraphs = chapterData.text ? await paragraphDB.saveParagraphs(chapterData.text) : [];
        chapter = new Chapter({
            title: chapterData.title,
            bookID: chapterData.bookID,
            paragraphs: paragraphs
        });

        bookDB.addChapterToBook(chapter);
        await chapter.save();
    }
    return chapter ? await Chapter.findById(chapter._id).lean().populate("paragraphs") : chapter;
};


const getChapter = async (chapterID) => {
    const chapter = await Chapter.findById(chapterID).lean().populate("paragraphs");
    return chapter;
}

const getChapterPretty = async (chapterID) => {
    const chapter = await getChapter(chapterID);
    chapter.paragraphs = chapter.paragraphs.map(p => p.text);
    chapter.paragraphs = chapter.paragraphs.join('\n');
    return chapter
}

const getChapters = async (chapterIDs, pretty) => {
    let chapters = [];

    if (Array.isArray(chapterIDs)){
        if(pretty === 'true'){
            for (let id of chapterIDs){
                chapters.push(await getChapterPretty(id));
            }
        }else{
            for (let id of chapterIDs){
                chapters.push(await getChapter(id));
            }
        }
    }else{
        if(pretty === 'true'){
            chapters.push(await getChapterPretty(chapterIDs));
        }else{
            chapters.push(await getChapter(chapterIDs));
        }
    }
    return chapters;
}

const getChaptersByBook = async(bookID, pretty) => {
    const book = await bookDB.getBook(bookID);
    const chapters = await getChapters(book.chapters, pretty);

    return chapters;
}

const deleteChapter = async (chapterID) => {

}

const updateChapter = async (chapterID) => {

}

module.exports = {
    postChapter,
    getChapter,
    getChapterPretty,
    getChapters,
    deleteChapter,
    updateChapter,
    getChaptersByBook
};
