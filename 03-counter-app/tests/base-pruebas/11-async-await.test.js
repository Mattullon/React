import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await"

    describe('11-async-await', () => { 

        test('debe de retornar un url de la img',async () => { 
            
            const url= await getImagen();
            
            expect(typeof url ).toBe('string')
            

         })


     })