
angular.module("reportGenerator").directive("landingPage", function(){


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
