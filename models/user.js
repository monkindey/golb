const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
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
  signup
};
