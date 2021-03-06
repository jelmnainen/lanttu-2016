import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

export default class Newspage extends Component {

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
              <ReactMarkdown source={content} />
            </p>
          </div>
        </div>
      </section>
    );
  }
}
