angular.module('reportGenerator').controller('reportCtrl', function($scope, $element, classService){
var self = this;
// this.reportsToShow = self.reports;

$scope.$watch('is.reports', function(newValue, oldValue) {
console.log(newValue, "new valueeee")
  self.reportsToShow = newValue;
  if(self.reportsToShow){
  console.log(self.reportsToShow.students, "students")
  console.log(self.reportsToShow.students[0].name.name, "students name")
  console.log(self.reportsToShow.students[0].report, "students name")
}
  this.showCompileStuff = false;

});

})
