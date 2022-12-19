<script lang="ts">
	import RailCard from '$lib/RailCard.svelte';
	import Search from '$lib/Search.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="container">
	<div class="search">
		<Search />
	</div>

	<main>
		{#each data.rails as rail}
			<RailCard title={rail.title} image={rail.image} href={rail.href} />
		{/each}
	</main>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
		padding: 5rem 1rem 1rem 1rem;
	}

	.search {
		width: 100%;
		max-width: 600px;
	}

	main {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		gap: 1rem;
	}
</style>
