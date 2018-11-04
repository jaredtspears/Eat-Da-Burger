//vars
var express= require('express');
var bodyParser= require('body-parser');
var path = require('path');

//express app
var app = express();

//set port
var PORT = process.env.PORT || 8080;

//for parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//uses static files from public folder. joining file path
app.use(express.static(path.join(__dirname + '/public')));
console.log(path.join(__dirname + '/public'));
  //import route
  var routing = require('./controllers/burgerController.js');
  app.use(routing);

  //listneing to port
app.listen(PORT, () => {
    // connecting to server
    console.log("Server listening on: http://localhost:" + PORT);
  });