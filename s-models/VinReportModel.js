// [REQUIRE] //
const mongoose = require('mongoose')


module.exports = mongoose.model(
	'VinReport',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		stripeCharge_id: {
			type: String,
		},

		vinData: {
			is_salvaged: {
				type: Boolean,
				required: true,
				default: true,
			},

			info: {
				vehicle_title: {
					type: String,
					maxlength: 100,
				},

				loss_type: {
					type: String,
					maxlength: 100,
				},

				mileage: {
					type: String,
					maxlength: 100,
				},

				primary_damage: {
					type: String,
					maxlength: 100,
				},

				secondary_damage: {
					type: String,
					maxlength: 100,
				},
			}
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)