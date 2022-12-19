<script lang="ts">
	import Button from '$lib/Button.svelte';
	import FormField from '$lib/FormField.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<form action="?/register" method="post" use:enhance>
	<h1>Crie sua conta</h1>

	<FormField
		error={form?.email.error}
		value={form?.email.value ?? ''}
		label="Seu e-mail:"
		type="email"
		name="email"
		id="email"
		placeholder="Digite seu e-mail"
		required
	/>

	<FormField
		error={form?.name.error}
		value={form?.name.value ?? ''}
		label="Seu nome:"
		type="text"
		name="name"
		id="name"
		placeholder="Digite seu nome"
		required
	/>

	<FormField
		error={form?.password.error}
		value={form?.password.value ?? ''}
		label="Sua senha:"
		type="password"
		name="password"
		id="password"
		placeholder="Digite sua senha"
		required
	/>

	<Button formaction="?/register">Criar conta</Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
		gap: 1rem;
	}

	h1 {
		font-size: clamp(2rem, 3vw, 6rem);
		font-weight: 900;
	}
</style>
