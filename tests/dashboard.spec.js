import { test, expect } from '../fixtures/baseFixture.js';

test.describe('Dashboard Tests', () => {
  test('should display dashboard after login', async ({ authenticatedPage, dashboardPage }) => {
    expect(await dashboardPage.isDashboardVisible()).toBeTruthy();
    
    const title = await dashboardPage.getDashboardTitle();
    expect(title).toBe('Dashboard');
  });

  test('should navigate to different menu items', async ({ authenticatedPage, dashboardPage }) => {
    await dashboardPage.navigateToMenu('Admin');
    await expect(dashboardPage.page).toHaveURL(/admin/);
    
    await dashboardPage.navigateToMenu('PIM');
    await expect(dashboardPage.page).toHaveURL(/pim/);
  });
});