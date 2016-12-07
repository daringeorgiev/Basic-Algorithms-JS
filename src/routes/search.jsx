import React, {Component} from 'react';
import AlgoList from '../components/algo-list.jsx';

class SearchAlgorithms extends Component {
  render() {
    return (<AlgoList
      title='Search algorithms'
      icon='fa fa-search'
      description='A search algorithm is an algorithm that retrieves information stored within some data structure. Data structures can include linked lists, arrays, search trees, hash tables, or various other storage methods. The appropriate search algorithm often depends on the data structure being searched.'
      algoList={['Binary search', 'Breadth-first search', 'Depth-first search']} />);
  }
}

export default SearchAlgorithms;
