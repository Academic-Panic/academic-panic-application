import { test as setup } from '@playwright/test';

const adminFile = 'adminAuth.json';

setup('authenticate as admin', async ({ context }) => {
  let page = await context.newPage();
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('localhost:3000/auth/signin');
  await page.getByPlaceholder('Email').fill('admin@foo.com');
  await page.getByPlaceholder('Password').fill('changeme');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.close();
  page = await context.newPage();
  await page.goto('localhost:3000/listCourse');
  await page.goto('github.com');
  // await page.waitForURL('localhost:3000/listCourse');
  // await page.context().storageState({ path: adminFile });
});

// const userFile = 'johnAuth.json';
//
// setup('authenticate as john', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   await page.goto('localhost:3000/auth/signin');
//   await page.getByPlaceholder('Email').fill('john@foo.com');
//   await page.getByPlaceholder('Password').fill('changeme');
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   await page.waitForURL('localhost:3000/listCourse');
//   await page.context().storageState({ path: userFile });
// });
