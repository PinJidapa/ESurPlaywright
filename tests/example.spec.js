import { test, expect } from '@playwright/test';
import { obj as data } from '../fixture/data/login_data.js'
import {
  inputUserName
} from '../pages'

test('Login', async ({ page }) => {
  await page.goto('https://claimmate-qa.mac-non-prod.appmanteam.com/apps/e-surveyor/lobby');
  await inputUserName(page, data.username, data.password)
  // await page.locator('xpath=//*[@id="kc-login"]');
  // await loginBtn().first().click();
 //wait.until(ExpectedConditions.elementToBeClickable(page.locator('xpath=//*[@id="kc-login"]'))).is();
})