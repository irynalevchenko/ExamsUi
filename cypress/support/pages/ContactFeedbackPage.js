import GeneralPage from './GeneralPage';
require('cypress-commands')
let stringMath = require('string-math');

class ContactFeedbackPage extends GeneralPage{
    visit(){
        cy.log('***Open contact form page***');
        cy.visit('/#/contact');
    }

    getUserInput() {
        return cy.get('[aria-label="Field with the name of the author"]');
    }

    enterValueAuthorInput(name){
        this.getUserInput().type(name);
    }

    getCommentInput() {
        return cy.get('#comment');
    }

    enterValueCommentInput(comment){
        this.getCommentInput().type(comment);
    }

    getRatingSlider() {
        return cy.get('div .mat-slider');
    }

    setRatingSlider() {
        this.getRatingSlider()
            .focus()
            .type("{rightarrow}{rightarrow}{rightarrow}")
    }

    submitCaptchaQuestion() {
       cy.get('#captcha').then(($el) => {
           const question = $el.text();
           cy.get('#captchaControl').type(stringMath(question))
       });

    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

    clickSubmitButton(){
        this.getSubmitButton().click();
    }

    fillContactForm(comment){
        this.enterValueCommentInput(comment);
        this.setRatingSlider();
        this.submitCaptchaQuestion();
        this.clickSubmitButton();
    }

}

export default new ContactFeedbackPage ();