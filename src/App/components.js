import React from 'react'

const Letter = ({ letter, onClick }) => {
  return (
    <div className="Letter" onClick={onClick} style={{
      display: 'inline-block',
      width: '100px',
      height: '100%',
      margin: '2px',
      background: '#999',
      border: '1px solid #333',
      fontSize: '2rem',
      textTransform: 'uppercase',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span>{letter}</span>
      </div>
    </div>
  )
}

export const InputTextDisplay = ({ letters }) => {
  return (
    <div className="InputTextDisplay">
      <div className="letters" style={{
        minHeight: '105px',
        background: '#ddd',
      }}>
        {
          letters.map((letter, i) => {
            return <Letter key={i} letter={letter} />
          })
        }
      </div>
    </div>
  )
}

export const LetterSelector = ({ letters, onLetterSelect, onMix, onSubmit, onUndo }) => {
  return (
    <div className="LetterSelector">
      <div className="letters" style={{
        minHeight: '105px',
        background: '#ddd',
      }}>
        {
          letters.map((letter, i) => {
            return <Letter key={i} letter={letter} onClick={e => onLetterSelect(letter)} />
          })
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
