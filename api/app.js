require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const shopRoutes = require('./routes/shop');
const chapterRoutes = require('./routes/chapter');

const app = express();
app.options('*', cors()); // include before other routes
app.use(cors());
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
app.use('/book', bookRoutes);
app.use('/shop', shopRoutes);
app.use('/chapter', chapterRoutes);

module.exports = app;
