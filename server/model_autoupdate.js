var app = require('./app');
var dataSource = app.dataSources.pagerDB;

dataSource.autoupdate(null, function (err, result) {});