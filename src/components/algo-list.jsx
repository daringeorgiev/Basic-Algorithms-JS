import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

class algoList extends Component {
  render() {
    return (
      <main className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            <h2><i className={this.props.icon} aria-hidden='true' />&nbsp;{this.props.title}</h2>
            <p className='description'>{this.props.description}</p>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                <h3>List of some {this.props.title.toLowerCase()}:</h3>
                <ul className='list-group'>
                  {this.props.algoList.map(function(item) {
                    // Generate item route
                    let itemRoute = this.props.title.toLowerCase().replace(/ /g, '-');
                    itemRoute += '/' + item.toLowerCase().replace(/ /g, '-');

                    return <li className='list-group-item text-center' key={item}><Link to={itemRoute}>{item}</Link></li>
                  }.bind(this))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default algoList;