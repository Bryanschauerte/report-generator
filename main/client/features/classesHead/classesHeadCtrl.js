angular.module('reportGenerator').controller('classesHeadCtrl', function(classService, $element, $scope) {
  var self = this;
  this.classStore = [];

  function checkClasses() {
    if (self.classes) {
      for (var i = 0; i < self.classes.lenght; i++) {
        self.classStore.push(self.classes[i]);
      }
      self.classes = self.classStore;
    }
  }

  this.addingAClass = false;

  $scope.$watch('is.classes', function(newValue, oldValue) {
    checkClasses();
  });

  $scope.$watch('is.showStudent', function(newValue, oldValue) {

  });

  this.startAdding = function() {
    self.showReports = false;
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
      classService.newClassToAdd(classInfo).then(function(response, err){
        self.classInfo = response.data;
        self.classStore.push(response.data);
      });

      self.addingAClass = !self.addingAClass;
}
else if(!newName){
  alert("Only new class names allowed")
}
  self.selectClass(self.classInfo);
  };

  this.selectClass = function(classPart) {
    self.classInfo = classPart;
    self.showStudent = false;
    self.showReports = false;

  }
this.cancelAddingClass = function(){
    self.addingAClass = !self.addingAClass;
}

})
