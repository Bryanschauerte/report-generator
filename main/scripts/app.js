angular.module('reportGenerator', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: '/',
		template: '<h1>test</h1>',
	})

});