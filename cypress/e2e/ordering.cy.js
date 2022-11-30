import MainPage from '../support/pages/MainPage';
import LoginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json';
import BasketPage from '../support/pages/BasketPage';
import SelectAddressPage from '../support/pages/SelectAddressPage';
import DeliveryMethodPage from '../support/pages/DeliveryMethodPage';
import PaymentOptionsPage from '../support/pages/PaymentOptionsPage';
import OrderSummaryPage from '../support/pages/OrderSummaryPage';
import OrderPage from "../support/pages/OrderPage";

describe('Test can', () => {
  it('buy a product', () => {
    LoginPage.visit();
    LoginPage.submitLoginForm(user.email, user.password);
    MainPage.addToBasket(2);
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