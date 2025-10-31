import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = '.oxd-alert-content-text';
    this.forgotPasswordLink = '.orangehrm-login-forgot-header';
  }

  async login(username, password) {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
    await this.waitForPageLoad();
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async isLoginButtonVisible() {
    return await this.isVisible(this.loginButton);
  }

  async clickForgotPassword() {
    await this.clickElement(this.forgotPasswordLink);
  }
}