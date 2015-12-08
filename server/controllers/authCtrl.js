'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	logout: function logout(req, res) {
		req.logout();
		res.redirect('/');
	},
	facebook: function facebook(req, res) {
		_passport2.default.authenticate('facebook', { scope: 'email' });
	},
	facebookCallback: function facebookCallback(req, res) {
		_passport2.default.authenticate('facebook', {
			successRedirect: '/#/myAccount',
			failureRedirect: '/'
		});
	},
	google: function google(req, res) {
		_passport2.default.authenticate('google', { scope: ['profile', 'email'] });
	},
	googleCallback: function googleCallback(req, res) {
		_passport2.default.authenticate('google', {
			successRedirect: '/#/myAccount',
			failureRedirect: '/'
		});
	},
	auth: function auth(req, res) {
		res.send(req.user);
	},
	isAuth: function isAuth(req, res, next) {
		if (req.user) {
			next();
		} else {
			res.status(403).send('not allowed');
		}
	}
};