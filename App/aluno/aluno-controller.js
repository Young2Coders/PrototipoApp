(function(){
	'use strict';

	angular
		.module('aluno')
		.controller('AlunoCtrl', AlunoCtrl);

	AlunoCtrl.$inject = ['$scope', '$firebaseArray', '$location']

	function AlunoCtrl($scope, $firebaseArray, $location){

		var alunos = new Firebase('https://flickering-heat-7867.firebaseio.com/alunos');

        $scope.alunos = $firebaseArray(alunos);

        $scope.mostrarFormulario = function(){
            $scope.addFormShow = true;
            $scope.editFormShow = false;
            apagarFormulario();
        }

        $scope.esconderFormulario = function(){
            $scope.addFormShow = false;
        }

        function apagarFormulario(){
            $scope.alunoNumero = '';
            $scope.alunoNome = '';
            $scope.alunoFalta = '';
            $scope.alunoNota = '';
        }

        $scope.enviarFormulario = function(){
            $scope.alunos.$add({
                alunoNumero : $scope.alunoNumero,
                alunoNome : $scope.alunoNome,
                alunoFalta : $scope.alunoFalta,
                alunoNota : $scope.alunoNota
            });

            apagarFormulario();
        }

        $scope.mostrarAluno = function(aluno){
            $scope.editFormShow = true;
            $scope.addFormShow = false;
            $scope.alunoNumero = aluno.alunoNumero;
            $scope.alunoNome = aluno.alunoNome;
            $scope.alunoFalta = aluno.alunoFalta;
            $scope.alunoNota = aluno.alunoNota;
            $scope.id = aluno.$id;
        }

        $scope.editFormSubmit = function(){
            var id = $scope.id;
            var record = $scope.alunos.$getRecord(id);
            record.alunoNumero = $scope.alunoNumero;
            record.alunoNome = $scope.alunoNome;
            record.alunoFalta = $scope.alunoFalta;
            record.alunoNota = $scope.alunoNota;

            $scope.aluno.$save(record);
        }

        $scope.apagarAluno = function(aluno){
            $scope.alunos.$remove(aluno);
        }

        $scope.ordenarPor = function(campo){
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        $scope.voltar = voltar;
    
        function voltar(){
            $location.path('/turma');
        }
	}	

})();