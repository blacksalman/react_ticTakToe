import React from 'react'

function Square({value, onclick}) {
  return (
    <div onClick={onclick} className='square' style={{border: '1px solid black', height:'100px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h5>{value}</h5>
    </div>
  )
}

export default Square; 