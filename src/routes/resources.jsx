import React, {Component} from 'react';

class resources extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            <h2>Resources</h2>
            <div className='description'>
              <p><a href='https://github.com/mgechev/javascript-algorithms' target='_blank'>https://github.com/mgechev/javascript-algorithms</a></p>
              <p><a href='https://en.wikipedia.org/wiki/Algorithm' target='_blank'>https://en.wikipedia.org/wiki/Algorithm</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default resources;