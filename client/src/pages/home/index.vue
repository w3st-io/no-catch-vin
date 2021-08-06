<template>
	<div class="">
		<!-- [SPACER] --> 
		<section class="spacer text-center top-0">
			<div class="">
				<div class="container">
					<h1 class="text-center text-light title">
						No Catch. Just Lookup Your Vin.
					</h1>
				</div>
			</div>
		</section>

		<BContainer class="my-3 vin-lookup">
			<BRow class="shadow">
				<BCol cols="12" sm="6" xl="3" class="d-none d-md-block bg-dark">
					<hr class="border-light">
					<hr class="border-light">
					<hr class="border-light">
					<h2 class="text-light font-weight-bold">BUYING A CAR? LOOK UP THE VIN HERE!</h2>
				</Bcol>
				<BCol cols="12" sm="6" xl="3" class="d-none d-md-block bg-primary">
					<h5 class="p-5 text-light">Make An Informed Decision With An Instant Vehicle History Report From An Online VIN Lookup</h5>
				</BCol>
				<BCol cols="12" sm="12" xl="6" class="py-5 bg-white">
					<h4 class="mb-3">Search your vin below!</h4>
					<input type="text" class="form-control mb-3">
					<BButton variant="primary" class="w-100">Search</BButton>
				</BCol>
			</BRow>			
		</BContainer>

	</div>
</template>

<script>
	export default {
		mounted() {
			this.$store.state.showSpacer = false
		},

		destroyed() {
			this.$store.state.showSpacer = true
		},
	}
</script>

<style lang="scss" scoped>

	.vin-lookup {
		position: relative;
		top: -80px;
	}

	.nav {
		z-index: 100;
		transition: .5s;
	}

	/*--//contact--*/
	/*--/breadcrumb--*/
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