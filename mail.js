// [REQUIRE] //
const mailgun = require('mailgun-js')


// [REQUIRE] Personal //
const config = require('./s-config')


// [INIT] //
const DOMAIN = 'blockbased.io'


// [MAILGUN] //
const MailGun = mailgun({
	apiKey: config.MAILGUN_API_KEY,
	domain: DOMAIN
})


// [MAILGUN] Send //
MailGun.messages().send(
	{
		from: '<no-reply@no-catch-vin-service.com>',
		to: 'w3st.io2021@gmail.com',
		subject: 'Your Receipt',
		text: ''
	},
	(error, body) => {
		console.log(body)
		console.log(error)
	}
)