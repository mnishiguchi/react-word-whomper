import React from 'react'
import _ from 'lodash'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Layout from './Layout'
import {AnswerList, InputTextDisplay, LetterSelector} from './components/index'

window._ = _ // To play with lodash in console

function buildLetterList(words=[]) {
  // A set of chars
  const charSet = _.uniq(_.flatten(words.map(x => x.split(''))))

  // A list of occurrences for all the words
  const charOccurrences = words.map(x => _.countBy(x.split('')))

  const maxOccurrenceOf = (x) => _.maxBy(charOccurrences, x)[x]

  // A list of max counts for each letter
  const charMaxCounts = charSet.map(x => [x, maxOccurrenceOf(x)])

  // Create a letter list
  return _.shuffle(
    charMaxCounts.reduce((acc, entry) => {
      for (let i = 0; i < entry[1]; i++) { acc.push(entry[0]) }
      return acc
    }, [])
  )
}

function sortWords(words=[]) {
  const groupedByLength = words.reduce((acc, word) => {
                            const len = word.length
                            acc[len] = [word].concat(acc[len])
                            return acc
                          }, {})

  const lengthList = Object.keys(groupedByLength).sort()

  return lengthList.reduce((acc, length) => {
    return acc.concat(groupedByLength[length].sort()).filter(x => x)
  }, [])
}


class App extends React.PureComponent {

  static defaultProps = {
    // Hardcode for now
    words: ['bed', 'bee', 'deb', 'dew', 'ewe', 'see', 'sew', 'web', 'wed', 'wee', 'beds', 'bees', 'debs', 'ewes', 'seed', 'webs', 'weds', 'weed', 'dweeb', 'sewed', 'weeds', 'dweebs']
  }

  constructor(props) {
    super(props)

    // Initialize the letter list for the game play based on the words passed in as a prop.
    this.LETTERS = buildLetterList(sortWords(props.words))

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
          <AnswerList words={this.state.words} />
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

  // Trigger the evaluation of the selected word
  onSubmit() {
    const word = this.state.selectedLetters.join('')
    if (this.judgeWord(word)) {
      this.setState((prevState, props) => {
        return { words: this.updateWords(prevState.words, word) }
      })
    } else {
      alert('NO')
    }

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

  judgeWord(word) {
    return this.props.words.find(x => x.toUpperCase() === word.toUpperCase())
  }

  updateWords(words, word) {
    return words.map(x => x.word === word ? {...x, isVisible: true} : x)
  }
}

export default App
