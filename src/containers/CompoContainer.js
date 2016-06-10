import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable'

import { composFetch } from '../actions/composActions';
import Compo from '../components/Compo';
import SingleItemNavigation from '../components/SingleItemNavigation'

class CompoContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(composFetch());
  }

  render() {
    const { compoItems, routeParams } = this.props;
    const compo = compoItems.find((item) => item.get('id') == routeParams.id)
    const defaultCompo = fromJS({
      starts: null,
      published: null,
      title: null,
      registerationDescription: null,
      scheludeDescription: null,
      description: null,
      prices: null,
      rules: null,
      cover: {
        file: {
          url: null
        }
      }
    });
    const item = compo ? compo : defaultCompo;

    return(
      <div>
        <SingleItemNavigation
          starts={item.get('starts')}
          published={item.get('published')}
          title={item.get('title')}
          cover={item.getIn(['cover', 'file', 'url'])}
        />
        <Compo
          registeration={item.get('registerationDescription')}
          schelude={item.get('scheludeDescription')}
          description={item.get('description')}
          prizes={item.get('prices')}
          rules={item.get('rules')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  compoItems: state.get('compos').get('entries')
});

export default connect(mapStateToProps)(CompoContainer);
