'use strict';
module.exports = function(app) {
  var proyectoLista = require('../controllers/proyectoController');

  // proyectoLista Routes
  app.route('/proyecto')
    .get(proyectoLista.muestra_proyectos_proyectos)
    .post(proyectoLista.crear_un_proyecto);


  app.route('/proyecto/:proyectoId')
    .get(proyectoLista.leer_un_proyecto)
    .put(proyectoLista.actualizar_un_proyecto)
    .delete(proyectoLista.eliminar_un_proyecto);
};
