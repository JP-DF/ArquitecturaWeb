var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var dbproyectoSchema = new Schema({
  Nombre:    { type: String },
  Año:     { type: Number },
  Pais:  { type: String },
  Descripcion:   { type: String },
  version:  { type: Number },
  Clasificacion:    { type: String, enum:
  ['tecnologia', 'sistemas', 'redes', 'administracion', 'fabrica']
	    },
  summary:  { type: String }
});

module.exports = mongoose.model('dbproyecto', dbproyectoSchema);
