import React, {Component} from 'react';
import MainWrapper from '../components/main-wrapper.jsx'

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
          Home Page
        </MainWrapper>
      </div>
    );
  }
}

export default home;
