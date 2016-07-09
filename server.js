var path = require('path');
var express = require("express");
var app = express();

//serve up static pages with max-age headers of 1 day
app.use(express.static(path.join(__dirname, '/public')));

//handle any errors
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Oppss!');
});

// Render the app
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, '/public/index.html'));
});

//start server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
