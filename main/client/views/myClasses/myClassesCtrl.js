angular.module("reportGenerator").controller('myClassesCtrl', () =>{
var self = this;


  function getClasses(){
    classService.getClasses.then(function(response, err){
      console.log(response, "response from server")
      self.classes = response;
    })
  }


})
