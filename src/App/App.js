import React from 'react'
import Layout from './Layout'
import _ from 'lodash'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

window._ = _ // To play with lodash in console

const Letter = ({ letter, onClick }) => {
  return (
    <div className="Letter" onClick={onClick}>{letter}</div>
  )
}

const InputTextDisplay = ({ letters, onSubmit, onUndo }) => {
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

const LetterSelector = ({ letters, onLetterSelect }) => {
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


class App extends React.PureComponent {

  static defaultProps = {
    // Hardcode for now
    words: [
      'law',
      'lea',
      'little',
    ]
  }

  constructor(props) {
    super(props)

    // Constant
    this.LETTERS = ['a', 'b', 'c'] // TODO - compute from the words

    this.state = {
      selectedLetters: [],
      remainingLetters: this.LETTERS
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onUndo = this.onUndo.bind(this)
    this.onLetterSelect = this.onLetterSelect.bind(this)
  }

  render() {
    return (
      <Layout>
        <section>
          <InputTextDisplay letters={this.state.selectedLetters} onSubmit={this.onSubmit} onUndo={this.onUndo} />
        </section>
        <section>
          <LetterSelector letters={this.state.remainingLetters} onLetterSelect={this.onLetterSelect} />
        </section>
      </Layout>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("updated")
  }

  onLetterSelect(letter) {
    this.setState((prevState, props) => {
      const selectedLetters = prevState.selectedLetters.concat(letter)
      const remainingLetters = _.difference(this.LETTERS, selectedLetters).slice(0)
      return { selectedLetters, remainingLetters }
    })
  }

  onUndo() {
    this.setState((prevState, props) => {
      const selectedLetters = prevState.selectedLetters.slice(0, -1)
      const remainingLetters = _.difference(this.LETTERS, selectedLetters).slice(0)
      return { selectedLetters, remainingLetters }
    })
  }

  onSubmit() {
    alert('onSubmit')
  }
}

export default App
