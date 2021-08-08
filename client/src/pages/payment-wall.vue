<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12" md="8">
				<BCard text-variant="dark" class="shadow">
					<h5 class="text-center text-secondary">A Small fee So We Can Generate Your Report</h5>
					<h3 class="text-center text-primary font-weight-bold">Your Report is $0.99 away!</h3>
					<hr class="mb-4 border-success">

					<form action="#">
						<BRow>
							<BCol cols="12">
								<!-- Email -->
								<label for="email" class="text-primary">
									Email (For your receipt & reprint code)
								</label>
								<input
									name="email"
									type="email"
									class="form-control mb-3"
									placeholder="example@example.com"
								>
							</BCol>

							<BCol cols="12">
								<!-- Card Name -->
								<label for="card_name" class="text-primary">Card Name</label>
								<input
									name="card_name"
									type="text"
									class="form-control mb-3"
									placeholder="123 123 123 123"
								>
							</BCol>

							<BCol cols="12">
								<!-- Card Number -->
								<label for="card_number" class="text-primary">
									Card Number
								</label>
								<input
									name="card_number"
									type="text"
									class="form-control mb-3"
									placeholder="123 123 123 123"
								>
							</BCol>

							<BCol cols="12" md="4">
								<!-- Card Exp Month -->
								<label for="card_exp_month" class="text-primary">
									Card Exp. Month
								</label>
								<input
									name="card_exp_month"
									type="text"
									class="form-control mb-3"
									placeholder="123 123 123 123"
								>
							</BCol>

							<BCol cols="12" md="4">
								<!-- Card Exp Year -->
								<label for="card_exp_year" class="text-primary">
									Card Exp. Year
								</label>
								<input
									name="card_exp_month"
									type="text"
									class="form-control mb-3"
									placeholder="123 123 123 123"
								>
							</BCol>

							<BCol cols="12" md="4">
								<!-- Card CVV -->
								<label for="card_cvv" class="text-primary">
									Card CVV
								</label>
								<input
									name="card_cvv"
									type="text"
									class="form-control mb-3"
									placeholder="123 123 123 123"
								>
							</BCol>
						</BRow>
					</form>
				</BCard>
			</BCol>

			<BCol cols="12" md="4">
				<div class="mb-3 p-3 bg-info rounded shadow">
					<h6 class="m-0 text-light">Why do we charge a $1 fee?</h6>
					<hr>
					<p class="m-0 text-light">
						Generating a vin report is costly and not cheap but we charge only the amount needed to help keep our customers happy and our lights on!
					</p>
				</div>
			</BCol>
		</BRow>

		<credit-card-field v-model="card"></credit-card-field>
	</BContainer>
</template>

<script>
export default {
	
}
</script>