(function() {
    'use strict';

    angular
        .module('login')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ["$scope", "$location"]

   	function LoginCtrl($scope, $location) {

   		// Variáveis
   		$scope.email = '';
      $scope.senha = '';
      $scope.user = true;

   		// Métodos
   		$scope.logar = logar;


   		function logar() {
   		   if ($scope.email === 'prof@gmail.com' && $scope.senha === '123') {
                $location.path('/disciplina');
           } else if ($scope.email === 'aluno@gmail.com' && $scope.senha === '123') {
                $location.path('/turma');
           } else {
                console.log('Dados invalidos');
           }
        }

   	}

})();