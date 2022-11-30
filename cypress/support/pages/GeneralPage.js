export default class GeneralPage{
    getProfileButton(){
        return cy.get('#navbarAccount');
    }

    clickProfileButton(){
        this.getProfileButton().click();
    }

    getLoginButton(){
        return cy.get('#navbarLoginButton');
    }

    clickLoginButton(){
        this.getLoginButton().click();
    }

    getMenuPanel(){
        return cy.get('#mat-menu-panel-0');
    }

    getYourBasketButton(){
        return cy.get('[aria-label="Show the shopping cart"]');
    }

    clickYourBasketButton(){
        this.getYourBasketButton().click();
    }

    getButtonSearch(){
        return cy.get("[data-mat-icon-type='font']:contains(' search ')");
    }

    clickButtonSearch(){
        this.getButtonSearch().click();
    }

    getSearchInput(){
        return cy.get('.mat-form-field.mat-search_field');
    }
}