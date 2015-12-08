angular.module("reportGenerator").controller('signInBoxCtrl', function($scope, authService, classService) {

var self = this;

 self.getDateOfToday = function () {
    var endDate = function () {
        return new Date();
    }();
return endDate;
}();

this.getUser = function() {
  classService.getUser().then(function(response, err){
    self.user = response.data;
    console.log(self.user)
  })
}
this.getUser();

$scope.$watch('is.user', function(newValue, oldValue) {

  if(self.user){
    self.todays = new Date(self.getDateOfToday);
    self.dayOfEnd = new Date(self.user.dateOfSubscriptionEnd)

  }
});

})
