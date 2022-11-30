import {faker} from '@faker-js/faker';
import GeneralPage from './GeneralPage';
import HelloPage from './HelloPage';

const user = {
    email: faker.internet.email(),
    password: faker.internet.password(8),
    name: faker.name.firstName('female')
}


class RegistrationPage extends GeneralPage{
    visit(){
        cy.log('***Open registration page***');
        cy.visit('/#/register');
    }

    getEmailInput(){
        return cy.get('#emailControl');
    }

    enterEmailInput(email){
        cy.log(`Type user email ${email} in email input`);
        this.getEmailInput().type(email);
    }

    getPasswordInput(){
        return cy.get('#passwordControl');
    }

    enterPasswordInput(password){
        cy.log(`Type user password ${password} in password input`);
        this.getPasswordInput().type(password);
    }

    getRepeatPasswordInput(){
        return cy.get('#repeatPasswordControl');
    }

    enterRepeatPasswordInput(password){
        cy.log(`Type user password ${password} in repeat password input`);
        this.getRepeatPasswordInput().type(password);
    }

    getQuestionDropdown(){
        return cy.get(`[name='securityQuestion']`);
    }

    selectSecurityQuestion(){
        cy.log(`Select security question`);
        this.getQuestionDropdown().click();
        cy.get('#mat-option-1').click();
    }

    getAnswerInput(){
        return cy.get('#securityAnswerControl');
    }

    enterValueInAnswerInput(name){
        cy.log(`Type name ${name} in answer input`);
        this.getAnswerInput().type(name);
    }

    getRegisterButton(){
        return cy.get('#registerButton');
    }

    clickRegisterButton(){
        cy.log('Click register button');
        this.getRegisterButton().click();
    }


    registerNewUser(){
        this.visit();
        HelloPage.clickDismissButton();
        this.enterEmailInput(user.email);
        this.enterPasswordInput(user.password);
        this.enterRepeatPasswordInput(user.password);
        this.selectSecurityQuestion();
        this.enterValueInAnswerInput(user.name);
        this.clickRegisterButton();
        return [user.email, user.password]
    }


}

export default new RegistrationPage();