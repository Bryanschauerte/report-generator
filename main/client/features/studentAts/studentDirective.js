angular.module('reportGenerator').directive('student', ()=>{

  return {

    templateUrl:"./features/studentAts/student.html",
    attribute: "E",
    controller: "studentCtrl",
    controllerAs: "is",
    bindToController: true,
    scope: {
      student: '='
    }
  }

})
