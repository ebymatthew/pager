
var models = require('../models');
var Child = models.child.Child;

// This function is responsible for returning all entries for the Message model
function get(req, res, next) {
  // .find() without any arguments, will return all results
  Child.find().exec(function (arr,data) {
    res.send({"children": data});
  });
}

function post(req, res, next) {
  // Create a new message model, fill it up and save it to Mongodb
  var child = new Child();
  child.name = req.body.child.name;
  child.phone = req.body.child.phone;
  child.notes = req.body.child.notes;
  child.save(function (err, child, numberAffected) {
    res.send({"child": child});
  });
}

function put(req, res, next) {   
    // find user by id and execute immediately
    Child.findById(req.params.id, function (err, child) {
      child.name = req.body.child.name;
      child.phone = req.body.child.phone;
      child.notes = req.body.child.notes;
      child.save(function (err, child, numberAffected) {
        res.send({"child": child});
      });
      
    });
  }

function del(req, res, next) {    
    // find user by id and execute immediately
    Child.findByIdAndRemove(req.params.id, function (err, child) {
      res.send(204);
    });
  }

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
