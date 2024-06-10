const express = require('express');
const router = express.Router();
const db = require('../lib/chapterDB');

router.get('/chapters/:id?', async (req, res) => {
    const bookID = req.params.id;
    const pretty = req.query.pretty;
    let chapters;

    if(bookID){
        chapters = await db.getChaptersByBook(bookID, pretty);
    }else{
        const chapterIDs = req.query.chapters;
        chapters =  await db.getChapters(chapterIDs, pretty);
    }



    if (chapters){
        return res.status(200).json({
            message: 'chapters Found',
            body: chapters
        });
    }else{
        return res.status(200).json({
            message: 'not found'
        });
    }
});

router.get('/chapter/:id', async (req, res) => {
    const chapterID = req.params.id;
    const pretty = req.query.pretty;
    let chapter;
    if(pretty === 'true'){
        chapter = await db.getChapterPretty(chapterID);
    }else{
        console.log("ugly")
        chapter = await db.getChapter(chapterID);
    }

    if (chapter){
        return res.status(200).json({
            message: 'chapter Found',
            body: {chapter: chapter}
        });
    }else{
        return res.status(404).json({
            message: 'not found'
        });
    }
});

router.post('/chapter', async (req, res) => {
    const chapterData = req.body;
    let chapter = await db.postChapter(chapterData);
    if(chapter){
        return res.status(201).json({
            message: 'saved',
            body: chapter
        });
    }else{
        return res.status(400).json({
            message: 'Chapter with same title already exists for this book',
        });
    }
});

router.patch('/chapter', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

router.delete('/chapter', async (req, res) =>{
    return res.status(501).json({
        message: 'Not Implemented',
    });
});

module.exports = router;
