/* /models/user.js 
*/

var mongoose = require('mongoose/');
var Promise = require('bluebird');

// Create a schema for our data
var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  admin: Boolean,
  account: {
    type: mongoose.Schema.ObjectId,
    ref: 'Account'
  },
});

mongoose.model('User', UserSchema);

exports.User = mongoose.model('User');

Promise.promisifyAll(exports.User);
Promise.promisifyAll(exports.User.prototype);