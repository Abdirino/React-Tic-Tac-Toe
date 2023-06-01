import React from 'react'
import './resetButton.css'

const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset' onClick={resetBoard}>Reset</button>
  )
}

export default ResetButton