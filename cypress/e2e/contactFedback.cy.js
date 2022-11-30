import ContactFeedbackPage from '../support/pages/ContactFeedbackPage';
import HelloPage from "../support/pages/HelloPage";
import {faker} from "@faker-js/faker";

const user = {
  name: faker.name.firstName('female'),
  comment: faker.random.words(4)
}

describe('Test can', () => {
  it('registered with user from faker', () => {
    ContactFeedbackPage.visit();
    HelloPage.clickDismissButton();
    HelloPage.getCookieConfirmButton();
    ContactFeedbackPage.fillContactForm(user.comment);
    cy.get('.mat-simple-snack-bar-content').should('contain.text', 'Thank you for your feedback.');

  })
})