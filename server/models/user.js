const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
  // email: String,
  // phoneNumber: String,
  // password: {type: String, require: true},
  // userID: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('User', UserSchema);