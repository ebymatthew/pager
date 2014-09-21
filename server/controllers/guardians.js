
var models = require('../models');
var Guardian = models.guardian.Guardian;

// This function is responsible for returning all entries for the Message model
function get(req, res, next) {
  // .find() without any arguments, will return all results
  Guardian.find().exec(function (arr,data) {
    res.send({"guardians": data});
  });
}

function post(req, res, next) {
  // Create a new message model, fill it up and save it to Mongodb
  var guardian = new Guardian();
  guardian.name = req.body.guardian.name;
  guardian.phone = req.body.guardian.phone;
  guardian.notes = req.body.guardian.notes;
  guardian.save(function (err, guardian, numberAffected) {
    res.send({"guardian": guardian});
  });
}

function put(req, res, next) {
    // find user by id and execute immediately
    Guardian.findById(req.params.id, function (err, guardian) {
      guardian.name = req.body.guardian.name;
      guardian.phone = req.body.guardian.phone;
      guardian.notes = req.body.guardian.notes;
      guardian.save(function (err, guardian, numberAffected) {
        res.send({"guardian": guardian});
      });
      
    });
  }

function del(req, res, next) {
    // find user by id and execute immediately
    Guardian.findByIdAndRemove(req.params.id, function (err, guardian) {
      res.send(204);
    });
  }

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
