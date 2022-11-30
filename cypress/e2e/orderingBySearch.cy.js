import {login} from '../support/helpers/loginHelper';
import {findProduct} from "../support/helpers/productSearchHelper";
import MainPage from "../support/pages/MainPage";
import BasketPage from "../support/pages/BasketPage";
import SelectAddressPage from "../support/pages/SelectAddressPage";
import DeliveryMethodPage from "../support/pages/DeliveryMethodPage";
import PaymentOptionsPage from "../support/pages/PaymentOptionsPage";
import OrderSummaryPage from "../support/pages/OrderSummaryPage";
import OrderPage from "../support/pages/OrderPage";

describe('User can', () => {
  it('purchase a product via Search', () => {
    login();
    MainPage.clickButtonSearch();
    MainPage.getSearchInput().type('b').type('{enter}');

    findProduct('Strawberry Juice (500ml)');

    MainPage.clickYourBasketButton();
    BasketPage.clickCheckoutButton();
    SelectAddressPage.selectAddress();
    SelectAddressPage.clickContinueButton();
    DeliveryMethodPage.clickFastDelivery();
    DeliveryMethodPage.clickContinueButton();
    PaymentOptionsPage.clickPaymentRadioButton();
    PaymentOptionsPage.clickContinueButton();
    OrderSummaryPage.clickCheckoutButton();
    OrderPage.getOrderConfirmationToast().should('contain.text', 'Thank you for your purchase!')

  })
})