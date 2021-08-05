describe('Footer', (): void => {
    beforeEach((): Cypress.Chainable<Cypress.AUTWindow> => cy.visit('/'));

    it('has link to terms of use', (): void => {
        cy.get('[data-testid=terms-of-use]').should('have.text', 'Terms of Use').click();
        cy.location('pathname').should('equal', '/terms-of-use');
        cy.go('back');
    });

    it('has link to privacy policy', (): void => {
        cy.get('[data-testid=privacy-policy]').should('have.text', 'Privacy Policy').click();
        cy.location('pathname').should('equal', '/privacy-policy');
        cy.go('back');
    });
});
