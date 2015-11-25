import passport from 'passport';

module.exports = {

	logout( req, res ) {
		req.logout();
		res.redirect('/');
	},

	facebook( req, res ) {
		passport.authenticate('facebook', { scope: 'email' });
	},

	facebookCallback( req, res ) {
		passport.authenticate('facebook', {
			successRedirect: '/#/classes',
			failureRedirect: '/'
		});
	},

	google( req, res ) {
		passport.authenticate('google', { scope: ['profile', 'email'] });
	},

	googleCallback( req, res ) {
		passport.authenticate('google', {
			successRedirect: '/#/classes',
			failureRedirect: '/'
		});
	},

	auth( req, res ) {
		res.send(req.user);
	},

	isAuth( req, res ) {
	    if (req.user){
	        next();
	    } else {
	    	res.status(403).send('not allowed');
	    }
	}

}