export class TestHelper {
  static generateRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static generateRandomEmail() {
    return `test${this.generateRandomString(5)}@example.com`;
  }

  static getCurrentTimestamp() {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }

  static async waitForTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static formatDate(date = new Date()) {
    return date.toISOString().split('T')[0];
  }

  static async retryAction(action, maxRetries = 3, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await action();
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        await this.waitForTimeout(delay);
      }
    }
  }
}