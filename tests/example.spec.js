import { test, expect } from '@playwright/test';
import { obj as data } from '../fixture/data/login_data.js'
import { getUsername } from '../pages/login-page'

test('test', async ({ page }) => {
  await page.goto('https://portal-uat.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');
  await page.goto('https://portal-uat.mac-non-prod.appmanteam.com/auth/realms/mac-portal/protocol/openid-connect/auth?client_id=mac-case-keeper&redirect_uri=https%3A%2F%2Fportal-uat.mac-non-prod.appmanteam.com%2Fapps%2Fcase-keeper%2Fv1%2Fdashboard&state=a53b7c11-58da-4b1b-8eac-baca52671b74&response_mode=fragment&response_type=code&scope=openid&nonce=3a5d26e8-fe74-4ced-86aa-11dfe4483b78&kc_idp_hint=mac-portal');

  const username = getUsername(page)
  await username.fill(data.username);
  await page.getByLabel('Password').fill(data.password);
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('row', { name: 'ฟหก ฟหก 6833 Dip Chip 0638261529 - 05/01/2566 - 10/01/2566 - open' }).getByRole('cell').filter({ hasText: 'Case DetailsSend link historyDownload PDF fileDownload zip fileRemarkResendDelet' }).click();

  // await loginBtn().first().click();
});