import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    test('Debe hacer match con el snapshot', () => {
        //renderiza el componnente en memoria 
        const title = 'Hola, Soy Goku';

        render ( <FirstApp title= {title}/> )
    })
    

});

