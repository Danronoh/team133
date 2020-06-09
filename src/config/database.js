'use strict';
const config = require('./config.json');

const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
};

const url = 'mongodb://localhost:27017/fama'
mongoose.set('useFindAndModify', false);
mongoose.connect(url, options).then(function () {
  console.log('MongoDB is connected', url);
})
  .catch(function (err) {
    console.log(err);
  });

const db = mongoose.connection;
exports.db = db;
