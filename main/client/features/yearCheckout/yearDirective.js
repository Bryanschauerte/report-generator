angular.module("reportGenerator").directive("yearPay", function(){

return {
  templateUrl: "./features/yearCheckout/yearPay.html",
  attribute: "E",
  controller: "yearPayCtrl",
  controllerAs: "is",
  bindToController: true,
  scope: {
    
    user: "="
  }

}

})
