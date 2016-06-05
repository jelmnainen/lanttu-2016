import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation'

export default class App extends Component {

  render() {
    const nav = this.props.location.pathname == "/frontpage" ? <Navigation location={this.props.location.pathname} /> : null
    return (
      <div>
        {nav}
        {this.props.children}
      </div>
    );
  }
}
