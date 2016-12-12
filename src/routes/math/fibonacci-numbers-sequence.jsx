import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx';

class fibonacciNumbersSequence extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Fibonacci numbers'
          description='In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones. '
          moreLink='https://en.wikipedia.org/wiki/Fibonacci_number'
          gistId='' />
      </div>
    );
  }
}

export default fibonacciNumbersSequence;