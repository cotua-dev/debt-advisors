describe('Footer', (): void => {
    beforeEach((): Cypress.Chainable<Cypress.AUTWindow> => cy.visit('/'));

    it('has correct descriptive markup', (): void => {
        cy.get('[data-testid=footer-text]').should(
            'have.text',
            'We would be delighted to answer any inquiry you might have about your debt and how we can help!'
        );
    });

    it('shows monday to friday office hours', (): void => {
        cy.get('[data-testid=monday-to-friday]').should(
            'have.text',
            'Monday to Friday 6:00 am to 7:00 pm PST'
        );
    });

    it('shows saturday office hours', (): void => {
        cy.get('[data-testid=saturday]').should(
            'have.text',
            'Saturday 7:00 am to 2:00 pm PST'
        );
    });

    it('shows correct phone number', (): void => {
        cy.get('[data-testid=phone]').should('have.text', '800-632-0437');
    });

    it('shows correct email', (): void => {
        cy.get('[data-testid=email]').should('have.text', 'info@contactdaa.com');
    });

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
