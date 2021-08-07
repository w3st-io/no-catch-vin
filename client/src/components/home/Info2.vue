<template>
	<section class="features-4">
		<div class="features4-block py-5">
			<BContainer class="py-lg-4">
				<!--  -->
				<div class="title-content text-center mb-lg-5 mt-4">
					<h6 class="sub-title">What can you</h6>
					<h3 class="hny-title">Expect From Our Reports?</h3>
					<p class="fea-para">
						Unlike other online VIN lookup vehicle history report providers, vinhistoryreportsamera.com offers users comprehensive, real-time Federal Gov’t Title & Total Loss data & more, at an affordable price.
					</p>
				</div>
				<!--  -->
				<BRow class="features4-grids text-left mt-lg-4">
					<BCol md="6" lg="3" class="features4-grid mt-4">
						<div class="features4-grid-inn">
							<div class="img-featured">
								<div class="ch-item ch-img-1">
									<div class="ch-info-wrap">
										<div class="ch-info">
											<div class="ch-info-front ch-img-1"></div>
											<div class="ch-info-back">
												<h4>TITLE CHECK</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="features4-rightinfo">
								<h5><a href="#URL">TITLE CHECK</a></h5>
								<p>Checks current and historical title records for over 60 different types of title brands.</p>
							</div>
						</div>
					</BCol>
					
					<BCol md="6" lg="3" class="features4-grid mt-4">
						<div class="features4-grid-inn">
							<div class="img-featured">
								<div class="ch-item ch-img-2">
									<div class="ch-info-wrap">
										<div class="ch-info">
											<div class="ch-info-front ch-img-2"></div>
											<div class="ch-info-back">
												<h4>PROBLEM CHECKLIST</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="features4-rightinfo">
								<h5><a href="#URL">
									PROBLEM CHECKLIST</a>
								</h5>
								<p>We provide accident history reports with localized damage</p>
							</div>
						</div>
					</BCol>
					
					<BCol md="6" lg="3" class="features4-grid mt-4">
						<div class="features4-grid-inn">
							<div class="img-featured">
								<div class="ch-item ch-img-3">
									<div class="ch-info-wrap">
										<div class="ch-info">
											<div class="ch-info-front ch-img-3"></div>
											<div class="ch-info-back">
												<h4>ACCIDENT HISTORY</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="features4-rightinfo">
								<h5><a href="/">ACCIDENT HISTORY</a></h5>
							</div>
						</div>
					</BCol>

					<BCol md="6" lg="3" class="features4-grid mt-4">
						<div class="features4-grid-inn">
							<div class="img-featured">
								<div class="ch-item ch-img-4">
									<div class="ch-info-wrap">
										<div class="ch-info">
											<div class="ch-info-front ch-img-4"></div>
											<div class="ch-info-back">
												<h4>SERVICE HISTORY</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="features4-rightinfo">
								<h5><a href="#URL">
									SERVICE HISTORY</a>
								</h5>
								<p>Access possible dealer maintenance and manufacturer recommended service records.</p>
							</div>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</div>
	</section>	
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/bootstrap-override.scss';

.features-4 .features4-block {
	@extend .bg-light;
}

.features4-grid-inn {
	text-align: center;
}

.features-4 .features4-grid {
	margin-bottom: 30px;
}


.features-4 .features4-grid h5 a {
	font-size: 24px;
	line-height: 25px;
	color: #272121;
	display: block;
	text-transform: capitalize;
	margin-bottom: 10px;
	font-weight: 700;
}

.features-4 .features4-grid p {
	margin-top: 0px;
	margin-bottom: 0px;
	color: #777;
}

.features-4 span.fa.icon-fea4 {
	font-size: 40px;
	margin-bottom: 16px;

	@extend .text-primary;
}

.features-4 .features4-grid h5 a:hover,
.features-4 .features4-grid:hover span.fa.icon-fea4 {
	@extend .text-primary;
	
	transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
}

.img-featured {
	width: 220px;
	height: 220px;
	display: inline-block;
	margin: 20px;
}

.ch-item {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	position: relative;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	cursor: default;
}

.ch-info-wrap,
.ch-info {
	position: absolute;
	width: 180px;
	height: 180px;
	border-radius: 50%;
}

.ch-info-wrap {
	top: 20px;
	left: 20px;
	background: #f9f9f9 url(https://www.americanvinhistory.com/assets/images/bg.jpg);
	box-shadow:
	0 0 0 20px rgba(255, 255, 255, 0.2),
	inset 0 0 3px rgba(115, 114, 23, 0.8);
}

.ch-info>div {
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	background-position: center center;

	-webkit-backface-visibility: hidden;
	/*Just for webkit to have a smooth font*/
	display: grid;
	align-items: center;
}

.ch-info .ch-info-front {
	-webkit-transition: all 0.6s ease-in-out;
	-moz-transition: all 0.6s ease-in-out;
	-o-transition: all 0.6s ease-in-out;
	-ms-transition: all 0.6s ease-in-out;
	transition: all 0.6s ease-in-out;
}

.ch-info .ch-info-back {
	opacity: 0;
	background: var(--secondary-color);
	pointer-events: none;

	-webkit-transform: scale(1.5);
	-moz-transform: scale(1.5);
	-o-transform: scale(1.5);
	-ms-transform: scale(1.5);
	transform: scale(1.5);

	-webkit-transition: all 0.4s ease-in-out 0.2s;
	-moz-transition: all 0.4s ease-in-out 0.2s;
	-o-transition: all 0.4s ease-in-out 0.2s;
	-ms-transition: all 0.4s ease-in-out 0.2s;
	transition: all 0.4s ease-in-out 0.2s;
}

.ch-img-1 {
	background-image: url(https://www.americanvinhistory.com/assets/images/img1.jpg);
}

.ch-img-2 {
	background-image: url(https://www.americanvinhistory.com/assets/images/img2.jpg);
}

.ch-img-3 {
	background-image: url(https://www.americanvinhistory.com/assets/images/img3.jpg);
}

.ch-img-4 {
	background-image: url(https://www.americanvinhistory.com/assets/images/img4.jpg);
}

.ch-info h4 {
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 18px;
	margin: 0 15px;
	font-family: 'Poppins', sans-serif;
	text-shadow:
	0 0 1px #fff,
	0 1px 2px rgba(0, 0, 0, 0.3);
}

.ch-item:hover .ch-info-back {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-o-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
	pointer-events: auto;
}

@media all and (max-width:1080px) {
	.img-featured {
		width: 200px;
		height: 200px;
		display: inline-block;
		margin: 10px;
	}

	.ch-info-wrap,
	.ch-info {
		position: absolute;
		width: 160px;
		height: 160px;
		border-radius: 50%;
	}

	.features-4 .features4-grid h5 a {
		font-size: 20px;
	}

}

@media all and (max-width: 767px) {
	.features-4 .features4-grid {
		margin-bottom: 20px;
	}

	.features-4 .features4-grid h5 a {
		font-size: 20px;
		line-height: 25px;
	}

	.ch-info h4 {
		font-size: 14px;
	}
}
</style>