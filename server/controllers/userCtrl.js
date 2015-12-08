'use strict';

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _StudentGroup = require('../models/StudentGroup');

var _StudentGroup2 = _interopRequireDefault(_StudentGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  // called getUserClasses on client side

  getUser: function getUser(req, res) {
    _User2.default.findById(req.params.userId).populate('studentGroups').exec(function (err, user) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },
  addGroup: function addGroup(req, res) {

    new _StudentGroup2.default(req.body.className).save(function (err, group) {
      if (err) {
        return res.status(500).send(err);
      }
      _User2.default.findById(req.params.userId, function (err, user) {
        if (err) {
          return res.status(500).send(err);
        }
        user.studentGroups.push(group._id);
        user.save(function (err, updatedUser) {
          if (err) {
            return res.status(500).send(err);
          }
          console.log(group);
          res.send(group);
        });
      });
    });
  },
  removeGroup: function removeGroup(req, res) {
    _StudentGroup2.default.findByIdAndRemove(req.params.groupId, function (err, group) {
      if (err) {
        return res.status(500).send(err);
      }
    });
    _User2.default.findById(req.params.userId, function (err, user) {
      if (err) {
        return res.status(500).send(err);
      }
      user.studentGroups.pull(req.params.groupId);
      user.save(function (err, updatedUser) {
        if (err) {
          return res.status(500).send(err);
        }
        res.send(updatedUser);
      });
    });
  },
  addStudent: function addStudent(req, res) {

    _StudentGroup2.default.findById(req.params.classId, function (err, group) {
      if (err) {
        return res.status(500).send(err);
      }
      group.students.push(req.body.newStudent);
      group.save(function (err, updatedGroup) {
        if (err) {
          return res.status(500).send(err);
        }
        res.send(updatedGroup);
      });
    });
  },
  removeStudent: function removeStudent(req, res) {
    _StudentGroup2.default.findById(req.params.groupId, function (err, group) {
      if (err) {
        return res.status(500).send(err);
      }
      group.students.pull({
        _id: req.params.studentId
      });
      group.save(function (err, updatedGroup) {
        if (err) {
          return res.status(500).send(err);
        }
        res.send(updatedGroup);
      });
    });
  },
  updateGrades: function updateGrades(req, res) {

    _StudentGroup2.default.findById(req.body.classId, function (err, group) {
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

      group.save(function (err, updatedStudent) {
        if (err) {
          return res.status(500).send(err);
        }
        res.send(updatedStudent);
      });
    });
  }
};