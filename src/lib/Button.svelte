<script lang="ts">
	export let icon: Element | null = null;
</script>

<button {...$$restProps}>
	{#if icon}
		{icon}
	{/if}

	<slot />
</button>

<style lang="scss">
	button {
		--background: hsl(var(--secondary-h) var(--secondary-s) var(--secondary-l) / 40%);
		--focus-background: hsl(var(--secondary-h) var(--secondary-s) var(--secondary-l) / 60%);

		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 900;
		background-color: var(--background);
		padding: 1rem 2rem;
		outline: none;
		width: fit-content;
		color: var(--on-secondary);

		&:hover {
			background-color: hsl(var(--secondary-h) var(--secondary-s) var(--secondary-l) / 50%);
		}

		&:focus {
			background-color: var(--focus-background);
			box-shadow: 0 0 0 3px hsl(var(--secondary-h) var(--secondary-s) var(--secondary-l) / 40%);
		}
	}
</style>
