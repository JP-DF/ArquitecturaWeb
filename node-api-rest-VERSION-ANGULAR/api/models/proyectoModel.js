
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//estructura de la base de datos - creo un esquema llamado taskSchema y lo aplico a la base de datos MongoDB "Proyectos"
var TaskSchema = new Schema({
  nombre_proyecto: {
    type: String,
    required: 'proyectos'
  },
  Created_date: {
    type: String,
    required: 'proyectos'
  },
  estado: {
    type: String,
    required: 'proyectos'
  }
});

module.exports = mongoose.model('Proyectos', TaskSchema);

