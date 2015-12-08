angular.module('reportGenerator').directive('classHead', function(){

  return {

    templateUrl:"./features/classesHead/classesHead.html",
    attribute: "E",
    controller: "classesHeadCtrl",
    controllerAs: "is",
    bindToController: true,

    scope: {
      classes: '=',
      showStudent: "=",
      showReports: "=",
      user: "="
    }
  }

})
