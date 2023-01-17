import { Experimental_CssVarsProvider } from "@mui/material"
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


    describe('should first', () => { 

        test('prueba 07-arr debe retornar un arreglo', () => {
            const [letters, numbers ] = retornaArreglo()
            
            expect (letters).toBe( 'ABC' )
            expect (numbers).toBe( 123 )


         })
     })