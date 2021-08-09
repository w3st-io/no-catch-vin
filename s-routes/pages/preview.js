// [REQUIRE] //
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const Auth = require('../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [SEARCH] //
router.get(
	'/:vin',
	Auth.userTokenNotRequired(),
	async (req, res) => {
		try {
			const response = await axios.get(
				`https://vindecoder.p.rapidapi.com/decode_vin?vin=${req.params.vin}`,
				{
					headers: {
						'x-rapidapi-host': 'vindecoder.p.rapidapi.com',
						'x-rapidapi-key': 'c404ea350amsh3a1bf345dd7386fp1bcde5jsnad8d954aa8d4',
					}
				}
			)

			res.send({
				executed: true,
				status: true,
				data: response.data
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/pages/preview',
				message: `Caught Error --> ${err}`
			})
		}
	}
)


module.exports = router