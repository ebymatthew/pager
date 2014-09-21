
var models = require('../models');
var User = models.user.User;
var passwordHash = require('password-hash');

// This function is responsible for returning all entries for the Message model
function get(data, res, next) {
  // .find() without any arguments, will return all results
  // the `-sort` in .sort() means descending order
  User.find().sort('-creationDate').exec(function (err,data) {
    res.send({"users": data});
  });
}

function post(req, res, next) {
  // Create a new message model, fill it up and save it to Mongodb
  var user = new User();
  user.name = req.body.user.name;
  user.email = req.body.user.email;
  user.admin = req.body.user.admin;
  user.password = passwordHash.generate('demo');
  user.saveAsync()
    .spread(function(guardian) {
      res.send({"user": user});
    });
}

function put(req, res, next) {
    // find user by id and execute immediately
    User.findById(req.params.id, function (err, user) {
      user.name = req.body.user.name;
      user.email = req.body.user.email;
      user.admin = req.body.user.admin;
      user.save(function (err, user, numberAffected) {
        res.send({"user": user});
      });
    });
  }

function del(req, res, next) {
    // find user by id and execute immediately
    User.findByIdAndRemove(req.params.id, function (err, user) {
      res.send(204);
    });
  }

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
