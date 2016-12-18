import React, {Component} from 'react'
import NavLink from './nav-link.jsx'

class navbarInstance extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
              aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a className='navbar-brand' href='#'>Basic Algorithms JS</a>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <NavLink to='/' activeClassName='active'>Home</NavLink>
              <NavLink to='/sorting-algorithms' activeClassName='active'>Sorting</NavLink>
              <NavLink to='/search-algorithms' activeClassName='active'>Search</NavLink>
              <NavLink to='/math-algorithms' activeClassName='active'>Math</NavLink>
              <NavLink to='/resources' activeClassName='active'>Resources</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default navbarInstance
