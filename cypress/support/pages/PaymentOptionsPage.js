import GeneralPage from './GeneralPage';

class PaymentOptionsPage extends GeneralPage{
    visit(){
        cy.log('***Open delivery method page***');
        cy.visit('/#/delivery-method');
    }

    getPaymentRadioButton() {
        return cy.get('label.mat-radio-label');
    }

    clickPaymentRadioButton() {
        this.getPaymentRadioButton().click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

}

export default new PaymentOptionsPage();