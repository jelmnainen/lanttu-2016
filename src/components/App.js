import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation'

export default class App extends Component {

  render() {
    return (
      <div>
        <Navigation location={this.props.location.pathname} />
        {this.props.children}
      </div>
    );
  }
}
