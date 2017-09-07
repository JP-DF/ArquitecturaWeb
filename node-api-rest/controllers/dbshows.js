//File: controllers/dbshows.js
var mongoose = require('mongoose');
var DBProyecto  = mongoose.model('DBProyecto');

//GET - Muestra retorno de todo dbproyecto de la DB
exports.findAllTVShows = function(req, res) {
	DBProyecto.find(function(err, dbproyecto) {
    if(err) res.send(500, err.message);

    console.log('GET /dbproyecto')
		res.status(200).jsonp(tvshows);
	});
};
/*
//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /tvshow/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};
*/
//POST - Inserta nuevo proyecto en la DB
exports.addDBProyecto = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var dbproyecto = new DBProyecto({
		Nombre:    req.body.nombre,
		Año: 	  req.body.año,
		Pais:  req.body.pais,
		Descripcion:   req.body.descripcion,
		Version:  req.body.version,
		Clasificacion:  req.body.clasificacion
	});
  
	dbproyecto.save(function(err, dbproyecto) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(dbproyecto);
	});
};
/*
//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		tvshow.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(tvshow);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
	
};
*/