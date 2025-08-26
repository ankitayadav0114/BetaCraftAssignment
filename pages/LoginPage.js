class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginBtn = '[data-test="login-button"]';
    this.errorMsg = '[data-test="error"]';
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }
  async getError() {
    return await this.page.textContent(this.errorMsg);
  }
}
module.exports = { LoginPage };
