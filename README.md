<a name="inicio"></a>Trabajo Practico de Arquitectura Web - Universidad de PalermoTema: API gestor y seguimiento de proyectos.
</br>
Integrantes : @Daniel Fiala Legajo 5938 - @Juan Lopreato Legajo 51020
=======
+ [Uso](#Uso)
     + [Operatoria de uso](#operatoria)
     + [Tabla de errores ](#codigoerror)
     
<a name="Comenzar a utilizar la API"></a>

## Uso
Desarrollo en lenguaje de programación interpretado JavaScript. El proyecto consiste en contener un ABM de usuarios, los cuales daran acceso a un repositorio de informacion y archivos ligados a un proyecto. La base de datos utilizada es mongoDB.Se debe descargar desde la URL el archivo proyecto.zip: https://github.com/JP-DF/ArquitecturaWeb-JP-DF/proyecto.zip
Una vez haya descargado el mismo descomprimido, proyecto.js.

[<sub>Volver a inicio</sub>](#inicio)
</br>

<a name="operatoria"></a>
### Operatoria de uso 
Mediante una única interface de simple gestion, los PM acceden a toda la informacion necesaria al momento que lo requiera sin necesidad de contar con ningún conocimiento extra, ProyectoCero se ocupa de gestionar la informacion necesaria incluyendo archivos de proyect.
Para acceder al servicio, los PM deberan estar dados de alta mediante el sitio exclisivo de ProyectoCero. En estos procesos se generará el usuario y clave para este servicio.

[<sub>Volver a inicio</sub>](#inicio)
</br>

<a name="codigoerror"></a>
## Tabla de errores
<table>
<tr><th>Id mensaje</th><th>Mensaje</th></tr>
<tr><td>-200</td><td>La conexion es exitosa.</td></tr>
<tr><td>404</td><td>Informacion no disponible.</td></tr>
<tr><td>401</td><td>No tiene autorizacion para el aceso intentado</td></tr>
<tr><td>503</td><td>Servicio no disponible.</td></tr>
</table>

[<sub>Volver a inicio</sub>](#inicio)

