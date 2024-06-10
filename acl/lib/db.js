const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const userToDB = async (username, hash) => {
  const user = new User({
    username: username,
    password: hash,
    isAdmin: false
  });
  await user.save();
  return user;
};

const userAuth = async (username, password) => {
  const user = await User.findOne({username});
  if(user && bcrypt.compare(password, user.password)) {
    return user._id;
  } else {
    return false;
  }
};

module.exports = {
  userToDB,
  userAuth
};
