import GeneralPage from './GeneralPage';

class OrderSummaryPage extends GeneralPage{
    visit(){
        cy.log('***Open order summary page***');
        cy.visit('/#/order-summary');
    }

    getCheckoutButton() {
        return cy.get('button#checkoutButton');
    }

    clickCheckoutButton() {
        this.getCheckoutButton().click();
    }

}

export default new OrderSummaryPage();