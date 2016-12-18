import React, {Component} from 'react'
import AlgoList from '../components/algo-list.jsx'

class SortingAlgorithms extends Component {
  render() {
    return (<AlgoList
      title='Sorting algorithms'
      icon='fa fa-sort-amount-desc'
      description='A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most-used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing the use of other algorithms (such as search and merge algorithms) which require input data to be in sorted lists; it is also often useful for canonicalizing data and for producing human-readable output.'
      algoList={['Bubble sort', 'Selection Sort', 'Insertion sort', 'Quick sort']} />)
  }
}

export default SortingAlgorithms
