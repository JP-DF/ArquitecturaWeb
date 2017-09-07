var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');


// -----------CONEXION BASE DE DATOS----------------
	var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  // Conexion URL DB
var url = 'mongodb://localhost:27017/dbproyecto';

// Metodo de conexion al server DB
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Conectado correctamente al server MongoDB mongodb://localhost:27017/dbproyecto");

  //db.close();
});
//----------FIN CONEXION BASE DE DATOS--------------

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

/*
// Import Models and controllers
var models     = require('./models/dbproyecto')(app, mongoose);
var DBProyectoCtrl = require('./controllers/dbproyecto');
*/

// Ejemplo de ruta
var router = express.Router();

// -----------IMPLEMENTO UN GET----------------
router.get('/', function(req, res) {
   res.send("DESARROLLO DE API REST DFIALA JLOPREATO");
});

app.use(router);

/*
// API rutas
var dbproyecto = express.Router();


dbproyectohows.route('/dbproyecto')
  .get(TVShowCtrl.findAllDBProyecto)
  .post(TVShowCtrl.addDBProyecto);

dbproyecto.route('/dbproyecto/:id')
  .get(DBProyectoCtrl.findById)
  .put(DBProyectoCtrl.updateDBProyecto)
  .delete(DBProyectoCtrl.deleteDBProyecto);

app.use('/api', dbproyecto);

*/


 
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});


