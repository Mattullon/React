import { getSaludo } from "../../src/base-pruebas/02-template-string";



    test('pruebas en 02-template', () => {  

        const name= 'fernando';
        const message= getSaludo( name )
        
        expect( message).toBe(`hola ${name}`)

    })


