import { render, RenderResult } from '@testing-library/react';
import { Location } from './index';
import { LocationProps } from './Location.interfaces';

describe('Location Component', (): void => {
    let renderResult: RenderResult;
    const props: LocationProps = {
        steps: [],
        currentStep: 0,
        zipCode: '',
        setZipCode: () => {},
        setUSState: () => {},
    };

    beforeAll((): RenderResult => renderResult = render(<Location {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
