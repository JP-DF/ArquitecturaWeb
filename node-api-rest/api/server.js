var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Proyecto = require('C://node-api-rest//api//models//proyectoModel'), //llamo al Modelo
  bodyParser = require('body-parser');
  
// mongoose instancia de URL de conexion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/proyectos'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('C://node-api-rest//api//routes/proyectoRoutes'); //llamo a las Rutas declaradas
routes(app); //registro de rutas


app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('DESARROLLO DE API FIALA - LOPREIATO - UP: ' + port);
