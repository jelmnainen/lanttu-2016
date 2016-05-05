import React, { Component } from 'react';

export default class Navigation extends Component {

  render() {
    const { items } = this.props;

    return (
      <div>
        Navigation!
        {items.map((item) => <div key={item.id}>{item.name}</div> )}
      </div>
    );
  }
}
