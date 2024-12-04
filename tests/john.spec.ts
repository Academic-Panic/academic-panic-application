import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Create Course' }).click();
  await page.getByRole('link', { name: 'List Courses' }).click();
  await page.getByRole('link', { name: 'Create Course' }).click();
  await page.locator('input[name="title"]').click();
  await page.locator('input[name="title"]').fill('ICS 314');
  await page.locator('input[name="title"]').press('Tab');
  await page.locator('input[name="section"]').fill('2');
  await page.locator('input[name="section"]').press('Tab');
  await page.getByRole('combobox').selectOption('Fall');
  await page.locator('input[name="year"]').click();
  await page.locator('input[name="year"]').fill('2024');
  await page.locator('input[name="instructor"]').click();
  await page.locator('input[name="instructor"]').fill('David Brook Conner');
  await page.getByRole('button', { name: 'Submit' }).click();
});