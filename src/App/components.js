import React from 'react'

const Letter = ({ letter, onClick }) => {
  return (
    <div className="Letter" onClick={onClick}>{letter}</div>
  )
}

export const InputTextDisplay = ({ letters, onSubmit, onUndo }) => {
  return (
    <div className="InputTextDisplay">
      <div className="letters">
        {
          letters.map((letter, i) => {
            return <span className="letter" key={i}>{letter}</span>
          })
        }
      </div>
      <div className="buttons">
        <span>
          <div className="btn btn-primary" onClick={onSubmit}>Submit</div>
          <div className="btn btn-secondary" onClick={onUndo}>Undo</div>
        </span>
      </div>
    </div>
  )
}

export const LetterSelector = ({ letters, onLetterSelect }) => {
  return (
    <div className="LetterSelector">
      <div className="letters">
        {
          letters.filter(e => e).map((letter, i) => {
            return <Letter key={i} letter={letter} onClick={e => onLetterSelect(letter)} />
          })
        }
      </div>
    </div>
  )
}
