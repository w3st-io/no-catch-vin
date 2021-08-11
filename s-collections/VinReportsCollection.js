// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] //
const VinReportModel = require('../s-models/VinReportModel')


module.exports = {
	/******************* [CRUD] *******************/
	// [CREATE] //
	c_create: async ({ emailedTo, stripeCharge_id, vin, vinDecodedSpecification, vinData }) => {
		try {
			// [VALIDATE] emailedTo //
			if (!validator.isEmail(emailedTo)) {
				return {
					executed: true,
					status: false,
					message: 'postsCollection: Invalid emailedTo',
				}
			}
	
			// [VALIDATE] vin //
			if (!validator.isAscii(vin)) {
				return {
					executed: true,
					status: false,
					message: 'postsCollection: Invalid vin',
				}
			}
	
			// [SAVE] //
			const createdPost = await new VinReportModel({
				_id: mongoose.Types.ObjectId(),
				emailedTo: emailedTo,
				stripeCharge_id: stripeCharge_id,
				vin: vin,
				vinDecodedSpecification,
				vinData,
			}).save()
	
			return {
				executed: true,
				status: true,
				createdPost: createdPost,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `postsCollection: Error --> ${err}`,
			}
		}
	},


	// [READ] //
	c_read: async (user_id, post_id) => {
		try {
			// [VALIDATE] user_id //
			if (!mongoose.isValidObjectId(user_id)) {
				return {
					executed: true,
					status: false,
					message: 'postsCollection: Invalid user_id',
				}
			}
	
			// [VALIDATE] post_id //
			if (!mongoose.isValidObjectId(post_id)) {
				return {
					executed: true,
					status: false,
					message: 'postsCollection: Invalid post_id',
				}
			}
	
			let post = await PostModel.findById(post_id)
				.populate({ path: 'user', select: 'username email bio profile_img' })
				.exec()
	
			// Check if post found //	
			if (!post) {
				return {
					executed: true,
					status: false,
					post: post,
					message: 'postsCollection: No post found'
				}
			}
	
			// [FILL-DATA] //
			post = await c_fillData(user_id, post)
			
			return {
				executed: true,
				status: true,
				post: post
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `postsCollection: Error --> ${err}`
			}
		}
	},
}