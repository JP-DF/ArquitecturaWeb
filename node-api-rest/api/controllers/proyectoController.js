'use strict';


var mongoose = require('mongoose'),
  Proyecto = mongoose.model('Proyectos');

exports.muestra_todos_proyectos = function(req, res) {
  Proyecto.find({}, function(err, proyecto) {
    if (err)
      res.send(err);
    res.json(proyecto);
  });
};




exports.crear_un_proyecto = function(req, res) {
  var new_task = new Proyecto(req.body);
  new_task.save(function(err, proyecto) {
    if (err)
      res.send(err);
    res.json(proyecto);
  });
};


exports.leer_un_proyecto = function(req, res) {
  Proyecto.findById({_id: req.params.proyectoId}, function(err, proyecto) {
    if (err)
      res.send(err);
    res.json(proyecto);
  });
};


exports.actualizar_un_proyecto = function(req, res) {
  Proyecto.findOneAndUpdate({_id: req.params.proyectoId}, req.body, {new: true}, function(err, proyecto) {
    if (err)
      res.send(err);
    res.json(proyecto);
  });
};


exports.eliminar_un_proyecto = function(req, res) {


  Proyecto.remove({
    _id: req.params.proyectoId
  }, function(err, proyecto) {
    if (err)
      res.send(err);
    res.json({ message: 'Proyecto eliminado' });
  });
};


