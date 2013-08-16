var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
   response.send('Hello World 21 and More!');
});

fs.readFile('index.html',['r'], function (err, data) {
    if (err) throw err;
    console.log(data);
});

fs.writeFile('message.txt', 'Hello Node',function (err){
    if (err) throw err;
    console.log('index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
