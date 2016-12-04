import React, {Component} from 'react';
import {render} from 'react-dom';

class mainWrapper extends Component {
  render() {
    return (
      <main className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            {this.props.children}
          </div>
        </div>
      </main>
    );
  }
}

export default mainWrapper;