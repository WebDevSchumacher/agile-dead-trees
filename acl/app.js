require("dotenv").config();
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb://' + process.env.DBHOST + '/adt_acl', {useNewUrlParser: true}).then(() => {
  console.log('mongo connected');
}).catch((e) => {
  console.log('mongo failed!');
  console.log(e);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/user', userRoutes);

module.exports = app;
