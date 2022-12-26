
//desestructuracion de arreglos 

const personajes= ['goku','vegeta','truck']

console.log(personajes[2])

const [p1,p2,p3]= personajes

console.log(p1,p2,p3)

const retornaArreglo= () => {
    return ['ABC',433];
}
const [letras,numeros]= retornaArreglo();

console.log(letras,numeros)

//tarea 
const use = (valor) => {
    return [valor, ()=> {console.log('hola,mundo!')}];
}

const [nombre,setnombre] = use('goku');
console.log(nombre)
setnombre();