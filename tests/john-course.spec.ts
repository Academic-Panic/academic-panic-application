import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('link', { name: 'Academic Panic' }).click();
  await page.getByRole('link', { name: 'Create Course' }).click();
  await page.getByRole('link', { name: 'List Courses' }).click();
  await page.getByRole('heading', { name: 'Courses' }).click();
});