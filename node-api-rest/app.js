var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());	


var router = express.Router();

router.get('/', function(req, res) {
   res.send("DESARROLLO DE API FIALA - LOPREIATO");
});

app.use(router);


/*
var DBProyectoCtrl = require('./controllers/dbproyectos');

// API 
var dbproyectos = express.Router();
dbproyectos.route('/dbproyectos')
  .get(DBProyectoCtrl.findAllDBProyectos)
app.use('/api', dbproyectos);
*/




mongoose.connect('mongodb://localhost/dbproyectos', function(err, res) {
  if(err) {
    console.log('ERROR de conexion con MONGODB. ' + err);
  }
   });
  app.listen(3000, function() {
    console.log("Node OK conectado a http://localhost:3000");
 
});