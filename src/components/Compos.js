import React, { Component } from 'react';

import ComposListItem from './ComposListItem'

export default class Compos extends Component {

  render() {
    const { entries } = this.props;

    return(
      <section id="compos">
        <div className="row">
          <div className="col-md-12">
            <h2>KOMPOT</h2>
          </div>
        </div>
        {entries.valueSeq().map((entry) =>
          <ComposListItem entry={entry} key={entry.get('id')} />
        )}
      </section>
    );
  }
}
