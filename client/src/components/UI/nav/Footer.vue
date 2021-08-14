<template>
	<!-- Footer -->
	<footer class="page-footer pt-5 text-center font-small bg-dark">
		<BContainer fluid>
			<BRow clas="w-100">
				<BCol cols="12" md="6">
					<!-- [USER] -->
					<BButton
						v-if="$store.state.userLogged"
						variant="outline-secondary"
						size="sm"
						@click="logout()"
					>Log Out</BButton>
				</BCol>

				<BCol cols="12" md="6">
					<RouterLink to="/legal">Legal Disclaimer</RouterLink>
				</BCol>

				<!-- Copyright -->
				<BCol cols="12">
					<div class="pt-3 pb-5 footer-copyright text-secondary">
						<a href="https://w3st.io/"></a>
						© {{ new Date().getFullYear() }}
						<br>
						<a href="https://iexcloud.io">Data provided by IEX Cloud</a>
						<h6><i class="text-dark">"Dare I say it..?"</i></h6>
					</div>
				</BCol>
			</BRow>
		</BContainer>
	</footer>
</template>

<script>
	import router from '@/router'
	import UserService from '@/services/user/UserService'

	export default {
		methods: {
			logout() {
				UserService.s_logout()

				router.push({ name: 'user_login' })
			},
		}
	}
</script>

<style scoped>
	* { color: white; }
</style>