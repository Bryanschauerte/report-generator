angular.module("reportGenerator").service("classService", function($http){


this.newClassToAdd = function(newClassName){
  return $http({
    method: "POST",
    url: "/api/newClass",
    data: {
      className: newClassName
    }
  })
},
this.newStudentToAdd = function(newStudent){
  return $http({
    method: "PUT",
    url:"/api/groups/newStudent",
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
    method: "PUT",
    url: "/api/groups/update-grade/",
    data: student
  })
}

})
