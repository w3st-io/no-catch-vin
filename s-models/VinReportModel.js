// [REQUIRE] //
const mongoose = require('mongoose')


module.exports = mongoose.model(
	'VinReport',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		stripeCharge_id: {
			type: String,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)