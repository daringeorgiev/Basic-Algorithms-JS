import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx';

class insertionSort extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Insertion sort'
          description='Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages: Simple implementation, Efficient for (quite) small data sets and More efficient in practice than most other simple quadratic algorithms such as selection sort or bubble sort.  '
          moreLink='https://en.wikipedia.org/wiki/Insertion_sort'
          gistId='' />
      </div>
    );
  }
}

export default insertionSort;