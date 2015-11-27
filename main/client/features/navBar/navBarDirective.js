angular.module("reportGenerator").directive("navbar", () => {

return {
  templateUrl: "./features/navBar/navBarTemplate.html",
  attribute: "E",
  controller: "navBarCtrl",
  controllerAs: "is",
  bindToController: true,
  scope: {
  }

}

})
