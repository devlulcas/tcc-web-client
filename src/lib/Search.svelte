<script lang="ts">
	import { writable } from 'svelte/store';
	import Button from './Button.svelte';

	function searchBy(term: string) {
		if (term.length === 0) return [];

		return [
			'foo',
			'bar',
			'baz',
			'qux',
			'quux',
			'corge',
			'grault',
			'garply',
			'waldo',
			'fred',
			'plugh',
			'xyzzy',
			'thud'
		].filter((item) => item.includes(term));
	}

	export let searchTerm = '';

	export let results = writable<string[]>([]);

	function search() {
		results.set(searchBy(searchTerm));
	}

	$: results.set(searchBy(searchTerm));
</script>

<div class="container">
	<div class="search-box">
		<input id="search" label="Procure uma trilha" bind:value={searchTerm} />
		<Button on:click={search}>Search</Button>
	</div>

	<div class="results">
		<ul>
			{#if $results.length > 0}
				{#each $results as result}
					<li>{result}</li>
				{/each}
			{:else if searchTerm.length > 0}
				<li>Nenhum resultado encontrado</li>
			{/if}
		</ul>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
	}

	.search-box {
		display: flex;
		gap: 0.5rem;
		align-items: flex-end;
	}

	input {
		--background: hsl(var(--primary-h) var(--primary-s) var(--primary-l) / 40%);
		--focus-background: hsl(var(--primary-h) var(--primary-s) var(--primary-l) / 60%);

		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 400;
		background-color: var(--background);
		padding: 1rem;
		outline: none;
		width: 100%;

		&:focus {
			background-color: var(--focus-background);
			box-shadow: 0 0 0 3px var(--focus-background);
		}

		&::placeholder {
			color: var(--on-primary);
		}
	}

	.results {
		position: absolute;
		top: calc(100% + 0.5rem);
		left: 0;
		width: 100%;
		z-index: 1;
	}

	ul {
		width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: column;
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 0.5rem;
		backdrop-filter: blur(1rem);
		background-color: hsl(0deg 0% 100% / 25%);
	}

	li {
		background-color: hsl(0deg 0% 100% / 50%);
		padding: 1rem 0.5rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--brand-3);
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover {
		background-color: hsl(0deg 0% 100% / 50%);
	}
</style>
