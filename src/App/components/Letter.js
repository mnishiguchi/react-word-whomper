import React from 'react'

const Letter = ({ letter, onClick }) => {
  return (
    <div onClick={onClick} style={{
      display: 'inline-block',
      width: '100px',
      height: '100px',
      lineHeight: '100px',
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

export default Letter
