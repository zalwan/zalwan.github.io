import { expect, test } from '@playwright/test';

test.describe('portfolio smoke checks', () => {
	test('home page renders profile, navigation, and hero image', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle('Zalwan Studio');
		await expect(page.getByRole('banner')).toContainText('Zalwan');
		await expect(page.getByRole('heading', { name: 'Rizal Suryawan' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'Chat on WhatsApp' })).toHaveAttribute(
			'href',
			/wa\.me/
		);
		await expect(page.getByAltText('Rizal Suryawan portrait')).toBeVisible();
	});

	for (const route of [
		{ path: '/blog', heading: 'Articles' },
		{ path: '/projects', heading: 'Projects' },
		{ path: '/about', heading: 'Rizal Suryawan' },
		{ path: '/contact', heading: "Let's Connect" }
	]) {
		test(`${route.path} renders`, async ({ page }) => {
			await page.goto(route.path);

			await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();
		});
	}
});
