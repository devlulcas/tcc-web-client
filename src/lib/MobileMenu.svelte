<!-- TYPESCRIPT -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import NavItems from './NavItems.svelte';

	export let toggle: () => void;

	export let items: { label: string; href: string }[];
</script>

<!-- HTML -->
<div on:click={toggle} on:keydown={toggle} transition:fade={{ duration: 300, easing: circOut }}>
	<NavItems {items} />
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: calc(100% - 5.75rem);
		padding: 1rem;
		z-index: 100;
		background-color: hsl(0 0% 0% / 25%);

		@media screen and (min-width: 90rem) {
			display: none;
		}
	}
</style>
