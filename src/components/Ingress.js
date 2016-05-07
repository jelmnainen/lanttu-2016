import React, { Component } from 'react';

export default class Ingress extends Component {

  render() {
    const {header, ingress, paragraph} = this.props;

    return(
      <div className="content introduction">
        <div className="content-wrapper content-wrapper-tight">
          <h2>{header}</h2>
          <h3>{ingress}</h3>
          <section className="two-col">
            {paragraph}
          </section>
        </div>
      </div>
    );
  }
}
