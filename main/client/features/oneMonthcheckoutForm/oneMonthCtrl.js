angular.module("reportGenerator").controller('oneMonthCtrl', function($scope, $http) {



// Stripe.setPublishableKey('pk_test_ejTw1YpRyW0G0xHXK8FngpJJ');
this.doCheckout = function(token) {
  alert("Got Stripe token: " + token.id + "doing the call to server");
  return $http({
    method: "POST",
    url: "/api/monthCharge",
    data: {
      stripeToken: token
    }
  });
};


})
//
