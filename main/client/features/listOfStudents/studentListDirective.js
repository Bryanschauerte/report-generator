angular.module('reportGenerator').directive('studentList', function(){

  return {

    templateUrl:"./features/listOfStudents/studentList.html",
    attribute: "E",
    controller: "studentListCtrl",
    controllerAs: "is",
    bindToController: true,

    scope: {
      studentInfo: '=',
      classInfo: '=',
      showStudent: "=",
      showReports: "=",
      reports: '=',
      user: "="
    }
  }

})
