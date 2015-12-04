angular.module('reportGenerator', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		template: '<landing-Page></landing-Page>'
	})
	.state('myClasses', {
		url: '/myClasses',
		template: "<my-Classes></my-Classes>"
	})
	.state('myAccount', {
		url: '/myAccount',
		template: "<my-Account></my-Account>"
	})

});
