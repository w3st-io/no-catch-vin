// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const postsCollection = require('../../../../s-collections/postsCollection')
const Auth = require('../../../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [READ-ALL] Auth Required //
router.get(
	'/:sort/:limit/:page',
	Auth.userTokenNotRequired(),
	Auth.adminToken(),
	async (req, res) => {
		try {
			if (
				Number.isInteger(parseInt(req.params.sort)) &&
				Number.isInteger(parseInt(req.params.limit)) &&
				Number.isInteger(parseInt(req.params.page))
			) {
				// [INIT] //
				const user_id = (req.user_decoded) ? req.user_decoded.user_id : undefined
				const sort = parseInt(req.params.sort)
				const limit = parseInt(req.params.limit)
				const pageIndex = parseInt(req.params.page) - 1
				const skip = pageIndex * limit

				// [READ-ALL] Sort //
				const { posts } = await postsCollection.c_readSorted(
					user_id,
					sort,
					limit,
					skip
				)

				const { count } = await postsCollection.c_count()

				const totalPages = Math.ceil(count / limit)


				res.send({
					executed: true,
					status: true,
					posts: posts,
					postCount: count,
					totalPages: totalPages
				})
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: '/pages/admin/function/posts',
					message: 'Invalid Params',
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/pages/admin/function/posts',
				message: `Caught Error --> ${err}`,
			})
		}
	}
)


module.exports = router