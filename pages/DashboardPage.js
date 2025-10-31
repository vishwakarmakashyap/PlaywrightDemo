import { BasePage } from './BasePage.js';

export class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.profileDropdown = '.oxd-userdropdown-tab';
    this.logoutOption = 'a[href="/web/index.php/auth/logout"]';
    this.dashboardHeader = '.oxd-topbar-header-breadcrumb h6';
    this.sideMenu = '.oxd-sidepanel-body';
    this.menuItems = '.oxd-main-menu-item';
  }

  async logout() {
    await this.clickElement(this.profileDropdown);
    await this.clickElement(this.logoutOption);
    await this.waitForPageLoad();
  }

  async isDashboardVisible() {
    return await this.isVisible(this.dashboardHeader);
  }

  async getDashboardTitle() {
    return await this.getText(this.dashboardHeader);
  }

  async navigateToMenu(menuName) {
    const menuItems = await this.page.locator(this.menuItems);
    const count = await menuItems.count();
    
    for (let i = 0; i < count; i++) {
      const text = await menuItems.nth(i).textContent();
      if (text.trim().toLowerCase() === menuName.toLowerCase()) {
        await menuItems.nth(i).click();
        await this.waitForPageLoad();
        break;
      }
    }
  }
}