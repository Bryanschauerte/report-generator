'use strict';

var _StudentGroup = require('../models/StudentGroup');

var _StudentGroup2 = _interopRequireDefault(_StudentGroup);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  //
  //
  // addGroup(req, res) {
  //     new StudentGroup(req.body.className).save((err, group) => {
  //       if (err) {
  //         return res.status(500).send(err);
  //       }
  //       res.send(group);
  //     });
  //
  //
  //   },
  //
  //   addStudent(req, res) {
  //     StudentGroup.findOne({
  //       "className": req.body.newStudent.className
  //     }, (err, group) => {
  //       if (err) {
  //         return res.status(500).send(err);
  //       }
  //       group.students.push(req.body.newStudent);
  //       group.save((err, updatedGroup) => {
  //         if (err) {
  //           return res.status(500).send(err);
  //         }
  //
  //         res.send(updatedGroup);
  //
  //       });
  //     });
  //   },
  //
  //   removeStudent(req, res) {
  //     StudentGroup.findById(req.params.groupId, (err, group) => {
  //       if (err) {
  //         return res.status(500).send(err);
  //       }
  //
  //       group.students.pull({
  //         _id: req.params.studentId
  //       })
  //       group.save((err, updatedGroup) => {
  //         if (err) {
  //           return res.status(500).send(err);
  //         }
  //
  //         res.send(updatedGroup);
  //
  //       });
  //
  //     });
  //   },
  //
  //   deleteGroup(req, res) {
  //     StudentGroup.findByIdAndRemove(req.params.groupId, (err, group) => {
  //       if (err) {
  //         return res.status(500).send(err);
  //       }
  //
  //       res.send(group);
  //
  //     });
  //   },
  //
  //
  //   updateGrades(req, res) {
  //
  //     StudentGroup.findById(req.body.classId, (err, group) => {
  //       if (err) {
  //         return res.status(500).send(err);
  //       }
  //       group.students.id(req.body._id).behavior = req.body.behavior;
  //       group.students.id(req.body._id).name = req.body.name;
  //       group.students.id(req.body._id).gender = req.body.gender;
  //       group.students.id(req.body._id).readingAbility = req.body.readingAbility;
  //       group.students.id(req.body._id).vocabularyTests = req.body.vocabularyTests;
  //       group.students.id(req.body._id).speakingAbility = req.body.speakingAbility;
  //
  //       group.students.id(req.body._id).readingComprehension = req.body.readingComprehension;
  //       group.students.id(req.body._id).participation = req.body.participation;
  //       group.students.id(req.body._id).speakingAbilityVocabulary = req.body.speakingAbilityVocabulary;
  //       group.students.id(req.body._id).pronuncation = req.body.pronuncation;
  //
  //       group.save((err, updatedStudent) => {
  //         if (err) {
  //           return res.status(500).send(err);
  //         }
  //
  //         res.send(updatedStudent);
  //       });
  //
  //     });
  //   }

};