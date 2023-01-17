import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './FirstApp'
import CounterApp from './counterApp'
import './Style.css'
import FirstApp from './FirstApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App title='hola soy un Proptype' subTitle={123232}/>
      
    {/* <CounterApp value={999} /> 
    <App title='hola soy goku' subTitle={123} /> */}
  </React.StrictMode>,
)
