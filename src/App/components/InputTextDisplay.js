import React from 'react'

import Letter from './Letter'

const InputTextDisplay = ({ letters }) => {
  return (
    <div style={{ minHeight: '105px', background: '#ddd' }}>
      {
        letters.map((letter, i) => <Letter key={i} letter={letter} />)
      }
    </div>
  )
}

export default InputTextDisplay
