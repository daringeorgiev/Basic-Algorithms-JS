import React, {Component} from 'react'

class notFound extends Component {
  render() {
    return (
      <div className='container text-center'>
        <i className='fa fa-exclamation-triangle fa-5x' aria-hidden='true' />
        <h1>404 This page is not found!</h1>
      </div>
    )
  }
}

export default notFound
