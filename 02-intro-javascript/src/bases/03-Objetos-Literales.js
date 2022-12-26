

const persona={
    nombre:'tony ',
    apellido:'Sanabria',
    edad:45,
    direcion: {
      ciudad:'new York',
      departamento:'alto parana'

    }
}
const persona2= {...persona}
//los ... hacen que copie los objetos de la constante persona 
persona2.nombre='peter'



console.log(`El es 
${persona.nombre}su apellido es 
${persona.apellido}
y su edad es 
${persona.edad}`)

 console.table(persona)
 console.log(`su nombre es ${persona2.nombre}`)