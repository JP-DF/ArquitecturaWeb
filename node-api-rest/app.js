var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

//llamo a la libreria MongoDB	
var mongoose = require('mongoose');

//Permite conexion a la Base dbproyecto 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbproyecto', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
    console.log('Conectado a MongoDB');
});
	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("DESARROLLO DE API FIALA - LOPREATO");
});

app.use(router);

  app.listen(3000, function() {
    console.log("Node OK conectado a http://localhost:3000");
  
});