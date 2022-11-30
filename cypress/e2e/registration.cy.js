import MainPage from '../support/pages/MainPage';
import LoginPage from '../support/pages/LoginPage';
import RegistrationPage from '../support/pages/RegistrationPage';

describe('Test can', () => {
  it('registere a user', () => {
    const [email, password] = RegistrationPage.registerNewUser();
    LoginPage.login(email, password);
    MainPage.clickProfileButton();
    MainPage.getMenuPanel().should("contain.text", email);

  })
})