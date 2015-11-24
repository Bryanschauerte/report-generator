var   express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, cors = require('cors')
	, mongoose = require('mongoose')
	, userCtrl = require('./server/controllers/userCtrl')
	, groupCtrl = require('./server/controllers/groupCtrl')
	, port = 9090
	, mongoUri = 'mongodb://localhost:27017/reportGenerator';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});


////////
//USER//
////////

app.get('/api/user/:userId', userCtrl.getUser);
app.put('/api/user/add-group/:userId/:groupId', userCtrl.addGroup);
app.put('/api/user/remove-group/:userId/:groupId', userCtrl.removeGroup);



/////////
//GROUP//
/////////

app.post('/api/groups/', groupCtrl.addGroup);
app.put('/api/groups/add-student/:groupId', groupCtrl.addStudent);
app.put('/api/groups/remove-student/:groupId/:studentId', groupCtrl.removeStudent);
app.delete('/api/groups/:groupId', groupCtrl.deleteGroup);
app.put('/api/groups/update-grade/:groupId/:studentId', groupCtrl.updateGrades);


app.listen(port, function() {
	console.log('Listening on ' + port);
});