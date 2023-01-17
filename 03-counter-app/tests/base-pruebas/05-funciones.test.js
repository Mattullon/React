import { Experimental_CssVarsProvider } from "@mui/material";
import { getUser } from "../../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un Objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

            expect (testUser).toEqual(user)
     })




 })



