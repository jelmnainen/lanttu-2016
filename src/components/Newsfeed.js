import React, { Component } from 'react';

import NewsfeedItem from './NewsfeedItem';

export default class Newsfeed extends Component {

  render() {
    const { entries } = this.props;
    return(
      <div className="content compos">
        <div className="content-wrapper">
          <h2>UUTISET</h2>
          <div className="compo-boxes">
            {entries.valueSeq().map(
              entry => <NewsfeedItem item={entry} key={entry.get('title') + entry.get('published')} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
