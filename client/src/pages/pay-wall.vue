<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12" md="8" order="2" order-md="1">
				<BCard text-variant="dark" class="mb-3 shadow">
					<h5 class="text-center text-secondary">A Small fee So We Can Generate Your Report</h5>
					<h3 class="text-center text-primary font-weight-bold">Your Report is $0.99 away!</h3>
					<hr class="mb-4 border-success">

					<form action="#">
						<BRow>
							<BCol cols="12">
								<!-- Email -->
								<label for="email" class="text-primary">
									Email (For your receipt &amp; reprint code)
								</label>
								<input
									v-model="email"
									name="email"
									type="email"
									class="form-control mb-3"
									placeholder="example@example.com"
								>
							</BCol>

							<BCol cols="12">
								<!-- Card Name -->
								<div class="form-group">
									<label for="card_name" class="text-primary">
										Card Name
									</label>
									<input
										type="text"
										name="card_name"
										v-model="card.name"
										class="form-control"
										placeholder="Name"
									>
									{{ card.name }}
								</div>
							</BCol>

							<BCol cols="12">
								<!-- Card Number -->
								<div class="form-group">
									<label for="card_number" class="text-primary">
										Card number
									</label>
									<input
										v-model="card.number"
										name="card_number"
										v-cardformat:formatCardNumber
										class="form-control"
										placeholder="---- ---- ---- ----"
									>
									{{ card.number }}
								</div>
							</BCol>

							<BCol cols="12" md="4">
								<!-- Card Exp Month -->
								<label for="card_exp_month" class="text-primary">
									Card Exp. Month
								</label>
								<input
									v-model="card.exp_month"
									name="card_exp_month"
									type="text"
									class="form-control mb-3"
									placeholder="MM"
									maxlength="2"
								>
							</BCol>

							<BCol cols="12" md="4">
								<!-- Card Exp Year -->
								<label for="card_exp_year" class="text-primary">
									Card Exp. Year
								</label>
								<input
									v-model="card.exp_year"
									name="card_exp_month"
									type="text"
									class="form-control mb-3"
									placeholder="YY"
									maxlength="2"
								>
							</BCol>

							<BCol cols="12" md="4" class="mb-3">
								<!-- Card CVV -->
								<div class="form-group">
									<label for="card_cvv" class="text-primary">
										Card CVV
									</label>
									<input
										v-model="card.cvv"
										v-cardformat:formatCardCVC
										name="card_cvv"
										placeholder="---(-)"
										class="form-control"
									>
								</div>
							</BCol>

							<BCol cols="12">
								<BButton
									variant="primary"
									@click="submit()"
									class="w-100"
								>Submit</BButton>
							</BCol>
						</BRow>
					</form>
				</BCard>
			</BCol>

			<!-- Why Charge -->
			<BCol cols="12" md="4" order="1" order-md="2">
				<div class="mb-3 p-3 bg-info rounded shadow">
					<h5 class="m-0 font-weight-bold text-light">Why do we charge a $1 fee?</h5>
					<hr class="border-light">
					<p class="m-0 text-light">
						Generating a vin report is costly and not cheap but we charge only the amount needed to help keep our customers happy and our lights on!
					</p>
				</div>

				<img
					src="https://www.24-7fireprotection.com/img/accepted-payments.f8cbc895.png"
					class="d-none d-md-block w-100 mb-3"
				>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				card: {
					name: '',
					number: '',
					exp_month: '',
					exp_year: '',
					cvv: '',
				},
			}
		},
	}
</script>