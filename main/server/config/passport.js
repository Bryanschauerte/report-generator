import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from '../models/User';
import auth from './auth';

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

		  clientID: auth.facebookAuth.clientID
		, clientSecret: auth.facebookAuth.clientSecret
		, callbackURL: auth.facebookAuth.callbackURL
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

				newUser.userEmail = profile.emails[0].value;

				console.log(newUser);
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

		  clientID: auth.googleAuth.clientID
		, clientSecret: auth.googleAuth.clientSecret
		, callbackURL: auth.googleAuth.callbackURL

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
