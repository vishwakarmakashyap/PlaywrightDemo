import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { getEnvironment } from '../config/environment.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  authenticatedPage: async ({ page, loginPage }, use) => {
    const env = getEnvironment();
    await page.goto(env.baseUrl + '/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
    await use(page);
  }
});

export { expect } from '@playwright/test';