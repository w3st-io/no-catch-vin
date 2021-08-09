// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const api_stripe = require('../../s-api/stripe')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [INIT] //
const location = '/api/vin'


router.post(
	'/purchase-vin-report',
	async (req, res) => {
		try {
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
						// get the api data for vin
						
						
						// [CREATE] vinReportData // 


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