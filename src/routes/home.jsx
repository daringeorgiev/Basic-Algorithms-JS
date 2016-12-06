import React, {Component} from 'react';
import MainWrapper from '../components/main-wrapper.jsx'
import PanelSection from '../components/panel-section.jsx'

class home extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className='container text-center header__container'>
            <h1>Basic Algorithms JS</h1>
            <p>Show in javascript some of basic algorithms</p>
          </div>

        </header>
        <MainWrapper>
          <div className='row'>
            <PanelSection
              to='/sorting-algorithms'
              name='Sorting Algorithms'
              text='Some sorting algorithms' />
            <PanelSection
              to='/search-algorithms'
              name='Search Algorithms'
              text='Some search algorithms' />
            <PanelSection
              to='/math-algorithms'
              name='Math Algorithms'
              text='Some math algorithms' />
          </div>
        </MainWrapper>
      </div>
    );
  }
}

export default home;
