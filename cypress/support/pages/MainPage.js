import GeneralPage from "./GeneralPage";

class MainPage extends GeneralPage{

    addToBasket(productIndex){
        productIndex = parseInt(productIndex);
        cy.get('[aria-label="Add to Basket"]').eq(productIndex).click();
    }

}
export default new MainPage();