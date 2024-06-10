const mongoose = require('mongoose');
const Paragraph = require('../models/books/paragraph');

const saveParagraphs = async (text) => {
    let paragraphs = text.split("\n").slice(0,-1);
    let paragraphIDs = [];

    for (let paragraph of paragraphs){
        paragraph = new Paragraph({
            text: paragraph
        });
        paragraphIDs.push(await paragraph.save());
    }
    return paragraphIDs.map(value => (value._id))
};

const getAllParagraphs = async (paragraphIDs) => {
    let paragraphs = [];

    for(let id of paragraphIDs){
        paragraphs.push(Paragraph.findById(id));
    }

    return paragraphs;
}

module.exports = {
    saveParagraphs,
    getAllParagraphs

}
