import React from 'react'
import _ from 'lodash'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Layout from './Layout'
import {AnswerList, InputTextDisplay, LetterSelector} from './components/index'

window._ = _ // To play with lodash in console

function buildLetterListFromWords(words) {
  // A set of chars
  const charSet = _.uniq(_.flatten(words.map(l => l.split(''))))

  // A list of occurrences for all the words
  const charOccurrences = words.map(word => {
    return _.countBy(word.split(''))
  })

  // A list of max counts for each letter
  const charMaxCounts = charSet.map(char => {
    return [char, _.maxBy(charOccurrences, char)[char]]
  })

  // Create a letter list.
  let letterList = []
  charMaxCounts.forEach(entry => {
    for (let i = 0; i < entry[1]; i++) {
      letterList.push(entry[0])
    }
  })

  return _.shuffle(letterList)
}


class App extends React.PureComponent {

  static defaultProps = {
    // Hardcode for now
    words: ['bed', 'bee', 'deb', 'dew', 'ewe', 'see', 'sew', 'web', 'wed', 'wee', 'beds', 'bees', 'debs', 'ewes', 'seed', 'webs', 'weds', 'weed', 'dweeb', 'sewed', 'weeds', 'dweebs']
  }

  constructor(props) {
    super(props)

    // Initialize the letter list for the game play based on the words passed in as a prop.
    this.LETTERS = buildLetterListFromWords(props.words)

    this.state = {
      words: props.words.map(word => { return { word: word, isVisible: false } }),
      selectedLetters: [],
      remainingLetters: this.LETTERS
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onUndo = this.onUndo.bind(this)
    this.onMix = this.onMix.bind(this)
    this.onLetterSelect = this.onLetterSelect.bind(this)
  }

  render() {
    console.info(this.state)

    return (
      <Layout>
        <section>
          <AnswerList words={this.state.words}   />
        </section>
        <section>
          <InputTextDisplay letters={this.state.selectedLetters} />
        </section>
        <section>
          <LetterSelector
            letters={this.state.remainingLetters}
            onLetterSelect={this.onLetterSelect}
            onSubmit={this.onSubmit}
            onUndo={this.onUndo}
            onMix={this.onMix}
          />
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
      const remainingLetters = this.computeRemainingLetters(selectedLetters)
      return { selectedLetters, remainingLetters }
    })
  }

  onMix() {
    this.LETTERS = _.shuffle(this.LETTERS)
    this.setState((prevState, props) => {
      const remainingLetters = this.computeRemainingLetters(prevState.selectedLetters)
      return { remainingLetters }
    })
  }

  onUndo() {
    this.setState((prevState, props) => {
      const selectedLetters = prevState.selectedLetters.slice(0, -1)
      const remainingLetters = this.computeRemainingLetters(selectedLetters)
      return { selectedLetters, remainingLetters }
    })
  }

  // TODO: Trigger the evaluation of the selected word
  onSubmit() {
    this.setState((prevState, props) => {
      const selectedLetters = []
      const remainingLetters = this.computeRemainingLetters(selectedLetters)
      return { selectedLetters, remainingLetters }
    })
  }

  computeRemainingLetters(selectedLetters) {
    let remainingLetters = this.LETTERS.slice(0)

    selectedLetters.forEach(letter => {
      const index = remainingLetters.findIndex(e => e === letter) // index of first occurrence
      remainingLetters.splice(index, 1)                           // destructively remove an element at that index
    })

    return remainingLetters
  }
}

export default App
