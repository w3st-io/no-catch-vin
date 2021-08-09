// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api',
		headers: {
			user_authorization: `Bearer ${localStorage.usertoken}`,
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	// [VIN-REPORT] //
	s_purchaseVinReport: async function ({ vin, email, card }) {
		try {
			const authAxios = await this.authAxios()
	
			const res = await authAxios.post('/vin/purchase-vin-report', {
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