import React, {Component} from 'react'
import AlgoList from '../components/algo-list.jsx'

class MathAlgorithms extends Component {
  render() {
    return (<AlgoList
      title='Math algorithms'
      icon='fa fa-percent'
      description='In mathematics and computer science, an algorithm is a self-contained step-by-step set of operations to be performed. Algorithms perform calculation, data processing, and/or automated reasoning tasks.'
      algoList={['Fibonacci numbers sequence', 'Greatest common divisor', 'Least common multiple']} />)
  }
}

export default MathAlgorithms
