## Trabajo Practico Arquitectura Web - UP 
(#inicio)
## Tema: API gestor y seguimiento de proyectos.

## Integrantes: 
####  @Daniel Fiala Legajo 5938 </br>
####  @Juan Lopreato Legajo 51020


+ [Uso](#uso)
     + [Operatoria de uso ](#operatoria)
      + [EndPoints ](#EndPoints)
       + [Tabla de errores ](#codigoerror)

</br>     

<a name="#uso"></a>
## Uso
Desarrollo realizado en lenguaje de programación interpretado JavaScript.</br>
El proyecto consiste en contener un ABM de usuarios, los cuales daran acceso a un repositorio de informacion donde se declara el proyecto y que usuarios tienen acceso, asi tambien poder enviar un archivos ligado al proyecto.</br> </br>
La base de datos utilizada es mongoDB.</br>
Se debe descargar desde la URL el archivo README.md: https://github.com/JP-DF/ArquitecturaWeb-JP-DF/blob/master/README.md
</br>
Una vez haya descargado el mismo descomprimir el archivo -> README.md.

[<sub>Volver a inicio</sub>](#inicio)
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
GET API/Proyectos/myproyecto
#### Obtengo Archivo Adjunto
GET API/Proyectos/archivosadjuntos/myproyecto
#### Elimino Proyecto
DELETE API/Proyectos/myproyecto
#### Elimino archivos del Proyecto
DELETE API/Proyectos/archivosadjuntos/myproyecto
#### Creo nombres de Proyecto
POST API/proyectos/nombres_proyectos
#### Creo archivos en el Proyecto
POST API/proyectos/archivosadjuntos/myproyecto

[<sub>Volver a inicio</sub>](#uso)
</br>

<a name="codigoerror"></a>
## Tabla de errores
<table>
<tr><th>Id mensaje</th><th>Mensaje</th></tr>
<tr><td>200</td><td>Conexion exitosa.</td></tr>
<tr><td>201</td><td>Recurso creado exitosamente.</td></tr>
<tr><td>404</td><td>Informacion no disponible.</td></tr>
<tr><td>401</td><td>No tiene autorizacion para el aceso intentado</td></tr>
<tr><td>503</td><td>Servicio no disponible.</td></tr>
</table>

[<sub>Volver a inicio</sub>](#inicio)

