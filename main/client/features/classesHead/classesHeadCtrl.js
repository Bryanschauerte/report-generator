angular.module('reportGenerator').controller('classesHeadCtrl', function(classService, $element, $scope){
var self = this;
this.classStore = self.classes;
this.addingAClass = false;

$scope.$watch('is.classes', function(newValue, oldValue) {
  self.classStore = newValue;
});

this.startAdding = function(){
  self.addingAClass = !self.addingAClass;
}
this.doneAdding = function(className){
  classService.newClassToAdd(className);
  // need to get new
  self.addingAClass = !self.addingAClass;
};
this.selectClass = function(classPart){
self.classInfo = classPart;
}


})
