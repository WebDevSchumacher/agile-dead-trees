const mongoose = require('mongoose');
const Library = require('../models/library');

const libraryToDB = async libraryData => {
  const library = new Library({
    userID: libraryData.userID,
    bookID: libraryData.bookID
  });
  let exists = await Library.exists({userID: library.userID, bookID: library.bookID})
  console.log(library);
  if(!exists){
    await library.save();
  }
  return library;
};

const searchLibrary = async searchOptions => {
  const search = {
    userID: searchOptions.userID
  };
  return Library.find({userID: search.userID});
}

module.exports = {
  libraryToDB,
  searchLibrary
};
