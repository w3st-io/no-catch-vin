// [REQUIRE] //
const axios = require('axios')
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const api_stripe = require('../../s-api/stripe')
const config = require('../../s-config')
const vinReportsCollection = require('../../s-collections/VinReportsCollection')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [INIT] //
const location = '/api/vin-reports'


router.post(
	'/purchase',
	async (req, res) => {
		try {
			// [VIN-DECODER] //
			const validate = await axios.get(
				'https://vindecoder.p.rapidapi.com/decode_vin',
				{
					params: {
						vin: req.body.vin,
					},
					headers: {
						'x-rapidapi-host': 'vindecoder.p.rapidapi.com',
						'x-rapidapi-key': `${config.VIN_DECODER_API_KEY}`,
					}
				}
			)

			if (validate.data.success) {
				// [FORMAT] //
				const cardNumber = req.body.card.number.replace(/\s/g, '')
				
				// [STRIPE] create token //
				const token = await api_stripe.tokensCreate({
					number: cardNumber,
					exp_month: req.body.card.exp_month,
					exp_year: req.body.card.exp_year,
					cvc: req.body.card.cvc,
				})
				
				if (token.status) {
					// [STRIPE] create charge //
					const charge = await api_stripe.chargeCreate({
						amount: 100,
						source: token.token.id,
						metadata: {
							vin: req.body.vin,
							email: req.body.email
						}
					})
					
					if (charge.status) {
						if (charge.charge.paid) {
							// [VIN-DECODER] //

								
							// [CREATE] vinReport //
							const vinReportObj = await vinReportsCollection.c_create({
								emailedTo: req.body.email,
								stripeCharge_id: charge.charge.id,
								vin: req.body.vin,
								vinDecodedSpecification: response.data.specification
							})
							
							console.log(vinReportObj.createdVinReport);
							
							// [MAIL] //
							const to = req.body.email
							const subject = ''
							const html = `
							<h1>Thank You For Your Vin Report Purchase<h1/>
							<h4>
							Your reprint code: ${vinReportObj.createdVinReport._id}
							</h4>
							`
							
							res.send({
								executed: true,
								status: true,
								location: location,
								charge: charge,
							})
						}
					}
					else {
						res.send({
							executed: true,
							status: false,
							message: charge.message.message
						})
					}
				}
				else {
					res.send({
						executed: true,
						status: false,
						message: token.message.message
					})
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					message: 'Invalid vin'
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: location,
				message: `Caught Error --> ${err}`,
			})
		}
	}
)


module.exports = router