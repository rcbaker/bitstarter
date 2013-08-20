var express = require('express');
var fs = require('fs');
var htmlfile ="index.html";

//comment out the first round of read file changes in case we need to go back.
//var data = fs.readFileSync("index.html", "utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
//app.get('/', function(request, response) {
    response.send(html);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
