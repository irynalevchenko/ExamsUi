import GeneralPage from './GeneralPage';

class OrderPage extends GeneralPage{
    getOrderConfirmationToast() {
        return cy.get('h1.confirmation');
    }


}

export default new OrderPage();