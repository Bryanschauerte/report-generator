import User from '../models/User'

module.exports = {

	getUser( req, res ) {
		User.findById(req.params.userId)
			.populate('studentGroups')
			.exec(( err, user ) => {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(user);
			});
	},

	addGroup( req, res ) {
		User.findById(req.params.userId, ( err, user ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			user.studentGroups.push(req.body).save(( err, updatedUser ) => {
				if (err) {
					return res.status(500).send(err);
				}

				res.send(updatedUser);
			});
		});
	},

	removeGroup( req, res ) {
		User.findById(req.params.userId, ( err, user ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			user.studentGroups.pull(req.params.groupId).save(( err, updatedUser ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				res.send(updatedUser);
				
			});
			
		});
	}

};