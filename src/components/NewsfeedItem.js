import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NewsfeedItem extends Component {

  render() {
    const { item, count } = this.props;
    const imgUrl = item.getIn(['cover', 'file', 'url']);
    const bgStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    }

    const image = (
      <div className="col-md-6 news-cover">
        <img src={imgUrl} />
      </div>
    )

    const text = (
      <div className="col-md-6">
        <h3>{item.get('title')}</h3>
        <p>{item.get('shortDescription')}</p>
        <Link to={`/news/${item.get('id')}`} className="btn btn-xs btn-default">Lue lisää</Link>
      </div>
    )

    return(
      <div className="row">
        <div className="col-md-12 newsfeed-item">
          {count % 2 === 0 ? image : text}
          {count % 2 === 0 ? text : image}
        </div>
      </div>
    );
  }
}
