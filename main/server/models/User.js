import mongoose from 'mongoose';

const User = mongoose.Schema({
	userEmail: { type: String, required: true },
	password: String,
	studentGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StudentGroup' }]
});

User.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

User.methods.validatePassword = function( password ) {
	return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', User);