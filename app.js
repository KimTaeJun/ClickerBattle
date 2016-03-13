var express = require('express');

var app = express();

app.get('/', function(req,res){
  res.send('Hello! Babkoo Test');
});

app.listen(3000, function(){
  console.log('Server On!');
});
