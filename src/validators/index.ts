type Validator = (value: unknown) => string | undefined;

export const requiredValidation: Validator = (value) => {
	if (!value) {
		return 'Este campo é obrigatório';
	}

	return undefined;
};

export const emailValidation: Validator = (value) => {
	if (typeof value !== 'string') {
		return 'E-mail inválido';
	}

	const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	if (!regex.test(value)) {
		return 'Email inválido';
	}

	return undefined;
};
