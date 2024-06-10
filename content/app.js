require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');
const chapterRoutes = require('./routes/chapter');
const reviewRoutes = require('./routes/review');
const commentRoutes = require('./routes/comment');
const reportRoutes = require('./routes/report');

const app = express();

mongoose.connect('mongodb://' + process.env.DBHOST + '/adt_content', {useNewUrlParser: true}).then(() => {
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

app.use('/api/content/', bookRoutes);
app.use('/api/content/', chapterRoutes);
app.use('/api/content/', commentRoutes);
app.use('/api/content/', reviewRoutes);
app.use('/api/content/', reportRoutes);
// app.use(express.static(path.join(__dirname, 'filestorage', 'fotos')));
// app.use('/', express.static(path.join(__dirname, 'angular')));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, 'angular', 'index.html'));
// });

module.exports = app;
