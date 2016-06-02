import React, { Component } from 'react';

import PartnerCard from './PartnerCard';

export default class Partners extends Component {

  render() {
    const { entries } = this.props;

    if (entries.size < 0 ) return null;

    return(
      <div class="content partners">
        <div class="content-wrapper">
          <h2>YHTEISTYÖTAHOT</h2>
          <div id="partners">
            {entries.valueSeq().map(partner =>
              <PartnerCard item={partner} key={partner.id} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
