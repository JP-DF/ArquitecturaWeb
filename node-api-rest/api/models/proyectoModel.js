
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  nombre_proyecto: {
    type: String,
    required: 'proyectos'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: [{
      type: String,
      enum: ['pendiente', 'en curso', 'finalizado']
    }],
    default: ['pendiente']
  }
});

module.exports = mongoose.model('Proyectos', TaskSchema);