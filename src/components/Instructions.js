import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Instructions extends Component {
  renderInstructionMenuItem(instruction) {
    return (
      <li key={`menu-${instruction.get('id')}`}>
        <a href={`#${instruction.get('title')}`}>
          {instruction.get('title')}
        </a>
      </li>
    );
  }

  renderInstruction(instruction) {
    return(
        <ReactMarkdown
          source={instruction.get('content')}
          key={`item-${instruction.get('id')}`}
        />
    );
  }

  render() {
    const { instructions } = this.props
    return (
      <div className="container">
        <div id="instructions" className="row">
          <aside id="instructions-nav" className="col-md-4">
            <h4>Siirry</h4>
            <ul>
              { instructions.valueSeq().map(instruction => this.renderInstructionMenuItem(instruction))}
            </ul>
          </aside>
          <section id="instructions-content" className="col-md-8">
            {instructions.valueSeq().map(instruction => this.renderInstruction(instruction))}
          </section>
        </div>
      </div>
    )
  }
}
