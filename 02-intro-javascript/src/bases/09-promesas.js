import { getHeroeById } from "./bases/08-import-export";


const Async = (id)=> { 
return new Promise( (resolve, reject )=> {

setTimeout(() => {
    const heroe = getHeroeById(id)
    if ( heroe ){
        resolve( heroe)
    } else {
        reject('no se encontro el ID')
    }
    
}, 2000);



})
}
Async(2)
 .then(console.log)
 .catch(console.warn)