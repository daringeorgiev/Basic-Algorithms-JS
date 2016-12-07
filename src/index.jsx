import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

require('./styles.scss')

import Container from './components/container.jsx';

import Home from './routes/home.jsx';
import SortingAlgorithms from './routes/sorting.jsx';
import SearchAlgorithms from './routes/search.jsx';
import MathAlgorithms from './routes/math.jsx';
import NotFound from './routes/not-found.jsx';

// Sorting algorithms
import BubbleSort from './routes/sorting/bubble-sort.jsx';
import QuickSort from './routes/sorting/quick-sort.jsx';
import InsertionSort from './routes/sorting/insertion-sort.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/sorting-algorithms' component={SortingAlgorithms}>
            <Route path='bubble-sort' component={BubbleSort} />
            <Route path='quick-sort' component={QuickSort} />
            <Route path='insertion-sort' component={InsertionSort} />
          </Route>
          <Route path='/search-algorithms' component={SearchAlgorithms} />
          <Route path='/math-algorithms' component={MathAlgorithms} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

render(
  <App />, document.getElementById('container'));
