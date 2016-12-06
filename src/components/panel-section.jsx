import React, {Component} from 'react';
import {Link} from 'react-router';

class panelSection extends Component {
  render() {
    return (
      <section className='section col-md-4 col-sm-6'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <Link to={this.props.to}>
              <h3 className='panel-title'>{this.props.name}</h3>
            </Link>
          </div>
          <div className='panel-body'>
            {this.props.text}
          </div>
        </div>
      </section>
    );
  }
}

export default panelSection;