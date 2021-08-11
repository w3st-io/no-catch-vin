// ORDER: to, subject, type, user_id, clientEmail, name, message, position, html, attachments
// [REQUIRE] //
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../s-config') 


// [INIT] Const //
const service = config.EMAIL_SERVICE
const email = config.EMAIL
const emailPassword = config.EMAIL_PASSWORD
const baseURL = config.CLIENT_BASE_URL
const auth = {
	user: email,
	pass: emailPassword
}


module.exports = {
	// [DEFAULT] //
	sendMail: async function (to, subject, html) {
		try {
			// [VALIDATE] to //
			if (!validator.isEmail(to)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid to'
				}
			}
	
			// [VALIDATE] subject //
			if (!validator.isAscii(subject)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid subject',
				}
			}
	
			const transporter = nodemailer.createTransport({
				service: service,
				auth: auth
			})
	
			const mailOptions = {
				from: email,
				to: to,
				subject: subject,
				html: html
			}
	
			// [SEND-MAIL] //
			const sentEmail = await transporter.sendMail(mailOptions)
	
			return {
				executed: true,
				status: true,
				message: 'Email Sent',
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `mailerUtil: Error --> ${err}`,
			}
		}
	},


	// [VERIFICATION] //
	sendVerificationMail: async function (to, user_id, VCode) {
		try {
			// [VALIDATE] //
			if (
				!validator.isEmail(to) ||
				!mongoose.isValidObjectId(user_id) ||
				!validator.isAscii(VCode)
			) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid params'
				}
			}
	
			const transporter = nodemailer.createTransport({
				service: service,
				auth: {
					user: email,
					pass: emailPassword
				}
			})
	
			const mailOptions = {
				from: email,
				to: to,
				subject: 'Verify Your BlockBased.io Account',
				html: `
					<h1>Thank you creating an account! Verify & Join us!<h1/>
					<a href="${baseURL}/user/verify/${user_id}/${VCode}">
						<button>Click to Verify</button>
					</a>
				`
			}
	
			// [SEND-MAIL] //
			const sentEmail = await transporter.sendMail(mailOptions)
	
			return {
				executed: true,
				status: true,
				message: 'Email Sent',
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `mailerUtil: Error --> ${err}`,
			}
		}
	},


	// [RESET-PASSWORD] //
	sendPasswordResetEmail: async function (to, user_id, VCode) {
		try {
			// [VALIDATE] //
			if (
				!validator.isEmail(to) ||
				!mongoose.isValidObjectId(user_id) ||
				!validator.isAscii(VCode)
			) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid params'
				}
			}
	
			const transporter = nodemailer.createTransport({
				service: service,
				auth: {
					user: email,
					pass: emailPassword
				}
			})
	
			const mailOptions = {
				from: email,
				to: to,
				subject: 'Reset Password For Your BlockBased.io Account',
				html: `
					<h1>Click the Link Below to Reset Your Password<h1/>
					<h4>If you did not request to change your password ignore this email</h4>
					<a href="${baseURL}/user/password/reset/${user_id}/${VCode}">
						<button>Click to Reset Password</button>
					</a>
				`
			}
	
			// [SEND-MAIL] //
			const sentEmail = await transporter.sendMail(mailOptions)
	
			return {
				executed: true,
				status: true,
				message: 'Email Sent',
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `mailerUtil: Error --> ${err}`,
			}
		}
	},
}