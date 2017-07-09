/**
 * Schema
 * Model
 * Instance
 */

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var config = require('../config/default');

var article = require('./article');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb);

var userSchema = new mongoose.Schema({
  username: {
    type: 'String',
    unique: true,
    require: true
  },
  password: String
});

userSchema.plugin(uniqueValidator);

var User = mongoose.model('User', userSchema);

function login(body) {
  const { username, password } = body;

  return User.find({
    username,
    password
  });
}

function signup(user) {
  return User.create(user);
}

module.exports = {
  login,
  signup,
  article
};
