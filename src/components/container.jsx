import React, {Component} from 'react';
import {render} from 'react-dom';
import NavbarInstance from './navbar.jsx';
import Footer from './footer.jsx'

class container extends Component {

  render() {
    return (
      <div>
        <NavbarInstance /> {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default container;
