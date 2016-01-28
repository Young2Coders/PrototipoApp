(function(){
	'use strict';

	angular
		.module('disciplina')
		.controller('DisciplinaCtrl', DisciplinaCtrl);

	DisciplinaCtrl.$inject = ['$scope', '$firebaseArray','$location']

	function DisciplinaCtrl($scope, $firebaseArray, $location){

		var disciplinas = new Firebase('https://flickering-heat-7867.firebaseio.com/disciplinas');

        $scope.disciplinas = $firebaseArray(disciplinas);

        $scope.mostrarFormulario = function(){
            $scope.addFormShow = true;
            $scope.editFormShow = false;
            apagarFormulario();
        }

        $scope.esconderFormulario = function(){
            $scope.addFormShow = false;
        }

        function apagarFormulario(){
            $scope.disciplinaNome = '';
        }

        $scope.enviarFormulario = function(){
            $scope.disciplinas.$add({
                disciplinaNome : $scope.disciplinaNome,
            });

            apagarFormulario();
        }

        $scope.mostrarDisciplina = function(disciplina){
            $scope.editFormShow = true;
            $scope.addFormShow = false;
            $scope.disciplinaNome = disciplina.disciplinaNome;
            $scope.id = disciplina.$id;
        }

        $scope.editFormSubmit = function(){
            var id = $scope.id;
            var record = $scope.disciplinas.$getRecord(id);
            record.disciplinaNome = $scope.disciplinaNome;

            $scope.disciplina.$save(record);
        }

        $scope.apagarDisciplina = function(disciplina){
            $scope.disciplinas.$remove(disciplina);
        }

        $scope.ordenarPor = function(campo){
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        $scope.redirecionandoUsuario = redirecionandoUsuario;
    
        function redirecionandoUsuario(){
            $location.path('/professor');
        }

        $scope.voltar = voltar;
    
        function voltar(){
            $location.path('/');
        }

    }   


})();