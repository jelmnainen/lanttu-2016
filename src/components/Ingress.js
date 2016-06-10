import React, { Component } from 'react';

export default class Ingress extends Component {

  render() {
    const {header, ingress, paragraph} = this.props;

    return(
      <header>
        <div classNamw="row">
          <div className="col-md-12">
            <h1 id="ingress">{ingress}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 main-paragraph">
            {paragraph}
          </div>
        </div>
      </header>
    );
  }
}
