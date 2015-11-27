angular.module('reportGenerator').controller('studentCtrl', function(){


  $(document).ready(function() {
    $('select').material_select();
  });

  // this.student = {
  //   className: null,
  //   name: null,
  //   readingAbility: null,
  //   vocabularyTests: null,
  //   speakingAbility: null,
  //   behavior: null,
  //   readingComprehension: null,
  //   speakingAbilityVocabulary: null,
  //   participation: null,
  //   pronuncation: null
  //
  //
  //
  // }
console.log('controller firing')
  //
this.saveStudent= function(student) {
  // this.student = student;
    console.log(student);
  };

// saveStudent();

})
