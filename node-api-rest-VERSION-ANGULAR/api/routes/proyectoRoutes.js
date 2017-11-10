'use strict';
module.exports = function(app) {
  var proyectoLista = require('../controllers/proyectoController');

  // proyectoLista RUTAS de la API llamado Routes proyectoLista.{nombre definido en ProyectoController}
  app.route('/proyecto')
    .get(proyectoLista.getProyecto)
    .post(proyectoLista.setProyecto);

 // proyectoLista RUTAS de la API USANDO _ID llamado Routes proyectoLista.{nombre definido en ProyectoController}
  app.route('/proyecto/:proyectoId')
    .get(proyectoLista.leer_un_proyecto)
    .put(proyectoLista.updateProyecto)
    .delete(proyectoLista.removeProyecto);
};
