import React, {Component} from 'react'
import {Link} from 'react-router'

class panelSection extends Component {
  render() {
    return (
      <section className='section col-md-4 col-sm-6'>
        <div className='panel panel-default panel-section'>
          <i className={this.props.icon} aria-hidden='true' />
          <h3 className='panel-title'>{this.props.name}</h3>
          <div className='panel-body'>
            <p>{this.props.text}</p>
            <p>
              <Link to={this.props.to} className='btn btn-primary'>Learn more</Link>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default panelSection
