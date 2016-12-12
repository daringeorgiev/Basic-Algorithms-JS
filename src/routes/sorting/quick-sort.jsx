import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx'

class quickSort extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Quicksort'
          description='Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959, with his work published in 1961, it is still a commonly used algorithm for sorting. Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting. '
          moreLink='https://en.wikipedia.org/wiki/Quicksort'
          gistId='' />
      </div>
    );
  }
}

export default quickSort;