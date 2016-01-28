(function(){
    'use strict';

    angular
        .module('professor')
        .controller('ProfessorCtrl', ProfessorCtrl);

    ProfessorCtrl.$inject = ['$scope', '$firebaseArray', '$location']

    function ProfessorCtrl($scope, $firebaseArray, $location){

        var professores = new Firebase('https://flickering-heat-7867.firebaseio.com/professores');

        $scope.professores = $firebaseArray(professores);

        $scope.mostrarFormulario = function(){
            $scope.addFormShow = true;
            $scope.editFormShow = false;
            apagarFormulario();
        }

        $scope.esconderFormulario = function(){
            $scope.addFormShow = false;
        }

        function apagarFormulario(){
            $scope.professorNome = '';
        }

        $scope.enviarFormulario = function(){
            $scope.professores.$add({
                professorNome : $scope.professorNome,
            });

            apagarFormulario();
        }

        $scope.mostrarProfessor = function(professor){
            $scope.editFormShow = true;
            $scope.addFormShow = false;
            $scope.professorNome = professor.professorNome;
            $scope.id = professor.$id;
        }

        $scope.editFormSubmit = function(){
            var id = $scope.id;
            var record = $scope.professores.$getRecord(id);
            record.professorNome = $scope.professorNome;

            $scope.professor.$save(record);
        }

        $scope.apagarProfessor = function(professor){
            $scope.professores.$remove(professor);
        }

        $scope.ordenarPor = function(campo){
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        $scope.redirecionandoUsuario = redirecionandoUsuario;
    
        function redirecionandoUsuario(){
            $location.path('/turma');
        }

        $scope.voltar = voltar;
    
        function voltar(){
            $location.path('/disciplina');
        }
    }   

})();