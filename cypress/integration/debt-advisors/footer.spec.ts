describe('Footer', (): void => {
    beforeEach((): Cypress.Chainable<Cypress.AUTWindow> => cy.visit('/'));

    it('displays strong footer text', () => cy.get('footer strong').should('have.text', 'Footer :)'));
});
