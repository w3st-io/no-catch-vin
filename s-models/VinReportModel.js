// [REQUIRE] //
const mongoose = require('mongoose')


module.exports = mongoose.model(
	'VinReport',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		emailedTo: {
			type: String,
			maxlength: 500,
		},

		stripeCharge_id: {
			type: String,
		},

		vin: {
			type: String,
			required: true,
			maxlength: 50,
		},

		vinDecodeData: {
			year: {
				type: String,
				maxlength: 100,
				default: '',
			},

			make: {
				type: String,
				maxlength: 100,
				default: '',
			},

			model: {
				type: String,
				maxlength: 100,
				default: '',
			},

			trim_level: {
				type: String,
				maxlength: 100,
				default: '',
			},

			engine: {
				type: String,
				maxlength: 100,
				default: '',
			},

			style: {
				type: String,
				maxlength: 100,
				default: '',
			},

			made_in: {
				type: String,
				maxlength: 100,
				default: '',
			},

			steering_type: {
				type: String,
				maxlength: 100,
				default: '',
			},

			anti_brake_system: {
				type: String,
				maxlength: 100,
				default: '',
			},

			tank_size: {
				type: String,
				maxlength: 100,
				default: '',
			},

			overall_height: {
				type: String,
				maxlength: 100,
				default: '',
			},
			
			overall_length: {
				type: String,
				maxlength: 100,
				default: '',
			},
			
			overall_width: {
				type: String,
				maxlength: 100,
				default: '',
			},

			standard_seating: {
				type: String,
				maxlength: 100,
				default: '',
			},

			optional_Seating: {
				type: String,
				maxlength: 100,
				default: '',
			},

			highway_milage: {
				type: String,
				maxlength: 100,
				default: '',
			},

			city_milage: {
				type: String,
				maxlength: 100,
				default: '',
			},
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
					default: '',
				},

				loss_type: {
					type: String,
					maxlength: 100,
					default: '',
				},

				mileage: {
					type: String,
					maxlength: 100,
					default: '',
				},

				primary_damage: {
					type: String,
					maxlength: 100,
					default: '',
				},

				secondary_damage: {
					type: String,
					maxlength: 100,
					default: '',
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