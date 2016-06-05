import React, { Component } from 'react';

export default class Ingress extends Component {

  render() {
    const {header, ingress, paragraph} = this.props;

    return(
      <header className="row">
        <div className="col-md-12">
          <h1 id="ingress">{ingress}</h1>
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
