import React, { Component } from 'react';
import Moment from 'moment'
import { Link } from 'react-router';

export default class NewsfeedItem extends Component {

  render() {
    const { item } = this.props;
    const imgUrl = item.getIn(['cover', 'file', 'url']);
    const bgStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    }
    return(
      <div className="compo-box">
        <div className="compo-cover" style={bgStyle} >
        </div>
        <div className="compo-content">
          <h4>{Moment(item.get('published')).format('D.M.YYYY')}</h4>
          <h3>{item.get('title')}</h3>
        </div>
        <div className="compo-footer">
          <Link to={`/news/${item.get('id')}`} >
            LUE LISÄÄ
          </Link>
        </div>
      </div>
    );
  }
}
