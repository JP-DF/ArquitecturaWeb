'use strict';
var mongoose = require('mongoose'),
  Proyecto = mongoose.model('Proyectos');

// Obtiene todos los objetos Proyectos de la base de datos - Hace un GET
exports.getProyecto = function(req, res) {
  Proyecto.find({}, function(err, proyecto) {
    if (err)
      res.send(err);
    res.json(proyecto);
  });
};

// Leer un proyecto individual con el ID - hace un GET
exports.leer_un_proyecto = function(req, res) {
  Proyecto.findById({_id: req.params.proyectoId}, function(err, proyecto) {
    if (err)
      res.send(err);
    res.json(proyecto);
  });
};


// Guarda un objeto Proyecto en base de datos - Hace un POST y luego un GET
exports.setProyecto = function(req, res) {

		// Creo el objeto Proyecto
		Proyecto.create(
			{nombre_proyecto : req.body.nombre_proyecto,Created_date: req.body.Created_date, estado: req.body.estado}, 
			function(err, proyecto) {
				if (err)
					res.send(err);
				// Obtiene y devuelve todas los proyectos posterior a crear uno en base de Datos
				Proyecto.find(function(err, proyecto) {
				 	if (err)
				 		res.send(err)
				 	res.json(proyecto);
				});
			});

	}

// Modificamos un objeto Proyecto de la base de datos - hace un PUT - Luego un GET
exports.updateProyecto = function(req, res){
	Proyecto.update( {_id: req.params.proyectoId},
					{$set:{nombre_proyecto : req.body.nombre_proyecto,Created_date: req.body.Created_date, estado: req.body.estado}}, 
					function(err, proyecto) {
						if (err)
							res.send(err);
				// Obtine y devuelve todos los proyectos luego de actualizar uno de ellos
				Proyecto.find(function(err, proyecto) {
				 	if (err)
				 		res.send(err)
				 	res.json(proyecto);
				});
			});
	}


// Elimino un objeto Proyecto de la base de Datos - Hace un Delete y luego un GET
exports.removeProyecto = function(req, res) {
	Proyecto.remove({_id: req.params.proyectoId}, function(err, proyecto) {
		if (err)
			res.send(err);
			// Obtine y devuelve todos los proyectos al borrar uno 
			Proyecto.find(function(err, proyecto) {
				if (err)
					res.send(err)
				res.json(proyecto);
			});
		});
}

