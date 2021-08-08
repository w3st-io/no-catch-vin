<template>
	<section class="my-5 w3l-content-6 report-section">
		<BContainer class="container">
			<BRow class="content-info-in">
				<!-- col 6 -->
				<BCol
					cols="12" lg="6"
					class="mx-auto mt-lg-0 mt-5 pl-lg-4 about-right-faq align-self"
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


					<div class="summery">
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
			</BRow>
		</BContainer>
	</section>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			make: '',
			model: '',
			engine: '',
		}
	},

	created() {
		axios.get(
			`https://vindecoder.p.rapidapi.com/decode_vin?vin=${this.$route.params.vin}`,
			{
				headers: {
					'x-rapidapi-host': 'vindecoder.p.rapidapi.com',
					'x-rapidapi-key': 'c404ea350amsh3a1bf345dd7386fp1bcde5jsnad8d954aa8d4',
				}
			}
		)
			.then((res) => {
				this.make = res.data.specification.make
				this.model = res.data.specification.model
				this.engine = res.data.specification.engine

				console.log(
					'data:',
					this.make,
					this.model,
					this.engine
				);
			})
			.catch((err) => {
				console.log('error:', err)
			})
	},
}
</script>