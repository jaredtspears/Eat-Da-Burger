//vars
var express= require('express');
var bodyParser= require('body-parser');

//express app
var app = express();

//set port
var PORT = process.env.PORT || 8080;

//for parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//uses static files from public folder
app.use(express.static('public'));

  //import routes
  var routing = require('./controllers/burgerController.js');
  app.use(routing);

app.listen(PORT, () => {
    // connecting to server
    console.log("Server listening on: http://localhost:" + PORT);
  });