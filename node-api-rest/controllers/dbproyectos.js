//File: controllers/dbproyecto.js
var mongoose = require('mongoose');
var DBProyecto  = mongoose.model('DBProyecto');

//GET - Retorna todos los registros de dbproyecto de la DB
exports.findAllDBProyecto = function(req, res) {
	DBProyecto.find(function(err, dbproyectos) {
    if(err) res.send(500, err.message);

    console.log('GET /dbproyectos')
		res.status(200).jsonp(dbproyectos);
	});
};