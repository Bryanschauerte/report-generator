angular.module('reportGenerator').directive('report', function(){

  return {

    templateUrl:"./features/report/report.html",
    attribute: "E",
    controller: "reportCtrl",
    controllerAs: "is",
    bindToController: true,

    scope: {
      classInfo: '=',
      showStudent: "=",
      showReports: "=",
      reports: "=",
      user: "="
    }
  }

})
