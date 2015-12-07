angular.module("reportGenerator").directive("oneMonth", function() {

return {
  templateUrl: "./features/oneMonthcheckoutForm/oneMonth.html",
  attribute: "E",
  controller: "oneMonthCtrl",
  controllerAs: "is",
  bindToController: true,
  scope: {
  }

}

})
