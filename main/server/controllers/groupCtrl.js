import StudentGroup from '../models/StudentGroup';

module.exports = {

	addGroup( req, res ) {
		new StudentGroup(req.body).save(( err, group ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(group);
			
		});
	},

	addStudent( req, res ) {
		StudentGroup.findById(req.params.groupId, ( err, group ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			group.students.push(req.body).save(( err, updatedGroup ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				res.send(updatedGroup);
				
			});
		});
	},

	removeStudent( req, res ) {
		StudentGroup.findById(req.params.groupId, ( err, group ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			group.students.pull(req.params.studentId).save(( err, updatedGroup ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				res.send(updatedGroup);
				
			});
			
		});
	},

	deleteGroup( req, res ) {
		StudentGroup.findByIdAndRemove(req.params.groupId, ( err, group ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(group);
			
		});
	},

	updateGrades( req, res ) {
		StudentGroup.findById(req.params.groupId, ( err, group ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			group.students.id(req.params.studentId).grades
				.update(req.body)
				.save(( err, updatedGroup ) => {
					if (err) {
						return res.status(500).send(err);
					}
					
					res.send(updatedGroup);
					
				});
		});
	}

};