
import {render} from '@testing-library/react'
import App from '../src/FirstApp';

    describe('pruebas en FirstApp', () => {
        
        
        test('debe de hacer match con el snapshot ', () => {
            
            const title='hola soy un Proptype';
            const {container} = render(<App title={title}/>)

            expect(container).toMatchSnapshot();


        });
    });