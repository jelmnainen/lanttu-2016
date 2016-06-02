import React, { Component } from 'react';

import ComposListItem from './ComposListItem'

export default class Compos extends Component {

  render() {
    const { entries } = this.props;
    console.log(entries.toJS())
    return(
      <div className="content compos">
        <div className="content-wrapper">
          <h2>KOMPOT</h2>
          <div className="compo-boxes">
            {entries.valueSeq().map((entry) =>
              <ComposListItem entry={entry} key={entry.get('id')} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
