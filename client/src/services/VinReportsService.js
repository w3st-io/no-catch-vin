// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/vin-reports',
		headers: {
			user_authorization: `Bearer ${localStorage.usertoken}`,
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	// [VIN-REPORT] //
	s_purchase: async function ({ vin, email, card }) {
		try {
			const authAxios = await this.authAxios()
	
			const res = await authAxios.post('/purchase', {
				vin,
				email,
				card
			})

			return res.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `VinService: Error --> ${err}`
			}
		}
	},
}