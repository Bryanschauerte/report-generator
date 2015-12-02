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
	, config = require('./server/config/configAuth')
	, port = 9090
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

app.get('/auth/facebook', authCtrl.facebook);

app.get('/auth/facebook/callback', authCtrl.facebookCallback);

app.get('/auth/google', authCtrl.google);

app.get('/auth/google/callback', authCtrl.googleCallback);

app.get('/auth', authCtrl.isAuth, authCtrl.auth);



////////
//USER//
////////

app.get('/api/user/:userId', userCtrl.getUser);
app.put('/api/user/add-group/:userId/:groupId', userCtrl.addGroup);
app.put('/api/user/remove-group/:userId/:groupId', userCtrl.removeGroup);



/////////
//GROUP//
/////////

app.post('/api/newClass/', groupCtrl.addGroup);
app.put('/api/groups/newStudent', groupCtrl.addStudent);
app.delete('/api/groups/remove-student/:groupId/:studentId', groupCtrl.removeStudent);
app.delete('/api/groups/:groupId', groupCtrl.deleteGroup);

app.put('/api/groups/update-grade/', groupCtrl.updateGrades);


app.listen(port, function() {
	console.log('Listening on ' + port);
});
