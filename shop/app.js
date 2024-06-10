require("dotenv").config();
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/purchase');

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://' + process.env.DBHOST + '/adt_shop', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('mongo connected');
}).catch(() => {
  console.log('mongo failed!');
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

app.use(express.static(path.join(__dirname, 'filestorage', 'fotos')));
app.use('/api/shop/', routes);
/*
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

 */

module.exports = app;
