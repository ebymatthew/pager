var restify = require('restify');

var server = restify.createServer();

/************
 * Serve static assets
 ************/
server.get(/\/index.html|\/assets/, restify.serveStatic({
  directory: '../client/public'
}));

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
/************
 * End Demo Code - DELETE LATER
 ************/
 
server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});