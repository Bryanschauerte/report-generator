angular.module("reportGenerator").service("classService", function($http){


this.newClassToAdd = function(newClassName){
  return $http({
    method: "POST",
    url: "/api/newClass",
    data: {
      className: newClassName
    }
  });
},

this.removeClass = function(groupId){
  return $http({
    method: "DELETE",
    url: "/api/groups/" + groupId
  });
},
this.newStudentToAdd = function(newStudent){
  return $http({
    method: "PUT",
    url:"/api/groups/newStudent",
    data: {
      newStudent: newStudent
    }
  });
},
this.getClassInfo = function(){
  return $http({
    method: "GET",
    url: "/api/get"
  });

},

this.deleteStudent = function(classId, studentId){
  return $http({
    method:"DELETE",
    url:"/api/groups/remove-student/" + classId + "/" + studentId
  });
},
this.changeAttribute = function(student){

  return $http({
    method: "PUT",
    url: "/api/groups/update-grade/",
    data: student
  });
},

this.compileReports = function(classObject){

  return $http({
    method: "PUT",
    url: "/api/group/makeClassReports",
    data: classObject
  })
}

});
