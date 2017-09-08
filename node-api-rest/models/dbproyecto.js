var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var dbproyectoSchema = new Schema({
  NombreProyecto:    { type: String },
  Año:     { type: Number },
  Pais:  { type: String },
  Descripcion:   { type: String },
  version:  { type: Number },
  Clasificacion:    { type: String, enum:
  ['tecnologia', 'sistemas', 'redes', 'administracion', 'fabrica']
	    },
  summary:  { type: String }
});

module.exports = mongoose.model('DBProyecto', dbproyectoSchema);