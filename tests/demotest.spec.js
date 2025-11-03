import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/library'); 
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //await page.waitForTimeout(50000);
  //await page.reload();

  
  const Title = await page.title();
console.log('Page Title is','('+ Title +')');
await page.locator('//a[normalize-space(text())="Ambassadors"]').scrollIntoViewIfNeeded();
await page.waitForTimeout(10000);
await expect(page.locator('//a[normalize-space(text())="Ambassadors"]')).toBeVisible();
await page.waitForTimeout(10000);
await expect(page.locator('//a[normalize-space(text())="Ambassadors"]')).toHaveText('Ambassadors');

});