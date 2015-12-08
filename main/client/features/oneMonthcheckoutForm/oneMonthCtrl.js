angular.module("reportGenerator").controller('oneMonthCtrl', function($scope, $http, classService) {

var self = this;

this.getUser = function() {
  classService.getUser().then(function(response, err){

    self.user = response.data;

  })
}()



this.doCheckout = function(token) {
var userId = self.user._id;

  return $http({
    method: "POST",
    url: "/api/" + userId + "/monthCharge",
    data: {
      stripeToken: token
    }
  });
};


})
//
