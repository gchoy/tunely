//require express in our app
var express = require('express');
var  bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to db models
var db =require('./models');

//connect to controllers
var controllers = require('./controllers');

//generating a new express app called 'app'
var app = express();

//serving static files from express
app.use(express.static(__dirname + '/public'));

//body parser config to accept our datatypes
app.use(bodyParser.urlencoded({extended:true}));


//////////
// ROUTES
//////////

//define a root route
app.get('/', function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});

app.get('/api', controllers.api.index);






app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely App listening at http://localhost:3000/');
});
