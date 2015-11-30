angular.module('reportGenerator').controller('studentListCtrl', function($scope, $element, classService){
var self = this;
this.addingStudent = false;
this.studentList = self.classInfo;
this.showCompileStuff = false;

this.doReports = function(studentList){
  self.showStudent = false;
  self.showReports = true;

}
this.editStudent = function(student){
  self.showStudent =true;
  student.className = self.studentList.className;
  self.currentStudent = student;
    self.showReports = false;
  this.showCompileStuff = true;
}

  $scope.$watch('is.classInfo', function (newValue, oldValue) {
    self.studentList = newValue;
    this.showCompileStuff = false;

  });


  $scope.$watch('is.studentList.students', function (newValue, oldValue) {



  });


  this.doIt = function () {
      $('select').material_select();
  }



this.startAddNewStudent = function(){
  self.addingStudent = !self.addingStudent;
  self.showStudent = false;
  self.showReports = false;
}

this.cancelAdd = function(){
  self.newStudent = {};
    self.addingStudent = !self.addingStudent;
}

this.endAddNewStudent = function(newStudent){
  var className = self.studentList.className;
  var newKid = newStudent;
  self.newStudent = {}
  newKid.className = className;

    classService.newStudentToAdd(newKid).then(function(response, err){
      newKid = response.data.students[(response.data.students.length -1)];
        self.studentList.students.push(newKid);
          self.classInfo = self.studentList;

    })

  this.addingStudent = false;

}

})
