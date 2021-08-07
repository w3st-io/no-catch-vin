<template>
	<div class="">
		<!-- [SPACER] --> 
		<section class="spacer text-center top-0">
			<BContainer>
				<h1 class="text-center text-light title">
					No Catch. Just Lookup Your Vin.
				</h1>
			</BContainer>
		</section>


		<BContainer class="my-3 position-relative vin-lookup" style="top: -100px;">
			<BRow class="shadow">
				<BCol cols="12" sm="6" xl="3" class="d-none d-md-block bg-dark">
					<hr class="border-light">
					<hr class="border-light">
					<hr class="border-light">
					<h2 class="text-light font-weight-bold">BUYING A CAR? LOOK UP THE VIN HERE!</h2>
				</Bcol>

				<BCol cols="12" sm="6" xl="3" class="d-none d-md-block bg-primary">
					<h5 class="p-5 text-light">
						Make An Informed Decision With An Instant Vehicle History Report From An Online VIN Lookup
					</h5>
				</BCol>

				<BCol cols="12" sm="12" xl="6" class="py-5 bg-white">
					<!-- [FORM]  -->
					<form @submit.prevent="submitForm()" class="text-dark">
						<h4 class="mb-3 font-weight-bold">Search your vin below!</h4>
						<!-- [INPUT] vin -->
						<input
							v-model="vin"
							type="input"
							id="vin"
							class="form-control mb-3"
						>

						<!-- [SUBMIT] -->
						<BButton
							variant="primary"
							class="btn-style btn-style-1 w-100"
							type="submit"
						>Check Now</BButton>
					</form>
				</BCol>
			</BRow>			
		</BContainer>

		<Info class="position-relative w-100 mx-auto" style="top: -100px; max-width: 1000px;" />
		<Info2 class="position-relative w-100 mx-auto" style="top: -100px;" />

	</div>
</template>

<script>
	import Info from '../../components/home/Info'
	import Info2 from '../../components/home/Info2'
	import router from '../../router'

	export default {
		data() {
			return {
				vin: '',
			}
		},

		components: {
			Info,
			Info2,
		},

		methods: {
			submitForm() {
				if (this.vin) {
					router.push({ name: 'preview', params: { vin: this.vin }})
				}
			},
		},

		mounted() {
			this.$store.state.showSpacer = false
		},

		destroyed() {
			this.$store.state.showSpacer = true
		},
	}
</script>

<style lang="scss" scoped>
	.spacer {
		background: url('https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg') no-repeat center;
		background-size: cover;
		position: relative;
		z-index: 0;
		display: grid;
		align-items: center;
		top: 0;
		height: 80vh;
	}

	.spacer h2.title {
		font-size: 34px;
		font-weight: 400;
		color: #fff;
		padding-top: 60px;
	}

	.spacer::before {
		content: "";
		position: absolute;
		top: 0;
		min-height: 100%;
		left: 0;
		right: 0;
		z-index: -1;
		background-color: #000;
		opacity: .7;
	}

	@media (max-width: 640px) {
		.spacer h2.title {
			font-size: 34px;
		}

		.spacer {
			height: 40vh;
		}
	}

	@media (max-width: 600px) {
		.spacer h2.title {
			font-size: 30px;
		}
	}
</style>