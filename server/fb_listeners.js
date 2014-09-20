"use strict";

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
  else {
    // register listeners
    FB.child('guardians').on("child_added", function(data){
      var val = data.val();
      console.log("New Guardian added: %j",  data.val());
    });
    
    FB.child('users').on("child_added", function(data){
      var val = data.val();
      var password = val.password;
      console.log("New User added: %j",  data.val());
      console.log("New User password: %j",  password);
    });
    
    FB.child('children').on("child_added", function(data){
      console.log("New Child added: %j",  data.val());
    });
  }
});