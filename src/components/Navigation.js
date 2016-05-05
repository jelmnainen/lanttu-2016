import React, { Component } from 'react';

export default class Navigation extends Component {

  render() {
    const { items } = this.props;

    const navItems = items.valueSeq().map((item) => (<span key={item.get('id')}>{item.get('name')}</span>));
    return (
      <div>
        {navItems}
      </div>
    );
  }
}
