import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    test('Debe hacer match con el snapshot', () => {
        //renderiza el componnente en memoria 
        const title = 'Hola, Soy Goku';
        const { container } = render ( <FirstApp title= { title }/> )

        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar el title en un h1', () => {

        const title = 'Hola, Soy Goku';
        const { container, getByText  } = render ( <FirstApp title= { title }/> )
        expect( getByText(title) ).toBeTruthy()

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title )

    })

});

