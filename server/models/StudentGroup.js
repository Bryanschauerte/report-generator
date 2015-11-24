'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentGroup = _mongoose2.default.Schema({
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
	}]
});

module.exports = _mongoose2.default.model('StudentGroup', StudentGroup);