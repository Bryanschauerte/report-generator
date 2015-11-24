'use strict';

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	getUser: function getUser(req, res) {
		_User2.default.findById(req.params.userId).populate('studentGroups').exec(function (err, user) {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(user);
		});
	},
	addGroup: function addGroup(req, res) {
		_User2.default.findById(req.params.userId, function (err, user) {
			if (err) {
				return res.status(500).send(err);
			}

			user.studentGroups.push(req.body).save(function (err, updatedUser) {
				if (err) {
					return res.status(500).send(err);
				}

				res.send(updatedUser);
			});
		});
	},
	removeGroup: function removeGroup(req, res) {
		_User2.default.findById(req.params.userId, function (err, user) {
			if (err) {
				return res.status(500).send(err);
			}

			user.studentGroups.pull(req.params.groupId).save(function (err, updatedUser) {
				if (err) {
					return res.status(500).send(err);
				}

				res.send(updatedUser);
			});
		});
	}
};