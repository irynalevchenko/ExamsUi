import GeneralPage from './GeneralPage';

class DeliveryMethodPage extends GeneralPage{
    visit(){
        cy.log('***Open delivery method page***');
        cy.visit('/#/delivery-method');
    }

    getFastDelivery() {
        return cy.get('.mat-radio-label');
    }

    clickFastDelivery() {
        this.getFastDelivery().click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

}

export default new DeliveryMethodPage();