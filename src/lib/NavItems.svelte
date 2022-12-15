<!-- TYPESCRIPT -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';

	export let items: { label: string; href: string }[];
</script>

<!-- HTML -->

<nav transition:fly={{ duration: 300, y: 64, opacity: 0, easing: circOut }}>
	{#each items as item}
		<a href={item.href}>{item.label}</a>
	{/each}
</nav>

<!-- STYLES - SCSS -->
<style lang="scss">
	nav {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		border: 1px solid hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.2);
		border-radius: 0.5rem;
		background: hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.2);
		backdrop-filter: blur(1rem);

		@media screen and (min-width: 90rem) {
			flex-direction: row;
			justify-content: flex-end;
			gap: 1rem;
			padding: 0;
			border: none;
			background: transparent;
		}
	}

	a {
		padding: 1rem;
		font-size: 1.4rem;
		text-decoration: none;
		color: var(--on-primary);
		font-weight: 600;
	}
</style>
