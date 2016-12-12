import React, {Component} from 'react';
import Algorithm from '../../components/algorithm.jsx';

class depthFirstSearch extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Depth-first search (DFS)'
          description='Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking. '
          moreLink='https://en.wikipedia.org/wiki/Depth-first_search'
          gistId='' />
      </div>
    );
  }
}

export default depthFirstSearch;