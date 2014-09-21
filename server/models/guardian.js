/* /models/guardian.js 
*/

var mongoose = require('mongoose/');
var Promise = require('bluebird');

// Create a schema for our data
var GuardianSchema = new mongoose.Schema({
  name: String,
  phone: String,
  notes: String,
  children: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Child'
  }],
});

mongoose.model('Guardian', GuardianSchema);

exports.Guardian = mongoose.model('Guardian');

Promise.promisifyAll(exports.Guardian);
Promise.promisifyAll(exports.Guardian.prototype);