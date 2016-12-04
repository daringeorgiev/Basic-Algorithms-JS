import React, {Component} from 'react';
import MainWrapper from '../components/main-wrapper.jsx'

class home extends Component {
  render() {
    return (
      <div>
        <header className='home-header'>
          Header
        </header>
        <MainWrapper>
          Home Page
        </MainWrapper>
      </div>
    );
  }
}

export default home;
