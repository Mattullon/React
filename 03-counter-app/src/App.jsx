import PropTypes from 'prop-types'

const variable = { 
    nombre:'Oscar',
    apellido:'fuler',
    ubicacion:'USA'
}

const funcion= ()=>{
    return 'Hola Bienvenidos'
}
//prop-types  sirve para definir el tipo de propiedad que usaras 
const App = ({title, subTitle}) => {
  
    return (
    <>
    <h1> {title  } </h1>
    <h1> {funcion()} </h1>
    <h1> {variable.nombre} </h1>
    <p> hola soy un parrafo </p>
    </>
  )
}


App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.any,
}
export default App