import mongoose from 'mongoose';

const User = mongoose.Schema({
	userEmail: { type: String, required: true },
	studentGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StudentGroup' }],
	dateOfSubscriptionEnd: {type: Date}
});

module.exports = mongoose.model('User', User);
