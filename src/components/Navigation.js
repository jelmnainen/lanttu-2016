import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Navigation extends Component {

  render() {
    const { items } = this.props;

    const navItems = items.valueSeq().map((item) => (<Link to={item.get('name')} key={item.get('id')}>{item.get('name')}</Link>));
    return (
      <div>
        {navItems}
      </div>
    );
  }
}
