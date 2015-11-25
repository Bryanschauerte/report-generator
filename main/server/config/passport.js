const 		FacebookStrategy = require('passport-facebook').Strategy
		,	GoogleStrategy = require('passport-google-oauth2').Strategy
		,	User = require('../models/User')
		,	config = require('./configAuth');

module.exports = passport => {
	passport.serializeUser(( user, done ) => {
		done(null, user.id);
	});

	passport.deserializeUser(( id, done ) => {
		User.findById(id, ( err, user ) => {
			done(err, user);
		});
	});

	////////////
	//FACEBOOK//
	////////////

	passport.use(new FacebookStrategy({

		  clientID: config.facebookAuth.clientID
		, clientSecret: config.facebookAuth.clientSecret
		, callbackURL: config.facebookAuth.callbackURL
		, profileFields: ['id', 'emails', 'name']

	}, ( token, refreshToken, profile, done ) => {

		process.nextTick(() => {
			User.findOne({ 'userEmail': profile.emails[0].value }, ( err, user ) => {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				}

				let newUser = new User();

				newUser.email = profile.emails[0].value;

				newUser.save(( err ) => {
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

		  clientID: config.googleAuth.clientID
		, clientSecret: config.googleAuth.clientSecret
		, callbackURL: config.googleAuth.callbackURL

	}, ( token, refreshToken, profile, done ) => {
		process.nextTick(() => {

			User.findOne({ 'userEmail': profile.emails[0].value }, ( err, user ) => {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				} 
				let newUser = new User();

				newUser.email = profile.emails[0].value;

				newUser.save(( err ) => {
					if (err) {
						throw err;
					}

					return done(null, newUser);
				});
			});
		});
	}));
}

