module.exports = {



doReports(req, res){

    var badBehavior = {
      1: "He needs to focus more in class and follow directions better.",
      2: "He needs to do a better job of following directions and being respectful of others.",
      3: "He needs to work on his behavior in class.",
      4:"He needs to put more effort into focusing and listening to directions.",
      5:"He does a poor job of listening to directions and behaving."
    };

    var fairBehavior = {
      1: "He sometime gets distracted in class, but does a great job of returning to focus.",
      2: "He does a fair job of behaving in class and listening to directions.",
      3: "He does a fair job of listening to directions and behaving in class.",
      4:"He usually does a fair job of listening to directions and behaving.",
      5:"He tends to do a pretty good job of listening to directions and behaving with others."

    };

    var excellentBehavior = {
      1: "He does a great job of working with others in class.",
      2: "He works very well with the other students and listening to directions.",
      3: "He does a great job of listening to directions and behaves well.",
      4:"He always works well with others and does a great job of listening to directions.",
      5:"He has great behavior in class and does well listening to the directions of the teacher."

    };

    var badPronunciation = {
      1: "He needs to work on his pronunciation.",
      2: "He needs to practice his pronunciation more.",
      3: "He needs to do a better job of practicing proper pronunciation.",
      4:"He needs to put more effort into his pronunciation of the vocabulary.",
      5:"He needs to work on this pronunciation of the vocabulary."
    };

    var fairPronunciation = {
      1: "He has very good pronunciation when speaking.",
      2: "He does a good job with his pronunciation.",
      3: "He does very well with his pronunciation.",
      4:"He does a good job with the pronunciation of the vocabulary.",
      5:"He does a good job with his pronunciation of the material."

    };

    var excellentPronunciation = {
      1: "He has super pronunciation when speaking during class.",
      2: "He has excellent pronunciation while speaking.",
      3: "He does an excellent job with his pronunciation.",
      4:"He has excellent pronunciation during class activities.",
      5:"He has super pronunciation when participating in class."

    };

    var badReadingAbility = {
      1: "His reading has gotten a bit better, but still needs extra work.",
      2: "His reading needs to be worked on to improve.",
      3: "His reading needs extra work to get better.",
      4: "His reading needs to be worked on to improve.",
      5: "His reading has gotten a bit better, but still needs extra work."


    }

    var fairReadingAbility = {
      1: "His reading has room for improvement but has been good lately.",
      2: "His reading skills are improving but more effort is needed.",
      3: "His reading skills are getting better but he needs to work on it a bit more.",
      4: "His reading has been improving, but he still needs to practice.",
      5: "His reading ability is getting better as he practices."


    }

    var excellentReadingAbility = {
      1: "His reading abilities are excellent.",
      2: "His reading has gotten much better and he does a great job sounding out new words.",
      3: "His reading ability has improved greatly and he uses it well.",
      4: "His reading is getting much better, he does well sounding out words he does not know.",
      5: "His reading ability is getting much better and has been improving lately."

    }

    var badVerbalComprehension = {
      1: "His verbal comprehension stills need improvement.",
      2: "He needs to put extra focus on his ability to understand verbal questions.",
      3: "He needs more practice in understanding verbal directions.",
      4: "He needs to put extra focus on his ability to understand verbal questions.",
      5: "His verbal comprehension stills extra effort to improvement."

    };

    var fairVerbalComprehension = {
      1: "He does a pretty good job of understanding directions and verbal activities.",
      2: "He has been doing a better job lately of understanding verbal English.",
      3: "He has been working hard to understand verbal dialogue.",
      4: "He has been doing a better job of understanding verbal English.",
      5: "He does a fair job of understanding verbal dialogue."

    };

    var excellentVerbalComprehension=  {
      1: "He has an excellent ability to understand verbal dialogue.",
      2: "He does excellent understanding verbal directions and questions.",
      3: "He has been doing an excellent job of answering verbal comprehension questions.",
      4: "He does an excellent job of answering verbal comprehension questions.",
      5: "He has an excellent grasp on verbal comprehension."

    };



    var badReadingComprehension= {
      1: "He doesnt do a very good job of answering comprehension questions regarding the reading material and needs to put in more effort.",
      2: "He has poor reading comprehension and needs to practice more.",
      3: "He needs to put more effort into practicing his reading comprehension.",
      4: "He needs to put extra effort into his reading comprehension ability.",
      5: "He really needs to work on his reading ability, maybe extra time reading aloud."
    };

    var fairReadingComprehension ={
      1: "He has been doing a much better job of understanding reading material.",
      2: "His reading comprehension has been improving, but still needs extra practice.",
      3: "His reading comprehension level is getting better and improving steadily.",
      4: "His reading comprehension is getting better, but still needs extra work to improve.",
      5: "His reading compression is okay but still needs extra practice to improve."

    };

    var excellentReadingComprehension ={
      1: "Recently, his reading comprehension has been excellent and he has been doing a great job answering comprehension questions.",
      2: "His reading comprehension level has gotten much better!",
      3: "His reading comprehension has been increasing and he does a great job of answering questions.",
      4: "His reading comprehension skills have been excellent lately and he does well answering questions.",
      5: "His reading comprehension has improved and he does an excellent job understanding written English."
    };


    var badParticipation = {
      1: "During class, he needs put more effort into participating in classroom activities.",
      2: "During class, he needs to be more active during class room activities.",
      3: "During class, he sometimes gets distracted and needs extra encouragement.",
      4: "He tends to get a bit distracted in class, but is quick to correct this when encouraged. ",
      5: "During class participation, he is a little quiet when speaking but this should improve as he gains more confidence in himself."
    };

    var fairParticipation = {
      1: "During class, he does a fair amount of participation during class activities.",
      2: "During class participation, he  does a good job during activities and uses its time to practice the lessons’ material.",
      3: "During class participation, he does a great job of focusing and is always ready to answer questions.",
      4: "During class participation, he is always willing and is very quick to answer questions.",
      5: "During class participation, he does a great job of focusing his positive energy and does well participating."
    };

    var excellentParticipation = {
      1: "During class participation, he does a great job participating and tries very hard. ",
      2: "During class participation, he does a great job and participates as often as he can.",
      3: "During class participation, he is very good at following directions and does a super job of participating.",
      4: "During class participation, he is very energetic, loves to participate but is also focused.",
      5: "During class participation, he works very enthusiastically and still does a great job of focusing."
    };



    var badSpeakingAbility = {
      1: "He needs to put much more effort into his verbal sentences.",
      2: "He needs to work harder to make better sentences when speaking.",
      3: "He has a hard time expressing his thoughts in English.",
      4: "He needs to work on learning his vocabulary and using it while speaking.",
      5: "He shoud put more effort in using what he has learned to make sentences in English."
    };


    var fairSpeakingAbility = {
      1: "He does a pretty good job of expressing his thoughts in English.",
      2: "He has been getting much better at speaking in class.",
      3: "He has been improving his speaking skills.",
      4: "His speaking is getting better, but still needs to work on using more voabulary words.",
      5: "He does a fair job of using what he has learned to make sentences in English."
    };

    var excellentSpeakingAbility = {
      1: "He does a wonderful job of making sentences to answer questions.",
      2: "He has been doing a great job of speaking in class!",
      3: "He always does very well expressing what he wants to say.",
      4: "He has been doing very well using the vocabulary he has learned while speaking.",
      5: "He has a wonderful speaking ability and is really good at choosing the correct forms of his vocabulary."
    };




    var badVocabularyTests = {
      1: "He needs to put more effort into learning his vocabulary words.",
      2: "He has not been doing very well during vocabulary tests.",
      3: "He has been getting poor scores on his vocabulary tests.",
      4: "His vocabulary test scores have not been good lately.",
      5: "He does poorly on his vocabulary tests."
    };

    var fairVocabularyTests = {
      1: "His vocabulary test scores have been improving.",
      2: "He has been improving his vocabulary test scores lately.",
      3: "His vocabulary test scores have gotten better.",
      4: "He has been doing better on his vocabulary tests.",
      5: "His vocabulary test scores have shown improvement."
    };

    var excellentVocabularyTests = {
      1: "He always does a great job on his vocabulary tests.",
      2: "He constantly does excellent on his vocabulary tests.",
      3: "He has been doing a wonderful job on his vocabulary tests.",
      4: "He has excellent vocabulary test scores.",
      5: "He has been excelling on his vocabulary tests."
    };

   function getRandomNumber(){
     return Math.floor(Math.random() * 5) + 1;
   };

  function getBehavior(level){
    var randomNum = getRandomNumber();
    var behaviorSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        behaviorSentence += excellentBehavior[randomNum];
        break;

        case ('Fair'):
        behaviorSentence += fairBehavior[randomNum];
        break;

        case ('Bad'):
        behaviorSentence += badBehavior[randomNum];
        break;
      }

    }
    return behaviorSentence;
  }

  function getPronunciation(level){
    var randomNum = getRandomNumber();
    var pronunciationSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        pronunciationSentence += excellentPronunciation[randomNum];
        break;

        case ('Fair'):
        pronunciationSentence += fairPronunciation[randomNum];
        break;

        case ('Bad'):
        pronunciationSentence += badPronunciation[randomNum];
        break;
      }

    }
    return pronunciationSentence;
  };




  function getReadingAbility(level){
    var randomNum = getRandomNumber();
    var readingSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        readingSentence += excellentReadingAbility[randomNum];
        break;

        case ('Fair'):
        readingSentence += fairReadingAbility[randomNum];
        break;

        case ('Bad'):
        readingSentence += badReadingAbility[randomNum];
        break;
      }

    }
    return readingSentence;
  };




  function getVerbalComprehension(level){
    var randomNum = getRandomNumber();
    var verbalComprehensionSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        verbalComprehensionSentence += excellentVerbalComprehension[randomNum];
        break;

        case ('Fair'):
        verbalComprehensionSentence += fairVerbalComprehension[randomNum];
        break;

        case ('Bad'):
        verbalComprehensionSentence += badVerbalComprehension[randomNum];
        break;
      }

    }
    return verbalComprehensionSentence;
  };




  function getReadingComprehension(level){
    var randomNum = getRandomNumber();
    var readingComprehensionSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        readingComprehensionSentence += excellentReadingComprehension[randomNum];
        break;

        case ('Fair'):
        readingComprehensionSentence += fairReadingComprehension[randomNum];
        break;

        case ('Bad'):
        readingComprehensionSentence += badReadingComprehension[randomNum];
        break;
      }

    }
    return readingComprehensionSentence;
  };





  function getParticipation(level){
    var randomNum = getRandomNumber();
    var participationSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        participationSentence += excellentParticipation[randomNum];
        break;

        case ('Fair'):
        participationSentence += fairParticipation[randomNum];
        break;

        case ('Bad'):
        participationSentence += badParticipation[randomNum];
        break;
      }

    }
    return participationSentence;
  };




  function getSpeakingAbility(level){
    var randomNum = getRandomNumber();
    var speakingAbilitySentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        speakingAbilitySentence += excellentSpeakingAbility[randomNum];
        break;

        case ('Fair'):
        speakingAbilitySentence += fairSpeakingAbility[randomNum];
        break;

        case ('Bad'):
        speakingAbilitySentence += badSpeakingAbility[randomNum];
        break;
      }

    }
    return speakingAbilitySentence;
  };




  function getVocabularyTest(level){
    var randomNum = getRandomNumber();
    var vocabularyTestSentence = " ";
    if(level != "N/A"){
      switch(level){
        case ('Excellent'):
        vocabularyTestSentence += excellentVocabularyTests[randomNum];
        break;

        case ('Fair'):
        vocabularyTestSentence += fairVocabularyTests[randomNum];
        break;

        case ('Bad'):
        vocabularyTestSentence += badVocabularyTests[randomNum];
        break;


      }

    }
    return vocabularyTestSentence;
  };



  function putTogetherReport(){

    var students = req.body.students;
    var combine = "";
    var classReports= {};
    classReports.className = req.body.className;
    classReports.students = [];
console.log(students, "students in server")
for(var i = 0; i < students.length; i++){

  var combine = "";
  var report = {name: students[i], report: students[i].name + ": "};

    for(var crit in students[i]){

      switch(crit){
        case ('readingAbility'):
        report.report += getReadingAbility(students[i][crit]);
        break;

        case ('vocabularyTests'):
        report.report += getVocabularyTest(students[i][crit]);
        break;

        case ('speakingAbility'):
        report.report += getSpeakingAbility(students[i][crit]);
        break;

        case ('readingComprehension'):
        report.report += getReadingComprehension(students[i][crit]);
        break;

        case ('participation'):
        report.report += getParticipation(students[i][crit]);
        break;

        case ('verbalComprehension'):
        report.report += getVerbalComprehension(students[i][crit]);
        break;

        case ('behavior'):
        report.report += getBehavior(students[i][crit]);
        break;


        case ('pronunciation'):
        report.report += getPronunciation(students[i][crit]);
        break;

        // case ('name'):
        // report.report += student[crit] + ": ";
        // break;

    }

}

  if(students[i].gender === "female"){

  var herText = report.report.replace(/\bhis?\b/g, "her");

  var herShe = herText.replace(/\bHe?\b/g, "She");

  var bigHer = herShe.replace(/\bHis?\b/g, "Her");

  var littleShe = bigHer.replace(/\bhe?\b/g, "she");

  report.report = littleShe;
  }


  //make it a bit more personal sounding
  if(students[i] === "female"){

    var herShe = report.report.replace(/\bShe?\b/, students[i].name);

    var herChange = herShe.replace(/\bHer?\b/g, students[i].name + "'s");

    report.report = herChange;
  }


  if(students[i].gender === "male"){

    var himChange = report.report.replace(/\bHe?\b/, students[i].name);

    var lastMale = himChange.replace(/\bHis?\b/g, students[i].name + "'s");

    report.report = lastMale;
  }


classReports.students.push(report)


  }
  console.log(classReports, "class reports ready to send")
  res.send(classReports);
}
putTogetherReport()

}
}
