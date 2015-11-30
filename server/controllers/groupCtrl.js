"use strict";

var _StudentGroup = require("../models/StudentGroup");

var _StudentGroup2 = _interopRequireDefault(_StudentGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	addGroup: function addGroup(req, res) {
		new _StudentGroup2.default(req.body.className).save(function (err, group) {

			if (err) {
				return res.status(500).send(err);
			}

			res.send(group);
		});
	},
	addStudent: function addStudent(req, res) {
		_StudentGroup2.default.findOne({ "className": req.body.newStudent.className }, function (err, group) {
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

			group.students.pull(req.params.studentId).save(function (err, updatedGroup) {
				if (err) {
					return res.status(500).send(err);
				}

				res.send(updatedGroup);
			});
		});
	},
	deleteGroup: function deleteGroup(req, res) {
		_StudentGroup2.default.findByIdAndRemove(req.params.groupId, function (err, group) {
			if (err) {
				return res.status(500).send(err);
			}

			res.send(group);
		});
	},

	// var attr = {
	//   score: score,
	//   atName: atName
	// }

	updateGrades: function updateGrades(req, res) {

		console.log(req.body.behavior, "req body");

		_StudentGroup2.default.findById(req.body.classId, function (err, group) {
			if (err) {
				return res.status(500).send(err);
			}

			// group.students.id(req.body._id)
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
				console.log(updatedStudent, "updated student");
				res.send(updatedStudent);
			});

			// group.students.id(req.params.studentId).push(req.body.attr)

			// 	student.update(req.body.student)
			// 	.save(( err, updatedStudent ) => {
			// 		if (err) {
			// 			return res.status(500).send(err);
			// 		}
			// 		console.log(updatedStudent, "updater")
			// 		res.send(updatedStudent);
			// 	});
			// })
		});
	}
};