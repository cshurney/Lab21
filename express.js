var express = require('express');
var app = express();

var collection = ["Talk is cheap, show me the code." ,
                  "First, solve the problem. Then, write the code.",
                  "Java is to JavaScript what Car is to Carpet.",
                  "If today were the last day of life, would you want to do what you are about to do today."];

var randomNum = [Math.floor(Math.random() * collection.length)];
var randomPhrase = collection[randomNum];

app.get('/',function(req, res){
	res.send(randomPhrase);
});
app.get('/randomPhrase', function(req, res){
	res.send(collection);
});
var server = app.listen(3000, function(){
	var port= server.address().port;
	  console.log('Example app listening at http://localhost:%s', port);
});
