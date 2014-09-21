var restify = require('restify');
var restifyOAuth2 = require('restify-oauth2');
var mongoose = require('mongoose/');

var config = require('./config');
var controllers = require('./controllers');
var oauth2_hooks = require("./oauth2_hooks");

var server = restify.createServer();

var db = mongoose.connect(config.creds.mongoose_auth);

/************
 * Begin - Middleware needed by restify-oauth2
 ************/
server.use(restify.authorizationParser());
server.use(restify.bodyParser({ mapParams: false }));
/************
 * End - Middleware needed by restify-oauth2
 ************/

/************
 * Serve static assets
 ************/
server.get(/\/index.html|\/assets/, restify.serveStatic({
  directory: '../client/public'
}));

/************
 * Configure OAuth2
 ************/
restifyOAuth2.ropc(server, {
  tokenEndpoint: '/token',
  //convert min to sec, subtract 1 min for margin
  tokenExpirationTime: (config.JWT_OPTIONS.expiresInMinutes - 1) * 60,
  hooks: oauth2_hooks,
});

/************
 * Serve routes
 ************/

/************
 * Begin Demo Code - DELETE LATER
 ************/
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

function respond_secret(req, res, next) {
  if (!req.username) {
    return res.sendUnauthenticated();
  }
  
  res.send('hello ' + req.params.name);
  next();
}
server.get('/secret/hello/:name', respond_secret);
server.head('/secret/hello/:name', respond_secret);
/************
 * End Demo Code - DELETE LATER
 ************/
 
server.get('/api/v1/users', controllers.users.get);
server.post('/api/v1/users', controllers.users.post);
server.put('/api/v1/users/:id', controllers.users.put);
server.del('/api/v1/users/:id', controllers.users.del);

server.get('/api/v1/guardians', controllers.guardians.get);
server.post('/api/v1/guardians', controllers.guardians.post);
server.put('/api/v1/guardians/:id', controllers.guardians.put);
server.del('/api/v1/guardians/:id', controllers.guardians.del);

server.get('/api/v1/children', controllers.children.get);
server.post('/api/v1/children', controllers.children.post);
server.put('/api/v1/children/:id', controllers.children.put);
server.del('/api/v1/children/:id', controllers.children.del);

server.get('/api/v1/:pageCalled', function(req, res) {
  console.log("catchall - get " + req.params.pageCalled);
});

server.post('/api/v1/:pageCalled', function(req, res) {
  console.log("catchall - post " + req.params.pageCalled);
});

server.put('/api/v1/:pageCalled', function(req, res) {
  console.log("catchall - put " + req.params.pageCalled);
});

server.del('/api/v1/:pageCalled', function(req, res) {
  console.log("catchall - delete " + req.params.pageCalled);
});
 
 
 
server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});