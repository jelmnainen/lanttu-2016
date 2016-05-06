import React, { Component, PropTypes } from 'react';
import NavContainer from '../containers/NavContainer';

export default class App extends Component {

  render() {
    return (
      <div className="">
        <div className="">
          <div className="">
            <NavContainer />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
