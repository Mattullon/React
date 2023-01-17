import { getHeroeById } from '../../src/base-pruebas/08-imp-exp'

describe('pruebas en 08-exp-imp', () => { 

    test('should first', () => { 
        
        const id= 1;
        const hero= getHeroeById( id );
        console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' }) 


     })

     test('should first', () => { 
        
        const id= 100; //poner un id para que regrese undefind
        const hero= getHeroeById( id );
        
        console.log(hero)
        expect(hero).toBe( undefined ) // forma larga
        expect(hero).toBeFalsy() //shortcut 



     })


 })