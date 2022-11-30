import GeneralPage from './GeneralPage';

class SelectAddressPage extends GeneralPage{
    visit(){
        cy.log('***Open select address page***');
        cy.visit('/#/address/select');
    }

    getAddressRadioButton(){
        return cy.get('[aria-label="Add a new address"]');
    }

    selectAddress(){
        this.getAddressRadioButton().click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }


}

export default new SelectAddressPage();