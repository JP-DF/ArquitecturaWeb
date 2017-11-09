
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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

