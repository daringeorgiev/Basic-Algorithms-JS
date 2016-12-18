import React, {Component} from 'react'
import Algorithm from '../../components/algorithm.jsx'

class breadthFirstSearch extends Component {
  render() {
    return (
      <div>
        <Algorithm
          name='Breadth-first search (BFS)'
          description='Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a "search key") and explores the neighbor nodes first, before moving to the next level neighbors. '
          moreLink='https://en.wikipedia.org/wiki/Breadth-first_search'
          gistId='' />
      </div>
    )
  }
}

export default breadthFirstSearch
