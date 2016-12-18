import React, {Component} from 'react'
import Algorithm from '../../components/algorithm.jsx'

class binarySearch extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Binary search'
          description='In computer science, binary search, also known as half-interval search or logarithmic search, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. '
          moreLink='https://en.wikipedia.org/wiki/Binary_search_algorithm'
          gistId='69962d849a25184a3e4171c131e68b2b' />
      </div>
    )
  }
}

export default binarySearch
