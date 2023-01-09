import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'ค้นหา' }).click();
  await page.getByRole('combobox', { name: 'ค้นหา' }).fill('จิดาภา');
  await page.getByRole('combobox', { name: 'ค้นหา' }).press('Enter');
});


