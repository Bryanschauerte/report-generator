angular.module('reportGenerator').controller('studentListCtrl', function($scope, $element, classService) {
  var self = this;
  this.addingStudent = false;
  this.showCompileStuff = false;
  this.canDoReports = true;

  this.doReports = function(studentList) {
    self.showStudent = false;
    var userId = self.user._id;
    var user = self.user;
    var sent = {
      studentList: studentList,
      user: user
    }
    if(self.user.dateOfSubscriptionEnd){
    classService.compileReports(user, sent).then(function(response, err) {
      if (response.data == "notAllowed") {
        self.canDoReports = false;
        self.showReports = false;
      } else {
        self.canDoReports = true;
        self.reports = response.data;
        self.showReports = true;
      }
    })
}

  };




  this.editStudent = function(student) {
    self.showStudent = true;
    student.classId = self.studentList._id;
    student.className = self.studentList.className;
    self.currentStudent = student;
    self.showReports = false;
    this.showCompileStuff = true;
  };

  this.deleteStudent = function(studentClassId, studentId) {
    var userId = self.user._id;
    classService.deleteStudent(userId, studentClassId, studentId).then(function(response, err) {

    })

    for (var i = 0; i < self.studentList.students.length; i++) {
      if (self.studentList.students[i]._id == studentId) {
        self.studentList.students.splice(i, 1);

      }
    }
    self.classInfo = self.studentList;
    if (self.studentList.students.length == 0) {
      self.showCompileStuff = false;
    }
    self.showReports = false;
    self.showStudent = false;

  };

  $scope.$watch('is.user', function(newValue, oldValue) {

    if (!self.user.dateOfSubscriptionEnd) {
      self.canDoReports = false;
    }
    if (self.user.dateOfSubscriptionEnd) {
      var getDateOfToday = function() {
        var endDate = function() {
          return new Date();
        }();
        return endDate;
      }();

      var todaysDate = getDateOfToday;
      var dayOfEnd = new Date(self.user.dateOfSubscriptionEnd)

      todaysDate = todaysDate.getTime()
      dayOfEnd = dayOfEnd.getTime()

      if (todaysDate > dayOfEnd) {
        self.canDoReports = false;
      }


    }


  });

  $scope.$watch('is.classInfo', function(newValue, oldValue) {
    self.studentList = newValue;
    this.showCompileStuff = false;
  });


  $scope.$watch('is.studentList.students', function(newValue, oldValue) {});

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
    var classId = self.studentList._id;
    var newKid = newStudent;
    self.newStudent = {}
    newKid.classId = classId;
    newKid.className = className;
    var userId = self.user._id;
    classService.newStudentToAdd(userId, newKid, classId).then(function(response, err) {
      newKid = response.data.students[(response.data.students.length - 1)];
      self.studentList.students.push(newKid);
      self.classInfo = self.studentList;

    })

    this.addingStudent = false;

  }

})
