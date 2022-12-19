import { emailValidation, requiredValidation } from '$validators';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const name = data.get('name');
		const password = data.get('password');

		const emailError = emailValidation(email);
		const nameError = requiredValidation(name);
		const passwordError = requiredValidation(password);

		if (emailError || nameError || passwordError) {
			return fail(400, {
				email: { value: email, error: emailError },
				name: { value: name, error: nameError },
				password: { value: password, error: passwordError }
			});
		}

		console.log(email, password, name);
	}
};
