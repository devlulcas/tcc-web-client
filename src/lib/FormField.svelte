<script lang="ts">
	export let label: string;
	export let id: string;
	export let error: string | undefined = undefined;
</script>

<div>
	<label for={id}>{label}</label>
	<input {...$$restProps} {id} />
	{#if error}
		<p class="error">{error}</p>
	{:else}
		<p class="error">&nbsp;</p>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 900;
	}

	input {
		--background: hsl(var(--primary-h) var(--primary-s) var(--primary-l) / 40%);
		--focus-background: hsl(var(--primary-h) var(--primary-s) var(--primary-l) / 60%);

		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 400;
		background-color: var(--background);
		padding: 1rem;
		outline: none;

		&:focus {
			background-color: var(--focus-background);
			box-shadow: 0 0 0 3px var(--focus-background);
		}

		&::placeholder {
			color: var(--on-primary);
		}
	}

	.error {
		color: var(--error);
		font-size: clamp(1rem, 1.5vw, 1.5rem);
	}
</style>
