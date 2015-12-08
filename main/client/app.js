angular.module('reportGenerator', ['ui.router', "stripe.checkout"])



.config(function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		template: '<landing-Page></landing-Page>'
	})
	.state('myClasses', {
		url: '/myClasses',
		template: "<my-Classes></my-Classes>",
		resolve: {
			user( authService ) {
			return authService.getAuth();
			}
		}
	})
	.state('myAccount', {
		url: '/myAccount',
		template: "<my-Account></my-Account>"
	})

});
