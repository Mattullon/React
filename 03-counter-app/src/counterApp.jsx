import React from 'react'

import PropTypes from 'prop-types'
const CounterApp = ({value}) => {
  return (
    <>
    <h1>counterApp</h1>
    <h2> {value} </h2>

    <button>
        +1
    </button>
    </>
  )
}
CounterApp.propTypes ={
    value:PropTypes.number.isRequired
}
export default CounterApp

