angular.module("reportGenerator").directive("myClasses", () =>{
  return {
    templateUrl: "./views/myClasses/myClassesTemplate.html",
    attribute: "E",
    controller: "myClassesCtrl",
    controllerAs: "is",
    bindToController: true,
    scope: {
      
    }
  }

})
