/* /models/account.js 
*/

var mongoose = require('mongoose/');

// Create a schema for our data
var AccountSchema = new mongoose.Schema({
  name: String,
  plan: String,
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
});

mongoose.model('Account', AccountSchema);

exports.Account = mongoose.model('Account');