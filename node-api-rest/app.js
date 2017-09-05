var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

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






