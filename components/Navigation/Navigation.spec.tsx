import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react';
import { Navigation } from './index';

describe('Navigation Component', (): void => {
    let renderResult: RenderResult;

    beforeEach((): RenderResult => renderResult = render(<Navigation/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    test('clicking hamburger activates mobile navigation', (): void => {
        const { queryByTestId } = renderResult;

        // Set the innerWidth to mobile
        global.innerWidth = 1000;

        // Click on the mobile menu button
        const mobileMenuButton = queryByTestId('open-mobile-navigation-button');
        fireEvent.click(mobileMenuButton);

        // Check to see if the mobile menu is truthy
        const mobileMenu = queryByTestId('mobile-navigation');
        expect(mobileMenu).toBeTruthy();

        // Click on the close mobile menu button
        const closeMobileMenuButton = queryByTestId('close-mobile-navigation-button');
        fireEvent.click(closeMobileMenuButton);

        // Reset innerWidth to desktop
        global.innerWidth = 1080;
    });

    afterEach(cleanup);
});
