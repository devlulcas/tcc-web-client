<div class="container">
	<slot />

	<strong class="warn">
		Se já tiver uma conta, <a href="/login">faça login</a>, caso contrário
		<a href="/register">crie uma conta</a>.
	</strong>
</div>

<style lang="scss">
	.container {
		display: grid;
		place-content: center;
		height: calc(100vh - var(--header-height));
	}

	.warn {
		font-size: clamp(1.2rem, 1.5vw, 1.3rem);
		font-weight: 400;
		text-align: center;
		margin-block: 3rem;

		& a {
			color: var(--secondary);
			text-decoration: none;
			font-weight: 900;
		}
	}
</style>
