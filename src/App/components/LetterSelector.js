import React from 'react'

import LetterCard from './LetterCard'

const LetterSelector = ({ letters, onLetterSelect, onMix, onSubmit, onUndo }) => {
  return (
    <div className="LetterSelector">
      <div className="letters" style={{ minHeight: '105px', background: '#ddd' }}>
        {
          letters.map((letter, i) => <LetterCard key={i} letter={letter} onClick={e => onLetterSelect(letter)} />)
        }
      </div>
      <div className="buttons" style={{ marginTop: '1rem', display: 'flex' }}>
        <button type="button" className="btn btn-secondary" onClick={onMix} style={{ flexGrow: 1 }}>Mix Up</button>
        <button type="button" className="btn btn-primary" onClick={onSubmit} style={{ flexGrow: 2 }}>Enter</button>
        <button type="button" className="btn btn-secondary" onClick={onUndo} style={{ flexGrow: 1 }}>Clear Letter</button>
      </div>
    </div>
  )
}

export default LetterSelector
