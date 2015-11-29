angular.module('reportGenerator').controller('studentCtrl', function($scope,classService, $element){
var self = this;

this.student = self.studentInfo;

this.changeStudentAtt = function(student, e) {
  classService.changeAttribute(student);
  }

  this.doneDoing = function(student){
console.log(student, "testttt");
    self.student.markAs = {'background-color':'#00FF67'};
    self.studentInfo = student;
  }
  this.notDoneDoing = function(student){
student.markAs = {'background-color':'#FF3100'};
self.studentInfo = student;
  }

  $scope.$watch('is.studentInfo', function (newValue, oldValue) {
    self.student = self.studentInfo;
  });

  this.doIt = function () {
      $('select').material_select();
  }

})
