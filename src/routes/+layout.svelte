<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '$assets/styles/reset.scss';
	import '$assets/styles/variables.scss';
	import '$assets/styles/global.scss';
</script>

<svelte:head>
	<title>Learn</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<slot />
