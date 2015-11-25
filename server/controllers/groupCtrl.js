'use strict';

var _StudentGroup = require('../models/StudentGroup');

var _StudentGroup2 = _interopRequireDefault(_StudentGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	addGroup: function addGroup(req, res) {
		new _StudentGroup2.default(req.body).save(function (err, group) {
			if (err) {
				return res.status(500).send(err);
			}

			res.send(group);
		});
	},
	addStudent: function addStudent(req, res) {
		_StudentGroup2.default.findById(req.params.groupId, function (err, group) {
			if (err) {
				return res.status(500).send(err);
			}

			group.students.push(req.body).save(function (err, updatedGroup) {
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
	updateGrades: function updateGrades(req, res) {
		_StudentGroup2.default.findById(req.params.groupId, function (err, group) {
			if (err) {
				return res.status(500).send(err);
			}

			group.students.id(req.params.studentId).grades.update(req.body).save(function (err, updatedGroup) {
				if (err) {
					return res.status(500).send(err);
				}

				res.send(updatedGroup);
			});
		});
	}
};