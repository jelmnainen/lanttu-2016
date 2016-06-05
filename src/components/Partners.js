import React, { Component } from 'react';

import PartnerCard from './PartnerCard';

export default class Partners extends Component {

  render() {
    const { entries } = this.props;

    if (entries.size < 0 ) return null;

    return(
      <section id="partners">
        <div className="row">
          <div className="col-md-12">
            <h2>YHTEISTYÖTAHOT</h2>
          </div>
        </div>
        <div className="row">
          {entries.valueSeq().map(partner =>
            <PartnerCard item={partner} key={partner.id} />
          )}
        </div>
      </section>
    );
  }
}
