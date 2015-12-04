angular.module("reportGenerator").directive("myAccount", () =>{

  return {
    templateUrl:'./views/myAccount/myAccountTemplate.html',
    attribute: "E",
    controller: "myAccountCtrl",
    controllerAs: "is",
    bindToController: true,
    scope: {
    }
  };
});
