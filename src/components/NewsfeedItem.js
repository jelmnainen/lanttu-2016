import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NewsfeedItem extends Component {

  render() {
    const { item } = this.props;
    const imgUrl = item.get('cover').get('file').get('url');
    const bgStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    }
    return(
      <div className="compo-box">
        <div className="compo-cover" style={bgStyle} >
        </div>
        <div className="compo-content">
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
