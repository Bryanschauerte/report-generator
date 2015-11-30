angular.module('reportGenerator').directive('student', function(){

  return {

    templateUrl:"./features/studentAts/student.html",
    attribute: "E",
    controller: "studentCtrl",
    controllerAs: "is",
    bindToController: true,

    scope: {
      studentInfo: '=',
      showStudent: "=",
      showReports: "=",
      classInfo: "="
    }
  }

})
