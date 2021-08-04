describe('Home Page', (): void => {
    beforeEach((): Cypress.Chainable<Cypress.AUTWindow> => cy.visit('/'));

    it('displays hello world message', () => cy.get('h1').should('have.text', 'Hello World!'));
});
