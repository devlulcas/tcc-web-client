<script lang="ts">
	export let title: string;
	export let image: string;
	export let href: string;
</script>

<article>
	<a {href}>
		<picture>
			<img src={image} alt={title} />
		</picture>

		<div>
			<h3>{title}</h3>
		</div>
	</a>
</article>

<style lang="scss">
	article {
		border-radius: 0.25rem;
		overflow: hidden;
		width: clamp(15rem, 100%, 25rem);
	}

	a {
		display: block;
		text-decoration: none;
		display: flex;
		flex-direction: column;
	}

	picture {
		display: block;
		width: 100%;
		aspect-ratio: 1/1;
		background: hsl(0 0% 90% / 50%);
		object-fit: contain;
	}

	img {
		display: block;
		width: 100%;
	}

	div {
		padding: 0.75rem;
		background: linear-gradient(45deg, var(--brand-3), var(--brand-4));
		color: var(--on-brand);
		width: 100%;
		display: flex;
		align-items: center;
	}

	h3 {
		font-size: 1.75rem;
		font-weight: 900;
	}
</style>
