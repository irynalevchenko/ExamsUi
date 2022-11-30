import LoginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json'
import MainPage from '../support/pages/MainPage';

describe('Test can', () => {
  it('login with test user', () => {
    LoginPage.visit();
    LoginPage.submitLoginForm(user.email, user.password);
    MainPage.clickProfileButton();
    MainPage.getMenuPanel().should("contain.text", user.email);
  })
})