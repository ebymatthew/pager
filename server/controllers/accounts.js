
var models = require('../models');
var Account = models.account.Account;

// This function is responsible for returning all entries for the Message model
function get(req, res, next) {
  // .find() without any arguments, will return all results
  Account.find().exec(function (arr,data) {
    res.send({"accounts": data});
  });
}

function post(req, res, next) {
  // Create a new message model, fill it up and save it to Mongodb
  var account = new Account();
  account.name = req.body.account.name;
  account.saveAsync()
    .spread(function(account) {
      res.send({"account": account});
    });
}

function put(req, res, next) {   
    // find user by id and execute immediately
    Account.findById(req.params.id, function (err, account) {
      account.name = req.body.account.name;
      account.save(function (err, account, numberAffected) {
        res.send({"account": account});
      });
    });
  }

function del(req, res, next) {    
    // find user by id and execute immediately
    Account.findByIdAndRemove(req.params.id, function (err, account) {
      res.send(204);
    });
  }

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
