import React, { Component } from 'react';

import Ingress from './Ingress';
import Newsfeed from './Newsfeed';
import Conpos from './Conpos';
import Partners from './Partners';

export default class Frontpage extends Component {

  render() {
    const { ingressData } = this.props;
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
        <Newsfeed />
        <Conpos />
        <Partners />
      </div>
    );
  }
}
