import React, {Component} from 'react'
import Gist from './gist.jsx'

class algorithm extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            <h2>{this.props.name}</h2>
            <p className='description'>&nbsp;{this.props.description}&nbsp;
              <a href={this.props.moreLink} target='_blank'>More...</a>
            </p>
            Example:
            <Gist id={this.props.gistId} />
          </div>
        </div>
      </div>
    )
  }
}

export default algorithm
