import React from 'react'

import LetterCard from './LetterCard'

const InputTextDisplay = ({ letters }) => {
  return (
    <div className="InputTextDisplay" style={{ minHeight: '105px', background: '#ddd' }}>
      {
        letters.map((letter, i) => <LetterCard key={i} letter={letter} />)
      }
    </div>
  )
}

export default InputTextDisplay
