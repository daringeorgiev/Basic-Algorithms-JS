import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Container from './components/container.jsx';
import Home from './components/home.jsx';
import NotFound from './components/not-found.jsx';

import SortingAlgorithms from './algorithms/sorting.jsx';
import SearchAlgorithms from './algorithms/search.jsx';
import MathAlgorithms from './algorithms/math.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home}/>
          <Route path='/sorting-algorithms' component={SortingAlgorithms}/>
          <Route path='/search-algorithms' component={SearchAlgorithms}/>
          <Route path='/math-algorithms' component={MathAlgorithms}/>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

render(
  <App/>, document.getElementById('container'));
