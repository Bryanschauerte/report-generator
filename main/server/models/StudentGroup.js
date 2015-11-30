import mongoose from 'mongoose';

const StudentGroup = mongoose.Schema({
	className: { type: String, required: true },
	students: [{
		name: { type: String, required: true },
		gender: { type: String, required: true },

			participation: {type: String},
			pronuncation: {type: String},
			readingAbility: {type: String},
			readingComprehension: {type: String},
			speakingAbility: {type: String},
			speakingAbilityVocabulary: {type: String},
			vocabularyTests: {type: String},
			behavior: {type: String}

	}
	]
});

module.exports = mongoose.model('StudentGroup', StudentGroup);
