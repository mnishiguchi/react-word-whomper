import React from 'react'

const LetterCard = ({ letter, onClick }) => {
  return (
    <div onClick={onClick} style={{
      display: 'inline-block',
      width: '100px',
      height: '100px',
      lineHeight: '100px',
      margin: '2px',
      background: '#999',
      border: '1px solid #333',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        textTransform: 'uppercase',
      }}>{letter}</div>
    </div>
  )
}

export default LetterCard
