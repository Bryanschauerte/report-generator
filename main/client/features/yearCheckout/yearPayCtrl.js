angular.module("reportGenerator").controller('yearPayCtrl', function($scope, classService, $http) {

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
    url: "/api/" + userId+ "/yearCharge",
    data: {
      stripeToken: token
    }
  }).then(function(response, err){
    if(err){
      console.log(err, "eeor")
    }
    if(response){
      self.user = response.data
    }
  });
};


})
