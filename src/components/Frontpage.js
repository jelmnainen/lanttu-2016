import React, { Component } from 'react';

import Ingress from './Ingress';
import Newsfeed from './Newsfeed';
import Conpos from './Conpos';
import Partners from './Partners';

export default class Frontpage extends Component {

  render() {
    return(
      <div>
        <div className="hero">
          <h1>JOKE-LAN</h1>
        </div>
        <Ingress />
        <Newsfeed />
        <Conpos />
        <Partners />
      </div>
    );
  }
}
