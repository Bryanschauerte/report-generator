angular.module("reportGenerator").service("classService", function($http){


this.newClassToAdd = function(newClassName){
  return $http({
    method: "PUT",
    url: "/api/newClass",
    data: {
      className: newClassName
    }
  })
},
this.newStudentToAdd = function(newStudent){
  return $http({
    method: "PUT",
    url:"/api/newStudent",
    data: {
      newStudent: newStudent
    }
  })
},
this.getClassInfo = function(){
  return $http({
    method: "GET",
    url: "/api/get",
    data: ""
  })

},
this.changeAttribute = function(student){
  return $http({
    method: "POST",
    url: "/api/changeStudentAtt",
    data: {
      student: student
    }
  })
}

})
