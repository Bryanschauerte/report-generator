'use strict';

var _passportGoogleOauth = require('passport-google-oauth2');

var _passportFacebook = require('passport-facebook');

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _configAuth = require('./configAuth');

var _configAuth2 = _interopRequireDefault(_configAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		_User2.default.findById(id, function (err, user) {
			done(err, user);
		});
	});

	////////////
	//FACEBOOK//
	////////////

	passport.use(new _passportFacebook.Strategy({

		clientID: _configAuth2.default.facebookAuth.clientID,
		clientSecret: _configAuth2.default.facebookAuth.clientSecret,
		callbackURL: _configAuth2.default.facebookAuth.callbackURL,
		profileFields: ['id', 'emails', 'name']

	}, function (token, refreshToken, profile, done) {

		process.nextTick(function () {
			_User2.default.findOne({ 'userEmail': profile.emails[0].value }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				}

				var newUser = new _User2.default();

				newUser.email = profile.emails[0].value;

				newUser.save(function (err) {
					if (err) {
						throw err;
					}

					return done(null, newUser);
				});
			});
		});
	}));

	//////////
	//GOOGLE//
	//////////

	passport.use(new _passportGoogleOauth.Strategy({

		clientID: _configAuth2.default.googleAuth.clientID,
		clientSecret: _configAuth2.default.googleAuth.clientSecret,
		callbackURL: _configAuth2.default.googleAuth.callbackURL

	}, function (token, refreshToken, profile, done) {
		process.nextTick(function () {

			_User2.default.findOne({ 'userEmail': profile.emails[0].value }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				}
				var newUser = new _User2.default();

				newUser.email = profile.emails[0].value;

				newUser.save(function (err) {
					if (err) {
						throw err;
					}

					return done(null, newUser);
				});
			});
		});
	}));
};