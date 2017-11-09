angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newProyecto = {};
	$scope.proyectos = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/proyecto').success(function(data) {
		$scope.proyectos = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar un proyecto
	$scope.registrarPersona = function() {
		$http.post('/proyecto', $scope.newProyecto)
		.success(function(data) {
				$scope.newProyecto = {}; // Borramos los datos del formulario
				$scope.proyectos = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un proyecto
	$scope.modificarPersona = function(newProyecto) {
		$http.put('/proyecto/' + $scope.newProyecto._id, $scope.newProyecto)
		.success(function(data) {
				$scope.newProyecto = {}; // Borramos los datos del formulario
				$scope.proyectos = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto proyecto con su id
	$scope.borrarPersona = function(newProyecto) {
		$http.delete('/proyecto/' + $scope.newProyecto._id)
		.success(function(data) {
			$scope.newProyecto = {};
			$scope.proyectos = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para tomar el objeto seleccionado de la tabla
	$scope.selectPerson = function(proyecto) {
		$scope.newProyecto = proyecto;
		$scope.selected = true;
		console.log($scope.newProyecto, $scope.selected);
	};
}