export async function load() {
	const rail = {
		title: 'Rails',
		image:
			'https://images.unsplash.com/photo-1551122089-4e3e72477432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		description:
			'Rails is a web application development framework written in Ruby. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks. Experienced Rails developers also report that it makes web application development more fun.',
		href: 'https://rubyonrails.org/'
	};

	return {
		rails: Array(30).fill(rail)
	};
}
