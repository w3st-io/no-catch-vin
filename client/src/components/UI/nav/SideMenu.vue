<template>
	<nav
		class="bg-dark shadow opacity-90 nav-drawer-menu"
		:class="{ isOpen: $store.state.showMenu }"
		style="z-index: 1040;"
	>
		<!-- Close Button -->
		<BButton
			variant="dark"
			class="w-100 m-0 p-4 bg-secondary text-primary"
			@click="closeMenu()"
		><XIcon size="36" /></BButton>

		<SearchForm class="mx-2 my-4" />

		<!-- Menu Page Link -->
		<RouterLink
			v-show="$store.state.showMenu"
			v-for="(button, i) in buttons"
			:key="i"
			:to="button.path"
		>
			<!-- Menu Items -->
			<BButton
				variant="outline-seconadry"
				class="w-100 text-primary"
				@click="closeMenu()"
			>
				<p v-if="button.text" class="h1 my-1">{{ button.text }}</p>
				<span v-else v-html="button.sideMenuIcon"></span>
			</BButton>
		</RouterLink>

		<!-- Address -->
		<a
			v-show="$store.state.showMenu"
			:href="companyInfo.googleMapsLink"
			class="text-center"
		><h4 class="m-4 text-light">{{ companyInfo.address }}</h4></a>

		<!-- Social Media -->
		<SocialMediaPlug
			v-show="$store.state.showMenu"
			size="2x"
			variant="light"
			class="m-4"
		/>
	</nav>
</template>
<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SearchForm from '@/components/search/SearchForm'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	export default {
		components: {
			XIcon,
			SearchForm,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
				query: ''
			}
		},

		methods: {
			closeMenu() {
				this.$store.state.showMenu = !this.$store.state.showMenu
				this.$emit('closeMenu')
			},

			homeBtn() {
				this.$store.state.showMenu = !this.$store.state.showMenu
				router.push({ name: '/' })
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		position: fixed;
		top: 0;
		left: 0;

		height: 100%;
		width: 0;

		overflow-x: hidden;
		transition: 0.5s;
	}

	.nav-drawer-menu button {
		transition: 0.3s;
		font-size: 2em;

		&:hover { background: rgba(0, 0, 0, 0.2); }
	}
	
	.isOpen { width: 75%; }
</style>