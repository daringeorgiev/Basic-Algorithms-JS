import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx'

class selectionSort extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Selection Sort'
          description='In computer science, selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.'
          moreLink='https://en.wikipedia.org/wiki/Selection_sort'
          gistId='35848fd336e3a6a0d4be830e7c3db2f0' />
      </div>
    );
  }
}

export default selectionSort;