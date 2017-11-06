var angularProyecto = angular.module('angularProyecto', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // cuando carga la pagina trae los registros con la API de la base de datos
    $http.get('/proyecto')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

		
    // cuando cargo un registro lo envia con la API
    $scope.createTodo = function() {
        $http.post('/proyecto', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // limpia formulario
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // borra al llenar checkbox
    $scope.deleteTodo = function(id) {
        $http.delete('/proyecto/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
