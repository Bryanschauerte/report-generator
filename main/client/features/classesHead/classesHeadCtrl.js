angular.module('reportGenerator').controller('classesHeadCtrl', function(classService, $element, $scope) {
  var self = this;
  this.classStore = [];
  this.removingClass = false;

  this.getUser = function() {
    classService.getUser().then(function(response, err){
      self.user = response.data;
      if(self.user){
        self.getUserClasses();
      }
    })
  }
  this.getUser();


this.getUserClasses = function(){
  var userId = self.user._id
  classService.getUserClasses(userId).then(function(response, err){
    for(var i = 0; i < response.data.studentGroups.length; i++ ){
      self.classStore.push(response.data.studentGroups[i]);
    }
  })
}


  this.startRemoveClass = function() {
    self.removingClass = true;
    self.showReports = false;
    self.showStudent = false;

  }

  this.removeClass = function(part) {

    for (var i = 0; i < self.classStore.length; i++) {
      if (self.classStore[i].className == part.className) {
        self.classStore = self.classStore.splice(i, 1);
        if (i == 0) {
          self.classStore = []
        }

      }
    }
    self.classes = self.classStore;
    self.classInfo = false;
    var userId = self.user._id;

    classService.removeClass(userId, part._id).then(function(response, error) {

    })
  }

  this.endRemovingClass = function() {
    self.removingClass = false;
  }

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
    for (var i = 0; i < self.classStore.length; i++) {
      if (self.classStore[i].className == className) {
        newName = false;
      }
    }
    if (newName) {
      var classInfo = {
        className: className,
        students: []
      }
      className = '';
      var userId = self.user._id;
      classService.newClassToAdd(userId, classInfo).then(function(response, err) {
        self.classInfo = response.data;
        console.log(self.classInfo, "head ctrl")
        self.classStore.push(response.data);
      });

      self.addingAClass = !self.addingAClass;
    } else if (!newName) {
      alert("Only new class names allowed")
    }
    self.selectClass(self.classInfo);
  };

  this.selectClass = function(classPart) {
    self.classInfo = classPart;
    self.showStudent = false;
    self.showReports = false;

  }
  this.cancelAddingClass = function() {
    self.addingAClass = !self.addingAClass;
  }

})
