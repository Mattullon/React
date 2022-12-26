
// ARRAYS EN JAVA

const arreglo= new Array(100);
arreglo.push(2);
// este caso te crea un arreglo con 100 posiciones vacias pero normalmente no se usa este tipo 
// de definiciones solo si queremos crear un arrray con posiciones pre definidas 

const arreglo2 = []
arreglo2.push(3);
arreglo2.push(3);
arreglo2.push(3);
//el push no es recomendable por que empuja un arreglo o sea si el arreglo es de 5 al hacer push es de 6

console.log(arreglo2)

const arreglo3=[1,2,3,4]

const arreglo0= [...arreglo3,5]
console.log(arreglo0)

const array= arreglo3.map(function(numero){
return `** ${numero}**`
})
console.log(array)
// la funcion map es interesante por que envuelve a cada posicion del array o sea la funcion function lo hace 