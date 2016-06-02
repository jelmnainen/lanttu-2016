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

    console.log('entry', entry.toJS())
    return (
      <div className="compo-box">
        <div className="compo-cover" style={bgImageStyle}>
        </div>
        <div className="compo-content">
          <h4>{ `${Moment(entry.get('starts')).format('ddd')} - ${Moment(entry.get('starts')).format('ddd')}`}</h4>
          <h3>{entry.get('title')}</h3>
        </div>
        <div className="compo-footer">
          <Link to={`/compos/${entry.get('id')}`}>LUE LISÄÄ</Link>
        </div>
      </div>
    )
  }
}
