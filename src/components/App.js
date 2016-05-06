import React, { Component, PropTypes } from 'react';

import NavContainer from '../containers/NavContainer';
import FooterContainer from '../containers/FooterContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavContainer />
        {this.props.children}
        <FooterContainer />
      </div>
    );
  }
}
