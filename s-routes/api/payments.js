// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')


// [REQUIRE] //
const config = require('../../s-config')


// [STRIPE] //
const stripe = Stripe(config.STRIPE_API_KEY)


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.post(
	'/vin-report',
	async (req, res) => {
		try {
			// [FORMAT] //
			const cardNumber = req.body.card.number.replace(/\s/g, '')


			// [STRIPE] //
			const token = await stripe.tokens.create({
				card: {
					number: cardNumber,
					exp_month: req.body.card.exp_month,
					exp_year: req.body.card.exp_year,
					cvc: req.body.card.cvc,
				},
			})


			const charge = await stripe.charges.create({
				amount: 100,
				currency: 'usd',
				source: token.id,
				metadata: {
					email: req.body.email,
					vin: req.body.vin,
				}
			})


			res.send({
				executed: true,
				status: true,
				charge: charge,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments',
				message: `Caught Error --> ${err}`,
			})
		}
	}
)


module.exports = router