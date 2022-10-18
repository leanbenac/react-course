
describe('Pruebas en <DemoComponet />', () => {
    
    test('esta prueba no debe fallar', () => {
    
        // 1. inicializacion
        const message1 = 'Hola Mundo';
    
        // 2. estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperando
        expect ( message1 ).toBe( message2 );
        
    })
})

