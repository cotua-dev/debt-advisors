import { DocumentProps } from 'next/document';
import MyDocument from '../pages/_document';

describe('Document Component', (): void => {
    let documentProps: DocumentProps;

    it('renders', (): void => {
        const documentClass: MyDocument = new MyDocument(documentProps);
        const documentElement: JSX.Element = documentClass.render();
        expect(documentElement).toBeTruthy();
    });
});
