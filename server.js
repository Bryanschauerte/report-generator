var   express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, cors = require('cors')
	, mongoose = require('mongoose')
	, session = require('express-session')
	, passport = require('passport')
	, userCtrl = require('./server/controllers/userCtrl')
	, groupCtrl = require('./server/controllers/groupCtrl')
	, authCtrl = require('./server/controllers/authCtrl')
	, reportsCtrl = require('./server/controllers/reportsCtrl')
	, config = require('./server/config/auth')
	, stripeCtrl = require('./server/controllers/stripeCtrl')
	, stripeKeys = require('./server/config/stripeKeys')
	, stripe = require("stripe")(stripeKeys.test.secretKey)
	// , stripe = require("stripe")(stripeKeys.test.secretKey)
	, port = 9090
	// , port = 80
	, mongoUri = 'mongodb://localhost:27017/reportGenerator';

require('./server/config/passport')(passport);

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});

////////
//AUTH//
////////

app.get('/auth/logout', authCtrl.logout);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/auth/facebook/callback', passport.authenticate('facebook'), function( req, res ) {
	if (!req.user) {
		return res.status(401).send('not allowed');
	}

	res.redirect('/#/myAccount');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google'), function( req, res ) {
	if (!req.user) {
		return res.status(401).send('not allowed');
	}
	res.redirect('/#/myAccount');
});

app.get('/auth', authCtrl.isAuth, authCtrl.auth);
//////
///stripe///
///////
app.post('/api/:userId/monthCharge', stripeCtrl.handleMonthCharge, stripeCtrl.addMonthDate);
app.post('/api/:userId/yearCharge', stripeCtrl.handleYearCharge, stripeCtrl.addYearDate);
////////
//USER//
////////



/////////
//GROUP//
/////////

app.get('/api/user/:userId', userCtrl.getUser);
app.put('/api/user/add-group/:userId', userCtrl.addGroup);
app.put('/api/:userId/groups/:classId/newStudent', userCtrl.addStudent);
app.delete('/api/:userId/groups/remove-student/:groupId/:studentId', userCtrl.removeStudent);
app.delete('/api/:userId/groups/:groupId', userCtrl.removeGroup);
app.put('/api/:userId/group/makeClassReports', reportsCtrl.doReports);
app.put('/api/:userId/groups/update-grade/', userCtrl.updateGrades);


app.listen(port, function() {
	console.log('Listening on ' + port);
});
