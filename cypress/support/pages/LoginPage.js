import GeneralPage from './GeneralPage';
import HelloPage from './HelloPage';

class LoginPage extends GeneralPage{
    visit(){
        cy.log('***Open login page***');
        cy.visit('/#/login');
    }

    getFormInput(){
        return cy.get(`[name='email']`);
    }

    enterEmailInput(email){
        cy.log(`Type email ${email} in email input`);
        this.getFormInput().type(email);
    }

    getPasswordInput(){
        return cy.get(`[name='password']`);
    }

    enterPasswordInput(password){
        cy.log(`Type password ${password} in password input`);
        this.getPasswordInput().type(password);
    }

    getLoginButton(){
        return cy.get(`#loginButton`);
    }

    clickLoginButton(){
        cy.log('Click Log in button');
        this.getLoginButton().click();
    }


    getNotCustomerButton(){
        return cy.get('#newCustomerLink');
    }

    clickNotCustomerButton(){
        cy.log('***Click Not yet a customer link***');
        this.getNotCustomerButton().click();
    }

    login(email, password) {
        this.enterEmailInput(email);
        this.enterPasswordInput(password);
        this.clickLoginButton();
    }

    submitLoginForm(email, password){
        HelloPage.clickDismissButton();
        HelloPage.clickCookieConfirmButton();
        this.enterEmailInput(email);
        this.enterPasswordInput(password);
        this.clickLoginButton();
    }


}

export default new LoginPage();