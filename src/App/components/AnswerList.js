import React from 'react'

const AnswerWord = ({ word, isVisible }) => {
  return (
    <div style={{
      width: '200px',
      height: '20px',
      margin: '0 0 1px 0'
    }}>
      {
        word.split('').map((letter, i) => (
          isVisible ? (
            <div key={i} style={{
              display: 'inline-block',
              width: '20px',
              height: '20px'
            }}>{letter}</div>
          ) : (
            <div key={i} style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              border: '1px solid red',
              margin: '0 1px 0 0'
            }}/>
          )
        ))
      }
    </div>
  )
}

const AnswerList = ({ words }) => {
  return (
    <div>
      {
        words ? (
          words.map((word, i) => <AnswerWord key={i} {...word} />)
        ) : (
          <div>Empty list</div>
        )
      }
    </div>
  )
}

export default AnswerList
