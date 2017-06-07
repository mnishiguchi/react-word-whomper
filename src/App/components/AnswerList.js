import React from 'react'
import _ from 'lodash'

const LETTER_HEIGHT = `30px`

const Letter = ({ letter, isVisible }) => {
  return (
    <div style={{
      display: 'inline-block',
      width: LETTER_HEIGHT,
      height: LETTER_HEIGHT,
      lineHeight: LETTER_HEIGHT,
      border: isVisible ? '1px solid black' : '1px solid brown',
      background: isVisible ? '#85da91' : '#dfd9a4',
      margin: '0 1px 0 0'
    }}>
      <div style={{
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        color: isVisible ? '#333' : '#ddd',
        textTransform: 'uppercase',
      }}>{letter}</div>
    </div>
  )
}

const AnswerWord = ({ word, isVisible }) => {
  return (
    <div style={{
      width: '100%',
      height: LETTER_HEIGHT,
      margin: '0 0 1px 0',
    }}>
      {
        word.split('').map((letter, i) => <Letter key={i} letter={letter} isVisible={isVisible} />)
      }
    </div>
  )
}

const AnswerList = ({ words }) => {
  return (
    <div style={{ display: 'flex' }}>
      {
        words ? (
          _.chunk(words, 6).map((chunk, i) => (
            <div key={i} style={{ flexGrow: '1' }}>
              {
                chunk.map((word, i) => <AnswerWord key={i} {...word} />)
              }
            </div>
          ))
        ) : (
          <div>Empty list</div>
        )
      }
    </div>
  )
}

export default AnswerList
