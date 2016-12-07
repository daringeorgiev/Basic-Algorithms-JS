import React, {Component} from 'react';
import PanelSection from '../components/panel-section.jsx'

class home extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className='container text-center header__container'>
            <h1>Basic Algorithms JS</h1>
            <p className='lead'>Show in javascript some of basic algorithms</p>
          </div>

        </header>
        <div className='container content'>
          <div className='row'>
            <PanelSection
              to='/sorting-algorithms'
              name='Sorting Algorithms'
              icon='fa fa-sort-amount-desc fa-2x'
              text='A sorting algorithm is an algorithm that puts elements of a list in a certain order' />
            <PanelSection
              to='/search-algorithms'
              name='Search Algorithms'
              icon='fa fa-search fa-2x'
              text='A search algorithm is an algorithm that retrieves information stored within some data structure' />
            <PanelSection
              to='/math-algorithms'
              name='Math Algorithms'
              icon='fa fa-percent fa-2x'
              text='Algorithms perform calculation, data processing, and/or automated reasoning tasks' />
          </div>
        </div>
      </div>
    );
  }
}

export default home;
