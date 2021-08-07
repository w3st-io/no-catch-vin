<template>
	<section class="my-5 w3l-content-6 report-section">
		<BContainer class="container">
			<BRow class="content-info-in">
				<!-- col 3 -->
				<BCol cols="12" lg="3" class="d-none d-lg-block">
					<img
						src="https://www.americanvinhistory.com/assets/images/checkoutrefundleft.png"
						alt=""
						style="margin-bottom: 20px;"
						class="img-fluid"
					>
					<img
						src="https://www.americanvinhistory.com/assets/images/ab1.jpg"
						alt=""
						class="img-fluid"
					>
				</BCol>

				<!-- col 6 -->
				<BCol cols="12" lg="6" class="mt-lg-0 mt-5 about-right-faq align-self pl-lg-4">
					<!-- Details -->
					<div class="title-content text-left mb-2">
						<h6 class="sub-title">We've downloaded your report for:</h6>
						<!-- VIN -->
						<h3 class="hny-title">Your Vin Number: {{ $route.params.vin }}</h3>
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

					<BCard>
						<div class="card-header">Your Full Report Includes...</div>

						<div class="card-body">
							<table class="table">
								<tbody>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Detailed specifications
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Ownership records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Theft records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Odometer records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Salvage records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Accident records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Detailed specifications
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Ownership records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Vandalism records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Damage Records
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;Rideshare Records
										</td>
										<td>
											<i class="fas fa-check-circle" style="color:#1F85DE"></i>
											&nbsp;100+ other records
										</td>
									</tr>
								</tbody>
							</table>	
		
							<!-- [SUBMIT] -->
							<a class="btn btn-primary w-100">
								Get my report full report
							</a>
						</div>
					</BCard>
				</BCol>

				<!-- col 3 -->
				<div class="col-lg-3">
					<img
						src="https://www.americanvinhistory.com/assets/images/placecheckoutonright.png"
						alt=""
						class="img-fluid"
					>
				</div>
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
		const headers = {
			'x-rapidapi-host': 'vindecoder.p.rapidapi.com',
			'x-rapidapi-key': 'c404ea350amsh3a1bf345dd7386fp1bcde5jsnad8d954aa8d4',
		}

		axios.get(
			`https://vindecoder.p.rapidapi.com/decode_vin?vin=${this.$route.params.vin}`,
			{ headers: headers }
		)
			.then((res) => {
				console.log(res.data)
				this.make = res.data.specification.make
				this.model = res.data.specification.model
				this.engine = res.data.specification.engine

				console.log('data', this.make, this.model, this.engine);
			})
			.catch((err) => {
				console.log('AUGHT',err)
			})
	},
}
</script>