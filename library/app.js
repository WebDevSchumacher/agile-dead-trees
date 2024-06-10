require("dotenv").config();
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const libraryRoutes = require('./routes/library');

const app = express();

mongoose.connect('mongodb://' + process.env.DBHOST + '/adt_library', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('mongo connected');
}).catch(e => {
  console.log('mongo failed!', e);
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

app.use('/api/library/', libraryRoutes);
// app.use(express.static(path.join(__dirname, 'filestorage', 'fotos')));
// app.use('/', express.static(path.join(__dirname, 'angular')));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, 'angular', 'index.html'));
// });

module.exports = app;
