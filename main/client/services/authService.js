angular.module('reportGenerator')
.factory('authService', function( $http, $location ) {
	return {

		getAuth() {
			return $http.get('/auth')
				.success( user => {
					return user;
				})
				.error( err => {
					console.error(err);
					$location.path('/#/myAccount')
				});
		}

	}
});