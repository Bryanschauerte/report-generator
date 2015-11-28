angular.module('reportGenerator').controller('studentCtrl', function($scope,classService, $element){
var self = this;
console.log(self.studentInfo);
this.student = self.studentInfo;


  this.changeStudentAtt = function(student, e) {
    // self.doIt();
      console.log(self.student);
classService.changeAttribute(student);

  }

  $scope.$watch('is.studentInfo', function (newValue, oldValue) {
self.student = self.studentInfo;
console.log(newValue);
  });

  this.doIt = function () {

      $('select').material_select();
  }



})
