import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retorna un URL de la iamgen ', async() => {
        
        const url = await getImagen();
        
        expect( typeof url).toBe('string')

    })
    
    
})
