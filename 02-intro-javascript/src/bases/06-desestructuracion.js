

//desestructuracion
//asignacion desestructurante 

const persona = {
    nombre: ' Marcos',
    apellido: ' Almeida',
    edad:43,
}
const persona2= {...persona,clave:'ironman'}
// console.log( persona.nombre)
// console.log( persona.edad)
// console.log( persona.apellido)

const {edad} = persona

console.log(edad)

//desestructuracion en funcuines
//hace la desestructuracion en el parametro de callback
const Retorna = ({nombre, edad, clave }) => {
    
    return {
        nombreClave:clave,
        anios:edad,
        direcion: {
            lat:121121,
            log:2322323,
        }
    }
}

 const {nombreClave,anios,direcion:{lat,log}} = Retorna(persona2)

 console.log(nombreClave,anios,lat,log)