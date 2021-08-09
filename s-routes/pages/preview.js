// [REQUIRE] //
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const Auth = require('../../s-middleware/Auth')
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [SEARCH] //
router.get(
	'/:vin',
	Auth.userTokenNotRequired(),
	async (req, res) => {
		try {
			if (validator.isAscii(req.params.vin)) {
				const response = await axios.get(
					`https://vindecoder.p.rapidapi.com/decode_vin?vin=${req.params.vin}`,
					{
						headers: {
							'x-rapidapi-host': 'vindecoder.p.rapidapi.com',
							'x-rapidapi-key': `${config.VIN_DECODER_API_KEY}`,
						}
					}
				)
	
				res.send({
					executed: true,
					status: true,
					data: response.data
				})
			}
			else {
				res.send({
					executed: true,
					status: false,
					message: 'Invalid Params'
				})
			}
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