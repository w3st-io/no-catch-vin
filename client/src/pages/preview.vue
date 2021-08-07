<template>
<section class="my-5 w3l-content-6 report-section">
	<div class="container">
		<div class="content-info-in row">
			<!-- col 3 -->
			<div class="col-lg-3">
				<img src="https://www.americanvinhistory.com/assets/images/checkoutrefundleft.png" alt="" style="margin-bottom: 20px;" class="img-fluid">
				<img src="https://www.americanvinhistory.com/assets/images/ab1.jpg" alt="" class="img-fluid">
			</div>

			<!-- col 6 -->
			<div class="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self  pl-lg-4">
				<!-- Details -->
				<div class="title-content text-left mb-2">
					<h6 class="sub-title">We've downloaded your report for : </h6>
					<!-- VIN -->
					<h3 class="hny-title">Your Vin Number: {{ vin }}</h3>
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

				<div class="card">
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
				</div>
			</div>

			<!-- col 3 -->
			<div class="col-lg-3">
				<img
					src="https://www.americanvinhistory.com/assets/images/placecheckoutonright.png"
					alt=""
					class="img-fluid"
				>
			</div>	
		</div>
	</div>
</section>	
</template>