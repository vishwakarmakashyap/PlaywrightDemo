import { test, expect } from '../fixtures/baseFixture.js';
import testData from '../data/testData.json' assert { type: 'json' };

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testData.urls.loginUrl);
  });

  test('should login with valid credentials', async ({ loginPage, dashboardPage }) => {
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    
    await expect(dashboardPage.page).toHaveURL(/dashboard/);
    expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
  });

  test.skip('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid credentials');
  });

  test('should logout successfully', async ({ authenticatedPage, dashboardPage }) => {
    await dashboardPage.logout();
    
    await expect(dashboardPage.page).toHaveURL(/login/);
  });
});