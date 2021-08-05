import React from 'react';
import { mount, unmount } from '@cypress/react';
import { Footer } from '../../components/Footer';

describe('Footer Component', (): void => {
    beforeEach(() => mount(<Footer/>));

    it('has correct descriptive markup', () => {
        cy.get('[data-testid=footer-text]').should(
            'have.text',
            'We would be delighted to answer any inquiry you might have about your debt and how we can help!'
        );
    });

    it('shows monday to friday office hours', () => {
        cy.get('[data-testid=monday-to-friday]').should(
            'have.text',
            'Monday to Friday 6:00 am to 7:00 pm PST'
        );
    });

    it('shows monday to friday office hours', () => {
        cy.get('[data-testid=saturday]').should(
            'have.text',
            'Saturday 7:00 am to 2:00 pm PST'
        );
    });

    it('shows correct phone number', () => {
        cy.get('[data-testid=phone]').should('have.text', '800-632-0437');
    });

    it('shows correct email', () => {
        cy.get('[data-testid=email]').should('have.text', 'info@contactdaa.com');
    });

    afterEach(() => unmount());
});
