import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('link', { name: 'Academic Panic' }).click();
  await page.getByRole('link', { name: 'Create Course' }).click();
  await page.getByRole('link', { name: 'List Courses' }).click();
  await page.getByRole('heading', { name: 'Courses' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('heading', { name: 'List Stuff Admin' }).click();
  await page.getByRole('heading', { name: 'List Users Admin' }).click();
  await page.getByText('List Stuff AdminTitleSectionSemesterYearInstructorICS 3141Spring2024David Brook').click();
  await page.getByText('List Users AdminEmailRolejohn').click();
});