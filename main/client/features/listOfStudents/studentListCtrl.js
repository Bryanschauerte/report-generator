angular.module('reportGenerator').controller('studentListCtrl', function($scope, $element){
var self = this;
this.addingStudent = false;
this.studentList = self.classInfo;


this.editStudent = function(student){

  console.log(student);
  student.className = self.studentList.name;
  self.currentStudent = student;

}


  $scope.$watch('is.classInfo', function (newValue, oldValue) {

    self.studentList = newValue;


  });

  this.doIt = function () {

      $('select').material_select();
  }


// compile button
// want studentList = {
//   name: "className",
//   students:[{alll attribs},{}]
// }
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
newStudent.className = className;
  // classService.newStudentToAdd(newStudent); and need to get new student

}

})
