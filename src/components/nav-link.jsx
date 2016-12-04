import React, {Component} from 'react';
import {Link} from 'react-router';

class navLink extends Component {
  render() {
    let isActive = this.context.router.isActive(this.props.to, true);
    let className = isActive ? 'active' : '';

    return (
      <li className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

navLink.contextTypes = {
  router: React.PropTypes.object
};

export default navLink;
