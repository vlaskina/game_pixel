const mongoose = require('./mongoose');

const userSchema = new mongoose.Schema({
	type: {
		"type": String,
		required: true
	},
	question: {
		"type": String,
		required: true
	},
	answers: {
		"type": Array
	}
});

module.exports = mongoose.model('Tasks', userSchema);
