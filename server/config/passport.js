'use strict';

var FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth2').Strategy,
    User = require('../models/User'),
    config = require('./configAuth');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	////////////
	//FACEBOOK//
	////////////

	passport.use(new FacebookStrategy({

		clientID: config.facebookAuth.clientID,
		clientSecret: config.facebookAuth.clientSecret,
		callbackURL: config.facebookAuth.callbackURL,
		profileFields: ['id', 'emails', 'name']

	}, function (token, refreshToken, profile, done) {

		process.nextTick(function () {
			User.findOne({ 'userEmail': profile.emails[0].value }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				}

				var newUser = new User();

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

	passport.use(new GoogleStrategy({

		clientID: config.googleAuth.clientID,
		clientSecret: config.googleAuth.clientSecret,
		callbackURL: config.googleAuth.callbackURL

	}, function (token, refreshToken, profile, done) {
		process.nextTick(function () {

			User.findOne({ 'userEmail': profile.emails[0].value }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				}
				var newUser = new User();

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