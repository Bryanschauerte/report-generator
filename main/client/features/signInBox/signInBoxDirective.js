angular.module("reportGenerator").directive("signIn", () => {

return {
  templateUrl: "./features/signInBox/signInBox.html",
  attribute: "E",
  controller: "signInBoxCtrl",
  controllerAs: "is",
  bindToController: true,
  scope: {
    user: "="
  }

}

})
