import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ingressFetch } from '../actions/ingressActions';
import { newsfeedFetch } from '../actions/newsfeedActions';
import { composFetch } from '../actions/composActions';
import Frontpage from '../components/Frontpage';

export default class FrontpageContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(ingressFetch());
    dispatch(newsfeedFetch());
    dispatch(composFetch());
  }

  render() {
    const { ingressData, newsfeedData, composData } = this.props;
    return(
      <Frontpage
        ingressData={ingressData}
        newsfeedData={newsfeedData}
        composData={composData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ingressData: state.get('ingress'),
  newsfeedData: state.get('newsfeed'),
  composData: state.get('compos'),
});

export default connect(mapStateToProps)(FrontpageContainer);
