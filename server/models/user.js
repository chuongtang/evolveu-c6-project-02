// require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true, minlength: 6 }, 
  userID: String
});

module.exports = mongoose.model('User', userSchema, 'user');
// if you do not set the mongoose model it will pluralize and weird Moose to moose; city to cities

