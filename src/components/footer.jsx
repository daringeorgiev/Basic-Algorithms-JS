import React, {Component} from 'react';

class footer extends Component {
  render() {
    return (
      <footer className='text-center'>
        <small>
          <strong>
            <a href='https://github.com/daringeorgiev/Basic-Algorithms-JS' target='_blank'>
              Open Source Project
            </a>
          </strong>
          <br />

          <strong>
            powered by:&nbsp;
          </strong>
          <a href='https://facebook.github.io/react/' target='_blank'>ReactJS</a>
          <br />

          <strong>
            Author:&nbsp;
          </strong>
          <a href='https://daringeorgiev.github.io/' target='_blank'>Darin Georgiev</a>
        </small>
      </footer>
    );
  }
}

export default footer;
