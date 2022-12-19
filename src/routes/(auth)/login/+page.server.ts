import { emailValidation, requiredValidation } from '$validators';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		const emailError = emailValidation(email);
		const passwordError = requiredValidation(password);

		if (emailError || passwordError) {
			return fail(400, {
				email: { value: email, error: emailError },
				password: { value: password, error: passwordError }
			});
		}

		console.log(email, password);
	}
};
