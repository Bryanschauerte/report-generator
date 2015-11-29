angular.module('reportGenerator').controller('classesHeadCtrl', function(classService, $element, $scope) {
  var self = this;
  this.classStore = [];

  function checkClasses() {
    if (self.classes) {
      for (var i = 0; i < self.classes.lenght; i++) {
        self.classStore.push(self.classes[i]);
      }
    }
  }

  this.addingAClass = false;

  $scope.$watch('is.classes', function(newValue, oldValue) {
    checkClasses();
  });

  $scope.$watch('is.showStudent', function(newValue, oldValue) {
    console.log('change');
  });
  this.startAdding = function() {
    console.log(self.showStudent, "should showStudent")
    self.showStudent = false;

    self.newClassName = '';
    self.addingAClass = !self.addingAClass;
  }

  this.doneAdding = function(className) {
    var newName = true;
    for(var i = 0; i < self.classStore.length; i++){
      if(self.classStore[i].className == className){
        newName = false;
    }
  }
    if(newName){
      var classInfo = {className: className, students:[]}
      className ='';
      classService.newClassToAdd(classInfo);
      self.classStore.push(classInfo);
      self.addingAClass = !self.addingAClass;
}
else if(!newName){
  alert("Only new class names allowed")
}
  self.selectClass(classInfo);
  };

  this.selectClass = function(classPart) {
    self.classInfo = classPart;
  }


})
