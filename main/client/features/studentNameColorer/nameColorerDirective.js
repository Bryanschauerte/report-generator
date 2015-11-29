angular.module('reportGenerator').directive('nameColorer', function(){

  return {

    templateUrl:"./features/studentNameColorer/nameColorer.html",
    attribute: "EA",
    controller: "nameColorerCtrl",
    controllerAs: "is",
    bindToController: true,

    scope: {
      student: '='
    },
    link( scope, elem, attrs ) {
      if (scope.student.edited) {
        elem.css('color', 'green');
      }
      elem.css('color', 'black');
    }
  }

})
