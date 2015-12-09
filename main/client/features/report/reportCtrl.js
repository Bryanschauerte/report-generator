angular.module('reportGenerator').controller('reportCtrl', function($scope, $element, classService){
var self = this;
// this.reportsToShow = self.reports;

$scope.$watch('is.reports', function(newValue, oldValue) {

  self.reportsToShow = newValue;
  if(self.reportsToShow){

}
  this.showCompileStuff = false;

});

})
