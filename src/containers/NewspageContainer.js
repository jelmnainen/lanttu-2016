import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable'

import { newsfeedFetch } from '../actions/newsfeedActions';
import Newspage from '../components/Newspage';
import SingleItemNavigation from '../components/SingleItemNavigation'

export default class NewspageContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(newsfeedFetch());
  }

  render() {
    const newspiece = this.props.newsItems.find((item) => item.get('id') == this.props.routeParams.id)
    const defaultNewspiece = fromJS({
      author: null,
      published: null,
      title: null,
      cover: {
        file: {
          url: null,
        },
      },
      ingress: null,
      content: null,
    });
    const item = newspiece ? newspiece : defaultNewspiece;
    return(
      <div>
        <SingleItemNavigation
          author={item.get('author')}
          published={item.get('published')}
          title={item.get('title')}
          cover={item.getIn(['cover', 'file', 'url'])}
        />
        <Newspage
          ingress={item.get('ingress')}
          content={item.get('content')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newsItems: state.get('newsfeed').get('entries')
});

export default connect(mapStateToProps)(NewspageContainer);
