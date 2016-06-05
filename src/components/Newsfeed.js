import React, { Component } from 'react';

import NewsfeedItem from './NewsfeedItem';

export default class Newsfeed extends Component {

  render() {
    const { entries } = this.props;
    return(
      <section id="news">
        <div className="row">
          <div className="col-md-12">
            <h2>UUTISET</h2>
          </div>
        </div>
          {entries.valueSeq().map(
            (entry, i) => <NewsfeedItem item={entry} count={i} key={entry.get('title') + entry.get('published')} />
          )}
      </section>
    );
  }
}
