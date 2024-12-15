import { test } from '@playwright/test';

test.use({
  storageState: 'adminAuth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Create Course' }).click();
  await page.locator('input[name="title"]').click();
  await page.locator('input[name="title"]').fill('ECE-343');
  await page.locator('input[name="section"]').click();
  await page.locator('input[name="section"]').fill('2');
  await page.getByRole('combobox').selectOption('Fall');
  await page.locator('input[name="year"]').click();
  await page.locator('input[name="year"]').fill('2024');
  await page.locator('input[name="instructor"]').click();
  await page.locator('input[name="instructor"]').fill('Anders Host-Madsen');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('cell', { name: 'john@foo.com' }).click();
  await page.getByRole('cell', { name: 'USER' }).click();
  await page.getByRole('cell', { name: 'admin@foo.com' }).click();
  await page.getByRole('cell', { name: 'ADMIN', exact: true }).click();
  await page.getByRole('heading', { name: 'List Users Admin' }).click();
  await page.getByRole('heading', { name: 'List Stuff Admin' }).click();
});

