import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CounterApp from './counterApp'
import './Style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={999} /> 
    {/* <App title='hola soy goku' subTitle={123} /> */}
  </React.StrictMode>,
)
