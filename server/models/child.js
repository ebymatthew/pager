/* /models/child.js 
*/

var mongoose = require('mongoose/');

// Create a schema for our data
var ChildSchema = new mongoose.Schema({
  name: String,
  notes: String,
  guardians: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Guardian'
  }],
});

mongoose.model('Child', ChildSchema);

exports.Child = mongoose.model('Child');