'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.Schema({
	userEmail: { type: String, required: true },
	password: String,
	studentGroups: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'StudentGroup' }]
});

User.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validatePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = _mongoose2.default.model('User', User);