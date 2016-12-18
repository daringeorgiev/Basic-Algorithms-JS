import React, {Component} from 'react'
import Algorithm from '../../components/algorithm.jsx'

class bubbleSort extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Bubble Sort'
          description='Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sorted order but may occasionally have some out-of-order elements nearly in position.'
          moreLink='https://en.wikipedia.org/wiki/Bubble_sort'
          gistId='973520942aa88f1a5b739623383b238d' />
      </div>
    )
  }
}

export default bubbleSort
