import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

require('./styles.scss')

import Container from './components/container.jsx';

// Main routes
import Home from './routes/home.jsx';
import SortingAlgorithms from './routes/sorting.jsx';
import SearchAlgorithms from './routes/search.jsx';
import MathAlgorithms from './routes/math.jsx';
import NotFound from './routes/not-found.jsx';

// Sorting algorithms
import BubbleSort from './routes/sorting/bubble-sort.jsx';
import QuickSort from './routes/sorting/quick-sort.jsx';
import InsertionSort from './routes/sorting/insertion-sort.jsx';

// Search algorithms
import BinarySearch from './routes/search/binary-search.jsx';
import BreadthFirstSearch from './routes/search/breadth-first-search.jsx';
import DepthFirstSearch from './routes/search/depth-first-search.jsx';

// Math algorithms
import FibonacciNumbersSequence from './routes/math/fibonacci-numbers-sequence.jsx';
import GreatestCommonDivisor from './routes/math/greatest-common-divisor.jsx';
import LeastCommonMultiple from './routes/math/least-common-multiple.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/sorting-algorithms'>
            <IndexRoute component={SortingAlgorithms} />
            <Route path='bubble-sort' component={BubbleSort} />
            <Route path='quick-sort' component={QuickSort} />
            <Route path='insertion-sort' component={InsertionSort} />
          </Route>
          <Route path='/search-algorithms'>
            <IndexRoute component={SearchAlgorithms} />
            <Route path='binary-search' component={BinarySearch} />
            <Route path='breadth-first-search' component={BreadthFirstSearch} />
            <Route path='depth-first-search' component={DepthFirstSearch} />
          </Route>
          <Route path='/math-algorithms'>
            <IndexRoute component={MathAlgorithms} />
            <Route path='fibonacci-numbers-sequence' component={FibonacciNumbersSequence} />
            <Route path='greatest-common-divisor' component={GreatestCommonDivisor} />
            <Route path='least-common-multiple' component={LeastCommonMultiple} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

render(
  <App />, document.getElementById('container'));
