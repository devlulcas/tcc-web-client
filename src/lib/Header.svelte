<!-- TYPESCRIPT -->
<script lang="ts">
	import logo from '$assets/logo.svg';
	import MenuButton from './MenuButton.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import NavItems from './NavItems.svelte';

	let mobileMenuIsOpen = false;

	const toggleNavigationModal = () => {
		mobileMenuIsOpen = !mobileMenuIsOpen;
	};

	const links = [
		{ label: 'Inicio', href: '/' },
		{ label: 'Sobre', href: '/about' },
		{ label: 'Trilhas', href: '/trails' },
		{ label: 'Entrar', href: '/login' }
	];
</script>

<!-- HTML -->
<div class="placeholder" />
<header>
	<a href="/" class="wrapper logo">
		<img src={logo} alt="logo" title="Learn" />
	</a>

	<div class="wrapper menu-button">
		<MenuButton active={mobileMenuIsOpen} on:click={toggleNavigationModal} />
	</div>

	<div class="wrapper nav">
		<NavItems items={links} />
	</div>
</header>

{#if mobileMenuIsOpen}
	<MobileMenu items={links} toggle={toggleNavigationModal} />
{/if}

<!-- STYLES - SCSS -->
<style lang="scss">
	.placeholder {
		height: var(--header-height);
	}

	header {
		z-index: 10;
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--header-height);
		display: flex;
		align-items: center;
		padding: 1rem;
		color: var(--on-primary);
		backdrop-filter: blur(1rem);
	}

	.wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.menu-button {
		@media screen and (min-width: 90rem) {
			display: none;
		}
	}

	.logo {
		justify-content: flex-start;
	}

	.nav {
		display: none;

		@media screen and (min-width: 90rem) {
			display: flex;
		}
	}
</style>
