require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:String,
  lastName: String,
  email: String,
  phoneNumber: String,
  password: String,
  userID: String
});

module.exports = mongoose.model('User', userSchema, 'user');
// if you do not set the mongoose model it will pluralize and weird Moose to moose; city to cities

