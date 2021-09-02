import { render, RenderResult } from '@testing-library/react';
import { Verify } from './index';
import { VerifyProps } from './Verify.interfaces';

describe('Verify Component', (): void => {
    let renderResult: RenderResult;
    const props: VerifyProps = {
        steps: [],
        currentStep: 0,
        setDisableNextButton: () => {},
        code: '',
        setCode: () => {},
        disableVerifyField: false,
    };

    beforeAll((): RenderResult => renderResult = render(<Verify {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
