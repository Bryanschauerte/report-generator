import mongoose from 'mongoose';

const User = mongoose.Schema({
	userEmail: { type: String, required: true },
	studentGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StudentGroup' }]
});

module.exports = mongoose.model('User', User);