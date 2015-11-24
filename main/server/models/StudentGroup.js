import mongoose from 'mongoose';

const StudentGroup = mongoose.Schema({
	groupName: { type: String, required: true },
	students: [{
		name: { type: String, required: true },
		age: Number,
		gender: { type: String, required: true },
		grades: {
			participation: String,
			readingComp: String,
			verbalComp: String,
			readingAbility: String,
			behavior: String,
			pronunciation: String
		}
	}
	]
});

module.exports = mongoose.model('StudentGroup', StudentGroup);