describe('Navigation', (): void => {
    beforeEach((): Cypress.Chainable<Cypress.AUTWindow> => cy.visit('/'));

    it('desktop: has link to home page', (): void => {
        cy.get('[data-testid=home]').should('have.text', 'Home').click();
        cy.location('pathname').should('equal', '/');
        cy.go('back');
    });

    it('desktop: has link to options page', (): void => {
        cy.get('[data-testid=options]').should('have.text', 'Options').click();
        cy.location('pathname').should('equal', '/options');
        cy.go('back');
    });

    it('desktop: has link to debt calculator page', (): void => {
        cy.get('[data-testid=debt-calculator]').should('have.text', 'Debt Calculator').click();
        cy.location('pathname').should('equal', '/debt-calculator');
        cy.go('back');
    });

    it('desktop: has link to about us page', (): void => {
        cy.get('[data-testid=about-us]').should('have.text', 'About Us').click();
        cy.location('pathname').should('equal', '/about-us');
        cy.go('back');
    });

    it('desktop: has link to contact us page', (): void => {
        cy.get('[data-testid=contact-us]').should('have.text', 'Contact Us').click();
        cy.location('pathname').should('equal', '/contact-us');
        cy.go('back');
    });

    it('mobile: has mobile hamburger button', (): void => {
        cy.viewport('iphone-5');
        cy.get('[data-testid=open-mobile-navigation-button]').should('exist');
    });

    it('mobile: clicking on mobile navigation button should open mobile navigation', () => {
        cy.viewport('iphone-5');
        cy.get('[data-testid=open-mobile-navigation-button]').click();
        cy.get('[data-testid=mobile-navigation]').should('exist');
    });

    it('mobile: clicking on close mobile navigation button should close mobile navigation', () => {
        cy.viewport('iphone-5');

        cy.get('[data-testid=open-mobile-navigation-button]').click();
        cy.get('[data-testid=mobile-navigation]').should('exist');

        cy.get('[data-testid=close-mobile-navigation-button]').click();
        cy.get('[data-testid=mobile-navigation]').should('not.exist');
    });
});
