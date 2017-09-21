## Trabajo Practico Arquitectura Web - UP 

## Tema: API gestor y seguimiento de proyectos.

## Integrantes: 
####  @Daniel Fiala Legajo 5938 </br>
####  @Juan Lopreiato Legajo 51020


+ [Uso](#uso)
     + [Operatoria de uso ](#operatoria)
      + [EndPoints ](#EndPoints)
       + [Tabla de errores ](#codigoerror)

</br>     

<a name="#uso"></a>
## Uso
Desarrollo realizado en lenguaje de programación interpretado JavaScript.</br>
El proyecto consiste en contener un ABM de proyectos, los cuales daran acceso a un repositorio de informacion donde se declara el proyecto, duracion, asi tambien poder cargar archivos ligado al proyecto.</br> </br>
La base de datos utilizada es mongoDB.</br>
Obtener mas informacion a traves de la URL: README.md: https://github.com/JP-DF/ArquitecturaWeb-JP-DF/blob/master/README.md
</br>

[<sub>Volver a inicio</sub>](#uso)
</br>

<a name="operatoria"></a>
## Operatoria de uso 
Mediante una única interface de simple gestion, los PM acceden a toda la informacion necesaria al momento que lo requiera sin necesidad de contar con ningún conocimiento extra, ProyectoCero se ocupa de gestionar la informacion necesaria incluyendo archivos de proyect.</br>
Para acceder al servicio, los PM deberan estar dados de alta mediante el sitio exclisivo de ProyectoCero. En estos procesos se generará el usuario y clave para este servicio.

[<sub>Volver a inicio</sub>](#uso)
</br>

<a name="EndPoints"></a>
## EndPoints
#### Obtengo datos del proyecto
GET /api/proyectos/{nombres_proyectos}
#### Elimino Proyecto
DELETE /api/proyectos/{nombres_proyectos}
#### Elimino archivos del Proyecto
DELETE /api/proyectos/{nombres_proyectos}
#### Creo nombres de Proyecto
POST /api/proyectos/{nombres_proyectos}
#### Creo archivos en el Proyecto
POST /api/proyectos/{nombres_proyectos}/archivosadjuntos
#### Actualizo nombres de Proyecto
PUT /api/proyectos/{nombres_proyectos}



[<sub>Volver a inicio</sub>](#uso)
</br>

<a name="codigoerror"></a>
## Tabla de errores
<table>
<tr><th>Id mensaje</th><th>Mensaje</th></tr>
<tr><td>200</td><td>Conexion exitosa.[GET/PUT]</td></tr> 
<tr><td>201</td><td>Recurso creado exitosamente.[POST]</td></tr> 
<tr><td>404</td><td>Informacion no disponible.[GET/PUT/DELETE]</td></tr> 
<tr><td>401</td><td>No tiene autorizacion para el aceso intentado. [GET/PUT/DELETE]</td></tr> 
<tr><td>503</td><td>Servicio no disponible.</td></tr>
</table>

[<sub>Volver a inicio</sub>](#uso)

