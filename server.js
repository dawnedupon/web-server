var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //capitals: saying that the value should be constant
var middleware = require('./middleware.js');

//Calling middleware at app level
app.use(middleware.logger);

//Calling middleware in a specific route
app.get('/about', middleware.requireAuthentication, function(req, res) { //forward slash means root
  res.send('About Us...'); //send a response
});

//the folder you want to expose
app.use(express.static(__dirname + '/public'));

//port 3000 is usually not reserved for anything your computer is using.
app.listen(PORT, function() {
  console.log('Express server started on Port ' + PORT + '!');
});
