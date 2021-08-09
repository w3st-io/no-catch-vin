// [REQUIRE] //
const Stripe = require('stripe')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [STRIPE] //
const stripe = Stripe(config.STRIPE_API_KEY)


// [INIT] //
const location = '/s-api/stripe'


module.exports = {
	tokensCreate: async function ({ number, exp_month, exp_year, cvc }) {
		try {
			// Create a token
			const token = await stripe.tokens.create({
				card: {
					number: number,
					exp_month: exp_month,
					exp_year: exp_year,
					cvc: cvc,
				},
			})
	
			return {
				executed: true,
				status: true,
				location: location,
				token: token,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: err,
			}
		}
	},


	chargeCreate: async function ({ amount, source, metadata }) {
		console.log(source);
		try {
			const charge = await stripe.charges.create({
				amount: amount,
				currency: 'usd',
				source: source,
				metadata: metadata
			})

			return {
				executed: true,
				status: true,
				location: location,
				charge: charge,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: err,
			}
		}
	},
}
