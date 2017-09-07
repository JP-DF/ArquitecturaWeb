var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

	var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  // Connection URL
var url = 'mongodb://localhost:27017/dbproyecto';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});
	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

// -----------IMPLEMENTO UN GET----------------
router.get('/', function(req, res) {
   res.send("DESARROLLO DE API REST DFIALA JLOPREATO");
});

app.use(router);

// -----------CONEXION BASE DE DATOS----------------

/*
mongoose.connect('mongodb://localhost/dbproyecto', function(err, res) {
  if(err) {
    console.log('ERROR: connectando a la base de datos. ' + err);
   
  }
*/
 
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});



