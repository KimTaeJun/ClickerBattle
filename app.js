var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server On!');
});

app.get('/', function(req,res){
  res.send('Hello! Babkoo Test');
});

app.listen(3000, function(){
  console.log('Server On!');
});
