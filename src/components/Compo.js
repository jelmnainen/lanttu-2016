import React, { Component } from 'react'

export default class Compo extends Component {

  render() {
    const { ingress, content } = this.props;
    return (
      <section>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2>
              {ingress}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <p>
              { content }
            </p>
          </div>
        </div>
      </section>
    );
  }
}
