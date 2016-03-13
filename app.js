var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server On!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('Server On!');
});
