// set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var Proyecto = require('C://node-api-rest-VERSION-ANGULAR//api//models//proyectoModel'); //llamo al Modelo
  
// configuration =================

   mongoose.Promise = global.Promise;
   mongoose.connect('mongodb://localhost/proyectos');            	// connect to mongoDB database on modulus.io
   
	app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

	
// mongoose instancia de URL de conexion
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/proyectos'); 

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


var routes = require('C://node-api-rest-VERSION-ANGULAR//api//routes/proyectoRoutes'); //llamo a las Rutas declaradas
routes(app); //registro de rutas


// Carga una vista HTML 
// Angular para el Frontend

app.get('/', function(req, res) {						
	res.sendfile('C://node-api-rest-VERSION-ANGULAR//api//public//index.html');	// load the single view file (angular will handle the page changes on the front-end)		
});


// listen (start app with node server.js) ======================================
    app.listen(3000);
    console.log("App listening on port 3000");
	
// application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('C://node-api-rest-VERSION-ANGULAR//api//public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });	

	
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('DESARROLLO DE API FIALA - LOPREIATO - UP: 3000');
