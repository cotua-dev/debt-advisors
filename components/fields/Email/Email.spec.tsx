import { render, RenderResult } from '@testing-library/react';
import { EmailProps } from './Email.interfaces';
import { Email } from './index';

describe('Email Component', (): void => {
    let renderResult: RenderResult;
    const props: EmailProps = {
        steps: [],
        currentStep: 0,
        setDisableNextButton: () => {},
        email: '',
        setEmail: () => {},
    };

    beforeAll((): RenderResult => renderResult = render(<Email {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
