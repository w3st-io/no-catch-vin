<template>
	<div>
		<!-- Top Bar -->
		<div class="position-fixed w-100 top-0 nav transition" :class="navClass">
			<BContainer>
				<nav class="px-0 navbar navbar-expand-lg navbar-dark">
					<!-- Logo -->
					<div>
						<RouterLink to="/home" class="d-none d-sm-block py-0 px-3 navbar-brand">
							<h2
								class="m-0 px-2 border-5 border border-primary"
								style="border-width: 3px !important;"
							>
								<span
									class="font-weight-light transition"
									:class="titleClass"
								>No</span>
								<span class="text-primary font-weight-light">
									Catch
								</span>
								<span
									class="font-weight-light transition"
									:class="titleClass"
								>Vin Service</span>
							</h2>
						</RouterLink>
					</div>

					<!-- [HIDDEN] Menu Button -->
					<button
						class="navbar-toggler bg-primary rounded-0"
						@click="$store.state.showMenu = !$store.state.showMenu"
					><MenuIcon class="text-light" /></button>
				</nav>
			
				<BNavbar class="px-0 pb-3">
					<div class="mr-auto d-none d-sm-block">
						<RouterLink
							v-for="(button, i) in buttons"
							:key="i"
							:to="button.path"
							class="transitiion"
							
						>
							<span
								variant="none"
								size="sm"
								class="ml-3 text-light"
								:class="titleClass"
							>
								<span v-if="button.text" class="font-weight-bold m-link">
									{{ button.text }}
								</span>
								<span v-else v-html="button.navIcon" class="m-link"></span>
							</span>
						</RouterLink>
					</div>

					<div class="ml-auto">
						<BButton
							v-if="$store.state.userLogged"
							variant="primary"
							size="sm"
							class="ml-2"
							@click="profileRedirect()"
						>{{ $store.state.user_decoded.username }}</BButton>

						<!-- NOT Logged In -->
						<BButton
							v-if="!$store.state.userLogged"
							variant="primary"
							size="sm"
							@click="loginRedirect()"
						>Login</BButton>
						
						<BButton
							v-if="!$store.state.userLogged"
							variant="secondary"
							size="sm"
							class="ml-2"
							@click="registerRedirect()"
						>Register</BButton>
					</div>
				</BNavbar>
			</BContainer>
		</div>

		<!-- [SPACER] --> 
		<section v-if="$store.state.showSpacer" class="spacer text-center top-0">
			<div class="">
				<div class="container">
					<h2 class="title"></h2>
				</div>
			</div>
		</section>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/UI/nav/SideMenu'
	import defaultData from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				titleClass: '',
				navClass: '',
				defaultData: defaultData,
				query: '',
				notifications: '',
				totalNotifications: 0,
				buttons: buttons,
			}
		},

		methods: {
			loginRedirect() { router.push({ name: 'user_login' }) },

			registerRedirect() { router.push({ name: 'register' }) },

			profileRedirect() { router.push({ name: 'user_profile' }) },

			handleScroll() {
				if (window.scrollY > 0) {
					this.navClass = 'bg-light'
					this.titleClass = 'text-dark'
				}
				else {
					this.navClass = ''
					this.titleClass = ''
				}
			},
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/styles/bootstrap-override.scss';

	.transition {
		transition: .5s;
	}

	.nav {
		z-index: 100;
	}

	.bg-shade {
		background-color: rgba(0, 0, 0, 0.75);
	}

	.spacer {
		background: url('https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg') no-repeat center;
		background-size: cover;
		position: relative;
		z-index: 0;
		display: grid;
		align-items: center;
		top: 0;
		height: 111px;
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

	@media (max-width:640px) {
		.spacer h2.title {
			font-size: 34px;
		}
	}

	@media (max-width:600px) {
		.spacer h2.title {
			font-size: 30px;
		}
	}

	a.router-link-exact-active {
		span.m-link {
			@extend .border-bottom;
			@extend .border-primary;
			@extend .text-primary;

			border-width: 2px !important;
		}
	}
</style>