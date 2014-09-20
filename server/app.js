var restify = require('restify');
var restifyOAuth2 = require('restify-oauth2');

var config = require('./config');
var oauth2_hooks = require("./oauth2_hooks");
var fb_listeners = require("./fb_listeners");

var server = restify.createServer();


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
 
server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});