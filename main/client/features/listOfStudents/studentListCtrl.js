angular.module('reportGenerator').controller('studentListCtrl', function($scope, $element, classService) {
  var self = this;
  this.addingStudent = false;

  this.showCompileStuff = false;

  this.doReports = function(studentList) {
    self.showStudent = false;
    console.log(studentList)
    classService.compileReports(studentList).then(function(response, err){
          self.showReports = true;
    })
    self.showReports = true;

  };
  this.editStudent = function(student) {
    self.showStudent = true;
    // console.log(self.studentList)
    student.classId = self.studentList._id;
    student.className = self.studentList.className;
    self.currentStudent = student;
    self.showReports = false;
    this.showCompileStuff = true;
  };

  this.deleteStudent = function(studentClassId, studentId) {
    classService.deleteStudent(studentClassId, studentId).then(function(response, err) {

    })

    for (var i = 0; i < self.studentList.students.length; i++) {
      if (self.studentList.students[i]._id == studentId) {
      self.studentList.students.splice(i, 1);

      }
    }
self.classInfo = self.studentList;
if(self.studentList.students.length == 0){
  self.showCompileStuff= false;
}
    self.showReports = false;
    self.showStudent = false;

  };

  $scope.$watch('is.classInfo', function(newValue, oldValue) {

    self.studentList = newValue;
    this.showCompileStuff = false;

  });


  $scope.$watch('is.studentList.students', function(newValue, oldValue) {

  });


  this.doIt = function() {
    $('select').material_select();
  }



  this.startAddNewStudent = function() {
    self.addingStudent = !self.addingStudent;
    self.showStudent = false;
    self.showReports = false;
  }

  this.cancelAdd = function() {
    self.newStudent = {};
    self.addingStudent = !self.addingStudent;
  }

  this.endAddNewStudent = function(newStudent) {
    var className = self.studentList.className;
    var newKid = newStudent;
    self.newStudent = {}
    newKid.className = className;

    classService.newStudentToAdd(newKid).then(function(response, err) {
      newKid = response.data.students[(response.data.students.length - 1)];
      self.studentList.students.push(newKid);
      self.classInfo = self.studentList;

    })

    this.addingStudent = false;

  }

})
