import { expect, test } from '@playwright/test';

test('página inicial apresenta call to action', async ({ page }) => {
	await page.goto('/');
	const cta = await page.getByTestId('cta');
	expect(cta).toBeVisible();
});

test('página de trilhas apresenta lista geral de trilhas', async ({ page }) => {
	await page.goto('/rails');
	const railsList = await page.getByTestId('rails');
	expect(railsList).not.toBeEmpty();
});

test('clicar em uma trilha leva a página de tópicos da mesma', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	const railsName = await firstRails.getByRole('heading').textContent();
	await firstRails.click();
	const railsTitle = page.getByTestId('rails-title');
	expect(railsTitle).not.toBeNull();
	expect(railsTitle.textContent()).toBe(railsName);
});

test('clicar em um tópico leva a página de conteúdo do mesmo', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	const topicName = await firstTopic.getByRole('heading').textContent();
	await firstTopic.click();
	const topicTitle = page.getByTestId('topic-title');
	expect(topicTitle).not.toBeNull();
	expect(topicTitle.textContent()).toBe(topicName);
});

test('clicar em um conteúdo leva a página de conteúdo do mesmo', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const firstContent = page.getByTestId('content');
	const contentName = await firstContent.getByRole('heading').textContent();
	await firstContent.click();
	const contentTitle = page.getByTestId('content-title');
	expect(contentTitle).not.toBeNull();
	expect(contentTitle.textContent()).toBe(contentName);
});

test('clicar em "Voltar" leva a página anterior', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const firstContent = page.getByTestId('content');
	await firstContent.click();
	const backButton = page.getByTestId('back-button');
	await backButton.click();
	const topicTitle = page.getByTestId('topic-title');
	expect(topicTitle).not.toBeNull();
});

test('fazer login com usuário válido', async ({ page }) => {
	await page.goto('/login');
	const emailInput = page.getByTestId('email-input');
	const passwordInput = page.getByTestId('password-input');
	const submitButton = page.getByTestId('submit-button');
	await emailInput.fill('test@mail.com');
	await passwordInput.fill('12345678');
	await submitButton.click();
	const logoutButton = page.getByTestId('logout-button');
	expect(logoutButton).not.toBeNull();
});

test('fazer login com usuário inválido', async ({ page }) => {
	await page.goto('/login');
	const emailInput = page.getByTestId('email-input');
	const passwordInput = page.getByTestId('password-input');
	const submitButton = page.getByTestId('submit-button');
	await emailInput.fill('invalid email');
	await passwordInput.fill('12345678');
	await submitButton.click();
	const errorMessage = page.getByTestId('error-message');
	expect(errorMessage).not.toBeNull();
});

test('fazer logout', async ({ page }) => {
	await page.goto('/login');
	const emailInput = page.getByTestId('email-input');
	const passwordInput = page.getByTestId('password-input');
	const submitButton = page.getByTestId('submit-button');
	await emailInput.fill('test@mail.com');
	await passwordInput.fill('12345678');
	await submitButton.click();
	const logoutButton = page.getByTestId('logout-button');
	await logoutButton.click();
	const loginButton = page.getByTestId('login-button');
	expect(loginButton).not.toBeNull();
});

test('clicar em contribuir na página de conteúdos de um tópico leva as opções de contribuição', async ({
	page
}) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const contributeButton = page.getByTestId('contribute-button');
	await contributeButton.click();
	const contributeOptions = page.getByTestId('contribute-options');
	expect(contributeOptions).not.toBeNull();
});

test('é possível contribuir com um conteúdo em forma de url', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const contributeButton = page.getByTestId('contribute-button');
	await contributeButton.click();
	const contributeOptions = page.getByTestId('contribute-options');
	const urlOption = contributeOptions.getByTestId('url-option');
	await urlOption.click();

	const urlInput = page.getByTestId('url-input');
	await urlInput.fill('https://www.google.com');

	const titleInput = page.getByTestId('title-input');
	await titleInput.fill('Google');

	const descriptionInput = page.getByTestId('description-input');
	await descriptionInput.fill('O Google é um site de busca.');

	const submitButton = page.getByTestId('submit-button');
	await submitButton.click();

	const successMessage = page.getByTestId('success-message');
	expect(successMessage).not.toBeNull();
});

test('é possível contribuir com um conteúdo em forma de arquivo', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const contributeButton = page.getByTestId('contribute-button');
	await contributeButton.click();
	const contributeOptions = page.getByTestId('contribute-options');
	const fileOption = contributeOptions.getByTestId('file-option');
	await fileOption.click();

	const fileInput = page.getByTestId('file-input');
	await fileInput.setInputFiles('test.pdf');

	const titleInput = page.getByTestId('title-input');
	await titleInput.fill('Teste');

	const descriptionInput = page.getByTestId('description-input');
	await descriptionInput.fill('Esse é um teste.');

	const submitButton = page.getByTestId('submit-button');
	await submitButton.click();

	const successMessage = page.getByTestId('success-message');
	expect(successMessage).not.toBeNull();
});

test('é possível contribuir com um conteúdo em forma de texto', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const contributeButton = page.getByTestId('contribute-button');
	await contributeButton.click();
	const contributeOptions = page.getByTestId('contribute-options');
	const textOption = contributeOptions.getByTestId('text-option');
	await textOption.click();

	const titleInput = page.getByTestId('title-input');
	await titleInput.fill('Teste');

	const descriptionInput = page.getByTestId('description-input');
	await descriptionInput.fill('#Esse é um teste.');

	const submitButton = page.getByTestId('submit-button');
	await submitButton.click();

	const successMessage = page.getByTestId('success-message');
	expect(successMessage).not.toBeNull();
});

test('é possível contribuir com um conteúdo em forma de vídeo', async ({ page }) => {
	await page.goto('/rails');
	const railsList = page.getByTestId('rails');
	const firstRails = railsList.first();
	await firstRails.click();
	const firstTopic = page.getByTestId('topic');
	await firstTopic.click();
	const contributeButton = page.getByTestId('contribute-button');
	await contributeButton.click();
	const contributeOptions = page.getByTestId('contribute-options');
	const videoOption = contributeOptions.getByTestId('video-option');
	await videoOption.click();

	const urlInput = page.getByTestId('url-input');
	await urlInput.fill('https://www.youtube.com/watch?v=9bZkp7q19f0');

	const titleInput = page.getByTestId('title-input');
	await titleInput.fill('Teste');

	const descriptionInput = page.getByTestId('description-input');
	await descriptionInput.fill('Esse é um teste.');

	const submitButton = page.getByTestId('submit-button');
	await submitButton.click();

	const successMessage = page.getByTestId('success-message');
	expect(successMessage).not.toBeNull();
});
