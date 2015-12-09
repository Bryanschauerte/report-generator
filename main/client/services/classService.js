angular.module("reportGenerator").service("classService", function($http){

this.getUser = function(){
  return $http({
    method: "GET",
    url:"/auth",
  })
},
//new  returns after a populate
this.getUserClasses = function(userId){
  return $http({
    method: "GET",
    url:'/api/user/' + userId,
  })
},

this.newClassToAdd = function(userId, newClassName){
  return $http({
    method: "PUT",
    url: '/api/user/add-group/' + userId,
    data: {
      className: newClassName
    }
  });
},

this.removeClass = function(userId, groupId){
  return $http({
    method: "DELETE",
    url: "/api/"+ userId + "/groups/" + groupId
  });
},

this.newStudentToAdd = function(userId, newStudent, classId){
  return $http({
    method: "PUT",
    url:"/api/" + userId + "/groups/" +classId+"/newStudent",
    data: {
      newStudent: newStudent
    }
  });
},
this.getClassInfo = function(userId){
  return $http({
    method: "GET",
    url: "/api/" + userId + "/get"
  });

},

this.deleteStudent = function(userId, classId, studentId){
  return $http({
    method:"DELETE",
    url:"/api/" + userId + "/groups/remove-student/" + classId + "/" + studentId
  });
},
this.changeAttribute = function(userId, student){

  return $http({
    method: "PUT",
    url: "/api/" + userId + "/groups/update-grade/",
    data: student
  });
},

this.compileReports = function(user, sent){

  return $http({
    method: "PUT",
    url: "/api/" + user._id + "/group/makeClassReports",
    data: sent
  })
}

});
