// set up ========================
    var express  = require('express');
    var app      = express();                               // crea aplicacion con Node express
    var mongoose = require('mongoose');                     // creo mongoose para mongodb
    var morgan = require('morgan');             // habilito logs por  consola (express4)
    var bodyParser = require('body-parser');    // hago pull de informacion  HTML POST (express4)
    var methodOverride = require('method-override'); // simula DELETE and PUT (express4)
    var Proyecto = require('C://node-api-rest-VERSION-ANGULAR//api//models//proyectoModel'); //llamo al Modelo
  
// configuracion =================

   mongoose.Promise = global.Promise;
   mongoose.connect('mongodb://localhost/proyectos');            	// conexion a mongoDB database 
   
	app.use(express.static(__dirname + '/public'));                 // seteo estatico de archivos
    app.use(morgan('dev'));                                         // log consola|
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parseo funcion
    app.use(bodyParser.json());                                     // parseo funcion/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parseo funcion/api+json 
    app.use(methodOverride());


var routes = require('C://node-api-rest-VERSION-ANGULAR//api//routes/proyectoRoutes'); //llamo a las Rutas declaradas
routes(app); //registro de rutas en la app


// Carga una vista HTML  - Angular para el Frontend
app.get('/', function(req, res) {						
	res.sendFile('C://node-api-rest-VERSION-ANGULAR//api//public//index.html');	// carga el front-end)		
});


// Escucha por el puerto que declaro (inicio aplicacion con "node server.js") ======================================
    app.listen(3000);
    console.log("Aplicacion configurada en puerto 3000");

// Si no inicia el index de angular muestra error 404 ======================================
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// leyenda de los autores ======================================
console.log('DESARROLLO DE API FIALA - LOPREIATO - UP: 3000');
