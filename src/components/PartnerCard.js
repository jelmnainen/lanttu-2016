import React, { Component } from 'react';

export default class PartnerCard extends Component {

  render() {
    const { item } = this.props;
    return (
      <div className="partnerCard">
        <a href={item.get('homepage')}>
          <img src={item.getIn(['logo', 'file', 'url'])} />
        </a>
      </div>
    )
  }
}
