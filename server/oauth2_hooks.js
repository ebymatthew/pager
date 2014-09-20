"use strict";

var jwt = require('jsonwebtoken');
var Firebase = require("firebase");
var config = require('./config');
var FirebaseTokenGenerator = require("firebase-token-generator");

var FB = new Firebase('https://pagerlist.firebaseio.com');
var tokenGenerator = new FirebaseTokenGenerator(config.JWT_SECRET);
var AUTH_TOKEN = tokenGenerator.createToken({username: null, admin: true, accountId: 'server'});

FB.auth(AUTH_TOKEN, function(error) {
  if(error) {
    // do something
  }
});

var database2 = {
    users: {
        demoAdmin: { password: "demo", admin: true, accountId: "-JT89-_t8Bhn6BjO1C05"  },
        demoUser: { password: "demo", admin: false, accountId: "-JT89-_t8Bhn6BjO1C05"  },
    }
};

exports.validateClient = "allow public clients";

exports.grantUserToken = function (allCredentials, req, cb) {
	var password = allCredentials.password;
	var username = allCredentials.username;


  FB.child('users').once("value", function(users){
    
  });
  
  if(database2.users[username] && database2.users[username]['password'] == password)
  {
    
    // Generate a new secure JWT, we are sending the profile inside the token
    var tokenGenerator = new FirebaseTokenGenerator(config.JWT_SECRET);
    var token = tokenGenerator.createToken({
            username: username, 
            admin: database2.users[username]['admin'], 
            accountId: database2.users[username]['accountId']
    });

    // Call back with the token so Restify-OAuth2 can pass it on to the client.
    return cb(null, token);
  }
    
  // Call back with `false` to signal the username/password combination did not authenticate.
  // Calling back with an error would be reserved for internal server error situations.
  cb(null, false);
};

exports.authenticateToken = function (token, req, cb) {
  jwt.verify(token, config.JWT_SECRET, config.JWT_OPTIONS, function(err, decoded) {
    if (err){
      return cb(null, false);
    }
    cb(null, decoded.username);
  });
};