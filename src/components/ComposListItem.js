import React, { Component } from 'react';
import { Link } from 'react-router';
import Moment from '../utils/finnishMoment';

export default class ComposListItem extends Component {

  render() {
    const { entry } = this.props

    const bgImageStyle = {
      backgroundImage: 'url(' + entry.getIn(['cover', 'file', 'url']) + ')',
      backgroundSize: 'cover',
    }

    return (
      <div className="col-md-4 compo-wrapper">
        <div className="col-md-12 compo-container">
          <div className="row">
            <div className="col-md-12 compo-header" style={bgImageStyle}></div>
          </div>
          <div className="row">
            <div className="col-md-12 compo-content">
              <h4>{ `${Moment(entry.get('starts')).format('ddd')} - ${Moment(entry.get('starts')).format('ddd')}`}</h4>
              <h3>{entry.get('title')}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 compo-footer">
              <Link to={`/compos/${entry.get('id')}`}>LUE LISÄÄ</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
