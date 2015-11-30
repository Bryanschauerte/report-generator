'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentGroup = _mongoose2.default.Schema({
	className: { type: String, required: true },
	students: [{
		name: { type: String, required: true },
		gender: { type: String, required: true },

		participation: { type: String },
		pronuncation: { type: String },
		readingAbility: { type: String },
		readingComprehension: { type: String },
		speakingAbility: { type: String },
		speakingAbilityVocabulary: { type: String },
		vocabularyTests: { type: String },
		behavior: { type: String }

	}]
});

module.exports = _mongoose2.default.model('StudentGroup', StudentGroup);