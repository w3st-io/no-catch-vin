// [REQUIRE] //
const Stripe = require('stripe')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [STRIPE] //
const stripe = Stripe(config.STRIPE_API_KEY)


module.exports = {
	tokensCreate: async function ({ number, exp_month, exp_year, cvc }) {
		// Create a token
		const token = await stripe.tokens.create({
			card: {
				number: number,
				exp_month: exp_month,
				exp_year: exp_year,
				cvc: cvc,
			},
		})

		return token
	},


	chargeCreate: async function ({ amount, source, metadata }) {
		const charge = await stripe.charges.create({
			amount: amount,
			currency: 'usd',
			source: source,
			metadata: metadata
		})

		return charge
	},
}
