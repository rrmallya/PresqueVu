
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);



app.get('/hello.txt', function(req, res){
	res.set({
  'Content-Type': 'text/plain',
  'Access-Control-Allow-Origin': '*',
  'Content-Length': '123',
  'ETag': '12345'
})
  res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

System.out.println("Trying to read the database presquevu.db");
var sqlite = require('sqlite');
var db = sqlite.openDatabaseSync("presquevu.db");
var assert = require("assert").ok;


db.query("SELECT latitude, longitude FROM user_location where user='jennifer'", function (records) {
  System.out.println("Query: SELECT latitude, longitude FROM user_location where user='jennifer'");
  System.out.println("Output: latitude" + records[0].latitude);
  System.out.println("Output: longitude" + records[0].longitude);
});




