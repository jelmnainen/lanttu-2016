import React, { Component } from 'react';
import { connect } from 'react-redux';

import { composFetch } from '../actions/composActions';
import Compo from '../components/Compo';
import SingleItemNavigation from '../components/SingleItemNavigation'

export default class CompoContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(composFetch());
  }

  render() {
    const item = this.props.compoItems.find((item) => item.get('id') == this.props.routeParams.id)
    console.log('item', item);
    return(
      <div>
        <SingleItemNavigation
          starts={item.get('starts')}
          published={item.get('published')}
          title={item.get('title')}
          cover={item.get('cover')}
        />
        <Compo
          registeration={item.get('registerationDescription')}
          schelude={item.get('scheludeDescription')}
          prizes={item.get('prices')}
          rules={item.get('rules')}
          cover=
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  compoItems: state.get('compos').get('entries')
});

export default connect(mapStateToProps)(CompoContainer);
