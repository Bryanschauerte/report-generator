angular.module("reportGenerator").controller('yearPayCtrl', function($scope, $http) {


this.doCheckout = function(token) {
  alert("Got Stripe token: " + token.id + "year charge");
  return $http({
    method: "POST",
    url: "/api/yearCharge",
    data: {
      stripeToken: token
    }
  });
};


})
