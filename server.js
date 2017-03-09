//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

//generating a new express app called 'app'
var app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


//////////
// ROUTES
//////////

//define a root route
app.get('/', function(req,res){
  res.sendFile('views/index.html',{root: __dirname});
});








app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely App listening at http://localhost:3000/');
});
