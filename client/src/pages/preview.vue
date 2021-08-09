<template>
	<section class="my-5 w3l-content-6 report-section">
		<BContainer class="container">
			<BRow class="content-info-in">
				<!-- col 6 -->
				<BCol
					cols="12"
					class="mx-auto pl-lg-4"
					style="max-width: 800px;"
				>
					<!-- Details -->
					<div class="mb-4 title-content">
						<!-- VIN -->
						<h4 class="text-center text-secondary">
							We've Found the Car with Your Vin:
						</h4>
						<h2 class="text-center text-primary">
							{{ $route.params.vin }}
						</h2>
					</div>


					<div>
						<table class="table">
							<tr>
								<td>Make</td>
								<td>{{ make }}</td>
							</tr>
							<tr>
								<td>Model</td>
								<td>{{ model }}</td>
							</tr>
							<tr>
								<td>Engine</td>
								<td>{{ engine }}</td>
							</tr>
						</table>
					</div>

					<BCard no-body>
						<BCardHeader>Your Full Report Includes...</BCardHeader>
						<BCardBody>
							<table class="table">
								<tbody>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Detailed specifications
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Ownership records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Theft records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Odometer records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Salvage records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Accident records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Detailed specifications
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Ownership records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Vandalism records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Damage Records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											&nbsp;Rideshare Records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE">&#10004;</i>
											100+ other records
										</td>
									</tr>
								</tbody>
							</table>

							<!-- [SUBMIT] -->
							<RouterLink
								:to="`/pay-wall/${$route.params.vin}`"
								class="btn btn-primary w-100"
							>Get My Full Report</RouterLink>
						</BCardBody>
					</BCard>
				</BCol>

				<!-- cols 12 -->
				<BCol cols="12">
					<h3 class="text-danger">{{ error }}</h3>
				</BCol>
			</BRow>
		</BContainer>
	</section>
</template>

<script>
import PageService from '../services/PageService'

export default {
	data() {
		return {
			resData: {},
			make: '',
			model: '',
			engine: '',
			error: '',
		}
	},

	methods: {
		async getPageData () {
			this.resData = await PageService.s_preview({
				vin: this.$route.params.vin
			})

			if (this.resData.status == true) {
				this.make = this.resData.data.specification.make
				this.model = this.resData.data.specification.model
				this.engine = this.resData.data.specification.engine
			}
			else { this.error = this.resData.message }
		}
	},

	async created() {
		await this.getPageData()
	},
}
</script>