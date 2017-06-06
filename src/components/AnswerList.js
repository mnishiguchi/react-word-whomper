import React from 'react'

// function buildWordLists(words) {
//   const sortedUpcased = words.sort().reverse().map(word => word.toUpperCase())
//
//   const groupedByLength = sortedUpcased.reduce((acc, word) => {
//     acc[word.length] = [word].concat(acc[word.length])
//     return acc
//   }, {})
//
//   const lengthList = Object.keys(groupedByLength).sort()
//
//   const wordLists = lengthList.reduce((acc, length) => {
//     acc.push(groupedByLength[length])
//     return acc
//   }, [])
//
//   return wordLists.map(l => l.filter(e => e)) // filter out undefined elements
// }

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
      {words ? (
        words.map((word, i) => {
          return (
            <AnswerWord key={i} {...word} />
          )
        })
      ) : (
        <div>Empty list</div>
      )}
    </div>
  )
}

export default AnswerList
