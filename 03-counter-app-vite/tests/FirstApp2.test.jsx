import { render, screen } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Goku'
    const subTitle = 'soy un subtitulo'
    test('Debe hacer match con el spalshot', () => {
        
        const { container } = render (<FirstApp title= { title }/>);
        expect ( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy goku', () => {

        render (<FirstApp title={ title } />)
        expect( screen.getByText(title) ).toBeTruthy();
    })

    test('debe buscar el titutlo en un h1', () => {
        
        render (<FirstApp title={ title } />)
        expect( screen.getByRole('heading', {level:1 }).innerHTML).toContain(title)
    })
    
    test('debe buscar el subtitulo mostrado por props', () => {
        
        render (
            <FirstApp 
                title={ title }
                subTitle={subTitle} 
            />
        )
        expect( screen.getAllByText(subTitle).length ).toBe(1);

        

    })
    
    
    
});

 