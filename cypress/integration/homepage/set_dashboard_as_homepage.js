import { When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'localhost:3300'

When('User visit homepage', () => {
  cy.visit(url + '/any')
});

Then('Show dashboard', () => {
  cy.contains('Learn React')
});