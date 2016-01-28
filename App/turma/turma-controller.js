(function(){
	'use strict';

	angular
		.module('turma')
		.controller('TurmaCtrl', TurmaCtrl);

	TurmaCtrl.$inject = ['$scope', '$firebaseArray', '$location']

	function TurmaCtrl($scope, $firebaseArray, $location){

		var turmas = new Firebase('https://flickering-heat-7867.firebaseio.com/turmas');

        $scope.turmas = $firebaseArray(turmas);

        $scope.mostrarFormulario = function(){
            $scope.addFormShow = true;
            $scope.editFormShow = false;
            apagarFormulario();
        }

        $scope.esconderFormulario = function(){
            $scope.addFormShow = false;
        }

        function apagarFormulario(){
            $scope.turmaNome = '';
        }

        $scope.enviarFormulario = function(){
            $scope.turmas.$add({
                turmaNome : $scope.turmaNome,
            });

            apagarFormulario();
        }

        $scope.mostrarTurma = function(turma){
            $scope.editFormShow = true;
            $scope.addFormShow = false;
            $scope.turmaNome = turma.turmaNome;
            $scope.id = turma.$id;
        }

        $scope.editFormSubmit = function(){
            var id = $scope.id;
            var record = $scope.turmas.$getRecord(id);
            record.turmaNome = $scope.turmaNome;

            $scope.turma.$save(record);
        }

        $scope.apagarTurma = function(turma){
            $scope.turmas.$remove(turma);
        }

        $scope.ordenarPor = function(campo){
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        $scope.redirecionandoUsuario = redirecionandoUsuario;

        function redirecionandoUsuario(){
            $location.path('/aluno');
        }

        $scope.voltar = voltar;
    
        function voltar(){
            $location.path('/professor');
        }
	}	

})();