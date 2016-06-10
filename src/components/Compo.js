import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Compo extends Component {

  renderComposBox(header, content, fullWidth) {
    const cols = fullWidth ? '12' : '6';
    return (
      <div className={`col-md-${cols} compo-panel-wrapper`}>
        <div className="col-md-12 compo-panel">
          <div className="row">
            <div className="col-md-12 compo-panel-header">
              <h4>{header}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 compo-panel-content">
              <ReactMarkdown source={content} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { description, registeration, schelude, prizes, rules } = this.props;

    return (
      <section className="container">
        <div className="row">
          {description && this.renderComposBox('Kuvaus', description)}
          {registeration && this.renderComposBox('Rekisteröinti', registeration)}
          {schelude && this.renderComposBox('Aikataulu', schelude)}
          {prizes && this.renderComposBox('Palkinnot', prizes)}
        </div>
        <div className="row">
          {rules && this.renderComposBox('Säännöt', rules, true)}
        </div>
      </section>
    );
  }
}
