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
Desarrollo realizado en lenguaje de programación interpretado JavaScript MONGODB + NODEJS + ANGULAR.</br>
El proyecto consiste en contener un ABM de proyectos, los cuales daran acceso a un repositorio de informacion donde se declara el nombre del proyecto, fecha de alta, estado del mismo(pendiente,en curso,finalizado).</br> </br>
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
## EndPoints Dominio: localhost:3000
#### Obtengo datos del proyecto
GET /proyecto/
#### Elimino un Proyecto 
DELETE /proyecto/{:proyectoId}
#### Elimino archivos del Proyecto
DELETE /proyecto/{:proyectoId}
#### Creo nombres de Proyecto
POST /proyecto/
#### Creo archivos en el Proyecto
POST /proyecto/
#### Actualizo nombres de Proyecto
PUT /proyecto/{:proyectoId}



[<sub>Volver a inicio</sub>](#uso)
</br>

<a name="codigoerror"></a>
## Tabla de errores
<table>
<tr><th>Id mensaje</th><th>Mensaje</th></tr>
<tr><td>200</td><td>Respuesta estándar para peticiones correctas.[GET/PUT]</td></tr> 
<tr><td>304</td><td>Indica que la petición a la URL no ha sido modificada desde que fue requerida por última vez</td></tr>
<tr><td>404</td><td>Recurso no encontrado.[GET/PUT/DELETE]</td></tr> 
<tr><td>404</td><td>Recurso no encontrado.[direccion incorrecta]</td></tr>
</table>

[<sub>Volver a inicio</sub>](#uso)

