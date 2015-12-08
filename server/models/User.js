'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.Schema({
	userEmail: { type: String, required: true },
	studentGroups: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'StudentGroup' }],
	dateOfSubscriptionEnd: { type: Date }
});

module.exports = _mongoose2.default.model('User', User);