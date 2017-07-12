/**
 * Schema
 * Model
 * Instance
 */

const mongoose = require('mongoose');
const config = require('../config/default');

const article = require('./article');
const user = require('./user');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb);

module.exports = {
  mongoose,
  user,
  article
};
