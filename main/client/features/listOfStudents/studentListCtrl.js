angular.module('reportGenerator').controller('studentListCtrl', function($scope, $element, classService){
var self = this;
this.addingStudent = false;
this.studentList = self.classInfo;

this.editStudent = function(student){
  student.className = self.studentList.name;
  self.currentStudent = student;

}

  $scope.$watch('is.classInfo', function (newValue, oldValue) {
    self.studentList = newValue;
  });
  this.doIt = function () {
      $('select').material_select();
  }


this.createAllReports = function(){
  self.studentList
}
this.startAddNewStudent = function(){
  self.addingStudent = !self.addingStudent;
}

this.cancelAdd = function(){
  self.newStudent = {};
    self.addingStudent = !self.addingStudent;
}

this.endAddNewStudent = function(newStudent){
  var className = self.studentList.name;
  var newKid = newStudent;
  self.newStudent = {}
  newKid.className = className;
  self.studentList.students.push(newKid);
  this.addingStudent = false;
  classService.newStudentToAdd(newKid);
}

})
