import React, { Component } from 'react';

import Ingress from './Ingress';
import Newsfeed from './Newsfeed';
import Compos from './Compos';
import Partners from './Partners';

export default class Frontpage extends Component {

  render() {
    const { ingressData, newsfeedData, composData, partnersData } = this.props;
    return(
      <div>
        <div className="hero">
          <h1>JOKE-LAN</h1>
        </div>
        <Ingress
          header={ingressData.get('header')}
          ingress={ingressData.get('ingress')}
          paragraph={ingressData.get('paragraph')}
        />
        <Newsfeed
          entries={newsfeedData.get('entries')}
        />
        <Compos
          entries={composData.get('entries')}
        />
        <Partners
          entries={partnersData.get('entries')} />
      </div>
    );
  }
}
