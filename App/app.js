(function(){
	'use strict';

	angular
		.module('app',['ngRoute','firebase','login','disciplina','professor','turma','aluno'])
		.config(config);

	function config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'login/login.html'
			})
			.when('/disciplina', {
				templateUrl: 'disciplina/disciplina.html'
			})
			.when('/professor', {
				templateUrl: 'professor/professor.html'
			})
			.when('/turma', {
				templateUrl: 'turma/turma.html'
			})
			.when('/aluno', {
				templateUrl: 'aluno/aluno.html'
			});
	}
		
})();