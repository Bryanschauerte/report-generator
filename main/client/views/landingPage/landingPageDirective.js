angular.module("reportGenerator").directive("landingPage", () =>{

  return {
    templateUrl:'./views/landingPage/landingPageTemplate.html',
    attribute: "E",
    controller: "landingPageCtrl",
    controllerAs: "is",
    bindToController: true,
    scope: {

    }
  };
});
