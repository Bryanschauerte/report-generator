import User from '../models/User';
import StudentGroup from '../models/StudentGroup';

module.exports = {


  // called getUserClasses on client side
  getUser(req, res) {
      User.findById(req.params.userId)
        .populate('studentGroups')
        .exec((err, user) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.send(user);
        });
    },

    addGroup(req, res) {

      new StudentGroup(req.body.className).save((err, group) => {
        if (err) {
          return res.status(500).send(err);
        }
        User.findById(req.params.userId, (err, user) => {
          if (err) {
            return res.status(500).send(err);
          }
          user.studentGroups.push(group._id);
          user.save((err, updatedUser) => {
            if (err) {
              return res.status(500).send(err);
            }
						console.log(group)
            res.send(group);

          });
        });
      });

    },

    removeGroup(req, res) {
      StudentGroup.findByIdAndRemove(req.params.groupId, (err, group) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
      User.findById(req.params.userId, (err, user) => {
        if (err) {
          return res.status(500).send(err);
        }
        user.studentGroups.pull(req.params.groupId);
        user.save((err, updatedUser) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.send(updatedUser);
        });
      });
    },

    addStudent(req, res) {

      StudentGroup.findById(req.params.classId, (err, group) => {
        if (err) {
          return res.status(500).send(err);
        }
        group.students.push(req.body.newStudent);
        group.save((err, updatedGroup) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.send(updatedGroup);
        });
      })
    },


    removeStudent(req, res) {
      StudentGroup.findById(req.params.groupId, (err, group) => {
        if (err) {
          return res.status(500).send(err);
        }
        group.students.pull({
          _id: req.params.studentId
        })
        group.save((err, updatedGroup) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.send(updatedGroup);
        });
      });
    },


    updateGrades(req, res) {

      StudentGroup.findById(req.body.classId, (err, group) => {
        if (err) {
          return res.status(500).send(err);
        }
        group.students.id(req.body._id).behavior = req.body.behavior;
        group.students.id(req.body._id).name = req.body.name;
        group.students.id(req.body._id).gender = req.body.gender;
        group.students.id(req.body._id).readingAbility = req.body.readingAbility;
        group.students.id(req.body._id).vocabularyTests = req.body.vocabularyTests;
        group.students.id(req.body._id).speakingAbility = req.body.speakingAbility;
        group.students.id(req.body._id).readingComprehension = req.body.readingComprehension;
        group.students.id(req.body._id).participation = req.body.participation;
        group.students.id(req.body._id).speakingAbilityVocabulary = req.body.speakingAbilityVocabulary;
        group.students.id(req.body._id).pronuncation = req.body.pronuncation;

        group.save((err, updatedStudent) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.send(updatedStudent);
        });
      });
    }




};
